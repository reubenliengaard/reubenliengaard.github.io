"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[8064],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3},i="Land registry price paid parcels",p={unversionedId:"geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels",id:"geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels",title:"Land registry price paid parcels",description:'We combined three separate files containing price paid data into a single file, removed unnecessary quotes, selected only rows that contained the string "GL" followed by a number between 0 and 9, and printed out only the fourth and second columns. We also added column names and deleted any rows that contained null values.',source:"@site/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels.md",sourceDirName:"geospatial-analysis/postgis-data-management-and-queries",slug:"/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Flood risk",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-flood-risk"},next:{title:"Land registry price paid parish",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish"}},l={},s=[{value:"Prepare location data",id:"prepare-location-data",level:2},{value:"Import parcels",id:"import-parcels",level:2},{value:"Connect to server",id:"connect-to-server",level:2},{value:"set psql password",id:"set-psql-password",level:2},{value:"Create prices table",id:"create-prices-table",level:2},{value:"Create location table",id:"create-location-table",level:2},{value:"Populate prices table",id:"populate-prices-table",level:2},{value:"Populate coordinates table",id:"populate-coordinates-table",level:2},{value:"SELECT",id:"select",level:3},{value:"SELECT",id:"select-1",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons",level:2},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file",level:2},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis",level:2},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field",level:2},{value:"Download data",id:"download-data",level:2},{value:"Import bdline",id:"import-bdline",level:2},{value:"Connect to server",id:"connect-to-server-1",level:2},{value:"SELECT",id:"select-2",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons-1",level:2},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file-1",level:2},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis-1",level:2},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field-1",level:2}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"land-registry-price-paid-parcels"},"Land registry price paid parcels"),(0,n.kt)("p",null,'We combined three separate files containing price paid data into a single file, removed unnecessary quotes, selected only rows that contained the string "GL" followed by a number between 0 and 9, and printed out only the fourth and second columns. We also added column names and deleted any rows that contained null values.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d \'"\' > pp_3year.csv \\\n&& awk -F"," \'/GL+[0-9]/ { print $4 "," $2}\' pp_3year.csv > gl_p_3.csv \\\n&& { echo "postcode, pounds"; cat gl_p_3.csv; } > prices.csv \\\n&& sed -i \'/\\\\N/d\' prices.csv\n')),(0,n.kt)("h2",{id:"prepare-location-data"},"Prepare location data"),(0,n.kt)("p",null,"We used the same process to clean and filter the data as we did for the price data, except we did not need to concatenate multiple files together."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ awk -F"," \'/GL+[0-9]/ { print $1 "," $8 "," $9}\' open_postcode_geo.csv >\ngl_l.csv \\\n&& { echo "postcode, latitude, longitude"; cat gl_l.csv; } >\ncoordinates.csv \\\n&& sed -i \'/\\\\N/d\' coordinates.csv\n')),(0,n.kt)("h2",{id:"import-parcels"},"Import parcels"),(0,n.kt)("p",null,"We used ogr2ogr to convert a file containing cadastral parcel information (in GML format) into a PostgreSQL file, changed the projection of the data from OSGB to WGS84, and imported it into a database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ogr2ogr \\\n-f \"PostgreSQL\" \\\n-a_srs \"EPSG:27700\" \\\n-t_srs \"EPSG:27700\" \\\n-nln parcels \\\n-progress \\\nPG:\"dbname='postgres' host='0.0.0.0' port='5432' user='postgres'\npassword='postgres'\" \\\nLand_Registry_Cadastral_Parcels.gml\n")),(0,n.kt)("h2",{id:"connect-to-server"},"Connect to server"),(0,n.kt)("h2",{id:"set-psql-password"},"set psql password"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export PGPASSWORD=postgres\n")),(0,n.kt)("p",null,"We started a psql session on the client computer to allow us to communicate with the database that is stored on the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h 0.0.0.0 -U postgres\n")),(0,n.kt)("h2",{id:"create-prices-table"},"Create prices table"),(0,n.kt)("p",null,"We created a new empty table with a primary key column of type serial (which will automatically increment) and two additional columns: one for text data (postcodes) and one for integer data (pounds)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE TABLE prices (\np_prices_id serial PRIMARY KEY,\np_postcode TEXT NOT NULL,\npounds INTEGER NOT NULL\n);\n")),(0,n.kt)("h2",{id:"create-location-table"},"Create location table"),(0,n.kt)("p",null,"We created a similar empty table for storing location data, but with columns for latitude and longitude rather than a column for pounds."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE TABLE coordinates (\nc_id serial PRIMARY KEY,\nc_postcode TEXT NOT NULL,\nlatitude FLOAT NOT NULL,\nlongitude FLOAT NOT NULL\n);\n")),(0,n.kt)("h2",{id:"populate-prices-table"},"Populate prices table"),(0,n.kt)("p",null,"We used the \\copy command in psql to import the price data into the new price column in the database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\copy prices(p_postcode, pounds) FROM '/home/reuben/Downloads/prices.csv'\nDELIMITER ',' CSV HEADER;\n")),(0,n.kt)("h2",{id:"populate-coordinates-table"},"Populate coordinates table"),(0,n.kt)("p",null,"We repeat the process for the coordinates data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\copy coordinates(c_postcode, latitude, longitude) FROM\n'/home/reuben/Downloads/coordinates.csv' DELIMITER ',' CSV HEADER;\n")),(0,n.kt)("h1",{id:"join-coordinates-and-prices-into-points"},"Join coordinates and prices into points"),(0,n.kt)("p",null,"We used the JOIN command in SQL to create a new table that combines the prices and coordinates data based on their shared postcodes."),(0,n.kt)("h3",{id:"select"},"SELECT"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"c_id,\nc_postcode,\nlatitude,\nlongitude,\npounds\nINTO points\nFROM coordinates INNER JOIN prices\nON coordinates.c_postcode = prices.p_postcode;\n")),(0,n.kt)("h1",{id:"add-geometry-column-to-points"},"Add geometry column to points"),(0,n.kt)("p",null,"We added a new column to the table to store geometry data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER TABLE points ADD COLUMN geom GEOMETRY(Point, 4326 );\n")),(0,n.kt)("h1",{id:"update-points-from-coordinates"},"Update points from coordinates"),(0,n.kt)("p",null,"We used the data in the latitude and longitude columns to create points and stored them in the geometry column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"UPDATE points SET geom = ST_SETSRID(ST_MakePoint(longitude,\nlatitude), 4326 );\n")),(0,n.kt)("h1",{id:"create-priced-polygons"},"Create priced polygons"),(0,n.kt)("p",null,"For each point within a polygon, we created a new polygon and added the corresponding price paid for the point to it."),(0,n.kt)("h3",{id:"select-1"},"SELECT"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"c_id,\nparcels.wkb_geometry,\npoints.pounds\nINTO polygons\nFROM\nparcels INNER JOIN points\nON st_contains(parcels.wkb_geometry, points.geom);\n")),(0,n.kt)("h2",{id:"find-avarage-point-value-for-duplicate-polygons"},"Find avarage point value for duplicate polygons"),(0,n.kt)("p",null,"We calculated the average value for each of the duplicate polygons."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT c_id,geom,avg(pounds)\nINTO avg_polygons\nFROM polygons\nGROUP BY geom;\n")),(0,n.kt)("h2",{id:"import-new-price-paid-polygons-to-file"},"Import new price paid polygons to file"),(0,n.kt)("p",null,"We used QGIS to export the table from the database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Database > DB Manager > Import Layer/File - Name: avg_polygons\n")),(0,n.kt)("h2",{id:"add-price-paid-polygons-layer-to-qgis"},"Add price paid polygons layer to Qgis"),(0,n.kt)("p",null,"Displaying the layer in Qgis."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: avg_polygons\nVector Dataset(s): .shp\n")),(0,n.kt)("h2",{id:"colour-polygons-by-attribute-field"},"Colour polygons by attribute field"),(0,n.kt)("p",null,"We modified the layer properties in order to create a visually appealing effect."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Right click: Layer > Properties\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Symbology > Single Symbol: Graduated\nValue: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(6317).Z,width:"1534",height:"787"})),(0,n.kt)("h2",{id:"download-data"},"Download data"),(0,n.kt)("p",null,"We downloaded a CSV file that contained property price data for the past three years, along with the postal code coordinates and boundary line polygons."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ wget bdline_gpkg_gb.zip\n&& unzip bdline_gpkg_gb.zip\n&& cd data\n")),(0,n.kt)("h2",{id:"import-bdline"},"Import bdline"),(0,n.kt)("p",null,"We used ogr2ogr to convert a file containing boundary lines (in a format called GeoPackage) into a PostgreSQL file, changed the projection of the data from OSGB1936 to WGS84, and imported it into a database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ogr2ogr \\\n-f "PostgreSQL" \\\n-a_srs "EPSG:27700" \\\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-t_srs \"EPSG:4326\" \\\n-progress PG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nbdline_gb.gpkg\n")),(0,n.kt)("h2",{id:"connect-to-server-1"},"Connect to server"),(0,n.kt)("p",null,"Starting a psql instance on the client in order to interact with the database on the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"psql -h 192.168.88.10 -U postgres gis\n")),(0,n.kt)("h1",{id:"create-priced-paid-polygons-for-every-point"},"Create priced paid polygons for every point"),(0,n.kt)("p",null,"We used point data that was already in the database from a previous project to create a new polygon for each point that was within the boundaries of a parish. We also added the price paid for each house (the point) to the corresponding polygon."),(0,n.kt)("h3",{id:"select-2"},"SELECT"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"parish.geom,\npoints.pounds\nINTO pp_parish\nFROM\nparish INNER JOIN points\nON st_contains(parish.geom, points.geom);\n")),(0,n.kt)("h2",{id:"find-avarage-point-value-for-duplicate-polygons-1"},"Find avarage point value for duplicate polygons"),(0,n.kt)("p",null,"Like in the the previous project, we calculated the average value for each of the duplicate polygons."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT geom,avg(pounds)\nINTO avg_pp_parish\nFROM pp_parish\nGROUP BY geom;\n")),(0,n.kt)("h2",{id:"import-new-price-paid-polygons-to-file-1"},"Import new price paid polygons to file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish\n")),(0,n.kt)("h2",{id:"add-price-paid-polygons-layer-to-qgis-1"},"Add price paid polygons layer to Qgis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\nVector Dataset(s): .shp\n")),(0,n.kt)("h2",{id:"colour-polygons-by-attribute-field-1"},"Colour polygons by attribute field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Right click: Layer > Properties\nSymbology > Single Symbol: Gradiated\nVaule: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval\n")))}c.isMDXComponent=!0},6317:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/price-paid-parcel-b58fdcacf1b5265bca273e23e59ebb2e.jpg"}}]);