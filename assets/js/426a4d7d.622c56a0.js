"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[3226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,h=u["".concat(s,".").concat(g)]||u[g]||p[g]||n;return a?o.createElement(h,i(i({ref:t},d),{},{components:a})):o.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:1},i="Bristol City Council GeoJson",l={unversionedId:"geospatial/data/data-bristol-city-council-geojson",id:"geospatial/data/data-bristol-city-council-geojson",title:"Bristol City Council GeoJson",description:"Introduction",source:"@site/docs/geospatial/data/data-bristol-city-council-geojson.md",sourceDirName:"geospatial/data",slug:"/geospatial/data/data-bristol-city-council-geojson",permalink:"/docs/geospatial/data/data-bristol-city-council-geojson",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/docs/category/data"},next:{title:"Land Registry Polygons",permalink:"/docs/geospatial/data/data-lad-registry-polygons"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:2},{value:"Why?",id:"why",level:2},{value:"Body",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Download all spatial data in gejson format",id:"download-all-spatial-data-in-gejson-format",level:3},{value:"Create new schema for council data",id:"create-new-schema-for-council-data",level:3},{value:"Upload bristol council data to new schema in postgis database",id:"upload-bristol-council-data-to-new-schema-in-postgis-database",level:3},{value:"With ogr2ogr",id:"with-ogr2ogr",level:4},{value:"Upload data with ogr2ogr",id:"upload-data-with-ogr2ogr",level:3},{value:"Or ashtun loader?",id:"or-ashtun-loader",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bristol-city-council-geojson"},"Bristol City Council GeoJson"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"what"},"What?"),(0,r.kt)("p",null,"Bristol City Council has quite allot of spatial data available at ?"),(0,r.kt)("h2",{id:"why"},"Why?"),(0,r.kt)("h2",{id:"body"},"Body"),(0,r.kt)("h3",{id:"how"},"How?"),(0,r.kt)("h3",{id:"download-all-spatial-data-in-gejson-format"},"Download all spatial data in gejson format"),(0,r.kt)("h3",{id:"create-new-schema-for-council-data"},"Create new schema for council data"),(0,r.kt)("h3",{id:"upload-bristol-council-data-to-new-schema-in-postgis-database"},"Upload bristol council data to new schema in postgis database"),(0,r.kt)("h4",{id:"with-ogr2ogr"},"With ogr2ogr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ogr2ogr -f "PostgreSQL" PG:"dbname=your-database-name user=your-username password=mypassword" /path/to/jour/GeoJSon/file -nln table-name\n')),(0,r.kt)("h3",{id:"upload-data-with-ogr2ogr"},"Upload data with ogr2ogr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ogr2ogr \\\n-f \"PostgreSQL\" \\\n-a_srs \"EPSG:27700\" \\\n-t_srs \"EPSG:4326\" \\\n-nln parcels \\\n-progress \\\nPG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nLand_Registry_Cadastral_Parcels.gml\n")),(0,r.kt)("h3",{id:"or-ashtun-loader"},"Or ashtun loader?"),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("h2",{id:"references"},"References"))}u.isMDXComponent=!0}}]);