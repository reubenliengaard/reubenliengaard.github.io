# Price Paid Cadastral

wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-
1.amazonaws.com/pp-2020.csv \
&& wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-
1.amazonaws.com/pp-2019.csv \
&& wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-
1.amazonaws.com/pp-2018.csv \
&& wget https://www.getthedata.com/downloads/open_postcode_geo.csv.zip \
&& wget bdline_gpkg_gb.zip
&& unzip bdline_gpkg_gb.zip
&& cd data
&& unzip open_postcode_geo.csv \
&& unzip Stroud.zip

$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d '"' > pp_3year.csv \
&& awk -F"," '/GL+[0-9]/ { print $4 "," $2}' pp_3year.csv > gl_p_3.csv \
&& { echo "postcode, pounds"; cat gl_p_3.csv; } > prices.csv \
&& sed -i '/\\N/d' prices.csv

$ awk -F"," '/GL+[0-9]/ { print $1 "," $8 "," $9}' open_postcode_geo.csv >
gl_l.csv \
&& { echo "postcode, latitude, longitude"; cat gl_l.csv; } >
coordinates.csv \
&& sed -i '/\\N/d' coordinates.csv

ogr2ogr \
-f "PostgreSQL" \
-a_srs "EPSG:27700" \
-t_srs "EPSG:4326" \
-nln parcels \
-progress \
PG:"dbname='gis' host='$ip' port='5432' user='$user'
password='$password'" \
Land_Registry_Cadastral_Parcels.gml

psql -h 192.168.88.10 -U postgres gis


CREATE TABLE prices (
p_prices_id serial PRIMARY KEY,
p_postcode TEXT NOT NULL,
pounds INTEGER NOT NULL
);

CREATE TABLE coordinates (
c_id serial PRIMARY KEY,
c_postcode TEXT NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL
);

\copy prices(p_postcode, pounds) FROM '/home/reuben/Downloads/prices.csv'
DELIMITER ',' CSV HEADER;

\copy coordinates(c_postcode, latitude, longitude) FROM
'/home/reuben/Downloads/coordinates.csv' DELIMITER ',' CSV HEADER;

c_id,
c_postcode,
latitude,
longitude,
pounds
INTO points
FROM coordinates INNER JOIN prices
ON coordinates.c_postcode = prices.p_postcode;

ALTER TABLE points ADD COLUMN geom GEOMETRY(Point, 4326 );

UPDATE points SET geom = ST_SETSRID(ST_MakePoint(longitude,
latitude), 4326 );

c_id,
parcels.wkb_geometry,
points.pounds
INTO polygons
FROM
parcels INNER JOIN points
ON st_contains(parcels.wkb_geometry, points.geom);

SELECT c_id,geom,avg(pounds)
INTO avg_polygons
FROM polygons
GROUP BY geom;

wget bdline_gpkg_gb.zip
&& unzip bdline_gpkg_gb.zip
&& cd data


ogr2ogr \
-f "PostgreSQL" \
-a_srs "EPSG:27700" \
-t_srs "EPSG:4326" \
-progress PG:"dbname='gis' host='$ip' port='5432' user='$user'
password='$password'" \
bdline_gb.gpkg

psql -h 192.168.88.10 -U postgres gis

parish.geom,
points.pounds
INTO pp_parish
FROM
parish INNER JOIN points
ON st_contains(parish.geom, points.geom);

SELECT geom,avg(pounds)
INTO avg_pp_parish
FROM pp_parish
GROUP BY geom;
