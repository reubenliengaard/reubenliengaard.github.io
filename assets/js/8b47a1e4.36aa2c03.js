"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[5395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(a),d=r,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||s;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},o="Setting up PostGIS Database Server",i={unversionedId:"geospatial-analysis/setting-up-a-postgis-database-server",id:"geospatial-analysis/setting-up-a-postgis-database-server",title:"Setting up PostGIS Database Server",description:"Create a pod",source:"@site/docs/geospatial-analysis/setting-up-a-postgis-database-server.md",sourceDirName:"geospatial-analysis",slug:"/geospatial-analysis/setting-up-a-postgis-database-server",permalink:"/docs/geospatial-analysis/setting-up-a-postgis-database-server",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Geospatial Analysis",permalink:"/docs/category/geospatial-analysis"},next:{title:"Uploading Data to PostGIS with Linux Shell",permalink:"/docs/category/uploading-data-to-postgis-with-linux-shell"}},l={},p=[{value:"Create a pod",id:"create-a-pod",level:3},{value:"Run image in pod",id:"run-image-in-pod",level:3},{value:"auto gen systemd file",id:"auto-gen-systemd-file",level:3},{value:"start postgis service",id:"start-postgis-service",level:3},{value:"enable postgis service",id:"enable-postgis-service",level:3},{value:"Check",id:"check",level:2},{value:"Generate YAML file",id:"generate-yaml-file",level:3},{value:"Here&#39;s the YAML file",id:"heres-the-yaml-file",level:2},{value:"Test YAML file",id:"test-yaml-file",level:3},{value:"Remove postgis container",id:"remove-postgis-container",level:4},{value:"Remove geoserver container",id:"remove-geoserver-container",level:4},{value:"Remove spatial pod",id:"remove-spatial-pod",level:4},{value:"Install everything again using the YAML file",id:"install-everything-again-using-the-yaml-file",level:4}],c={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-postgis-database-server"},"Setting up PostGIS Database Server"),(0,r.kt)("h3",{id:"create-a-pod"},"Create a pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod create -p 8080:8080 -p 5432:5432 -n geospatial\n")),(0,r.kt)("h3",{id:"run-image-in-pod"},"Run image in pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman run \\\n--pod geospatial \\\n--name postgis \\\n-e POSTGRES_PASSWORD=postgres \\\n-d postgis/postgis\n")),(0,r.kt)("h3",{id:"auto-gen-systemd-file"},"auto gen systemd file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman generate systemd postgis >\n/home/$user/.config/systemd/user/postgis.service\n")),(0,r.kt)("h3",{id:"start-postgis-service"},"start postgis service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start --user postgis.service\n")),(0,r.kt)("h3",{id:"enable-postgis-service"},"enable postgis service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start --user postgis.service\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman start postgis\n")),(0,r.kt)("h2",{id:"check"},"Check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h localhost -p 5432 -U postgres \n")),(0,r.kt)("h3",{id:"generate-yaml-file"},"Generate YAML file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman generate kube geospatial -f geospatial-stack-podman.yaml\n")),(0,r.kt)("h2",{id:"heres-the-yaml-file"},"Here's the YAML file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\n# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-4.3.1\napiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    io.kubernetes.cri-o.ContainerType/geoserver: container\n    io.kubernetes.cri-o.ContainerType/postgis: container\n    io.kubernetes.cri-o.SandboxID/geoserver: 5579c50f78551192cbc7eafed6f04db71155c3690d677c9a5741b25fe54fc14\n    io.kubernetes.cri-o.SandboxID/postgis: 5579c50f78551192cbc7eafed6f04db71155c3690d677c9a5741b25fe54fc14\n    io.kubernetes.cri-o.TTY/geoserver: "true"\n    io.kubernetes.cri-o.TTY/postgis: "true"\n    io.podman.annotations.autoremove/geoserver: "FALSE"\n    io.podman.annotations.autoremove/postgis: "FALSE"\n    io.podman.annotations.init/geoserver: "FALSE"\n    io.podman.annotations.init/postgis: "FALSE"\n    io.podman.annotations.privileged/geoserver: "FALSE"\n    io.podman.annotations.privileged/postgis: "FALSE"\n    io.podman.annotations.publish-all/geoserver: "FALSE"\n    io.podman.annotations.publish-all/postgis: "FALSE"\n  creationTimestamp: "2022-12-30T13:47:48Z"\n  labels:\n    app: geospatial\n  name: geospatial\nspec:\n  automountServiceAccountToken: false\n  containers:\n  - env:\n    - name: GEOSERVER_ADMIN_USER\n      value: postgres\n    - name: GEOSERVER_ADMIN_PASSWORD\n      value: postgres\n    image: docker.io/kartoza/geoserver:latest\n    name: geoserver\n    ports:\n    - containerPort: 5432\n      hostPort: 5432\n    - containerPort: 8080\n      hostPort: 8080\n    resources: {}\n    securityContext:\n      capabilities:\n        drop:\n        - CAP_MKNOD\n        - CAP_NET_RAW\n        - CAP_AUDIT_WRITE\n    tty: true\n  - env:\n    - name: POSTGRES_PASS\n      value: postgres\n    - name: POSTGRES_USER\n      value: postgres\n    image: docker.io/kartoza/postgis:latest\n    name: postgis\n    resources: {}\n    securityContext:\n      capabilities:\n        drop:\n        - CAP_MKNOD\n        - CAP_NET_RAW\n        - CAP_AUDIT_WRITE\n    tty: true\n    volumeMounts:\n    - mountPath: /var/lib/postgresql\n      name: 3276e85c3fc649e1904e0161ff79599dcc3292e9121982d648c0f2c47585abaf-pvc\n  enableServiceLinks: false\n  hostname: geospatial\n  restartPolicy: Never\n  volumes:\n  - name: 3276e85c3fc649e1904e0161ff79599dcc3292e9121982d648c0f2c47585abaf-pvc\n    persistentVolumeClaim:\n      claimName: 3276e85c3fc649e1904e0161ff79599dcc3292e9121982d648c0f2c47585abaf\nstatus: {}\n')),(0,r.kt)("h3",{id:"test-yaml-file"},"Test YAML file"),(0,r.kt)("h4",{id:"remove-postgis-container"},"Remove postgis container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman rm -vf postgis\n")),(0,r.kt)("h4",{id:"remove-geoserver-container"},"Remove geoserver container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman rm -vf geoserver\n")),(0,r.kt)("h4",{id:"remove-spatial-pod"},"Remove spatial pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod rm spatial\n")),(0,r.kt)("h4",{id:"install-everything-again-using-the-yaml-file"},"Install everything again using the YAML file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman play kube geospatial-stack-podman.yaml\n")))}g.isMDXComponent=!0}}]);