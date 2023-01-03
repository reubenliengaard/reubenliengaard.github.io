---
sidebar_position: 1
---

# Loading Bristol city council GeoJson files

### Create table to store geojson data
``` sql
CREATE TABLE geojson_table (
  geom geometry(Geometry,4326),
  properties jsonb
);
```

### Convert to PostGIS geometry format
```bash
ogr2ogr -f "PostgreSQL" "PG:host=localhost user=username dbname=database_name password=password" path/to/geojson_data.geojson -nln geojson_table
```


### Adda spatial index

``` sql
CREATE INDEX geojson_table_gist ON geojson_table USING GIST (geom);
```


## References


