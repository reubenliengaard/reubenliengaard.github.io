"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4809],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(d.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,m=u["".concat(d,".").concat(g)]||u[g]||p[g]||n;return t?r.createElement(m,l(l({ref:a},c),{},{components:t})):r.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=g;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1592:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const n={sidebar_position:2},l="Upload Bristol City Council Data",i={unversionedId:"loading-data/upload-bristol-city-council-data",id:"loading-data/upload-bristol-city-council-data",title:"Upload Bristol City Council Data",description:"download all spatial data in gejson format",source:"@site/docs-spatial/loading-data/upload-bristol-city-council-data.md",sourceDirName:"loading-data",slug:"/loading-data/upload-bristol-city-council-data",permalink:"/docs-spatial/loading-data/upload-bristol-city-council-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Upload Ordnance Survey MasterMap Topography",permalink:"/docs-spatial/loading-data/upload-ordnance-survey-mastermap-topography"},next:{title:"Upload Ordnance Survey Satellite Imagery",permalink:"/docs-spatial/loading-data/upload-ordnance-survey-satellite-imagery"}},d={},s=[{value:"download all spatial data in gejson format",id:"download-all-spatial-data-in-gejson-format",level:2},{value:"create new schema for council data",id:"create-new-schema-for-council-data",level:2},{value:"upload bristol council data to new schema in postgis database",id:"upload-bristol-council-data-to-new-schema-in-postgis-database",level:2},{value:"with ogr2ogr",id:"with-ogr2ogr",level:3},{value:"upload data with ogr2ogr",id:"upload-data-with-ogr2ogr",level:2},{value:"or ashtun loader?",id:"or-ashtun-loader",level:3}],c={toc:s};function u(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload-bristol-city-council-data"},"Upload Bristol City Council Data"),(0,o.kt)("h2",{id:"download-all-spatial-data-in-gejson-format"},"download all spatial data in gejson format"),(0,o.kt)("h2",{id:"create-new-schema-for-council-data"},"create new schema for council data"),(0,o.kt)("h2",{id:"upload-bristol-council-data-to-new-schema-in-postgis-database"},"upload bristol council data to new schema in postgis database"),(0,o.kt)("h3",{id:"with-ogr2ogr"},"with ogr2ogr"),(0,o.kt)("p",null,'ogr2ogr -f "PostgreSQL" PG:"dbname=your-database-name user=your-username password=mypassword" /path/to/jour/GeoJSon/file -nln table-name'),(0,o.kt)("h2",{id:"upload-data-with-ogr2ogr"},"upload data with ogr2ogr"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ogr2ogr \\\n-f \"PostgreSQL\" \\\n-a_srs \"EPSG:27700\" \\\n-t_srs \"EPSG:4326\" \\\n-nln parcels \\\n-progress \\\nPG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nLand_Registry_Cadastral_Parcels.gml\n")),(0,o.kt)("h3",{id:"or-ashtun-loader"},"or ashtun loader?"))}u.isMDXComponent=!0}}]);