---
sidebar_position: 3
---

# Ordnance survey lidar data with raster2pgsql

### Load lidar data with either raster2pgsql 

### Connect to database

``` bash
psql -h 0.0.0.0 -p 5432 -U postgres  -d postgres
```

``` sql
CREATE EXTENSION postgis_raster;
```

### Load sattelite data with either raster2pgsql or ogr2ogr

### unzip all zips
``` bash
find . -name "*.zip" -exec unzip {} \;
```

## set psql password
``` bash
export PGPASSWORD=postgres
```

### raster2pgsql
``` bash
raster2pgsql -s 27700 -I -C -M -F  *.tif public.bristol_lidar_dtm_1m | psql -h 0.0.0.0 -p 5432 -U postgres --password postgres
```

### Add a spatial index

``` sql
CREATE INDEX bristol_lidar_dtm_gist ON bristol_lidar_dtm_1m USING GIST (ST_ConvexHull(rast));
```

## References

