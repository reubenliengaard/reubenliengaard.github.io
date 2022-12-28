"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[3503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,g=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Query House Price Paid",p={unversionedId:"database-queries/query-house-price-paid",id:"database-queries/query-house-price-paid",title:"Query House Price Paid",description:"Connect to server",source:"@site/docs/database-queries/query-house-price-paid.md",sourceDirName:"database-queries",slug:"/database-queries/query-house-price-paid",permalink:"/docs/database-queries/query-house-price-paid",draft:!1,editUrl:"https://github.com/reubenliengaard/docs/database-queries/query-house-price-paid.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Spatial Database Queries",permalink:"/docs/category/spatial-database-queries"},next:{title:"Query AONB Permitted Development",permalink:"/docs/database-queries/query-aonb-permitted-development"}},l={},s=[{value:"Connect to server",id:"connect-to-server",level:2},{value:"SELECT",id:"select",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons",level:2},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file",level:2},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis",level:2},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"query-house-price-paid"},"Query House Price Paid"),(0,n.kt)("h2",{id:"connect-to-server"},"Connect to server"),(0,n.kt)("p",null,"Starting a psql instance on the client in order to interact with the database on the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"psql -h 192.168.88.10 -U postgres gis\n")),(0,n.kt)("h1",{id:"create-priced-paid-polygons-for-every-point"},"Create priced paid polygons for every point"),(0,n.kt)("p",null,"Using the point data already present in the database from the previous project to create a duplicate\npolygon from the parish geometry table for every point each polygon contains, and appending the point\nprice paid to it."),(0,n.kt)("h3",{id:"select"},"SELECT"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"parish.geom,\npoints.pounds\nINTO pp_parish\nFROM\nparish INNER JOIN points\nON st_contains(parish.geom, points.geom);\n")),(0,n.kt)("h2",{id:"find-avarage-point-value-for-duplicate-polygons"},"Find avarage point value for duplicate polygons"),(0,n.kt)("p",null,"As in the previous project, avaraging the values of the duplicate polygons back one."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT geom,avg(pounds)\nINTO avg_pp_parish\nFROM pp_parish\nGROUP BY geom;\n")),(0,n.kt)("h2",{id:"import-new-price-paid-polygons-to-file"},"Import new price paid polygons to file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish\n")),(0,n.kt)("h2",{id:"add-price-paid-polygons-layer-to-qgis"},"Add price paid polygons layer to Qgis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\nVector Dataset(s): .shp\n")),(0,n.kt)("h2",{id:"colour-polygons-by-attribute-field"},"Colour polygons by attribute field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Right click: Layer > Properties\nSymbology > Single Symbol: Gradiated\nVaule: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval\n")))}u.isMDXComponent=!0}}]);