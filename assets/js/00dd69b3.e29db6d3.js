"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[5689],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1981:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="AC Current",s={unversionedId:"monitoring/reading-sensors-with-python/ac-current",id:"monitoring/reading-sensors-with-python/ac-current",title:"AC Current",description:"Hardware",source:"@site/docs/monitoring/reading-sensors-with-python/ac-current.md",sourceDirName:"monitoring/reading-sensors-with-python",slug:"/monitoring/reading-sensors-with-python/ac-current",permalink:"/docs/monitoring/reading-sensors-with-python/ac-current",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Publishing Maps with Leaflet",permalink:"/docs/category/publishing-maps-with-leaflet"},next:{title:"Starting Scripts with Systemd",permalink:"/docs/monitoring/reading-sensors-with-python/starting-scripts-with-systemd"}},l={},c=[{value:"Hardware",id:"hardware",level:3},{value:"Script",id:"script",level:3},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ac-current"},"AC Current"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RPICT7V1 AC current sensor "),(0,i.kt)("li",{parentName:"ul"},"SCT-013-000 100a Current Transformer"),(0,i.kt)("li",{parentName:"ul"},"UK: 77DB-06-09 Voltage Sensor")),(0,i.kt)("h3",{id:"script"},"Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'MQTT_SERV = "localhost"\nMQTT_PATH = "RPICT7V1"\nMQTT_USER = ""\nMQTT_PASS = ""\n\nCHANNELS = ["NodeID", "RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7",\n        "Irms1", "Irms2", "Irms3", "Irms4", "Irms5", "Irms6", "Irms7",\n        "Vrms"]\n\nimport paho.mqtt.client as mqtt\nimport serial\nser = serial.Serial(\'/dev/ttyAMA0\', 38400)\n\nclient = mqtt.Client("P1")\nclient.username_pw_set(MQTT_USER, MQTT_PASS)\nclient.connect(MQTT_SERV)\n\ntry:\n    while 1:\n        # Read one line from the serial buffer\n         line = ser.readline()\n     \n        # Remove the trailing carriage return line feed\n        line = line[:-2]\n     \n        # Create an array of the data\n        Z = line.split(\' \')\n     \n        # Print it for debug\n        print line\n     \n        # Publish to the MQTT broker\n        for i in range(len(Z)):\n            client.publish("%s/%s" % (MQTT_PATH, CHANNELS[i]), Z[i]) \n \nexcept KeyboardInterrupt:\n    client.disconnect()\n    ser.close()\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://lechacal.com/wiki/index.php?title=Raspberrypi_Current_and_Temperature_Sensor_Adaptor#RPICT_Series"},"RPICT7V1")))}u.isMDXComponent=!0}}]);