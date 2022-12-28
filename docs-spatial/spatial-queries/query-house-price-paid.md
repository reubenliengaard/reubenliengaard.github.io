---
sidebar_position: 1
---

# House Price Paid
## Introduction
### What?

### Why?

## Body
### How?


### Connect to server

Starting a psql instance on the client in order to interact with the database on the server.

```
psql -h 192.168.88.10 -U postgres gis
```
### Create priced paid polygons for every point

Using the point data already present in the database from the previous project to create a duplicate
polygon from the parish geometry table for every point each polygon contains, and appending the point
price paid to it.

 SELECT

```
parish.geom,
points.pounds
INTO pp_parish
FROM
parish INNER JOIN points
ON st_contains(parish.geom, points.geom);
```
### Find avarage point value for duplicate polygons

As in the previous project, avaraging the values of the duplicate polygons back one.

```
SELECT geom,avg(pounds)
INTO avg_pp_parish
FROM pp_parish
GROUP BY geom;
```
### Import new price paid polygons to file

```
Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish
```
### Add price paid polygons layer to Qgis

```
Qgis > Layer > Add Layer > Add Vector Layer
Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish
Vector Dataset(s): .shp
```

### Colour polygons by attribute field

```
Right click: Layer > Properties
Symbology > Single Symbol: Gradiated
Vaule: pounds
Colour Ramp: Spectral
Invert Colour Ramp
Segmentation: Equal Interval
```

## Conclusion

## References