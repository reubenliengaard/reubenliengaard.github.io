---
slug: inspire-index-polygon-house-prices
title: INSPIRE Index Polygon House Prices - A Map of Average Sale Prices
authors: reubenliengaard
tags: [hello, docusaurus]
---

# INSPIRE Index Polygon House Prices - A Map of Average Sale Prices

## Prepare prices data

In order to effectively analyze and visualize real estate data, it is important to first properly organize and process the data. To this end, our team combined three separate files containing price paid data into a single file and cleaned and filtered the data through a series of steps. These steps included the removal of quotes, the selection of only rows with "GL" followed by a number, the printing of certain columns, the addition of column names, and the deletion of rows with null values.

Once the data was cleaned and organized, we used the powerful tool ogr2ogr to convert a file with cadastral parcel information into a PostgreSQL file. We then changed the projection from OSGB to WGS84 and imported it into a database. In order to store the data in a structured manner, we started a psql session and created empty tables with certain columns in the database.

Next, we used the \copy command and SQL JOIN to combine the price and coordinates data based on their shared postcodes. We added a column for geometry data and used the latitude and longitude data to create points. We then calculated the average value for each of the duplicate polygons.

Finally, we used the powerful mapping software QGIS to export the table from the database and modified the layer properties for visual appeal. Through this process, we were able to effectively organize and analyze the real estate data, allowing us to extract valuable insights and gain a deeper understanding of the market.


![Docusaurus Plushie](/img/price-paid-parcel.jpg)

During our analysis of real estate data, we encountered an issue with some of the postal codes not being properly associated with the intended polygons. This issue had the potential to significantly impact the accuracy and usefulness of our data.

To address this issue and improve the accuracy of our data, we decided to use a different set of polygons (parishes) with a lower resolution for the next project. We hoped that this approach would help to more accurately associate the postal codes with the intended polygons, resulting in a more reliable dataset.