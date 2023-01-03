"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[9003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(y,i(i({ref:t},d),{},{components:a})):r.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},i="Loading Land registry inspire polygons",l={unversionedId:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons",id:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons",title:"Loading Land registry inspire polygons",description:"Download data",source:"@site/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons.md",sourceDirName:"geospatial-analysis/upload-data-to-postgis-with-linux-shell",slug:"/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loading Bristol city council GeoJson files",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files"},next:{title:"Loading Ordnance Survey MasterMap with astun loader",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-mastermap-with-astun-loader"}},s={},p=[{value:"Download data",id:"download-data",level:3},{value:"create table",id:"create-table",level:3},{value:"Import parcels",id:"import-parcels",level:3},{value:"Create spatial index",id:"create-spatial-index",level:2},{value:"References",id:"references",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loading-land-registry-inspire-polygons"},"Loading Land registry inspire polygons"),(0,n.kt)("h3",{id:"download-data"},"Download data"),(0,n.kt)("p",null,"Downloading a csv file of property price paid data for each of the last three years, postcode coordinates,\nand land registry cadastral parcels for Stoud."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://use-land-property-\ndata.service.gov.uk/datasets/inspire/download/Stroud.zip \\\n&& unzip Stroud.zip\n")),(0,n.kt)("h3",{id:"create-table"},"create table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE shapefile_table (\n  geom geometry(Geometry,4326),\n  properties jsonb\n);\n")),(0,n.kt)("h3",{id:"import-parcels"},"Import parcels"),(0,n.kt)("p",null,"Using ogr2ogr "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'ogr2ogr -f "PostgreSQL" "PG:host=localhost user=username dbname=database_name password=password" path/to/shapefile.shp -nln shapefile_table\n')),(0,n.kt)("h2",{id:"create-spatial-index"},"Create spatial index"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX shapefile_table_gist ON shapefile_table USING GIST (geom);\n")),(0,n.kt)("h2",{id:"references"},"References"))}c.isMDXComponent=!0}}]);