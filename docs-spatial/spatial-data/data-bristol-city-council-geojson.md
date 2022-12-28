---
sidebar_position: 2
---

# Bristol City Council GeoJson

## Introduction

## What?
Bristol City Council has quite allot of spatial data available at ?

## Why?

## Body
### How?

### download all spatial data in gejson format

### create new schema for council data

### upload bristol council data to new schema in postgis database

#### with ogr2ogr
ogr2ogr -f "PostgreSQL" PG:"dbname=your-database-name user=your-username password=mypassword" /path/to/jour/GeoJSon/file -nln table-name

### upload data with ogr2ogr
```
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

### or ashtun loader?

## Conclusion

## References


