"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[7575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||p;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,s=new Array(p);s[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<p;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const p={},s="Price Paid Cadastral",a={unversionedId:"test",id:"test",title:"Price Paid Cadastral",description:"wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-",source:"@site/docs/test.md",sourceDirName:".",slug:"/test",permalink:"/docs/test",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Designing a spherical solar concentrator with Lady Bug",permalink:"/docs/parametric-modeling/spherical-solar-concentrator-with-ladybug"}},i={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"price-paid-cadastral"},"Price Paid Cadastral"),(0,o.kt)("p",null,"wget ",(0,o.kt)("a",{parentName:"p",href:"http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-"},"http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-"),"\n1.amazonaws.com/pp-2020.csv \\\n&& wget ",(0,o.kt)("a",{parentName:"p",href:"http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-"},"http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-"),"\n1.amazonaws.com/pp-2019.csv \\\n&& wget ",(0,o.kt)("a",{parentName:"p",href:"http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-"},"http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-"),"\n1.amazonaws.com/pp-2018.csv \\\n&& wget ",(0,o.kt)("a",{parentName:"p",href:"https://www.getthedata.com/downloads/open_postcode_geo.csv.zip"},"https://www.getthedata.com/downloads/open_postcode_geo.csv.zip")," \\\n&& wget bdline_gpkg_gb.zip\n&& unzip bdline_gpkg_gb.zip\n&& cd data\n&& unzip open_postcode_geo.csv \\\n&& unzip Stroud.zip"),(0,o.kt)("p",null,"$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d '\"' > pp_3year.csv \\\n&& awk -F\",\" '/GL+","[0-9]",'/ { print $4 "," $2}\' pp_3year.csv > gl_p_3.csv \\\n&& { echo "postcode, pounds"; cat gl_p_3.csv; } > prices.csv \\\n&& sed -i \'/',"\\","N/d' prices.csv"),(0,o.kt)("p",null,'$ awk -F"," \'/GL+',"[0-9]",'/ { print $1 "," $8 "," $9}\' open_postcode_geo.csv >\ngl_l.csv \\\n&& { echo "postcode, latitude, longitude"; cat gl_l.csv; } >\ncoordinates.csv \\\n&& sed -i \'/',"\\","N/d' coordinates.csv"),(0,o.kt)("p",null,"ogr2ogr \\\n-f \"PostgreSQL\" \\\n-a_srs \"EPSG:27700\" \\\n-t_srs \"EPSG:4326\" \\\n-nln parcels \\\n-progress \\\nPG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nLand_Registry_Cadastral_Parcels.gml"),(0,o.kt)("p",null,"psql -h 192.168.88.10 -U postgres gis"),(0,o.kt)("p",null,"CREATE TABLE prices (\np_prices_id serial PRIMARY KEY,\np_postcode TEXT NOT NULL,\npounds INTEGER NOT NULL\n);"),(0,o.kt)("p",null,"CREATE TABLE coordinates (\nc_id serial PRIMARY KEY,\nc_postcode TEXT NOT NULL,\nlatitude FLOAT NOT NULL,\nlongitude FLOAT NOT NULL\n);"),(0,o.kt)("p",null,"\\copy prices(p_postcode, pounds) FROM '/home/reuben/Downloads/prices.csv'\nDELIMITER ',' CSV HEADER;"),(0,o.kt)("p",null,"\\copy coordinates(c_postcode, latitude, longitude) FROM\n'/home/reuben/Downloads/coordinates.csv' DELIMITER ',' CSV HEADER;"),(0,o.kt)("p",null,"c_id,\nc_postcode,\nlatitude,\nlongitude,\npounds\nINTO points\nFROM coordinates INNER JOIN prices\nON coordinates.c_postcode = prices.p_postcode;"),(0,o.kt)("p",null,"ALTER TABLE points ADD COLUMN geom GEOMETRY(Point, 4326 );"),(0,o.kt)("p",null,"UPDATE points SET geom = ST_SETSRID(ST_MakePoint(longitude,\nlatitude), 4326 );"),(0,o.kt)("p",null,"c_id,\nparcels.wkb_geometry,\npoints.pounds\nINTO polygons\nFROM\nparcels INNER JOIN points\nON st_contains(parcels.wkb_geometry, points.geom);"),(0,o.kt)("p",null,"SELECT c_id,geom,avg(pounds)\nINTO avg_polygons\nFROM polygons\nGROUP BY geom;"),(0,o.kt)("p",null,"wget bdline_gpkg_gb.zip\n&& unzip bdline_gpkg_gb.zip\n&& cd data"),(0,o.kt)("p",null,"ogr2ogr \\\n-f \"PostgreSQL\" \\\n-a_srs \"EPSG:27700\" \\\n-t_srs \"EPSG:4326\" \\\n-progress PG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nbdline_gb.gpkg"),(0,o.kt)("p",null,"psql -h 192.168.88.10 -U postgres gis"),(0,o.kt)("p",null,"parish.geom,\npoints.pounds\nINTO pp_parish\nFROM\nparish INNER JOIN points\nON st_contains(parish.geom, points.geom);"),(0,o.kt)("p",null,"SELECT geom,avg(pounds)\nINTO avg_pp_parish\nFROM pp_parish\nGROUP BY geom;"))}d.isMDXComponent=!0}}]);