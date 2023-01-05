"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[3508],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(a),c=s,m=g["".concat(o,".").concat(c)]||g[c]||u[c]||l;return a?r.createElement(m,n(n({ref:t},d),{},{components:a})):r.createElement(m,n({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,n=new Array(l);n[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[g]="string"==typeof e?e:s,n[1]=i;for(var p=2;p<l;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),s=(a(7294),a(3905));const l={sidebar_position:5},n="Ordnance survey satellite imagery with raster2pgsql",i={unversionedId:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-satellite-imagery",id:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-satellite-imagery",title:"Ordnance survey satellite imagery with raster2pgsql",description:"Load sattelite data with either raster2pgsql or ogr2ogr",source:"@site/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-satellite-imagery.md",sourceDirName:"geospatial-analysis/upload-data-to-postgis-with-linux-shell",slug:"/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-satellite-imagery",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-satellite-imagery",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Loading Ordnance Survey MasterMap with astun loader",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-mastermap-with-astun-loader"},next:{title:"PostGIS Data Management and Queries",permalink:"/docs/category/postgis-data-management-and-queries"}},o={},p=[{value:"Load sattelite data with either raster2pgsql or ogr2ogr",id:"load-sattelite-data-with-either-raster2pgsql-or-ogr2ogr",level:3},{value:"Connect to database",id:"connect-to-database",level:3},{value:"Load sattelite data with either raster2pgsql or ogr2ogr",id:"load-sattelite-data-with-either-raster2pgsql-or-ogr2ogr-1",level:3},{value:"unzip all zips",id:"unzip-all-zips",level:3},{value:"set psql password",id:"set-psql-password",level:2},{value:"raster2pgsql",id:"raster2pgsql",level:3},{value:"Add a spatial index",id:"add-a-spatial-index",level:3},{value:"References",id:"references",level:2}],d={toc:p};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ordnance-survey-satellite-imagery-with-raster2pgsql"},"Ordnance survey satellite imagery with raster2pgsql"),(0,s.kt)("h3",{id:"load-sattelite-data-with-either-raster2pgsql-or-ogr2ogr"},"Load sattelite data with either raster2pgsql or ogr2ogr"),(0,s.kt)("h3",{id:"connect-to-database"},"Connect to database"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h 0.0.0.0 -p 5432 -U postgres  -d postgres\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION postgis_raster;\n")),(0,s.kt)("h3",{id:"load-sattelite-data-with-either-raster2pgsql-or-ogr2ogr-1"},"Load sattelite data with either raster2pgsql or ogr2ogr"),(0,s.kt)("h3",{id:"unzip-all-zips"},"unzip all zips"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.zip" -exec unzip {} \\;\n')),(0,s.kt)("h2",{id:"set-psql-password"},"set psql password"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export PGPASSWORD=postgres\n")),(0,s.kt)("h3",{id:"raster2pgsql"},"raster2pgsql"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"raster2pgsql -s 27700 -I -C -M -F  *.JPG public.bristol_osmm_satellite_imagery | psql -h 0.0.0.0 -p 5432 -U postgres \n")),(0,s.kt)("h3",{id:"add-a-spatial-index"},"Add a spatial index"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX bristol_osmm_satellite_imagery__gist ON bristol_osmm_satellite_imagery_ USING GIST (ST_ConvexHull(rast));\n")),(0,s.kt)("h2",{id:"references"},"References"))}g.isMDXComponent=!0}}]);