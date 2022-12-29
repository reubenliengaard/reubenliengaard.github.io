"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[9375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="PSQL",l={unversionedId:"spatial-software/software-psql",id:"spatial-software/software-psql",title:"PSQL",description:"Introduction",source:"@site/docs-spatial/spatial-software/software-psql.md",sourceDirName:"spatial-software",slug:"/spatial-software/software-psql",permalink:"/docs-spatial/spatial-software/software-psql",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"pgAdmin4",permalink:"/docs-spatial/spatial-software/software-pgadmin4"},next:{title:"Qgis",permalink:"/docs-spatial/spatial-software/software-qgis"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Why?",id:"why",level:3},{value:"Body",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Connect to database using psql",id:"connect-to-database-using-psql",level:3},{value:"Display data",id:"display-data",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"psql"},"PSQL"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what"},"What?"),(0,a.kt)("p",null,"Database Front-End "),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("h2",{id:"body"},"Body"),(0,a.kt)("h3",{id:"how"},"How?"),(0,a.kt)("h3",{id:"connect-to-database-using-psql"},"Connect to database using psql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h 0.0.0.0 -p 5432 -d postgres -U postgres\n")),(0,a.kt)("h3",{id:"display-data"},"Display data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from public.topographicpoint;\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("h2",{id:"references"},"References"))}u.isMDXComponent=!0}}]);