"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[81],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={slug:"house-price-parcels",title:"House prices paid parcels",authors:"reubenliengaard",tags:["hello","docusaurus"]},l="House prices paid by parish",i={permalink:"/blog/house-price-parcels",editUrl:"https://github.com/reubenliengaard/blog/2021-07-02-house-prices-paid-by-parcels.md",source:"@site/blog/2021-07-02-house-prices-paid-by-parcels.md",title:"House prices paid parcels",description:"Prepare prices data",date:"2021-07-02T00:00:00.000Z",formattedDate:"July 2, 2021",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:3.535,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"house-price-parcels",title:"House prices paid parcels",authors:"reubenliengaard",tags:["hello","docusaurus"]},prevItem:{title:"Modeling a truss connection",permalink:"/blog/modeling-a-truss-connection"},nextItem:{title:"Royal Windsor Horse Show  wireless heatmap",permalink:"/blog/windsor-horse-show"}},p={authorsImageUrls:[void 0]},s=[{value:"Prepare prices data",id:"prepare-prices-data",level:2},{value:"Prepare location data",id:"prepare-location-data",level:2},{value:"Import parcels",id:"import-parcels",level:2},{value:"Connect to server",id:"connect-to-server",level:2},{value:"Create prices table",id:"create-prices-table",level:2},{value:"Create location table",id:"create-location-table",level:2},{value:"Populate prices table",id:"populate-prices-table",level:2},{value:"Populate coordinates table",id:"populate-coordinates-table",level:2},{value:"SELECT",id:"select",level:3},{value:"SELECT",id:"select-1",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons",level:2},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file",level:2},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis",level:2},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prepare-prices-data"},"Prepare prices data"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus Plushie",src:n(6317).Z,width:"1534",height:"787"})),(0,r.kt)("p",null,"Concatenating the three price paid files together into one file, removing unnecessary field quotes,\nselecting only rows which contain the string GL followed by a number between zero and nine, then printing\nout only columns four and two, adding column names, then deleting rows containing null values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d \'"\' > pp_3year.csv \\\n&& awk -F"," \'/GL+[0-9]/ { print $4 "," $2}\' pp_3year.csv > gl_p_3.csv \\\n&& { echo "postcode, pounds"; cat gl_p_3.csv; } > prices.csv \\\n&& sed -i \'/\\\\N/d\' prices.csv\n')),(0,r.kt)("h2",{id:"prepare-location-data"},"Prepare location data"),(0,r.kt)("p",null,"Applying the same process as for the price data, minus the concatenation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ awk -F"," \'/GL+[0-9]/ { print $1 "," $8 "," $9}\' open_postcode_geo.csv >\ngl_l.csv \\\n&& { echo "postcode, latitude, longitude"; cat gl_l.csv; } >\ncoordinates.csv \\\n&& sed -i \'/\\\\N/d\' coordinates.csv\n')),(0,r.kt)("h2",{id:"import-parcels"},"Import parcels"),(0,r.kt)("p",null,"Using ogr2ogr to convert the cadastral parcels GML file into PostgreSQL file, projecting it from OSGB\nto WGS84, and importing it into the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ogr2ogr \\\n-f \"PostgreSQL\" \\\n-a_srs \"EPSG:27700\" \\\n-t_srs \"EPSG:4326\" \\\n-nln parcels \\\n-progress \\\nPG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nLand_Registry_Cadastral_Parcels.gml\n")),(0,r.kt)("h2",{id:"connect-to-server"},"Connect to server"),(0,r.kt)("p",null,"Starting a psql instance on the client in order to interact with the database on the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"psql -h 192.168.88.10 -U postgres gis\n")),(0,r.kt)("h2",{id:"create-prices-table"},"Create prices table"),(0,r.kt)("p",null,"Creating a new empty table, with an auto incrementing primary key of type serial, and text and integer\ncolumns for postcodes and pounds respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE prices (\np_prices_id serial PRIMARY KEY,\np_postcode TEXT NOT NULL,\npounds INTEGER NOT NULL\n);\n")),(0,r.kt)("h2",{id:"create-location-table"},"Create location table"),(0,r.kt)("p",null,"Creating a similar empty table for locations, but with latitude, and longitude columns rather instead of a\npounds column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE coordinates (\nc_id serial PRIMARY KEY,\nc_postcode TEXT NOT NULL,\nlatitude FLOAT NOT NULL,\nlongitude FLOAT NOT NULL\n);\n")),(0,r.kt)("h2",{id:"populate-prices-table"},"Populate prices table"),(0,r.kt)("p",null,"Importing the prices data into the new price column using the \\copy command in psql."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\\copy prices(p_postcode, pounds) FROM '/home/reuben/Downloads/prices.csv'\nDELIMITER ',' CSV HEADER;\n")),(0,r.kt)("h2",{id:"populate-coordinates-table"},"Populate coordinates table"),(0,r.kt)("p",null,"Repeating the process for the coordinates data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\\copy coordinates(c_postcode, latitude, longitude) FROM\n'/home/reuben/Downloads/coordinates.csv' DELIMITER ',' CSV HEADER;\n")),(0,r.kt)("h1",{id:"join-coordinates-and-prices-into-points"},"Join coordinates and prices into points"),(0,r.kt)("p",null,"Using the SQL join command to make a new table containing the prices and coordinates which share the\nsame postcode."),(0,r.kt)("h3",{id:"select"},"SELECT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"c_id,\nc_postcode,\nlatitude,\nlongitude,\npounds\nINTO points\nFROM coordinates INNER JOIN prices\nON coordinates.c_postcode = prices.p_postcode;\n")),(0,r.kt)("h1",{id:"add-geometry-column-to-points"},"Add geometry column to points"),(0,r.kt)("p",null,"Adding an geometry column to the new table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER TABLE points ADD COLUMN geom GEOMETRY(Point, 4326 );\n")),(0,r.kt)("h1",{id:"update-points-from-coordinates"},"Update points from coordinates"),(0,r.kt)("p",null,"Populating the geometry column with points created using the contents of the latitude and longitude\ncolumns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"UPDATE points SET geom = ST_SETSRID(ST_MakePoint(longitude,\nlatitude), 4326 );\n")),(0,r.kt)("h1",{id:"create-priced-polygons"},"Create priced polygons"),(0,r.kt)("p",null,"Creating a duplicate polygon for every point it contains, and appending the point price paid to it."),(0,r.kt)("h3",{id:"select-1"},"SELECT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"c_id,\nparcels.wkb_geometry,\npoints.pounds\nINTO polygons\nFROM\nparcels INNER JOIN points\nON st_contains(parcels.wkb_geometry, points.geom);\n")),(0,r.kt)("h2",{id:"find-avarage-point-value-for-duplicate-polygons"},"Find avarage point value for duplicate polygons"),(0,r.kt)("p",null,"Avaraging the values of the duplicate polygons into one. I'm sure there must be a more efficient way of\ndoing this with less steps, I will have to look into it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT c_id,geom,avg(pounds)\nINTO avg_polygons\nFROM polygons\nGROUP BY geom;\n")),(0,r.kt)("h2",{id:"import-new-price-paid-polygons-to-file"},"Import new price paid polygons to file"),(0,r.kt)("p",null,"Using Qgis to export the table from the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Qgis > Database > DB Manager > Import Layer/File - Name: avg_polygons\n")),(0,r.kt)("h2",{id:"add-price-paid-polygons-layer-to-qgis"},"Add price paid polygons layer to Qgis"),(0,r.kt)("p",null,"Displaying the layer in Qgis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: avg_polygons\nVector Dataset(s): .shp\n")),(0,r.kt)("h2",{id:"colour-polygons-by-attribute-field"},"Colour polygons by attribute field"),(0,r.kt)("p",null,"Tweaking the layer properties in order to create a nice visual effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Right click: Layer > Properties\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Symbology > Single Symbol: Graduated\nValue: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval\n")),(0,r.kt)("p",null,"I think that some of the postcodes have fallen outside of their intended polygons, for the next project I will\nuse a set of polygons with less resolution."))}d.isMDXComponent=!0},6317:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/price-paid-parcel-b58fdcacf1b5265bca273e23e59ebb2e.jpg"}}]);