---
slug: house-price-paid-parish
title: House prices paid by parish
authors: reubenliengaard
tags: [hello, docusaurus]
---




# House prices paid by parish

We used property sale data from the land registry and postal code data from the Ordnance Survey to determine the latitude and longitude coordinates of each house sale. We imported this data into a PostGIS database, ran an SQL query to calculate the average home price for each parish, and used QGIS to visualize the information by coloring the polygons representing each parish based on the average price. 


![Docusaurus Plushie](/img/price-paid-parish.jpg)