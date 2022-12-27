"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4442],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),y=o,g=c["".concat(l,".").concat(y)]||c[y]||d[y]||a;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},353:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},i="Query House Price Paid",p={unversionedId:"query/query-house-price-paid",id:"query/query-house-price-paid",title:"Query House Price Paid",description:"Connect to server",source:"@site/docs/3-query/query-house-price-paid.md",sourceDirName:"3-query",slug:"/query/query-house-price-paid",permalink:"/docs/query/query-house-price-paid",draft:!1,editUrl:"https://github.com/reubenliengaard/docs/3-query/query-house-price-paid.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial 3 - Query",permalink:"/docs/category/tutorial-3---query"},next:{title:"Query AONB Permitted Development",permalink:"/docs/query/query-aonb-permitted-development"}},l={},s=[{value:"Connect to server",id:"connect-to-server",level:2},{value:"SELECT",id:"select",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons",level:2},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file",level:2},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis",level:2},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field",level:2}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query-house-price-paid"},"Query House Price Paid"),(0,o.kt)("h2",{id:"connect-to-server"},"Connect to server"),(0,o.kt)("p",null,"Starting a psql instance on the client in order to interact with the database on the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"psql -h 192.168.88.10 -U postgres gis\n")),(0,o.kt)("h1",{id:"create-priced-paid-polygons-for-every-point"},"Create priced paid polygons for every point"),(0,o.kt)("p",null,"Using the point data already present in the database from the previous project to create a duplicate\npolygon from the parish geometry table for every point each polygon contains, and appending the point\nprice paid to it."),(0,o.kt)("h3",{id:"select"},"SELECT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"parish.geom,\npoints.pounds\nINTO pp_parish\nFROM\nparish INNER JOIN points\nON st_contains(parish.geom, points.geom);\n")),(0,o.kt)("h2",{id:"find-avarage-point-value-for-duplicate-polygons"},"Find avarage point value for duplicate polygons"),(0,o.kt)("p",null,"As in the previous project, avaraging the values of the duplicate polygons back one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT geom,avg(pounds)\nINTO avg_pp_parish\nFROM pp_parish\nGROUP BY geom;\n")),(0,o.kt)("h2",{id:"import-new-price-paid-polygons-to-file"},"Import new price paid polygons to file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish\n")),(0,o.kt)("h2",{id:"add-price-paid-polygons-layer-to-qgis"},"Add price paid polygons layer to Qgis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\nVector Dataset(s): .shp\n")),(0,o.kt)("h2",{id:"colour-polygons-by-attribute-field"},"Colour polygons by attribute field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Right click: Layer > Properties\nSymbology > Single Symbol: Gradiated\nVaule: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval\n")))}c.isMDXComponent=!0}}]);