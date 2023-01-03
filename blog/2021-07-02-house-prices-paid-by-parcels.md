---
slug: house-price-parcels
title: House prices paid parcels
authors: reubenliengaard
tags: [hello, docusaurus]
---

# House prices paid by parish


## Prepare prices data

We combined three separate files containing price paid data into a single file, removed unnecessary quotes, selected only rows that contained the string "GL" followed by a number between 0 and 9, and printed out only the fourth and second columns. We also added column names and deleted any rows that contained null values.

We used the same process to clean and filter the data as we did for the price data, except we did not need to concatenate multiple files together.

We used ogr2ogr to convert a file containing cadastral parcel information (in GML format) into a PostgreSQL file, changed the projection of the data from OSGB to WGS84, and imported it into a database.

We started a psql session on the client computer to allow us to communicate with the database that is stored on the server.

We created a new empty table with a primary key column of type serial (which will automatically increment) and two additional columns: one for text data (postcodes) and one for integer data (pounds).

We created a similar empty table for storing location data, but with columns for latitude and longitude rather than a column for pounds.

We used the \copy command in psql to import the price data into the new price column in the database.

We repeat the process for the coordinates data.

We used the JOIN command in SQL to create a new table that combines the prices and coordinates data based on their shared postcodes.

We added a new column to the table to store geometry data.

We used the data in the latitude and longitude columns to create points and stored them in the geometry column.

For each point within a polygon, we created a new polygon and added the corresponding price paid for the point to it.

We calculated the average value for each of the duplicate polygons.

We used QGIS to export the table from the database.

We modified the layer properties in order to create a visually appealing effect.



![Docusaurus Plushie](/img/price-paid-parcel.jpg)

It appears that some of the postal codes are not being properly associated with the intended polygons. For the next project, we will use a set of polygons (parishes) with lower resolution to see if this improves the accuracy of the data.