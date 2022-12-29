"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},i="InfluxDB",l={unversionedId:"automation/automation-containers/podman-play-kube",id:"automation/automation-containers/podman-play-kube",title:"InfluxDB",description:"Introduction",source:"@site/docs/automation/automation-containers/podman-play-kube.md",sourceDirName:"automation/automation-containers",slug:"/automation/automation-containers/podman-play-kube",permalink:"/docs/automation/automation-containers/podman-play-kube",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Grafana",permalink:"/docs/automation/automation-containers/grafana"},next:{title:"Sensors",permalink:"/docs/category/sensors"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Why?",id:"why",level:3},{value:"Body?",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"influxdb"},"InfluxDB"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what"},"What?"),(0,a.kt)("p",null,"Using Podman Play Kube"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"podman kube play will read in a structured file of Kubernetes YAML. It will then recreate the containers, pods or volumes described in the YAML. Containers within a pod are then started and the ID of the new Pod or the name of the new Volume is output. If the yaml file is specified as \u201c-\u201d then podman kube play will read the YAML file from stdin. Using the --down command line option, it is also capable of tearing down the pods created by a previous run of podman kube play. Using the --replace command line option, it will tear down the pods(if any) created by a previous run of podman kube play and recreate the pods with the Kubernetes YAML file. Ideally the input file would be one created by Podman (see podman-kube-generate(1)). This would guarantee a smooth import and expected results. The input can also be a URL that points to a YAML file such as ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io/demo.yml"},"https://podman.io/demo.yml"),". podman kube play will read the YAML from the URL and create pods and containers from it.")),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("h2",{id:"body"},"Body?"),(0,a.kt)("h3",{id:"how"},"How?"),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/markdown/podman-kube-play.1.html"},"PodmanPlayKube")))}p.isMDXComponent=!0}}]);