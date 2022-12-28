---
sidebar_position: 7
---

# Geoserver 

## Introduction
### What?


Geoserver is a Geospatial Server

### Why?
Why GeoServer?
- Is there another option?

## Body



## How?

``` bash
podman pull kartoza/geoserver
```

### Make sure you have create the spatial pod before creating the geoserver container.

``` bash
podman run -d -t \ --name geoserver \ 
--pod -e GEOSERVER_ADMIN_USER=user \ 
$user \
-e GEOSERVER_ADMIN_PASSWORD= kartoza/geoserver my-secret-password \
```

### auto generate systemd service
``` bash
podman generate systemd geoserver >/home/$user/.config/systemd/user/geoserver.service
```

### check exists
``` bash
cat /home/$user/.config/systemd/user/geoserver.service
```

### reload systemd service
``` bash
systemctl --user daemon-reload
```

### start systemd service
``` bash
systemctl start --user geoserver.service
```

### check service is running
``` bash
systemctl status --user geoserver.service
```

### enable service
``` bash
systemctl enable --user geoserver.service
```

Just enter [http://$ip:8600/geoserver/](http://$ip:8600/geoserver/) into your browsers address bar an log in.


## Conclusion

## References