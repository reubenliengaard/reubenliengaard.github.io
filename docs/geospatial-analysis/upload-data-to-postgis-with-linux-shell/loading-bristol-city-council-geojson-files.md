---
sidebar_position: 1
---

# Loading Bristol city council GeoJson files

### Loop over geojson files and create a new table for each and upload

This script will create a new table in the PostgreSQL database for each .geojson file in the specified directory, using the file name (without the .geojson extension) as the table name. The GeoJSON data from each file will be imported into the corresponding table.
```bash
#!/bin/bash

# Set the database connection string
conn_string="host=0.0.0.0 user=postgres dbname=postgres password=postgres"

# Loop over all .geojson files in the directory
for file in *.geojson; do
    # Extract the file name without the .geojson extension
    tablename=$(basename "$file" .geojson)
    # Use ogr2ogr to import the file into a new table
    ogr2ogr -f "PostgreSQL" -s_srs EPSG:4326 -t_srs EPSG:27700 PG:"$conn_string" "$file" -nln "$tablename"
done
```


### Add a spatial index

``` sql
CREATE INDEX bristol-council ON bristol-council USING GIST (geom);
```


## References


