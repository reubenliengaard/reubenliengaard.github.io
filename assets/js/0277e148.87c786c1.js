"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[9234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},a="Installing Cisco Cloud Wireless Controller with KVM",l={unversionedId:"energy-and-environmental-monitoring./installing-cisco-cloud-wireless-controller",id:"energy-and-environmental-monitoring./installing-cisco-cloud-wireless-controller",title:"Installing Cisco Cloud Wireless Controller with KVM",description:"To to",source:"@site/docs/energy-and-environmental-monitoring./installing-cisco-cloud-wireless-controller.md",sourceDirName:"energy-and-environmental-monitoring.",slug:"/energy-and-environmental-monitoring./installing-cisco-cloud-wireless-controller",permalink:"/docs/energy-and-environmental-monitoring./installing-cisco-cloud-wireless-controller",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Provisioning Fedora CoreOS on the Raspberry Pi 4",permalink:"/docs/energy-and-environmental-monitoring./provisioning-fedora-coreos-on-the-raspberry-pi 4"},next:{title:"Setting up InfluxDB Database Server with Podman",permalink:"/docs/energy-and-environmental-monitoring./setting-up-influxdb-database-server"}},s={},c=[{value:"To to",id:"to-to",level:2},{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Install Virtual Machine",id:"install-virtual-machine",level:2},{value:"Enter these commands on the controller to setup the web gui",id:"enter-these-commands-on-the-controller-to-setup-the-web-gui",level:3},{value:"References",id:"references",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-cisco-cloud-wireless-controller-with-kvm"},"Installing Cisco Cloud Wireless Controller with KVM"),(0,o.kt)("h2",{id:"to-to"},"To to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setup linux networking bridge")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Cisco c9800-CL with KVM"),(0,o.kt)("h3",{id:"what"},"What?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Cisco Catalyst 9800-CL is the next generation of enterprise-class wireless controller for cloud that runs open Cisco IOS XE Software and sets the standard for always-on and secure wireless network, bringing the world's most popular wireless networking platform to AWS")),(0,o.kt)("h3",{id:""}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf group install --with-optional virtualization\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start libvirtd && sudo systemctl enable libvirtd\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We use the backing_store option to virt-install --disk to quickly create a new disk image and avoid writing to the original image we have downloaded. This new disk image can be easily thrown away.")),(0,o.kt)("p",null,"CTRL + ] to exit kvm\nto destroy run\nvirsh destroy fcos\nvirsh undefine --remove-all-storage fcos"),(0,o.kt)("h2",{id:"install-virtual-machine"},"Install Virtual Machine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"virt-install \\\n--connect=qemu:///system \\\n--os-variant=rhel4.0 \\\n--arch=x86_64 \\\n--cpu host \\\n--console pty,target_type=virtio \\\n--hvm \\\n--import \\\n--name=my_c9k_vm \\\n--disk path=C9800-CL.qcow2,bus=ide,format=qcow2 \\\n--vcpus=1,sockets=1,cores=1,threads=1 \\\n--ram=4096 \\\n--network=network:br10,model=virtio \\\n--network=network:br10,model=virtio \\\n--network=network:br10,model=virtio  \\\n--noreboot \\\n\n")),(0,o.kt)("h3",{id:"enter-these-commands-on-the-controller-to-setup-the-web-gui"},"Enter these commands on the controller to setup the web gui"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ios"},"conf t\nhostname 9800-1\nuser-name admin\n privilege 15\n password 0 Cisco123\n exit\nint gig 1\n no switchport\n ip address 10.10.10.10 255.255.255.0\n no shut\n exit\nint gig 2\n switchport\n switchport mode trunk\n switchport trunk native vlan 77\n no shut\n exit\nint vlan 77\n ip address 192.168.77.10 255.255.255.0\n no shut\n exit\nip route 10.10.10.0 255.255.255.0 10.10.10.1\nip route 0.0.0.0 0.0.0.0 192.168.77.1\nwireless management interface vlan 77\nap dot11 5ghz shutdown \nap dot11 24ghz shutdown \nap country BE,US\nno ap dot11 5ghz shutdown\nno ap dot11 24ghz shutdown\nexit\nwireless config vwlc-ssc key-size 2048 signature-algo sha256 password 0 Cisco123\nconf t\nip name-server 1.1.1.1\nntp server pool.ntp.org\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/quick-docs/getting-started-with-virtualization/"},"FedoraVirtGuide")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/9800-cloud/installation/b-c9800-cl-install-guide/installing_the_controller_in_kvm_environment.html"},"CiscoGuide")))}d.isMDXComponent=!0}}]);