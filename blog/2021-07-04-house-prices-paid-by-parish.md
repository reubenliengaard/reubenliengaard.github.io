---
slug: house-price-paid-parish
title: House prices paid by parish
authors: reubenliengaard
tags: [hello, docusaurus]
---




# House prices paid by parish

To determine the latitude and longitude coordinates of each house sale, we used information from the land registry about the price paid for each house and matched it with postal code data from the Ordnance Survey. We imported this data into a database called PostGIS and used a query written in SQL to calculate the average price of homes in each parish. We then used a software called QGIS to display this information visually by coloring the polygons (shapes) representing each parish based on the average price.

![Docusaurus Plushie](/img/price-paid-parish.jpg)

