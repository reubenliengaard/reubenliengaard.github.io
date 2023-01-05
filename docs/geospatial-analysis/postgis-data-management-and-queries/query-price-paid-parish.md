---
sidebar_position: 3
---

# Land registry price paid parish

## Download data

We downloaded a CSV file that contained property price data for the past three years, along with the postal code coordinates and boundary line polygons.

```
$ wget bdline_gpkg_gb.zip
&& unzip bdline_gpkg_gb.zip
&& cd data
```
## Import bdline

We used ogr2ogr to convert a file containing boundary lines (in a format called GeoPackage) into a PostgreSQL file, changed the projection of the data from OSGB1936 to WGS84, and imported it into a database.

```
ogr2ogr \
-f "PostgreSQL" \
-a_srs "EPSG:27700" \
```

```
-t_srs "EPSG:4326" \
-progress PG:"dbname='gis' host='$ip' port='5432' user='$user'
password='$password'" \
bdline_gb.gpkg
```
## Connect to server

Starting a psql instance on the client in order to interact with the database on the server.

```
psql -h 192.168.88.10 -U postgres gis
```
# Create priced paid polygons for every point

We used point data that was already in the database from a previous project to create a new polygon for each point that was within the boundaries of a parish. We also added the price paid for each house (the point) to the corresponding polygon.

### SELECT

```
parish.geom,
points.pounds
INTO pp_parish
FROM
parish INNER JOIN points
ON st_contains(parish.geom, points.geom);
```
## Find avarage point value for duplicate polygons

Like in the the previous project, we calculated the average value for each of the duplicate polygons.

```
SELECT geom,avg(pounds)
INTO avg_pp_parish
FROM pp_parish
GROUP BY geom;
```
## Import new price paid polygons to file

```
Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish
```
## Add price paid polygons layer to Qgis

```
Qgis > Layer > Add Layer > Add Vector Layer
Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish
Vector Dataset(s): .shp
```

## Colour polygons by attribute field

```
Right click: Layer > Properties
Symbology > Single Symbol: Gradiated
Vaule: pounds
Colour Ramp: Spectral
Invert Colour Ramp
Segmentation: Equal Interval
```

![Docusaurus Plushie](/img/price-paid-parish.jpg)