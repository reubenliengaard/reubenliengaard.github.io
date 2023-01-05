"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[9080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"provisioning-cisco-cloud-wireless-controller",title:"Provisioning Cisco Cloud Wireless Controller",authors:"reubenliengaard",tags:["hola","docusaurus"]},i="Provisioning Cisco Cloud Wireless Controller",s={permalink:"/blog/provisioning-cisco-cloud-wireless-controller",editUrl:"https://github.com/reubenliengaard/blog/2021-09-06-provisioning-cisco-cloud-wireless-controller.md",source:"@site/blog/2021-09-06-provisioning-cisco-cloud-wireless-controller.md",title:"Provisioning Cisco Cloud Wireless Controller",description:"We installed and configured the Cisco Catalyst c9800-CL wireless controller using KVM (Kernel-based Virtual Machine). The c9800-CL is a cloud-based wireless controller that can be used to manage both on-premises and cloud-based wireless networks, and is a part of the Cisco Catalyst 9800 series. It offers features such as wireless intrusion prevention, location services, and guest access.",date:"2021-09-06T00:00:00.000Z",formattedDate:"September 6, 2021",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.105,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"provisioning-cisco-cloud-wireless-controller",title:"Provisioning Cisco Cloud Wireless Controller",authors:"reubenliengaard",tags:["hola","docusaurus"]},prevItem:{title:"Wireless Coverage at Manchester Pride - A Heatmap Analysis",permalink:"/blog/wireless-coverage-at-manchester-pride"},nextItem:{title:"Parish House Prices - A Map of Average Sale Prices",permalink:"/blog/parish-house-prices"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We installed and configured the Cisco Catalyst c9800-CL wireless controller using KVM (Kernel-based Virtual Machine). The c9800-CL is a cloud-based wireless controller that can be used to manage both on-premises and cloud-based wireless networks, and is a part of the Cisco Catalyst 9800 series. It offers features such as wireless intrusion prevention, location services, and guest access."),(0,o.kt)("p",null,"To begin, we installed virtualization software and enabled the libvirtd service. Then, we created a network bridge using the brctl command. After that, we used the virt-install command to install the c9800-CL on a new virtual machine, specifying options such as the connection to the virtualization server, the operating system variant, the architecture of the virtual machine, and the CPU type."),(0,o.kt)("p",null,"Once the virtual machine was set up and the c9800-CL was installed, we provided a script to configure the controller. This script included steps such as setting the hostname, creating a user account, configuring the Gigabit Ethernet interfaces, creating a VLAN, setting up static routes, shutting down and re-enabling the radio frequencies, and setting the country code. We also configured the virtual wireless LAN controller (VWLC) and set the DNS and NTP servers."),(0,o.kt)("p",null,"Finally, we showed you how to access the GUI of the c9800-CL at the specified IP address and go through the zero-day configuration steps to set up a wireless network."))}d.isMDXComponent=!0}}]);