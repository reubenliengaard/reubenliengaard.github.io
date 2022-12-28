"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),v=n,h=p["".concat(s,".").concat(v)]||p[v]||u[v]||i;return r?o.createElement(h,a(a({ref:t},d),{},{components:r})):o.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}v.displayName="MDXCreateElement"},8095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="Cisco Wireless Cloud Controller",l={unversionedId:"automation-virtual-machines/cisco-wireless-cloud-controller",id:"automation-virtual-machines/cisco-wireless-cloud-controller",title:"Cisco Wireless Cloud Controller",description:"## Introduction",source:"@site/docs-automation/automation-virtual-machines/cisco-wireless-cloud-controller.md",sourceDirName:"automation-virtual-machines",slug:"/automation-virtual-machines/cisco-wireless-cloud-controller",permalink:"/docs-automation/automation-virtual-machines/cisco-wireless-cloud-controller",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Virtual Machines",permalink:"/docs-automation/category/virtual-machines"},next:{title:"RouterOS",permalink:"/docs-automation/automation-virtual-machines/router-os"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What?",id:"what",level:3},{value:"Why?",id:"why",level:3},{value:"Body",id:"body",level:2},{value:"How?",id:"how",level:3},{value:"Adding syntax hilighting for RouterOS code",id:"adding-syntax-hilighting-for-routeros-code",level:2},{value:"Install Winbox",id:"install-winbox",level:2},{value:"Update RouterOS",id:"update-routeros",level:2},{value:"Forward a port for NextCloud remote access",id:"forward-a-port-for-nextcloud-remote-access",level:2},{value:"Create a static DNS entry for the server",id:"create-a-static-dns-entry-for-the-server",level:2},{value:"Redirect DNS packets to LAN",id:"redirect-dns-packets-to-lan",level:2},{value:"Set up DNS over HTTPS",id:"set-up-dns-over-https",level:2},{value:"Disable peer DNS",id:"disable-peer-dns",level:2},{value:"Create a new user and password, and delete the old one",id:"create-a-new-user-and-password-and-delete-the-old-one",level:2},{value:"Restrict user login to local network.",id:"restrict-user-login-to-local-network",level:2},{value:"Disable un-neccisary services",id:"disable-un-neccisary-services",level:2},{value:"Change SSH to non default port",id:"change-ssh-to-non-default-port",level:2},{value:"Restict Winbox login to local network.",id:"restict-winbox-login-to-local-network",level:2},{value:"Disable everything to do with MAC Server",id:"disable-everything-to-do-with-mac-server",level:3},{value:"Turn off local discovery",id:"turn-off-local-discovery",level:3},{value:"Disable bandwidth server",id:"disable-bandwidth-server",level:3},{value:"Force secure SSH",id:"force-secure-ssh",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cisco-wireless-cloud-controller"},"Cisco Wireless Cloud Controller"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("h3",{id:"what"},"What?"),(0,n.kt)("h3",{id:"why"},"Why?"),(0,n.kt)("h2",{id:"body"},"Body"),(0,n.kt)("h3",{id:"how"},"How?"),(0,n.kt)("h2",{id:"adding-syntax-hilighting-for-routeros-code"},"Adding syntax hilighting for RouterOS code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Ctrl + P\next install cperezabo.routeros-syntax```\n")),(0,n.kt)("h1",{id:"set-up-routeros"},"Set up RouterOS"),(0,n.kt)("h2",{id:"install-winbox"},"Install Winbox"),(0,n.kt)("p",null,"Here's a github project I found which helps automate installing Winbox on linux. clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mriza/winbox-installer.git"},"https://github.com/mriza/winbox-installer.git")," cd winbox-installer sudobash cd /tmp git\n./winbox-setup install"),(0,n.kt)("h2",{id:"update-routeros"},"Update RouterOS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"System > Packages > Check For Updates > Download And InstallSystem > Routerboard > Upgrade > Yes\n")),(0,n.kt)("h2",{id:"forward-a-port-for-nextcloud-remote-access"},"Forward a port for NextCloud remote access"),(0,n.kt)("p",null,"Will also probably need to open port 80 and dstnat it to port 8080 in order for LetsEncrypt to renew itscertificate at some point."),(0,n.kt)("p",null,"/ip firewall natadd action=dst-nat (^) chain=dstnat dst-port=$port in-interface-list=WAN\nprotocol tcp =\\to-addresses (^) =$ip to-ports=$port"),(0,n.kt)("h2",{id:"create-a-static-dns-entry-for-the-server"},"Create a static DNS entry for the server"),(0,n.kt)("p",null,"/ip dns add addressstatic=$ip (^) name=$domain"),(0,n.kt)("h2",{id:"redirect-dns-packets-to-lan"},"Redirect DNS packets to LAN"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/ip firewall nat add chain=dstnat in-interface-list=lan protocol=tcp dst-port=\naction =redirect to-ports=\n/ip firewall nat add chain=dstnat in-interface-list=lan protocol=udp dst-port=\naction=redirect to-ports=\n")),(0,n.kt)("h2",{id:"set-up-dns-over-https"},"Set up DNS over HTTPS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/tool /certificate import fetch url="https://cacerts.digicert.com/DigiCertGlobalRootCA.crt.pem"file-name=DigiCertGlobalRootCA.crt.pem\n/ip dns cert=yesset use-doh-server=https://cloudflare-dns.com/dns-query verify-doh-\n/ip dns set servers=1.1.1.\n')),(0,n.kt)("h2",{id:"disable-peer-dns"},"Disable peer DNS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/ip dhcp-client set use-peer-dns=no\n")),(0,n.kt)("h2",{id:"create-a-new-user-and-password-and-delete-the-old-one"},"Create a new user and password, and delete the old one"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/user /user addremove name admin=$name password=$password group=full\n")),(0,n.kt)("h2",{id:"restrict-user-login-to-local-network"},"Restrict user login to local network."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/user set 0 allowed-address=$ip\n")),(0,n.kt)("h2",{id:"disable-un-neccisary-services"},"Disable un-neccisary services"),(0,n.kt)("p",null,"/ip service /ip service printdisable (^) telnet,ftp,www,api,api-ssl"),(0,n.kt)("h2",{id:"change-ssh-to-non-default-port"},"Change SSH to non default port"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/ip service /ip service setprint ssh port=$new_port\n")),(0,n.kt)("h2",{id:"restict-winbox-login-to-local-network"},"Restict Winbox login to local network."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/ip service set winbox address=192.168.88.0/\n")),(0,n.kt)("h3",{id:"disable-everything-to-do-with-mac-server"},"Disable everything to do with MAC Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/tool mac-server /tool mac-server setprint allowed-interface-list =none\n")),(0,n.kt)("p",null,"(^) /tool mac-server mac-winbox set allowed-interface-list=none\n/tool mac-server mac-winbox print\n/tool mac-server ping /tool mac-server ping setprint enabled=no"),(0,n.kt)("h3",{id:"turn-off-local-discovery"},"Turn off local discovery"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/ip neighbor discovery-settings set discover-interface-list=none\n")),(0,n.kt)("h3",{id:"disable-bandwidth-server"},"Disable bandwidth server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/tool bandwidth-server set enabled=no\n")),(0,n.kt)("h2",{id:"force-secure-ssh"},"Force secure SSH"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/ip ssh set strong-crypto=yes\n")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("h2",{id:"references"},"References"))}p.isMDXComponent=!0}}]);