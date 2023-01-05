---
sidebar_position: 5
---

# Ordnance survey satellite imagery with raster2pgsql

### Load sattelite data with either raster2pgsql or ogr2ogr

### Connect to database

``` bash
psql -h 0.0.0.0 -p 5432 -U postgres  -d postgres
```

## Create table
``` sql
CREATE TABLE public.bristol_osmm_satellite_imagery (
  id serial PRIMARY KEY,
  description text,
  raster_data raster
);
```
## Error
>raster2pgsql ERROR: type "raster" does not exist LINE 4: raster_data raster ^ SQL state: 42704 Character: 113
alter database postgres set search_path = public
postgis_raster

### Load sattelite data with either raster2pgsql or ogr2ogr

### raster2pgsql
``` bash
raster2pgsql -s 27700 -I -C -M -F  'ST4761.JPG' public.bristol_osmm_satellite_imagery | psql -h 0.0.0.0 -p 5432 -U postgres 
```


### Add a spatial index

``` sql
CREATE INDEX bristol_osmm_satellite_imagery-gist ON bristol_osmm_satellite_imagery USING GIST (ST_ConvexHull(rast));
```

## References

