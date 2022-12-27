---
slug: price-paid-polygons
title: Price Paid Polygons
authors: 
  name: reubenliengaard
  title: Maintainer
  url: https://github.com/reubenliengaard
  image_url: https://github.com/reubenliengaard.png
tags: [spatial, gis]
---

# Price Paid Cadastral

## Connect to server

Starting a psql instance on the client in order to interact with the database on the server.

```
psql -h 192.168.88.10 -U postgres gis
```
## Create prices table

Creating a new empty table, with an auto incrementing primary key of type serial, and text and integer
columns for postcodes and pounds respectively.

```
CREATE TABLE prices (
p_prices_id serial PRIMARY KEY,
p_postcode TEXT NOT NULL,
pounds INTEGER NOT NULL
);
```
## Create location table

Creating a similar empty table for locations, but with latitude, and longitude columns rather instead of a
pounds column.

```
CREATE TABLE coordinates (
c_id serial PRIMARY KEY,
c_postcode TEXT NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL
);
```
## Populate prices table


Importing the prices data into the new price column using the \copy command in psql.

```
\copy prices(p_postcode, pounds) FROM '/home/reuben/Downloads/prices.csv'
DELIMITER ',' CSV HEADER;
```
## Populate coordinates table

Repeating the process for the coordinates data.

```
\copy coordinates(c_postcode, latitude, longitude) FROM
'/home/reuben/Downloads/coordinates.csv' DELIMITER ',' CSV HEADER;
```
# Join coordinates and prices into points

Using the SQL join command to make a new table containing the prices and coordinates which share the
same postcode.

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

Adding an geometry column to the new table.

```
ALTER TABLE points ADD COLUMN geom GEOMETRY(Point, 4326 );
```
# Update points from coordinates

Populating the geometry column with points created using the contents of the latitude and longitude
columns.


```
UPDATE points SET geom = ST_SETSRID(ST_MakePoint(longitude,
latitude), 4326 );
```
# Create priced polygons

Creating a duplicate polygon for every point it contains, and appending the point price paid to it.

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

Avaraging the values of the duplicate polygons into one. I'm sure there must be a more efficient way of
doing this with less steps, I will have to look into it.

```
SELECT c_id,geom,avg(pounds)
INTO avg_polygons
FROM polygons
GROUP BY geom;
```
## Import new price paid polygons to file

Using Qgis to export the table from the database.

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

Tweaking the layer properties in order to create a nice visual effect.

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
I think that some of the postcodes have fallen outside of their intended polygons, for the next project I will
use a set of polygons with less resolution.

#