"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[7416],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>y});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=n.createContext({}),c=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(i),u=r,y=f["".concat(a,".").concat(u)]||f[u]||d[u]||o;return i?n.createElement(y,l(l({ref:t},p),{},{components:i})):n.createElement(y,l({ref:t},p))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[f]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9913:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const o={sidebar_position:1},l="Copy files into directories by extension",s={unversionedId:"desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",id:"desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",title:"Copy files into directories by extension",description:"This script will take all the files in the current directory and sort them into directories based on their file extension. For example, all .txt files will be placed in a txt directory, all .pdf files will be placed in a pdf directory, and so on.",source:"@site/docs/desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension.md",sourceDirName:"desktop-linux/working-with-files-via-linux-shell",slug:"/desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",permalink:"/docs/desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Working with files via Linux shell",permalink:"/docs/category/working-with-files-via-linux-shell"},next:{title:"Extract all zips",permalink:"/docs/desktop-linux/working-with-files-via-linux-shell/extract-all-zips"}},a={},c=[{value:"References",id:"references",level:2}],p={toc:c};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"copy-files-into-directories-by-extension"},"Copy files into directories by extension"),(0,r.kt)("p",null,"This script will take all the files in the current directory and sort them into directories based on their file extension. For example, all .txt files will be placed in a txt directory, all .pdf files will be placed in a pdf directory, and so on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'for filename in *; do\n  if [[ -f "$filename" ]]; then\n      base=${filename%.*}\n      ext=${filename#$base.}\n    mkdir -p "${ext}"\n    mv "$filename" "${ext}"\n  fi\ndone\n')),(0,r.kt)("h2",{id:"references"},"References"))}f.isMDXComponent=!0}}]);