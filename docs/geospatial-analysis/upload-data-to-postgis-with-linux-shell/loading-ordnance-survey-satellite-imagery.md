---
sidebar_position: 5
---

# Ordnance survey satellite imagery with raster2pgsql

### Load sattelite data with either raster2pgsql or ogr2ogr

### Connect to database

``` bash
psql -h localhost -p 5432 -U postgres  -d public
```

## Create table
``` sql
CREATE TABLE bristol-osmm-satellite-imagery (
  rast raster
);
```

### Load sattelite data with either raster2pgsql or ogr2ogr

### raster2pgsql
``` bash
raster2pgsql -s 27700 -I -C -M *.tif -F bristol-osmm-satellite-imagery | psql -h localhost -d public -U postgres -P postgres
```

### ogr2ogr
``` bash
ogr2ogr -f "PostgreSQL" "PG:host=localhost user=postgres dbname=public password=postgres" *.tif -nln bristol-lidar-dtm --password=postgres
```

### Add a spatial index

``` sql
CREATE INDEX bristol-lidar-dtm-gist ON bristol-lidar-dtm USING GIST (ST_ConvexHull(rast));
```

## References

