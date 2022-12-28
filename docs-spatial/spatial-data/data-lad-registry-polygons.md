---
sidebar_position: 5
---

# Land Registry Polygons

## Introduction

### What?

### Why?

## Body

### How?

### Download data

Downloading a csv file of property price paid data for each of the last three years, postcode coordinates,
and land registry cadastral parcels for Stoud.

```
wget https://use-land-property-
data.service.gov.uk/datasets/inspire/download/Stroud.zip \
&& unzip Stroud.zip
```

### Import parcels

Using ogr2ogr to convert the cadastral parcels GML file into PostgreSQL file, projecting it from OSGB
to WGS84, and importing it into the database.

``` bash
ogr2ogr \
-f "PostgreSQL" \
-a_srs "EPSG:27700" \
-t_srs "EPSG:4326" \
-nln parcels \
-progress \
PG:"dbname='gis' host='$ip' port='5432' user='$user'
password='$password'" \
Land_Registry_Cadastral_Parcels.gml
```

## Conclusion

## References
