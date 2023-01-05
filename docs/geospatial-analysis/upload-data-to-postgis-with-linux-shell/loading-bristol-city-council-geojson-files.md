---
sidebar_position: 1
---

# Loading Bristol city council GeoJson files




# LOOP


### Loop over geojson files and create a new table for each and upload

This script will create a new table in the PostgreSQL database for each .geojson file in the specified directory, using the file name (without the .geojson extension) as the table name. The GeoJSON data from each file will be imported into the corresponding table.
```bash
#!/bin/bash

# Set the database connection string
conn_string="host=localhost user=myuser dbname=mydatabase password=mypassword"

# Loop over all .geojson files in the directory
for file in /path/to/directory/*.geojson; do
    # Extract the file name without the .geojson extension
    tablename=$(basename "$file" .geojson)
    # Use ogr2ogr to import the file into a new table
    ogr2ogr -f "PostgreSQL" PG:"$conn_string" "$file" -nln "$tablename"
done
```


### Adda spatial index

``` sql
CREATE INDEX bristol-council ON bristol-council USING GIST (geom);
```


## References


