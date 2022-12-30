"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[8375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),g=a,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||n;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2},i="Land Registry Polygons",l={unversionedId:"geospatial/upload-data-to-postgis-with-linux-shell/data-lad-registry-polygons",id:"geospatial/upload-data-to-postgis-with-linux-shell/data-lad-registry-polygons",title:"Land Registry Polygons",description:"Introduction",source:"@site/docs/geospatial/upload-data-to-postgis-with-linux-shell/data-lad-registry-polygons.md",sourceDirName:"geospatial/upload-data-to-postgis-with-linux-shell",slug:"/geospatial/upload-data-to-postgis-with-linux-shell/data-lad-registry-polygons",permalink:"/docs/geospatial/upload-data-to-postgis-with-linux-shell/data-lad-registry-polygons",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bristol City Council GeoJson",permalink:"/docs/geospatial/upload-data-to-postgis-with-linux-shell/data-bristol-city-council-geojson"},next:{title:"Land Registry Price Paid",permalink:"/docs/geospatial/upload-data-to-postgis-with-linux-shell/data-land-registry-price-paid"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Why?",id:"why",level:3},{value:"Body",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Download data",id:"download-data",level:3},{value:"Import parcels",id:"import-parcels",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"land-registry-polygons"},"Land Registry Polygons"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what"},"What?"),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("h2",{id:"body"},"Body"),(0,a.kt)("h3",{id:"how"},"How?"),(0,a.kt)("h3",{id:"download-data"},"Download data"),(0,a.kt)("p",null,"Downloading a csv file of property price paid data for each of the last three years, postcode coordinates,\nand land registry cadastral parcels for Stoud."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://use-land-property-\ndata.service.gov.uk/datasets/inspire/download/Stroud.zip \\\n&& unzip Stroud.zip\n")),(0,a.kt)("h3",{id:"import-parcels"},"Import parcels"),(0,a.kt)("p",null,"Using ogr2ogr to convert the cadastral parcels GML file into PostgreSQL file, projecting it from OSGB\nto WGS84, and importing it into the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ogr2ogr \\\n-f \"PostgreSQL\" \\\n-a_srs \"EPSG:27700\" \\\n-t_srs \"EPSG:4326\" \\\n-nln parcels \\\n-progress \\\nPG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nLand_Registry_Cadastral_Parcels.gml\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("h2",{id:"references"},"References"))}c.isMDXComponent=!0}}]);