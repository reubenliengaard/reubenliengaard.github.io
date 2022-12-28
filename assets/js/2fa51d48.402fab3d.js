"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[82],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2},o="PostGIS Spatial Database",i={unversionedId:"software-installation/postgis-spatial-database",id:"software-installation/postgis-spatial-database",title:"PostGIS Spatial Database",description:"Why PostGIS?",source:"@site/docs/software-installation/postgis-spatial-database.md",sourceDirName:"software-installation",slug:"/software-installation/postgis-spatial-database",permalink:"/docs/software-installation/postgis-spatial-database",draft:!1,editUrl:"https://github.com/reubenliengaard/reubenliengaard.gihtub.io/docs/software-installation/postgis-spatial-database.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fedora Workstation Linux",permalink:"/docs/software-installation/fedora-workstation-linux"},next:{title:"PSQL Database Front-End",permalink:"/docs/software-installation/psql-database-frontend"}},l={},p=[{value:"Podman",id:"podman",level:2},{value:"Why podman?",id:"why-podman",level:3},{value:"Create a pod and expose some ports",id:"create-a-pod-and-expose-some-ports",level:3},{value:"Confirm the new pod exists",id:"confirm-the-new-pod-exists",level:3},{value:"Download PostGIS image",id:"download-postgis-image",level:2},{value:"Pull a postgis image from DockerHub",id:"pull-a-postgis-image-from-dockerhub",level:3},{value:"Applying the PostGIS image to a container",id:"applying-the-postgis-image-to-a-container",level:2},{value:"Specify username, password, container name, and create a container.",id:"specify-username-password-container-name-and-create-a-container",level:3},{value:"Auto create a systemd service for the PostGIS container",id:"auto-create-a-systemd-service-for-the-postgis-container",level:2},{value:"Reload user systemd",id:"reload-user-systemd",level:3},{value:"Start and enable the postgis service",id:"start-and-enable-the-postgis-service",level:3},{value:"Use the user flag for non-root containers.",id:"use-the-user-flag-for-non-root-containers",level:3},{value:"Enable it so it will be persistent after reboots.",id:"enable-it-so-it-will-be-persistent-after-reboots",level:3},{value:"Confirm container is running.",id:"confirm-container-is-running",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgis-spatial-database"},"PostGIS Spatial Database"),(0,r.kt)("p",null,"Why PostGIS?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strong community"),(0,r.kt)("li",{parentName:"ul"},"Robust and stable"),(0,r.kt)("li",{parentName:"ul"},"2d, 3d, and raster support"),(0,r.kt)("li",{parentName:"ul"},"SQL compliant"),(0,r.kt)("li",{parentName:"ul"},"Used by ArcGIS"),(0,r.kt)("li",{parentName:"ul"},"Very capable")),(0,r.kt)("h2",{id:"podman"},"Podman"),(0,r.kt)("h3",{id:"why-podman"},"Why podman?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transferable to kubernates"),(0,r.kt)("li",{parentName:"ul"},"works with fedora"),(0,r.kt)("li",{parentName:"ul"},"secure")),(0,r.kt)("h3",{id:"create-a-pod-and-expose-some-ports"},"Create a pod and expose some ports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod create -p 8080:8080 -p 5432:5432 -n spatial\n")),(0,r.kt)("h3",{id:"confirm-the-new-pod-exists"},"Confirm the new pod exists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod list\n")),(0,r.kt)("h2",{id:"download-postgis-image"},"Download PostGIS image"),(0,r.kt)("h3",{id:"pull-a-postgis-image-from-dockerhub"},"Pull a postgis image from DockerHub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull postgis/postgis\n")),(0,r.kt)("p",null,"select docker source"),(0,r.kt)("h2",{id:"applying-the-postgis-image-to-a-container"},"Applying the PostGIS image to a container"),(0,r.kt)("h3",{id:"specify-username-password-container-name-and-create-a-container"},"Specify username, password, container name, and create a container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman run -d -t --name postgis --pod spatial -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres postgis/postgis\n")),(0,r.kt)("h2",{id:"auto-create-a-systemd-service-for-the-postgis-container"},"Auto create a systemd service for the PostGIS container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman generate systemd postgis >/home/reuben/.config/systemd/user/postgis.service\n")),(0,r.kt)("h3",{id:"reload-user-systemd"},"Reload user systemd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl --user daemon-reload\n")),(0,r.kt)("h3",{id:"start-and-enable-the-postgis-service"},"Start and enable the postgis service"),(0,r.kt)("h3",{id:"use-the-user-flag-for-non-root-containers"},"Use the user flag for non-root containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start --user postgis.service\n")),(0,r.kt)("h3",{id:"enable-it-so-it-will-be-persistent-after-reboots"},"Enable it so it will be persistent after reboots."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable --user postgis.service\n")),(0,r.kt)("h3",{id:"confirm-container-is-running"},"Confirm container is running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status --user postgis.service\n")))}d.isMDXComponent=!0}}]);