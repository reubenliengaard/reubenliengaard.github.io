---
sidebar_position: 4
---

# Upload Land Registry Price Paid Data

## Download data

``` bash
$ wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-
1.amazonaws.com/pp-2020.csv \
&& wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-
1.amazonaws.com/pp-2019.csv \
&& wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-
1.amazonaws.com/pp-2018.csv \
&& wget https://www.getthedata.com/downloads/open_postcode_geo.csv.zip \
&& && unzip open_postcode_geo.csv \
```

## Option 1: Prepare  data with BASH
### Prepare prices data
Concatenating the three price paid files together into one file, removing unnecessary field quotes,
selecting only rows which contain the string GL followed by a number between zero and nine, then printing
out only columns four and two, adding column names, then deleting rows containing null values.

```
$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d '"' > pp_3year.csv \
&& awk -F"," '/GL+[0-9]/ { print $4 "," $2}' pp_3year.csv > gl_p_3.csv \
&& { echo "postcode, pounds"; cat gl_p_3.csv; } > prices.csv \
&& sed -i '/\\N/d' prices.csv
```
### Prepare location data  

Applying the same process as for the price data, minus the concatenation.

```
$ awk -F"," '/GL+[0-9]/ { print $1 "," $8 "," $9}' open_postcode_geo.csv >
gl_l.csv \
&& { echo "postcode, latitude, longitude"; cat gl_l.csv; } >
coordinates.csv \
&& sed -i '/\\N/d' coordinates.csv
```

### Push to Database
???

## Option 2: Upload raw CSV files to Database, and restructure with SQL queries