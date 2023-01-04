---
sidebar_position: 2
---

# Loading Land registry inspire polygons

### Download data

Downloading a csv file of property price paid data for each of the last three years, postcode coordinates,
and land registry cadastral parcels for Stoud.

``` bash
wget https://use-land-property-
data.service.gov.uk/datasets/inspire/download/Stroud.zip \
&& unzip Stroud.zip
```

``` bash
psql -h localhost -p 5432 -U postgres -P postgres -d public
```

### create table
```sql
CREATE TABLE inspire-polygons-stroud (
  geom geometry(Geometry,4326),
  properties jsonb
);
```

### Import parcels
Using ogr2ogr 
``` bash
ogr2ogr -f "PostgreSQL" "PG:host=localhost user=postgres dbname=public password=passwopostgres rd" *.shp -nln inspire-polygons-stroud
```

## Create spatial index
``` sql
CREATE INDEX inspire-polygons-stroud-gist ON inspire-polygons-stroud USING GIST (geom);
```

## References
