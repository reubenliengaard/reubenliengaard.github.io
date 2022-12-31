"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[3545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?i.createElement(y,l(l({ref:n},u),{},{components:t})):i.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[f]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},l="Copy files into directories by extension",a={unversionedId:"linux-desktop-configuration/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",id:"linux-desktop-configuration/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",title:"Copy files into directories by extension",description:"Introduction",source:"@site/docs/linux-desktop-configuration/working-with-files-via-linux-shell/cp-files-into-directories-by-extension.md",sourceDirName:"linux-desktop-configuration/working-with-files-via-linux-shell",slug:"/linux-desktop-configuration/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",permalink:"/docs/linux-desktop-configuration/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Useful shell scripts",permalink:"/docs/category/useful-shell-scripts"},next:{title:"Rename all linux frendly",permalink:"/docs/linux-desktop-configuration/working-with-files-via-linux-shell/extract-all-zips"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Why?",id:"why",level:3},{value:"Body",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],u={toc:c};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"copy-files-into-directories-by-extension"},"Copy files into directories by extension"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"what"},"What?"),(0,r.kt)("h3",{id:"why"},"Why?"),(0,r.kt)("h2",{id:"body"},"Body"),(0,r.kt)("h3",{id:"how"},"How?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/bash\nfor filename in *; do\n  if [[ -f "$filename" ]]; then\n      base=${filename%.*}\n      ext=${filename#$base.}\n    mkdir -p "${ext}"\n    cp "$filename" "${ext}"\n  fi\ndone\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("h2",{id:"references"},"References"))}f.isMDXComponent=!0}}]);