---
slug: house-price-paid
title: House Price Paid
authors: reubenliengaard
tags: [hello, docusaurus]
---

# House prices paid by parish

To obtain the latitude and longitude positions of each house sale value, the house price paid postcodes from the land registry were cross-referenced with OS code point data. The UK parish data was then uploaded to PostGIS, and an SQL query was used to calculate the average price within each parish. This information was imported into QGIS and used to apply a style to the parish polygons based on the average value.