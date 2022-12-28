"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[3879],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(a),g=n,y=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(y,i(i({ref:t},s),{},{components:a})):r.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4},i="Upload Land Registry Price Paid Data",p={unversionedId:"loading-data/upload-land-registry-price-paid",id:"loading-data/upload-land-registry-price-paid",title:"Upload Land Registry Price Paid Data",description:"Download data from the land registry",source:"@site/docs-spatial/loading-data/upload-land-registry-price-paid.md",sourceDirName:"loading-data",slug:"/loading-data/upload-land-registry-price-paid",permalink:"/docs-spatial/loading-data/upload-land-registry-price-paid",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Upload Ordnance Survey Satellite Imagery",permalink:"/docs-spatial/loading-data/upload-ordnance-survey-satellite-imagery"},next:{title:"Upload Land Registry Polygons",permalink:"/docs-spatial/loading-data/upload-lad-registry-polygons"}},l={},d=[{value:"Download data from the land registry",id:"download-data-from-the-land-registry",level:2},{value:"Option 1: Prepare  data with BASH",id:"option-1-prepare--data-with-bash",level:2},{value:"Prepare prices data",id:"prepare-prices-data",level:3},{value:"Prepare location data",id:"prepare-location-data",level:3},{value:"Push to Database",id:"push-to-database",level:3},{value:"Option 2: Upload raw CSV files to Database, and restructure with SQL queries",id:"option-2-upload-raw-csv-files-to-database-and-restructure-with-sql-queries",level:2}],s={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upload-land-registry-price-paid-data"},"Upload Land Registry Price Paid Data"),(0,n.kt)("h2",{id:"download-data-from-the-land-registry"},"Download data from the land registry"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-\n1.amazonaws.com/pp-2020.csv \\\n&& wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-\n1.amazonaws.com/pp-2019.csv \\\n&& wget http://prod.publicdata.landregistry.gov.uk.s3-website-eu-west-\n1.amazonaws.com/pp-2018.csv \\\n&& wget https://www.getthedata.com/downloads/open_postcode_geo.csv.zip \\\n&& && unzip open_postcode_geo.csv \\\n")),(0,n.kt)("h2",{id:"option-1-prepare--data-with-bash"},"Option 1: Prepare  data with BASH"),(0,n.kt)("h3",{id:"prepare-prices-data"},"Prepare prices data"),(0,n.kt)("p",null,"Concatenating the three price paid files together into one file, removing unnecessary field quotes,\nselecting only rows which contain the string GL followed by a number between zero and nine, then printing\nout only columns four and two, adding column names, then deleting rows containing null values."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d \'"\' > pp_3year.csv \\\n&& awk -F"," \'/GL+[0-9]/ { print $4 "," $2}\' pp_3year.csv > gl_p_3.csv \\\n&& { echo "postcode, pounds"; cat gl_p_3.csv; } > prices.csv \\\n&& sed -i \'/\\\\N/d\' prices.csv\n')),(0,n.kt)("h3",{id:"prepare-location-data"},"Prepare location data"),(0,n.kt)("p",null,"Applying the same process as for the price data, minus the concatenation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ awk -F"," \'/GL+[0-9]/ { print $1 "," $8 "," $9}\' open_postcode_geo.csv >\ngl_l.csv \\\n&& { echo "postcode, latitude, longitude"; cat gl_l.csv; } >\ncoordinates.csv \\\n&& sed -i \'/\\\\N/d\' coordinates.csv\n')),(0,n.kt)("h3",{id:"push-to-database"},"Push to Database"),(0,n.kt)("p",null,"???"),(0,n.kt)("h2",{id:"option-2-upload-raw-csv-files-to-database-and-restructure-with-sql-queries"},"Option 2: Upload raw CSV files to Database, and restructure with SQL queries"))}c.isMDXComponent=!0}}]);