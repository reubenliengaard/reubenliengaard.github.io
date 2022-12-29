"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[6432],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,g=u["".concat(p,".").concat(y)]||u[y]||d[y]||n;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:5},i="House Price Paid",l={unversionedId:"spatial/spatial-queries/query-house-price-paid",id:"spatial/spatial-queries/query-house-price-paid",title:"House Price Paid",description:"Introduction",source:"@site/docs/spatial/spatial-queries/query-house-price-paid.md",sourceDirName:"spatial/spatial-queries",slug:"/spatial/spatial-queries/query-house-price-paid",permalink:"/docs/spatial/spatial-queries/query-house-price-paid",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Heat Loss",permalink:"/docs/spatial/spatial-queries/query-heat-loss"},next:{title:"Sunny Spots",permalink:"/docs/spatial/spatial-queries/query-least-cost-path"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Why?",id:"why",level:3},{value:"Body",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Connect to server",id:"connect-to-server",level:3},{value:"Create priced paid polygons for every point",id:"create-priced-paid-polygons-for-every-point",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons",level:3},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file",level:3},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis",level:3},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"house-price-paid"},"House Price Paid"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what"},"What?"),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("h2",{id:"body"},"Body"),(0,a.kt)("h3",{id:"how"},"How?"),(0,a.kt)("h3",{id:"connect-to-server"},"Connect to server"),(0,a.kt)("p",null,"Starting a psql instance on the client in order to interact with the database on the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h 192.168.88.10 -U postgres gis\n")),(0,a.kt)("h3",{id:"create-priced-paid-polygons-for-every-point"},"Create priced paid polygons for every point"),(0,a.kt)("p",null,"Using the point data already present in the database from the previous project to create a duplicate\npolygon from the parish geometry table for every point each polygon contains, and appending the point\nprice paid to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"parish.geom,\npoints.pounds\nINTO pp_parish\nFROM\nparish INNER JOIN points\nON st_contains(parish.geom, points.geom);\n")),(0,a.kt)("h3",{id:"find-avarage-point-value-for-duplicate-polygons"},"Find avarage point value for duplicate polygons"),(0,a.kt)("p",null,"As in the previous project, avaraging the values of the duplicate polygons back one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geom,avg(pounds)\nINTO avg_pp_parish\nFROM pp_parish\nGROUP BY geom;\n")),(0,a.kt)("h3",{id:"import-new-price-paid-polygons-to-file"},"Import new price paid polygons to file"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish")),(0,a.kt)("h3",{id:"add-price-paid-polygons-layer-to-qgis"},"Add price paid polygons layer to Qgis"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\nVector Dataset(s): .shp")),(0,a.kt)("h3",{id:"colour-polygons-by-attribute-field"},"Colour polygons by attribute field"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Right click: Layer > Properties\nSymbology > Single Symbol: Gradiated\nVaule: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("h2",{id:"references"},"References"))}u.isMDXComponent=!0}}]);