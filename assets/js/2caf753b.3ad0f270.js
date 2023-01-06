"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[1924],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),l=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(a),g=n,p=c["".concat(d,".").concat(g)]||c[g]||h[g]||r;return a?i.createElement(p,s(s({ref:t},u),{},{components:a})):i.createElement(p,s({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=a(7462),n=(a(7294),a(3905));const r={slug:"creating-3d-buildings-from-mastermap-with-qgis",title:"Creating 3d Buildings From Mastermap With Qgis",authors:"reubenliengaard",tags:["hola","docusaurus"]},s="Creating 3d Buildings From Mastermap With Qgis",o={permalink:"/blog/creating-3d-buildings-from-mastermap-with-qgis",editUrl:"https://github.com/reubenliengaard/blog/2021-02-02-creating-3d-buildings-from-mastermap-with-qgis.md",source:"@site/blog/2021-02-02-creating-3d-buildings-from-mastermap-with-qgis.md",title:"Creating 3d Buildings From Mastermap With Qgis",description:"We can create 3D models of buildings using data from the Ordnance Survey Mastermap Topography Layer, the Building Height Attribute (BHA), and the Environment Agency LiDAR Digital Terrain Model (DTM). The BHA data provides information on the heights of buildings and is available in File Geodatabase format from Digimap. We can visualize the BHA data in 3D using the Qgis2ThreeJS plugin in QGIS. To do this, we must first install the plugin and load the BHA data, DTM data, and any additional desired layers into the QGIS project. We can then use the Qgis2ThreeJS plugin to style the BHA data and create a 3D model by specifying the BHA data and the desired height attribute for extrusion. The resulting 3D model can be saved as an HTML file and viewed in a web browser. When combined with the LiDAR DTM, this data provides a fairly accurate 3D model that can be opened in Grasshopper, a visual programming language and environment that runs within the Rhinoceros 3D CAD application. With the addition of the Ladybug plugin, we can use this 3D model to perform detailed analyses of climate data and create customized, interactive visualizations for environmentally-informed design, such as sunlight studies.",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.14,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"creating-3d-buildings-from-mastermap-with-qgis",title:"Creating 3d Buildings From Mastermap With Qgis",authors:"reubenliengaard",tags:["hola","docusaurus"]},prevItem:{title:"Truss Connection Node Modeling",permalink:"/blog/truss-connection-node-modeling"},nextItem:{title:"Gifford Circus Cyr Wheel Performances - A Custom Modular Circular Stage",permalink:"/blog/gifford-circus-cry-wheel-performances"}},d={authorsImageUrls:[void 0]},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We can create 3D models of buildings using data from the Ordnance Survey Mastermap Topography Layer, the Building Height Attribute (BHA), and the Environment Agency LiDAR Digital Terrain Model (DTM). The BHA data provides information on the heights of buildings and is available in File Geodatabase format from Digimap. We can visualize the BHA data in 3D using the Qgis2ThreeJS plugin in QGIS. To do this, we must first install the plugin and load the BHA data, DTM data, and any additional desired layers into the QGIS project. We can then use the Qgis2ThreeJS plugin to style the BHA data and create a 3D model by specifying the BHA data and the desired height attribute for extrusion. The resulting 3D model can be saved as an HTML file and viewed in a web browser. When combined with the LiDAR DTM, this data provides a fairly accurate 3D model that can be opened in Grasshopper, a visual programming language and environment that runs within the Rhinoceros 3D CAD application. With the addition of the Ladybug plugin, we can use this 3D model to perform detailed analyses of climate data and create customized, interactive visualizations for environmentally-informed design, such as sunlight studies."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(6309).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(4473).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(7467).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(1012).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(1409).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(7436).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(9233).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(4723).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(8947).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(9362).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(6186).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(9005).Z,width:"1288",height:"605"})),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://digimap.edina.ac.uk/help/gis/qgis/qgis_bha/"},"qgis bha")))}c.isMDXComponent=!0},6309:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-1-43f5d793112b5e7d965dd45b486ad82e.png"},9362:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-10-dfcbbad19705932c13a95718ea657cb5.png"},6186:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-11-60332f3067091585939f287871665169.png"},9005:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-12-767c10f258be4ccea3fd505a9fe69224.png"},4473:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-2-8cbb5ba2a17084da185d97d130f94089.png"},7467:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-3-02b772b8c9905ff1d1ad5f175ada8c7f.png"},1012:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-4-ec53deac98415e65bcd3d9a83ce662de.png"},1409:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-5-0837bbfde76f3cace5346b723ccf3f01.png"},7436:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-6-8391a5b4741d6b85cb51feabd31d5d9e.png"},9233:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-7-5dba3500b25db255c1561d822aaddb58.png"},4723:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-8-0df5a16690d814e3846e2204c1160f06.png"},8947:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-9-337f5cad895cc88b4703da28a5e97070.png"}}]);