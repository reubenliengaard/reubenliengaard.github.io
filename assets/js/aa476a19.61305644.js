"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[81],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"house-price-parcels",title:"House prices paid parcels",authors:"reubenliengaard",tags:["hello","docusaurus"]},i="House prices paid by parish",l={permalink:"/blog/house-price-parcels",editUrl:"https://github.com/reubenliengaard/blog/2021-07-02-house-prices-paid-by-parcels.md",source:"@site/blog/2021-07-02-house-prices-paid-by-parcels.md",title:"House prices paid parcels",description:"Prepare prices data",date:"2021-07-02T00:00:00.000Z",formattedDate:"July 2, 2021",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"house-price-parcels",title:"House prices paid parcels",authors:"reubenliengaard",tags:["hello","docusaurus"]},prevItem:{title:"Modeling a truss connection",permalink:"/blog/modeling-a-truss-connection"},nextItem:{title:"Royal Windsor Horse Show  wireless heatmap",permalink:"/blog/windsor-horse-show"}},s={authorsImageUrls:[void 0]},c=[{value:"Prepare prices data",id:"prepare-prices-data",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prepare-prices-data"},"Prepare prices data"),(0,n.kt)("p",null,'The team combined three separate files containing price paid data into a single file, cleaned and filtered the data by removing quotes, selecting only rows with "GL" followed by a number, printing out only certain columns, adding column names, and deleting rows with null values. They used ogr2ogr to convert a file with cadastral parcel information into a PostgreSQL file, changed the projection from OSGB to WGS84, and imported it into a database. They started a psql session and created empty tables with certain columns in the database. They used the \\copy command and SQL JOIN to combine the price and coordinates data based on their shared postcodes, added a column for geometry data, used the latitude and longitude data to create points, and calculated the average value for each of the duplicate polygons. They used QGIS to export the table from the database and modified the layer properties for visual appeal.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:r(6317).Z,width:"1534",height:"787"})),(0,n.kt)("p",null,"It appears that some of the postal codes are not being properly associated with the intended polygons. For the next project, we will use a set of polygons (parishes) with lower resolution to see if this improves the accuracy of the data."))}u.isMDXComponent=!0},6317:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/price-paid-parcel-b58fdcacf1b5265bca273e23e59ebb2e.jpg"}}]);