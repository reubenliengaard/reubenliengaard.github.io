---
sidebar_position: 5
---

# Ordnance survey satellite imagery with raster2pgsql


### Load sattelite data with raster2pgsql?
``` bash
sudo dnf install postgis-client
```


``` bash
raster2pgsql -s 27700 -I -C -M OSMasterMapImagery/*.JPG -F -t imagery public | psql -h 0.0.0.0 -p 5432 -U postgres -W -d satellite
satellite
```


## References
