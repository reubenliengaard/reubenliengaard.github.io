"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[2552],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9117:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=r(7462),i=(r(7294),r(3905));const l={sidebar_position:3},a="Rename all linux frendly",o={unversionedId:"desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly",id:"desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly",title:"Rename all linux frendly",description:"This command will rename all the files in the current directory, replacing any non-alphanumeric or non-period characters with nothing.",source:"@site/docs/desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly.md",sourceDirName:"desktop-linux/working-with-files-via-linux-shell",slug:"/desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly",permalink:"/docs/desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Rename all linux frendly",permalink:"/docs/desktop-linux/working-with-files-via-linux-shell/extract-all-zips"},next:{title:"Parametric Modeling",permalink:"/docs/category/parametric-modeling-1"}},c={},u=[{value:"References",id:"references",level:2}],s={toc:u};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rename-all-linux-frendly"},"Rename all linux frendly"),(0,i.kt)("p",null,"This command will rename all the files in the current directory, replacing any non-alphanumeric or non-period characters with nothing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'for file in *; do mv "$file" "$(echo ${file//[^a-zA-Z0-9.]/})" ; done\n')),(0,i.kt)("h2",{id:"references"},"References"))}p.isMDXComponent=!0}}]);