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
raster2pgsql -s 27700 -I -C -M -F  *.JPG public.bristol_osmm_satellite_imagery | psql -h 0.0.0.0 -p 5432 -U postgres 
```


### Add a spatial index

``` sql
CREATE INDEX bristol_osmm_satellite_imagery__gist ON bristol_osmm_satellite_imagery_ USING GIST (ST_ConvexHull(rast));
```

## References

