"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4853],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),g=a,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},4097:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:1},i="Loading Bristol city council GeoJson files",l={unversionedId:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files",id:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files",title:"Loading Bristol city council GeoJson files",description:"Create table to store geojson data",source:"@site/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files.md",sourceDirName:"geospatial-analysis/upload-data-to-postgis-with-linux-shell",slug:"/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Uploading Data to PostGIS with Linux Shell",permalink:"/docs/category/uploading-data-to-postgis-with-linux-shell"},next:{title:"Loading Land registry inspire polygons",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons"}},s={},c=[{value:"Create table to store geojson data",id:"create-table-to-store-geojson-data",level:3},{value:"Convert to PostGIS geometry format",id:"convert-to-postgis-geometry-format",level:3},{value:"Adda spatial index",id:"adda-spatial-index",level:3},{value:"References",id:"references",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loading-bristol-city-council-geojson-files"},"Loading Bristol city council GeoJson files"),(0,a.kt)("h3",{id:"create-table-to-store-geojson-data"},"Create table to store geojson data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE geojson_table (\n  geom geometry(Geometry,4326),\n  properties jsonb\n);\n")),(0,a.kt)("h3",{id:"convert-to-postgis-geometry-format"},"Convert to PostGIS geometry format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ogr2ogr -f "PostgreSQL" "PG:host=localhost user=username dbname=database_name password=password" path/to/geojson_data.geojson -nln geojson_table\n')),(0,a.kt)("h3",{id:"adda-spatial-index"},"Adda spatial index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX geojson_table_gist ON geojson_table USING GIST (geom);\n")),(0,a.kt)("h2",{id:"references"},"References"))}d.isMDXComponent=!0}}]);