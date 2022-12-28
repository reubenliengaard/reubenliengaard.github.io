---
sidebar_position: 2
--- 

# PostGIS

## Introduction

### What?
PostGIS is a Spatial Database

### Why?
Why PostGIS?
- Strong community
- Robust and stable
- 2d, 3d, and raster support
- SQL compliant
- Used by ArcGIS
- Very capable

### How?

## Body

### How?
Create a pod and expose some ports

``` bash
podman pod create -p 8080:8080 -p 5432:5432 -n spatial
```

Confirm the new pod exists

``` bash
podman pod list
```

### Download PostGIS image

Pull a postgis image from DockerHub

``` bash
podman pull postgis/postgis
```

select docker source

### Applying the PostGIS image to a container

Specify username, password, container name, and create a container.

``` bash
podman run -d -t --name postgis --pod spatial -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres postgis/postgis
```

Auto create a systemd service for the PostGIS container
``` bash
podman generate systemd postgis >/home/reuben/.config/systemd/user/postgis.service
```

Reload user systemd
``` bash
systemctl --user daemon-reload
```
Start and enable the postgis service

Use the user flag for non-root containers.
``` bash
systemctl start --user postgis.service
```

Enable it so it will be persistent after reboots.
``` bash
systemctl enable --user postgis.service
```

Confirm container is running.
``` bash
systemctl status --user postgis.service
```

## Conclusion

## References