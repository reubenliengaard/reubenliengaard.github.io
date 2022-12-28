"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4751],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},l="Fedora Workstation Linux",i={unversionedId:"software-installation-guides/fedora-workstation-linux",id:"software-installation-guides/fedora-workstation-linux",title:"Fedora Workstation Linux",description:"Why Fedora?",source:"@site/docs/software-installation-guides/fedora-workstation-linux.md",sourceDirName:"software-installation-guides",slug:"/software-installation-guides/fedora-workstation-linux",permalink:"/docs/software-installation-guides/fedora-workstation-linux",draft:!1,editUrl:"https://github.com/reubenliengaard/docs/software-installation-guides/fedora-workstation-linux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Software Installation Guides",permalink:"/docs/category/software-installation-guides"},next:{title:"PostGIS Spatial Database",permalink:"/docs/software-installation-guides/postgis-spatial-database"}},s={},d=[{value:"live usb using media writer",id:"live-usb-using-media-writer",level:2},{value:"download tool",id:"download-tool",level:3},{value:"run tool",id:"run-tool",level:3},{value:"installer",id:"installer",level:2},{value:"reboot into installer",id:"reboot-into-installer",level:3},{value:"installation",id:"installation",level:3},{value:"first boot",id:"first-boot",level:2},{value:"enter wifi",id:"enter-wifi",level:3},{value:"connect online account",id:"connect-online-account",level:3},{value:"fast updates",id:"fast-updates",level:2},{value:"increase max downloads",id:"increase-max-downloads",level:3},{value:"switch to fast mirrors",id:"switch-to-fast-mirrors",level:3},{value:"update and upgrade",id:"update-and-upgrade",level:3},{value:"repositories",id:"repositories",level:2},{value:"rpm fusion",id:"rpm-fusion",level:3},{value:"flathub",id:"flathub",level:3},{value:"updates",id:"updates",level:2},{value:"upgrade",id:"upgrade",level:3},{value:"update",id:"update",level:3},{value:"firmware updates",id:"firmware-updates",level:3},{value:"reboot",id:"reboot",level:3},{value:"tweaks",id:"tweaks",level:2},{value:"enable tap to click in settings",id:"enable-tap-to-click-in-settings",level:3},{value:"install gnome tweak tool",id:"install-gnome-tweak-tool",level:3},{value:"show battery as percentage",id:"show-battery-as-percentage",level:3},{value:"extensions manager",id:"extensions-manager",level:3},{value:"add draw on screen 2 extension",id:"add-draw-on-screen-2-extension",level:2},{value:"add bluetooth quick connect extension",id:"add-bluetooth-quick-connect-extension",level:3},{value:"fonts",id:"fonts",level:3},{value:"battery optimize",id:"battery-optimize",level:3},{value:"basic software",id:"basic-software",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fedora-workstation-linux"},"Fedora Workstation Linux"),(0,r.kt)("p",null,"Why Fedora?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy to install"),(0,r.kt)("li",{parentName:"ul"},"Up to data packge repositories without conflicts"),(0,r.kt)("li",{parentName:"ul"},"Very polished well integrated experience"),(0,r.kt)("li",{parentName:"ul"},"Latest technologies"),(0,r.kt)("li",{parentName:"ul"},"Flakpak support"),(0,r.kt)("li",{parentName:"ul"},"Btrfs"),(0,r.kt)("li",{parentName:"ul"},"Backed by RedHat / IBM"),(0,r.kt)("li",{parentName:"ul"},"Stock Gnome"),(0,r.kt)("li",{parentName:"ul"},"Native podman support"),(0,r.kt)("li",{parentName:"ul"},"Wayland display manager, no more X11")),(0,r.kt)("h2",{id:"live-usb-using-media-writer"},"live usb using media writer"),(0,r.kt)("h3",{id:"download-tool"},"download tool"),(0,r.kt)("p",null,"Download it ",(0,r.kt)("a",{parentName:"p",href:"https://getfedora.org/en/workstation/download/"},"here")),(0,r.kt)("h3",{id:"run-tool"},"run tool"),(0,r.kt)("p",null,"insert usb, run tool, select desired version"),(0,r.kt)("h2",{id:"installer"},"installer"),(0,r.kt)("h3",{id:"reboot-into-installer"},"reboot into installer"),(0,r.kt)("p",null,"once finished, reboot whilst holding down boot menu key and boot into usb stick"),(0,r.kt)("h3",{id:"installation"},"installation"),(0,r.kt)("p",null,"click through installation, select encrypt and use a strong password"),(0,r.kt)("h2",{id:"first-boot"},"first boot"),(0,r.kt)("p",null,"reboot and remove usb stick"),(0,r.kt)("h3",{id:"enter-wifi"},"enter wifi"),(0,r.kt)("h3",{id:"connect-online-account"},"connect online account"),(0,r.kt)("h2",{id:"fast-updates"},"fast updates"),(0,r.kt)("h3",{id:"increase-max-downloads"},"increase max downloads"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo echo 'max_parallel_downloads=10' >> /etc/dnf/dnf.conf\n")),(0,r.kt)("h3",{id:"switch-to-fast-mirrors"},"switch to fast mirrors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo echo 'fastestmirror=True' >> /etc/dnf/dnf.conf\n")),(0,r.kt)("h3",{id:"update-and-upgrade"},"update and upgrade"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf update && sudo dnf upgrade\n")),(0,r.kt)("h2",{id:"repositories"},"repositories"),(0,r.kt)("h3",{id:"rpm-fusion"},"rpm fusion"),(0,r.kt)("p",null,"free rpm repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm\n")),(0,r.kt)("p",null,"non-free rpm repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm\n")),(0,r.kt)("h3",{id:"flathub"},"flathub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo\n")),(0,r.kt)("h2",{id:"updates"},"updates"),(0,r.kt)("h3",{id:"upgrade"},"upgrade"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf upgrade --refresh\n")),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf groupupdate core\n")),(0,r.kt)("h3",{id:"firmware-updates"},"firmware updates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fwupdmgr refresh --force\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fwupdmgr get-updates\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fwupdmgr update\n")),(0,r.kt)("h3",{id:"reboot"},"reboot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"reboot\n")),(0,r.kt)("h2",{id:"tweaks"},"tweaks"),(0,r.kt)("h3",{id:"enable-tap-to-click-in-settings"},"enable tap to click in settings"),(0,r.kt)("h3",{id:"install-gnome-tweak-tool"},"install gnome tweak tool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install gnome-tweak-tool\n")),(0,r.kt)("h3",{id:"show-battery-as-percentage"},"show battery as percentage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gsettings set org.gnome.desktop.interface show-battery-percentage true\n")),(0,r.kt)("h3",{id:"extensions-manager"},"extensions manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flatpak install org.gnome.Extensions\n")),(0,r.kt)("h2",{id:"add-draw-on-screen-2-extension"},"add draw on screen 2 extension"),(0,r.kt)("p",null,"Draw on screen 2 extension"),(0,r.kt)("h3",{id:"add-bluetooth-quick-connect-extension"},"add bluetooth quick connect extension"),(0,r.kt)("h3",{id:"fonts"},"fonts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install -y ibm-plex-fonts-all 'google-roboto*' 'mozilla-fira*' fira-code-fonts\n")),(0,r.kt)("h3",{id:"battery-optimize"},"battery optimize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install tlp tlp-rdw\n")),(0,r.kt)("h2",{id:"basic-software"},"basic software"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install -y unzip ranger vim\n")))}p.isMDXComponent=!0}}]);