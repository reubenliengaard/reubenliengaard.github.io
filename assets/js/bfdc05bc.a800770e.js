"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[7890],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>y});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(d.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),g=o,y=p["".concat(d,".").concat(g)]||p[g]||u[g]||n;return t?r.createElement(y,l(l({ref:a},s),{},{components:t})):r.createElement(y,l({ref:a},s))}));function y(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=g;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5781:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const n={sidebar_position:1},l="Upload Ordnance Survey MasterMap Topography",i={unversionedId:"loading-data/upload-ordnance-survey-mastermap-topography",id:"loading-data/upload-ordnance-survey-mastermap-topography",title:"Upload Ordnance Survey MasterMap Topography",description:"setup loader in pod?",source:"@site/docs/loading-data/upload-ordnance-survey-mastermap-topography.md",sourceDirName:"loading-data",slug:"/loading-data/upload-ordnance-survey-mastermap-topography",permalink:"/docs/loading-data/upload-ordnance-survey-mastermap-topography",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Loading Data",permalink:"/docs/category/loading-data"},next:{title:"Upload Bristol City Council Data",permalink:"/docs/loading-data/upload-bristol-city-council-data"}},d={},c=[{value:"install ashtun loader",id:"install-ashtun-loader",level:2},{value:"Download loader",id:"download-loader",level:3},{value:"change directory",id:"change-directory",level:2},{value:"install dependancies",id:"install-dependancies",level:3},{value:"make directories",id:"make-directories",level:3},{value:"prepare data",id:"prepare-data",level:2},{value:"Download MasterMap data",id:"download-mastermap-data",level:3},{value:"Unzip mastermap data to source directory",id:"unzip-mastermap-data-to-source-directory",level:3},{value:"Remove manifest text file in source directory",id:"remove-manifest-text-file-in-source-directory",level:3},{value:"edit loader configuration",id:"edit-loader-configuration",level:2},{value:"backup original",id:"backup-original",level:3},{value:"replace line 8 source directory",id:"replace-line-8-source-directory",level:3},{value:"replace line 13 temp directory",id:"replace-line-13-temp-directory",level:3},{value:"replace line 17 output directory",id:"replace-line-17-output-directory",level:3},{value:"change line 29 database parameters",id:"change-line-29-database-parameters",level:3},{value:"run ashtun loader",id:"run-ashtun-loader",level:2},{value:"change directory",id:"change-directory-1",level:3},{value:"run",id:"run",level:3},{value:"qgis style",id:"qgis-style",level:2},{value:"launch qgis",id:"launch-qgis",level:3},{value:"Create new project",id:"create-new-project",level:3},{value:"Set default CRS to OSGB",id:"set-default-crs-to-osgb",level:3},{value:"Connect to PostGIS",id:"connect-to-postgis",level:3},{value:"connect to postgres",id:"connect-to-postgres",level:3},{value:"add each layer to project",id:"add-each-layer-to-project",level:3},{value:"download styles",id:"download-styles",level:3},{value:"attach corrosponding styles to each layer",id:"attach-corrosponding-styles-to-each-layer",level:3},{value:"copy symbols",id:"copy-symbols",level:3},{value:"copy font",id:"copy-font",level:3},{value:"make qgis plugins work",id:"make-qgis-plugins-work",level:3}],s={toc:c};function p(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload-ordnance-survey-mastermap-topography"},"Upload Ordnance Survey MasterMap Topography"),(0,o.kt)("p",null,"setup loader in pod?"),(0,o.kt)("h2",{id:"install-ashtun-loader"},"install ashtun loader"),(0,o.kt)("h3",{id:"download-loader"},"Download loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/AstunTechnology/Loader.git\n\n")),(0,o.kt)("h2",{id:"change-directory"},"change directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd Loader\n")),(0,o.kt)("h3",{id:"install-dependancies"},"install dependancies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install gdal\n")),(0,o.kt)("h3",{id:"make-directories"},"make directories"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir source temporary output\n")),(0,o.kt)("h2",{id:"prepare-data"},"prepare data"),(0,o.kt)("h3",{id:"download-mastermap-data"},"Download MasterMap data"),(0,o.kt)("p",null,"wget ???"),(0,o.kt)("h3",{id:"unzip-mastermap-data-to-source-directory"},"Unzip mastermap data to source directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"unzip OS_order_6148593_OSMasterMapTopography5km_2022-12-22_1.zip -d source\n")),(0,o.kt)("h3",{id:"remove-manifest-text-file-in-source-directory"},"Remove manifest text file in source directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm source/manifest.txt\n")),(0,o.kt)("h2",{id:"edit-loader-configuration"},"edit loader configuration"),(0,o.kt)("h3",{id:"backup-original"},"backup original"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp python/loader.config python/loader.config.bak\n")),(0,o.kt)("h3",{id:"replace-line-8-source-directory"},"replace line 8 source directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i '8s/.*/src_dir=\\$HOME\\/Loader\\/source/' python/loader.config\n")),(0,o.kt)("h3",{id:"replace-line-13-temp-directory"},"replace line 13 temp directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i '13s/.*/tmp_dir=\\$HOME\\/Loader\\/temporary/' python/loader.config\n")),(0,o.kt)("h3",{id:"replace-line-17-output-directory"},"replace line 17 output directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i '17s/.*/out_dir=\\$HOME\\/Loader\\/output/' python/loader.config\n")),(0,o.kt)("h3",{id:"change-line-29-database-parameters"},"change line 29 database parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i '29s/.*/ogr_cmd=ogr2ogr --config GML_EXPOSE_FID NO -append -skipfailures -f PostgreSQL PG:\\x27dbname=postgres active_schema=public host=0\\.0\\.0\\.0 user=postgres password=postgres\\x27 \\$file_path/' python/loader.config\n")),(0,o.kt)("h2",{id:"run-ashtun-loader"},"run ashtun loader"),(0,o.kt)("h3",{id:"change-directory-1"},"change directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd python\n")),(0,o.kt)("h3",{id:"run"},"run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python loader.py loader.config\n")),(0,o.kt)("h2",{id:"qgis-style"},"qgis style"),(0,o.kt)("h3",{id:"launch-qgis"},"launch qgis"),(0,o.kt)("p",null,"super, then type qgis, then enter"),(0,o.kt)("h3",{id:"create-new-project"},"Create new project"),(0,o.kt)("h3",{id:"set-default-crs-to-osgb"},"Set default CRS to OSGB"),(0,o.kt)("h3",{id:"connect-to-postgis"},"Connect to PostGIS"),(0,o.kt)("h3",{id:"connect-to-postgres"},"connect to postgres"),(0,o.kt)("h3",{id:"add-each-layer-to-project"},"add each layer to project"),(0,o.kt)("h3",{id:"download-styles"},"download styles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/OrdnanceSurvey/OS-Master-Map-Topography.git\n")),(0,o.kt)("h3",{id:"attach-corrosponding-styles-to-each-layer"},"attach corrosponding styles to each layer"),(0,o.kt)("h3",{id:"copy-symbols"},"copy symbols"),(0,o.kt)("p",null,"cp -R osmmsymbol directory to svg directory"),(0,o.kt)("h3",{id:"copy-font"},"copy font"),(0,o.kt)("p",null,"cp font to font directory"),(0,o.kt)("h3",{id:"make-qgis-plugins-work"},"make qgis plugins work"))}p.isMDXComponent=!0}}]);