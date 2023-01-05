---
sidebar_position: 5
---

# Ordnance survey satellite imagery with raster2pgsql

### Load sattelite data with either raster2pgsql or ogr2ogr

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
raster2pgsql -s 27700 -I -C -M -F  'ST4761.JPG' public.bristol_osmm_satellite_imagery | psql -h 0.0.0.0 -p 5432 -U postgres 
```


### Add a spatial index

``` sql
CREATE INDEX bristol_osmm_satellite_imagery_gist ON bristol_osmm_satellite_imagery USING GIST (ST_ConvexHull(rast));
```

## References

