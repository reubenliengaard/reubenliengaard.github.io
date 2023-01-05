---
sidebar_position: 1
---

# Loading Bristol city council GeoJson files

``` bash
psql -h localhost -p 5432 -U postgres -d public
```

### Create table to store geojson data
``` sql
CREATE TABLE bristol-council (
  geom geometry(Geometry,4326),
  properties jsonb
);
```
/home/reuben/Loader/source/6065398-ST6070.gz

### Convert to PostGIS geometry format
```bash
ogr2ogr -f "PostgreSQL" "PG:host=0.0.0.0 user=postgres dbname=public password=postgres" *.geojson -nln bristol-council
```


### Adda spatial index

``` sql
CREATE INDEX bristol-council ON bristol-council USING GIST (geom);
```


## References


