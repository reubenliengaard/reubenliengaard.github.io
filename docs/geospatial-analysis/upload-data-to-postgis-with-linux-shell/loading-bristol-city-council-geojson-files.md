---
sidebar_position: 1
---

# Bristol city council GeoJson files

### Download all spatial data in gejson format

### Create new schema for council data

### Upload bristol council data to new schema in postgis database

#### With ogr2ogr

```bash
ogr2ogr -f "PostgreSQL" PG:"dbname=your-database-name user=your-username password=mypassword" /path/to/jour/GeoJSon/file -nln table-name
```

### Upload data with ogr2ogr

```bash
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

### Or ashtun loader?


## References


