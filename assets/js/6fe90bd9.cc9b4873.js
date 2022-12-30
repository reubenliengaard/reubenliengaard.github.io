"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4833],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>f});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),c=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return a?t.createElement(f,i(i({ref:n},p),{},{components:a})):t.createElement(f,i({ref:n},p))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9399:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Influxdb Using Podman Play Kube",l={unversionedId:"automation/influxdb-using-podman-play-kube",id:"automation/influxdb-using-podman-play-kube",title:"Influxdb Using Podman Play Kube",description:"First create a pod and inflluxdb container using podman, then generate a YAML file using podman play.",source:"@site/docs/automation/influxdb-using-podman-play-kube.md",sourceDirName:"automation",slug:"/automation/influxdb-using-podman-play-kube",permalink:"/docs/automation/influxdb-using-podman-play-kube",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cisco Cloud Wireless Controller in a KVM Environment",permalink:"/docs/automation/cisco-cloud-wireless-controller-in-a-kvm-environment"},next:{title:"Python for Sensors on RPI4",permalink:"/docs/category/python-for-sensors-on-rpi4"}},u={},c=[{value:"Create a pod",id:"create-a-pod",level:3},{value:"Pull postgis image",id:"pull-postgis-image",level:3},{value:"Run image in pod",id:"run-image-in-pod",level:3},{value:"Generate YAML file",id:"generate-yaml-file",level:3},{value:"Here&#39;s the YAML file",id:"heres-the-yaml-file",level:2},{value:"Test YAML file",id:"test-yaml-file",level:3},{value:"Reference",id:"reference",level:3}],p={toc:c};function s(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"influxdb-using-podman-play-kube"},"Influxdb Using Podman Play Kube"),(0,r.kt)("p",null,"First create a pod and inflluxdb container using podman, then generate a YAML file using podman play."),(0,r.kt)("p",null,"The YAML file can be used to recreate the pod in podman, or in kubernetes."),(0,r.kt)("h3",{id:"create-a-pod"},"Create a pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod create -p 8086:8086 -n monitoring\n")),(0,r.kt)("h3",{id:"pull-postgis-image"},"Pull postgis image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull influxdb:latest\n")),(0,r.kt)("h3",{id:"run-image-in-pod"},"Run image in pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman run -d -t \\\n--name influxdb \\\n--pod monitoring \\\ninfluxdb:latest\n")),(0,r.kt)("h3",{id:"generate-yaml-file"},"Generate YAML file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman generate kube monitoring -f monitoring-stack.yaml\n")),(0,r.kt)("h2",{id:"heres-the-yaml-file"},"Here's the YAML file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Save the output of this file and use kubectl create -f to import\n# it into Kubernetes.\n#\n# Created with podman-4.3.1\napiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    io.kubernetes.cri-o.ContainerType/influxdb: container\n    io.kubernetes.cri-o.SandboxID/influxdb: 2d22998804363b3df085ac8fac27ed13c9b1914f8264e2c79f30ef05fc47cf2\n    io.kubernetes.cri-o.TTY/influxdb: "true"\n    io.podman.annotations.autoremove/influxdb: "FALSE"\n    io.podman.annotations.init/influxdb: "FALSE"\n    io.podman.annotations.privileged/influxdb: "FALSE"\n    io.podman.annotations.publish-all/influxdb: "FALSE"\n  creationTimestamp: "2022-12-30T19:42:08Z"\n  labels:\n    app: monitoring\n  name: monitoring\nspec:\n  automountServiceAccountToken: false\n  containers:\n  - args:\n    - influxd\n    image: docker.io/library/influxdb:latest\n    name: influxdb\n    ports:\n    - containerPort: 8086\n      hostPort: 8086\n    resources: {}\n    securityContext:\n      capabilities:\n        drop:\n        - CAP_MKNOD\n        - CAP_NET_RAW\n        - CAP_AUDIT_WRITE\n    tty: true\n    volumeMounts:\n    - mountPath: /var/lib/influxdb2\n      name: 36831ad4fbc16de21fa23d0036a1c5e96457432aee4485e2d62a06b11617628c-pvc\n    - mountPath: /etc/influxdb2\n      name: 0ef8bec1d4f74ecc07366abfe90077413b6a6ca093c510443e350b4a8c118288-pvc\n  enableServiceLinks: false\n  hostname: monitoring\n  restartPolicy: Never\n  volumes:\n  - name: 36831ad4fbc16de21fa23d0036a1c5e96457432aee4485e2d62a06b11617628c-pvc\n    persistentVolumeClaim:\n      claimName: 36831ad4fbc16de21fa23d0036a1c5e96457432aee4485e2d62a06b11617628c\n  - name: 0ef8bec1d4f74ecc07366abfe90077413b6a6ca093c510443e350b4a8c118288-pvc\n    persistentVolumeClaim:\n      claimName: 0ef8bec1d4f74ecc07366abfe90077413b6a6ca093c510443e350b4a8c118288\nstatus: {}\n\n')),(0,r.kt)("h3",{id:"test-yaml-file"},"Test YAML file"),(0,r.kt)("p",null,"Delete container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman rm -vf influxdb\n")),(0,r.kt)("p",null,"Delete pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pod rm monitoring\n")),(0,r.kt)("p",null,"Re-build pod using podman play and YAML file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman play kube monitoring-stack.yaml\n")),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://oracle-base.com/articles/linux/podman-generate-and-play-kubernetes-yaml-files#:~:text=Podman%20can%20generate%20Kubernetes%20YAML,similar%20to%20Docker%20Compose%20files."},"Oracle-Base")))}s.isMDXComponent=!0}}]);