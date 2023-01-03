---
sidebar_position: 5
---

# Loading land registry lidar 


## Create table
``` sql
CREATE TABLE raster_table (
  rast raster
);
```

### Load sattelite data with either raster2pgsql or ogr2ogr

### raster2pgsql
``` bash
raster2pgsql -s 4326 -I -C -M path/to/raster_data.tif -F -t 100x100 raster_table | psql -h localhost -d database_name -U username
```

### ogr2ogr
``` bash
ogr2ogr -f "PostgreSQL" "PG:host=localhost user=username dbname=database_name password=password" path/to/raster_data.tif -nln raster_table
```

### Add a spatial index

``` sql
CREATE INDEX raster_table_gist ON raster_table USING GIST (ST_ConvexHull(rast));
```

## References
