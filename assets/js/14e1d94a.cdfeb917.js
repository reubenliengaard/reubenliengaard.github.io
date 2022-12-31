"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4268],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=o,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||i;return t?a.createElement(f,r(r({ref:n},s),{},{components:t})):a.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},r="Mosquitto and influxdb with podman play kube",l={unversionedId:"monitoring/mosquitto-and-influxdb-with-podman-play-kube",id:"monitoring/mosquitto-and-influxdb-with-podman-play-kube",title:"Mosquitto and influxdb with podman play kube",description:"To do",source:"@site/docs/monitoring/mosquitto-and-influxdb-with-podman-play-kube.md",sourceDirName:"monitoring",slug:"/monitoring/mosquitto-and-influxdb-with-podman-play-kube",permalink:"/docs/monitoring/mosquitto-and-influxdb-with-podman-play-kube",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Coreos sensor container with butane",permalink:"/docs/monitoring/coreos-sensor-container-with-butane"},next:{title:"Python for Sensors on RPI4",permalink:"/docs/category/python-for-sensors-on-rpi4"}},u={},d=[{value:"To do",id:"to-do",level:2},{value:"Create a pod",id:"create-a-pod",level:3},{value:"Pull influxdb image",id:"pull-influxdb-image",level:3},{value:"Run image in pod",id:"run-image-in-pod",level:3},{value:"Pull mosquitto image",id:"pull-mosquitto-image",level:3},{value:"Run image in pod",id:"run-image-in-pod-1",level:3},{value:"Generate YAML file",id:"generate-yaml-file",level:3},{value:"Here&#39;s the YAML file",id:"heres-the-yaml-file",level:2},{value:"Test YAML file",id:"test-yaml-file",level:3},{value:"Reference",id:"reference",level:3}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mosquitto-and-influxdb-with-podman-play-kube"},"Mosquitto and influxdb with podman play kube"),(0,o.kt)("h2",{id:"to-do"},"To do"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mosquitto configuration"),(0,o.kt)("li",{parentName:"ul"},"influxdb directory")),(0,o.kt)("p",null,"First create a pod and inflluxdb container using podman, then generate a YAML file using podman play."),(0,o.kt)("p",null,"The YAML file can be used to recreate the pod in podman, or in kubernetes."),(0,o.kt)("h3",{id:"create-a-pod"},"Create a pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod create -p 8086:8086 -p 1883:1883 -p 9001:9001 -n monitoring\n")),(0,o.kt)("h3",{id:"pull-influxdb-image"},"Pull influxdb image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull docker.io/influxdb:latest\n")),(0,o.kt)("h3",{id:"run-image-in-pod"},"Run image in pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman run -d -t \\\n--name influxdb \\\n--pod monitoring \\\ninfluxdb:latest\n")),(0,o.kt)("h3",{id:"pull-mosquitto-image"},"Pull mosquitto image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull docker.io/eclipse-mosquitto\n")),(0,o.kt)("h3",{id:"run-image-in-pod-1"},"Run image in pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman run -t \\\n--name mosquitto \\\n--pod monitoring \\\neclipse-mosquitto\n")),(0,o.kt)("h3",{id:"generate-yaml-file"},"Generate YAML file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman generate kube monitoring -f monitoring-stack.yaml\n")),(0,o.kt)("h2",{id:"heres-the-yaml-file"},"Here's the YAML file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-4.3.1\napiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    io.kubernetes.cri-o.ContainerType/influxdb: container\n    io.kubernetes.cri-o.ContainerType/mosquitto: container\n    io.kubernetes.cri-o.SandboxID/influxdb: 3e6d0de4f62b7090a2b3e0e4d64f69881894d6d4988b4f87cde736c43e26a62\n    io.kubernetes.cri-o.SandboxID/mosquitto: 3e6d0de4f62b7090a2b3e0e4d64f69881894d6d4988b4f87cde736c43e26a62\n    io.kubernetes.cri-o.TTY/influxdb: "true"\n    io.kubernetes.cri-o.TTY/mosquitto: "true"\n    io.podman.annotations.autoremove/influxdb: "FALSE"\n    io.podman.annotations.autoremove/mosquitto: "FALSE"\n    io.podman.annotations.init/influxdb: "FALSE"\n    io.podman.annotations.init/mosquitto: "FALSE"\n    io.podman.annotations.privileged/influxdb: "FALSE"\n    io.podman.annotations.privileged/mosquitto: "FALSE"\n    io.podman.annotations.publish-all/influxdb: "FALSE"\n    io.podman.annotations.publish-all/mosquitto: "FALSE"\n  creationTimestamp: "2022-12-31T02:23:51Z"\n  labels:\n    app: monitoring\n  name: monitoring\nspec:\n  automountServiceAccountToken: false\n  containers:\n  - args:\n    - influxd\n    image: docker.io/library/influxdb:latest\n    name: influxdb\n    ports:\n    - containerPort: 1883\n      hostPort: 1883\n    - containerPort: 8086\n      hostPort: 8086\n    - containerPort: 9001\n      hostPort: 9001\n    resources: {}\n    securityContext:\n      capabilities:\n        drop:\n        - CAP_MKNOD\n        - CAP_NET_RAW\n        - CAP_AUDIT_WRITE\n    tty: true\n    volumeMounts:\n    - mountPath: /etc/influxdb2\n      name: 130b34101cdf2ca9f58b6166ea376a0f79c5fe18889a00c42f458d3259a8fd8e-pvc\n    - mountPath: /var/lib/influxdb2\n      name: 70d043a228ff0ccb924b9950887e9b947cfebed5956652cbf2d454ac26a66879-pvc\n  - args:\n    - /usr/sbin/mosquitto\n    - -c\n    - /mosquitto/config/mosquitto.conf\n    image: docker.io/library/eclipse-mosquitto:latest\n    name: mosquitto\n    resources: {}\n    securityContext:\n      capabilities:\n        drop:\n        - CAP_MKNOD\n        - CAP_NET_RAW\n        - CAP_AUDIT_WRITE\n    tty: true\n    volumeMounts:\n    - mountPath: /mosquitto/log\n      name: f01fc59a9790fea52fd1e862b517d10aaefa3af04ad70e912004b72fd64e95b0-pvc\n    - mountPath: /mosquitto/data\n      name: 3439da031be88b060d2c4fb4c835a309c573809fcfb45f98dfc12e281f6d263e-pvc\n  enableServiceLinks: false\n  hostname: monitoring\n  restartPolicy: Never\n  volumes:\n  - name: 130b34101cdf2ca9f58b6166ea376a0f79c5fe18889a00c42f458d3259a8fd8e-pvc\n    persistentVolumeClaim:\n      claimName: 130b34101cdf2ca9f58b6166ea376a0f79c5fe18889a00c42f458d3259a8fd8e\n  - name: 70d043a228ff0ccb924b9950887e9b947cfebed5956652cbf2d454ac26a66879-pvc\n    persistentVolumeClaim:\n      claimName: 70d043a228ff0ccb924b9950887e9b947cfebed5956652cbf2d454ac26a66879\n  - name: f01fc59a9790fea52fd1e862b517d10aaefa3af04ad70e912004b72fd64e95b0-pvc\n    persistentVolumeClaim:\n      claimName: f01fc59a9790fea52fd1e862b517d10aaefa3af04ad70e912004b72fd64e95b0\n  - name: 3439da031be88b060d2c4fb4c835a309c573809fcfb45f98dfc12e281f6d263e-pvc\n    persistentVolumeClaim:\n      claimName: 3439da031be88b060d2c4fb4c835a309c573809fcfb45f98dfc12e281f6d263e\nstatus: {}\n')),(0,o.kt)("h3",{id:"test-yaml-file"},"Test YAML file"),(0,o.kt)("p",null,"Delete containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman rm -vf influxdb\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman rm -vf mosquitto\n")),(0,o.kt)("p",null,"Delete pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod rm monitoring\n")),(0,o.kt)("p",null,"Re-build pod using podman play and YAML file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman play kube monitoring-stack.yaml\n")),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://oracle-base.com/articles/linux/podman-generate-and-play-kubernetes-yaml-files#:~:text=Podman%20can%20generate%20Kubernetes%20YAML,similar%20to%20Docker%20Compose%20files."},"Oracle-Base")))}c.isMDXComponent=!0}}]);