---
sidebar_position: 5
---

# Loading land registry lidar 

``` bash
psql -h localhost -p 5432 -U postgres -P postgres -d public
```

## Create table
``` sql
CREATE TABLE bristol-lidar-dtm (
  rast raster
);
```

### Load sattelite data with either raster2pgsql or ogr2ogr

### raster2pgsql
``` bash
raster2pgsql -s 27700 -I -C -M *.tif -F bristol-lidar-dtm | psql -h localhost -d public -U username -P postgres
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
