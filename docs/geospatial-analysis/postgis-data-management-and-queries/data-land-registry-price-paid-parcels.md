---
sidebar_position: 3
---

# Land registry price paid parcels
We combined three separate files containing price paid data into a single file, removed unnecessary quotes, selected only rows that contained the string "GL" followed by a number between 0 and 9, and printed out only the fourth and second columns. We also added column names and deleted any rows that contained null values.
```
$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d '"' > pp_3year.csv \
&& awk -F"," '/GL+[0-9]/ { print $4 "," $2}' pp_3year.csv > gl_p_3.csv \
&& { echo "postcode, pounds"; cat gl_p_3.csv; } > prices.csv \
&& sed -i '/\\N/d' prices.csv
```
## Prepare location data

We used the same process to clean and filter the data as we did for the price data, except we did not need to concatenate multiple files together.

```
$ awk -F"," '/GL+[0-9]/ { print $1 "," $8 "," $9}' open_postcode_geo.csv >
gl_l.csv \
&& { echo "postcode, latitude, longitude"; cat gl_l.csv; } >
coordinates.csv \
&& sed -i '/\\N/d' coordinates.csv
```
## Import parcels


We used ogr2ogr to convert a file containing cadastral parcel information (in GML format) into a PostgreSQL file, changed the projection of the data from OSGB to WGS84, and imported it into a database.

```
ogr2ogr \
-f "PostgreSQL" \
-a_srs "EPSG:27700" \
-t_srs "EPSG:27700" \
-nln parcels \
-progress \
PG:"dbname='postgres' host='0.0.0.0' port='5432' user='postgres'
password='postgres'" \
Land_Registry_Cadastral_Parcels.gml
```
## Connect to server

## set psql password
``` bash
export PGPASSWORD=postgres
```

We started a psql session on the client computer to allow us to communicate with the database that is stored on the server.

``` bash
psql -h 0.0.0.0 -U postgres
```
## Create prices table

We created a new empty table with a primary key column of type serial (which will automatically increment) and two additional columns: one for text data (postcodes) and one for integer data (pounds).

```
CREATE TABLE prices (
p_prices_id serial PRIMARY KEY,
p_postcode TEXT NOT NULL,
pounds INTEGER NOT NULL
);
```
## Create location table

We created a similar empty table for storing location data, but with columns for latitude and longitude rather than a column for pounds.

```
CREATE TABLE coordinates (
c_id serial PRIMARY KEY,
c_postcode TEXT NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL
);
```
## Populate prices table


We used the \copy command in psql to import the price data into the new price column in the database.

```
\copy prices(p_postcode, pounds) FROM '/home/reuben/Downloads/prices.csv'
DELIMITER ',' CSV HEADER;
```
## Populate coordinates table

We repeat the process for the coordinates data.

```
\copy coordinates(c_postcode, latitude, longitude) FROM
'/home/reuben/Downloads/coordinates.csv' DELIMITER ',' CSV HEADER;
```
# Join coordinates and prices into points

We used the JOIN command in SQL to create a new table that combines the prices and coordinates data based on their shared postcodes.

### SELECT

```
c_id,
c_postcode,
latitude,
longitude,
pounds
INTO points
FROM coordinates INNER JOIN prices
ON coordinates.c_postcode = prices.p_postcode;
```
# Add geometry column to points

We added a new column to the table to store geometry data.

```
ALTER TABLE points ADD COLUMN geom GEOMETRY(Point, 4326 );
```
# Update points from coordinates

We used the data in the latitude and longitude columns to create points and stored them in the geometry column.


```
UPDATE points SET geom = ST_SETSRID(ST_MakePoint(longitude,
latitude), 4326 );
```
# Create priced polygons

For each point within a polygon, we created a new polygon and added the corresponding price paid for the point to it.
### SELECT

```
c_id,
parcels.wkb_geometry,
points.pounds
INTO polygons
FROM
parcels INNER JOIN points
ON st_contains(parcels.wkb_geometry, points.geom);
```
## Find avarage point value for duplicate polygons

We calculated the average value for each of the duplicate polygons.

```
SELECT c_id,geom,avg(pounds)
INTO avg_polygons
FROM polygons
GROUP BY geom;
```
## Import new price paid polygons to file

We used QGIS to export the table from the database.

```
Qgis > Database > DB Manager > Import Layer/File - Name: avg_polygons
```
## Add price paid polygons layer to Qgis

Displaying the layer in Qgis.

```
Qgis > Layer > Add Layer > Add Vector Layer
Qgis > Database > DB Manager > Import Layer/File - Name: avg_polygons
Vector Dataset(s): .shp
```
## Colour polygons by attribute field

We modified the layer properties in order to create a visually appealing effect.

```
Right click: Layer > Properties
```

```
Symbology > Single Symbol: Graduated
Value: pounds
Colour Ramp: Spectral
Invert Colour Ramp
Segmentation: Equal Interval
```
![Docusaurus Plushie](/img/price-paid-parcel.jpg)




















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