"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[81],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={slug:"house-price-parcels",title:"House prices paid parcels",authors:"reubenliengaard",tags:["hello","docusaurus"]},i="House prices paid by parish",l={permalink:"/blog/house-price-parcels",editUrl:"https://github.com/reubenliengaard/blog/2021-07-02-house-prices-paid-by-parcels.md",source:"@site/blog/2021-07-02-house-prices-paid-by-parcels.md",title:"House prices paid parcels",description:"Prepare prices data",date:"2021-07-02T00:00:00.000Z",formattedDate:"July 2, 2021",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.915,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"house-price-parcels",title:"House prices paid parcels",authors:"reubenliengaard",tags:["hello","docusaurus"]},prevItem:{title:"Modeling a truss connection",permalink:"/blog/modeling-a-truss-connection"},nextItem:{title:"Royal Windsor Horse Show  wireless heatmap",permalink:"/blog/windsor-horse-show"}},s={authorsImageUrls:[void 0]},c=[{value:"Prepare prices data",id:"prepare-prices-data",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prepare-prices-data"},"Prepare prices data"),(0,n.kt)("p",null,'We combined three separate files containing price paid data into a single file, removed unnecessary quotes, selected only rows that contained the string "GL" followed by a number between 0 and 9, and printed out only the fourth and second columns. We also added column names and deleted any rows that contained null values.'),(0,n.kt)("p",null,"We used the same process to clean and filter the data as we did for the price data, except we did not need to concatenate multiple files together."),(0,n.kt)("p",null,"We used ogr2ogr to convert a file containing cadastral parcel information (in GML format) into a PostgreSQL file, changed the projection of the data from OSGB to WGS84, and imported it into a database."),(0,n.kt)("p",null,"We started a psql session on the client computer to allow us to communicate with the database that is stored on the server."),(0,n.kt)("p",null,"We created a new empty table with a primary key column of type serial (which will automatically increment) and two additional columns: one for text data (postcodes) and one for integer data (pounds)."),(0,n.kt)("p",null,"We created a similar empty table for storing location data, but with columns for latitude and longitude rather than a column for pounds."),(0,n.kt)("p",null,"We used the \\copy command in psql to import the price data into the new price column in the database."),(0,n.kt)("p",null,"We repeat the process for the coordinates data."),(0,n.kt)("p",null,"We used the JOIN command in SQL to create a new table that combines the prices and coordinates data based on their shared postcodes."),(0,n.kt)("p",null,"We added a new column to the table to store geometry data."),(0,n.kt)("p",null,"We used the data in the latitude and longitude columns to create points and stored them in the geometry column."),(0,n.kt)("p",null,"For each point within a polygon, we created a new polygon and added the corresponding price paid for the point to it."),(0,n.kt)("p",null,"We calculated the average value for each of the duplicate polygons."),(0,n.kt)("p",null,"We used QGIS to export the table from the database."),(0,n.kt)("p",null,"We modified the layer properties in order to create a visually appealing effect."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(6317).Z,width:"1534",height:"787"})),(0,n.kt)("p",null,"It appears that some of the postal codes are not being properly associated with the intended polygons. For the next project, we will use a set of polygons (parishes) with lower resolution to see if this improves the accuracy of the data."))}d.isMDXComponent=!0},6317:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/price-paid-parcel-b58fdcacf1b5265bca273e23e59ebb2e.jpg"}}]);