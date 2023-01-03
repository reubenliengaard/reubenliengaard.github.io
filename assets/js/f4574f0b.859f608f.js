"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[1238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={slug:"house-price-paid-parish",title:"House prices paid by parish",authors:"reubenliengaard",tags:["hello","docusaurus"]},i=void 0,p={permalink:"/blog/house-price-paid-parish",editUrl:"https://github.com/reubenliengaard/blog/2021-07-04-house-prices-paid-by-parish.md",source:"@site/blog/2021-07-04-house-prices-paid-by-parish.md",title:"House prices paid by parish",description:"Docusaurus Plushie",date:"2021-07-04T00:00:00.000Z",formattedDate:"July 4, 2021",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.9,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"house-price-paid-parish",title:"House prices paid by parish",authors:"reubenliengaard",tags:["hello","docusaurus"]},prevItem:{title:"Creating a modular circular stage",permalink:"/blog/creating-a-modular-circular-stage"},nextItem:{title:"Manchester Pride - Ruckus wireless heatmap",permalink:"/blog/manchester-pride"}},l={authorsImageUrls:[void 0]},s=[{value:"Download data",id:"download-data",level:2},{value:"Import bdline",id:"import-bdline",level:2},{value:"Connect to server",id:"connect-to-server",level:2},{value:"SELECT",id:"select",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons",level:2},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file",level:2},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis",level:2},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field",level:2}],d={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:r(7946).Z,width:"1630",height:"886"})),(0,n.kt)("h1",{id:"house-prices-paid-by-parish"},"House prices paid by parish"),(0,n.kt)("p",null,"To obtain the latitude and longitude positions of each house sale value, the house price paid postcodes from the land registry were cross-referenced with OS code point data. The UK parish data was then uploaded to PostGIS, and an SQL query was used to calculate the average price within each parish. This information was imported into QGIS and used to apply a style to the parish polygons based on the average value.."),(0,n.kt)("h1",{id:"average-price-paid-parish"},"Average Price Paid Parish"),(0,n.kt)("h2",{id:"download-data"},"Download data"),(0,n.kt)("p",null,"Donloading a csv file of property price paid data for each of the last three years, postcode coordinates, and\nboundry line polygons."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ wget bdline_gpkg_gb.zip\n&& unzip bdline_gpkg_gb.zip\n&& cd data\n")),(0,n.kt)("h2",{id:"import-bdline"},"Import bdline"),(0,n.kt)("p",null,"Using ogr2ogr to convert the boundry line GeoPackage file into PostgreSQL file, reprojecting it from\nOSGB1936 to WGS84, and importing it into the database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ogr2ogr \\\n-f "PostgreSQL" \\\n-a_srs "EPSG:27700" \\\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-t_srs \"EPSG:4326\" \\\n-progress PG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nbdline_gb.gpkg\n")),(0,n.kt)("h2",{id:"connect-to-server"},"Connect to server"),(0,n.kt)("p",null,"Starting a psql instance on the client in order to interact with the database on the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"psql -h 192.168.88.10 -U postgres gis\n")),(0,n.kt)("h1",{id:"create-priced-paid-polygons-for-every-point"},"Create priced paid polygons for every point"),(0,n.kt)("p",null,"Using the point data already present in the database from the previous project to create a duplicate\npolygon from the parish geometry table for every point each polygon contains, and appending the point\nprice paid to it."),(0,n.kt)("h3",{id:"select"},"SELECT"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"parish.geom,\npoints.pounds\nINTO pp_parish\nFROM\nparish INNER JOIN points\nON st_contains(parish.geom, points.geom);\n")),(0,n.kt)("h2",{id:"find-avarage-point-value-for-duplicate-polygons"},"Find avarage point value for duplicate polygons"),(0,n.kt)("p",null,"As in the previous project, avaraging the values of the duplicate polygons back one."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT geom,avg(pounds)\nINTO avg_pp_parish\nFROM pp_parish\nGROUP BY geom;\n")),(0,n.kt)("h2",{id:"import-new-price-paid-polygons-to-file"},"Import new price paid polygons to file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish\n")),(0,n.kt)("h2",{id:"add-price-paid-polygons-layer-to-qgis"},"Add price paid polygons layer to Qgis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\nVector Dataset(s): .shp\n")),(0,n.kt)("h2",{id:"colour-polygons-by-attribute-field"},"Colour polygons by attribute field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Right click: Layer > Properties\nSymbology > Single Symbol: Gradiated\nVaule: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval\n")))}u.isMDXComponent=!0},7946:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/price-paid-parish-7dab74e8696d5ee03d431495e4fbf360.jpg"}}]);