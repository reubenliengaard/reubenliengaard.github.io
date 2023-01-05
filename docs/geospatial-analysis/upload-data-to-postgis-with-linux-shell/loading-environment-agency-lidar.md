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

### raster2pgsql
``` bash
raster2pgsql -s 27700 -I -C -M -F  'DTM_F0223168_20220304_20220304.tif' public.bristol_lidar_dtm | psql -h 0.0.0.0 -p 5432 -U postgres 
```

### raster2pgsql
``` bash
raster2pgsql -s 27700 -I -C -M -F  '*.tif' public.bristol_lidar_dtm | psql -h 0.0.0.0 -p 5432 -U postgres 
```

### Add a spatial index

``` sql
CREATE INDEX bristol_lidar_dtm_gist ON bristol_lidar_dtm USING GIST (ST_ConvexHull(rast));
```

## References

