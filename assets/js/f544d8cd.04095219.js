"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[5607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,h=u["".concat(d,".").concat(f)]||u[f]||p[f]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={slug:"live-network-map-for-womad-festival",title:"Live Network Map for WOMAD Festival - Visualizing Status and Coverage",authors:"reubenliengaard",tags:["hello","docusaurus"]},i="Live Network Map for WOMAD Festival - Visualizing Status and Coverage",s={permalink:"/blog/live-network-map-for-womad-festival",editUrl:"https://github.com/reubenliengaard/blog/2019-05-10-live-network-map-for-womad-festival.md",source:"@site/blog/2019-05-10-live-network-map-for-womad-festival.md",title:"Live Network Map for WOMAD Festival - Visualizing Status and Coverage",description:'"We created a web application that requests permission to access the user\'s location data. When the location of a network device needs to be recorded, the user enters the device\'s MAC address into the app. This MAC address is checked against a list of available device MAC addresses in the database. If the MAC address exists in the database, it is marked as "deployed" and the coordinates of the user\'s phone, on which the update was made, are added to the latitude and longitude columns. If the MAC address is entered incorrectly or does not correspond to a device in the database, the app user is notified and asked to enter a different MAC address. Deployed devices are displayed on a map in real-time and can be clicked on to view information about them, such as their device type, MAC address, IP address, or selected for deletion. If a device is selected for deletion, the corresponding value in the "deployment status" column is changed to "false" and the latitude and longitude position values are removed from the latitude and longitude columns."',date:"2019-05-10T00:00:00.000Z",formattedDate:"May 10, 2019",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.375,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"live-network-map-for-womad-festival",title:"Live Network Map for WOMAD Festival - Visualizing Status and Coverage",authors:"reubenliengaard",tags:["hello","docusaurus"]},prevItem:{title:"Tracking Network Hardware Assets at the Isle of Wight Festival",permalink:"/blog/tracking-network-hardware-assets-at-the-isle-of-wight-festival"},nextItem:{title:"Identifying Potential Wildlife Corridors",permalink:"/blog/identifying-potential-wildlife-corridors"}},d={authorsImageUrls:[void 0]},l=[],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'"We created a web application that requests permission to access the user\'s location data. When the location of a network device needs to be recorded, the user enters the device\'s MAC address into the app. This MAC address is checked against a list of available device MAC addresses in the database. If the MAC address exists in the database, it is marked as "deployed" and the coordinates of the user\'s phone, on which the update was made, are added to the latitude and longitude columns. If the MAC address is entered incorrectly or does not correspond to a device in the database, the app user is notified and asked to enter a different MAC address. Deployed devices are displayed on a map in real-time and can be clicked on to view information about them, such as their device type, MAC address, IP address, or selected for deletion. If a device is selected for deletion, the corresponding value in the "deployment status" column is changed to "false" and the latitude and longitude position values are removed from the latitude and longitude columns."'),(0,r.kt)("p",null,"A BASH script was developed to produce fake data for testing the app. One of these scripts, written in Linux shell language, generates a CSV file containing random MAC addresses, asset tags, device models, and locations. This CSV file is then uploaded to the database for testing purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nfor i in {1..100}\ndo\nmac=$(c=0;until [ $c -eq "6" ];do printf ":%02X" $(( $RANDOM % 256 ));let c=c+1;done|sed s/://)\nasset=$(( $RANDOM % 9999 + 1000 ))\nlocation=$(shuf -n 1 locations.txt)\nmodel=$(shuf -n 1 models.txt)\n\n   echo "$asset, $mac, $mod"\n\ndone > dev.csv\n')))}u.isMDXComponent=!0}}]);