"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[9908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Cisco wireless controller in KVM",s={unversionedId:"monitoring/cisco-wireless-controller-in-kvm",id:"monitoring/cisco-wireless-controller-in-kvm",title:"Cisco wireless controller in KVM",description:"Introduction",source:"@site/docs/monitoring/cisco-wireless-controller-in-kvm.md",sourceDirName:"monitoring",slug:"/monitoring/cisco-wireless-controller-in-kvm",permalink:"/docs/monitoring/cisco-wireless-controller-in-kvm",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Coreos sensor container with butane",permalink:"/docs/monitoring/coreos-sensor-container-with-butane"},next:{title:"Mosquitto and influxdb with podman play kube",permalink:"/docs/monitoring/mosquitto-and-influxdb-with-podman-play-kube"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Install Virtual Machine",id:"install-virtual-machine",level:2},{value:"Enter these commands on the controller to setup the web gui",id:"enter-these-commands-on-the-controller-to-setup-the-web-gui",level:3},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cisco-wireless-controller-in-kvm"},"Cisco wireless controller in KVM"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Cisco c9800-CL with KVM"),(0,o.kt)("h3",{id:"what"},"What?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Cisco Catalyst 9800-CL is the next generation of enterprise-class wireless controller for cloud that runs open Cisco IOS XE Software and sets the standard for always-on and secure wireless network, bringing the world's most popular wireless networking platform to AWS")),(0,o.kt)("h3",{id:""}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf group install --with-optional virtualization\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start libvirtd && sudo systemctl enable libvirtd\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We use the backing_store option to virt-install --disk to quickly create a new disk image and avoid writing to the original image we have downloaded. This new disk image can be easily thrown away.")),(0,o.kt)("p",null,"CTRL + ] to exit kvm\nto destroy run\nvirsh destroy fcos\nvirsh undefine --remove-all-storage fcos"),(0,o.kt)("h2",{id:"install-virtual-machine"},"Install Virtual Machine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"virt-install \\\n--connect=qemu:///system \\\n--os-variant=rhel4.0 \\\n--arch=x86_64 \\\n--cpu host \\\n--console pty,target_type=virtio \\\n--hvm \\\n--import \\\n--name=my_c9k_vm \\\n--disk path=C9800-CL.qcow2,bus=ide,format=qcow2 \\\n--vcpus=1,sockets=1,cores=1,threads=1 \\\n--ram=4096 \\\n--network=network:br10,model=virtio \\\n--network=network:br10,model=virtio \\\n--network=network:br10,model=virtio  \\\n--noreboot \\\n\n")),(0,o.kt)("h3",{id:"enter-these-commands-on-the-controller-to-setup-the-web-gui"},"Enter these commands on the controller to setup the web gui"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ios"},"conf t\nhostname 9800-1\nuser-name admin\n privilege 15\n password 0 Cisco123\n exit\nint gig 1\n no switchport\n ip address 10.10.10.10 255.255.255.0\n no shut\n exit\nint gig 2\n switchport\n switchport mode trunk\n switchport trunk native vlan 77\n no shut\n exit\nint vlan 77\n ip address 192.168.77.10 255.255.255.0\n no shut\n exit\nip route 10.10.10.0 255.255.255.0 10.10.10.1\nip route 0.0.0.0 0.0.0.0 192.168.77.1\nwireless management interface vlan 77\nap dot11 5ghz shutdown \nap dot11 24ghz shutdown \nap country BE,US\nno ap dot11 5ghz shutdown\nno ap dot11 24ghz shutdown\nexit\nwireless config vwlc-ssc key-size 2048 signature-algo sha256 password 0 Cisco123\nconf t\nip name-server 1.1.1.1\nntp server pool.ntp.org\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/quick-docs/getting-started-with-virtualization/"},"FedoraVirtGuide")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/9800-cloud/installation/b-c9800-cl-install-guide/installing_the_controller_in_kvm_environment.html"},"CiscoGuide")))}p.isMDXComponent=!0}}]);