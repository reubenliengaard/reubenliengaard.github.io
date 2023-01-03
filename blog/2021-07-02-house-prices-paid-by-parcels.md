---
slug: house-price-parcels
title: House prices paid parcels
authors: reubenliengaard
tags: [hello, docusaurus]
---

# House prices paid by parish


## Prepare prices data

We combined three separate files containing price paid data into a single file, cleaned and filtered the data by removing quotes, selecting only rows with "GL" followed by a number, printing out only certain columns, adding column names, and deleting rows with null values. We used ogr2ogr to convert a file with cadastral parcel information into a PostgreSQL file, changed the projection from OSGB to WGS84, and imported it into a database. We started a psql session and created empty tables with certain columns in the database. We used the \copy command and SQL JOIN to combine the price and coordinates data based on their shared postcodes, added a column for geometry data, used the latitude and longitude data to create points, and calculated the average value for each of the duplicate polygons. We used QGIS to export the table from the database and modified the layer properties for visual appeal.


![Docusaurus Plushie](/img/price-paid-parcel.jpg)

It appears that some of the postal codes are not being properly associated with the intended polygons. For the next project, we will use a set of polygons (parishes) with lower resolution to see if this improves the accuracy of the data.