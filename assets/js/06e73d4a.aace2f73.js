"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[7135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,h=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:3},i="Ordnance survey lidar data with raster2pgsql",s={unversionedId:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-environment-agency-lidar",id:"geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-environment-agency-lidar",title:"Ordnance survey lidar data with raster2pgsql",description:"Load lidar data with either raster2pgsql",source:"@site/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-environment-agency-lidar.md",sourceDirName:"geospatial-analysis/upload-data-to-postgis-with-linux-shell",slug:"/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-environment-agency-lidar",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-environment-agency-lidar",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Loading Land registry inspire polygons",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons"},next:{title:"Loading Ordnance Survey MasterMap with astun loader",permalink:"/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-mastermap-with-astun-loader"}},o={},p=[{value:"Load lidar data with either raster2pgsql",id:"load-lidar-data-with-either-raster2pgsql",level:3},{value:"Connect to database",id:"connect-to-database",level:3},{value:"Load sattelite data with either raster2pgsql or ogr2ogr",id:"load-sattelite-data-with-either-raster2pgsql-or-ogr2ogr",level:3},{value:"unzip all zips",id:"unzip-all-zips",level:3},{value:"set psql password",id:"set-psql-password",level:2},{value:"raster2pgsql",id:"raster2pgsql",level:3},{value:"Add a spatial index",id:"add-a-spatial-index",level:3},{value:"References",id:"references",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ordnance-survey-lidar-data-with-raster2pgsql"},"Ordnance survey lidar data with raster2pgsql"),(0,n.kt)("h3",{id:"load-lidar-data-with-either-raster2pgsql"},"Load lidar data with either raster2pgsql"),(0,n.kt)("h3",{id:"connect-to-database"},"Connect to database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h 0.0.0.0 -p 5432 -U postgres  -d postgres\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION postgis_raster;\n")),(0,n.kt)("h3",{id:"load-sattelite-data-with-either-raster2pgsql-or-ogr2ogr"},"Load sattelite data with either raster2pgsql or ogr2ogr"),(0,n.kt)("h3",{id:"unzip-all-zips"},"unzip all zips"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.zip" -exec unzip {} \\;\n')),(0,n.kt)("h2",{id:"set-psql-password"},"set psql password"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export PGPASSWORD=postgres\n")),(0,n.kt)("h3",{id:"raster2pgsql"},"raster2pgsql"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"raster2pgsql -s 27700 -I -C -M -F  *.tif public.bristol_lidar_dtm_1m | psql -h 0.0.0.0 -p 5432 -U postgres --password postgres\n")),(0,n.kt)("h3",{id:"add-a-spatial-index"},"Add a spatial index"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX bristol_lidar_dtm_gist ON bristol_lidar_dtm_1m USING GIST (ST_ConvexHull(rast));\n")),(0,n.kt)("h2",{id:"references"},"References"))}u.isMDXComponent=!0}}]);