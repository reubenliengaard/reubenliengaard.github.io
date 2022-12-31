"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[9633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,y=u["".concat(a,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},s="Copy files into directories by extension",l={unversionedId:"workstation/shell-scripts/cp-files-into-directories-by-extension",id:"workstation/shell-scripts/cp-files-into-directories-by-extension",title:"Copy files into directories by extension",description:"Introduction",source:"@site/docs/workstation/shell-scripts/cp-files-into-directories-by-extension.md",sourceDirName:"workstation/shell-scripts",slug:"/workstation/shell-scripts/cp-files-into-directories-by-extension",permalink:"/docs/workstation/shell-scripts/cp-files-into-directories-by-extension",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shell scripts",permalink:"/docs/category/shell-scripts"},next:{title:"Rename all linux frendly",permalink:"/docs/workstation/shell-scripts/extract-all-zips"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Why?",id:"why",level:3},{value:"Body",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"copy-files-into-directories-by-extension"},"Copy files into directories by extension"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("h3",{id:"what"},"What?"),(0,i.kt)("h3",{id:"why"},"Why?"),(0,i.kt)("h2",{id:"body"},"Body"),(0,i.kt)("h3",{id:"how"},"How?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/bash\nfor filename in *; do\n  if [[ -f "$filename" ]]; then\n      base=${filename%.*}\n      ext=${filename#$base.}\n    mkdir -p "${ext}"\n    cp "$filename" "${ext}"\n  fi\ndone\n')),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("h2",{id:"references"},"References"))}u.isMDXComponent=!0}}]);