---
slug: house-price-paid-parish
title: House prices paid by parish
authors: reubenliengaard
tags: [hello, docusaurus]
---




# House prices paid by parish

To determine the latitude and longitude coordinates of each house sale, we used information from the land registry about the price paid for each house and matched it with postal code data from the Ordnance Survey. We imported this data into a database called PostGIS and used a query written in SQL to calculate the average price of homes in each parish. We then used a software called QGIS to display this information visually by coloring the polygons (shapes) representing each parish based on the average price.

![Docusaurus Plushie](/img/price-paid-parish.jpg)

We downloaded a CSV file that contained property price data for the past three years, along with the postal code coordinates and boundary line polygons.

We used ogr2ogr to convert a file containing boundary lines (in a format called GeoPackage) into a PostgreSQL file, changed the projection of the data from OSGB1936 to WGS84, and imported it into a database.

Starting a psql instance on the client in order to interact with the database on the server.

We used point data that was already in the database from a previous project to create a new polygon for each point that was within the boundaries of a parish. We also added the price paid for each house (the point) to the corresponding polygon.

Like in the the previous project, we calculated the average value for each of the duplicate polygons.


