"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4956],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2730:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1},i="AC Current",s={unversionedId:"automation/read-sensors-with-python/ac-current",id:"automation/read-sensors-with-python/ac-current",title:"AC Current",description:"Hardware",source:"@site/docs/automation/read-sensors-with-python/ac-current.md",sourceDirName:"automation/read-sensors-with-python",slug:"/automation/read-sensors-with-python/ac-current",permalink:"/docs/automation/read-sensors-with-python/ac-current",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sensors",permalink:"/docs/category/sensors"},next:{title:"Car OBD Port",permalink:"/docs/automation/read-sensors-with-python/car-obd-port"}},l={},c=[{value:"Hardware",id:"hardware",level:3},{value:"Script",id:"script",level:3},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ac-current"},"AC Current"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RPICT7V1 AC current sensor "),(0,a.kt)("li",{parentName:"ul"},"SCT-013-000 100a Current Transformer"),(0,a.kt)("li",{parentName:"ul"},"UK: 77DB-06-09 Voltage Sensor")),(0,a.kt)("h3",{id:"script"},"Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'MQTT_SERV = "localhost"\nMQTT_PATH = "RPICT7V1"\nMQTT_USER = ""\nMQTT_PASS = ""\n\nCHANNELS = ["NodeID", "RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7",\n        "Irms1", "Irms2", "Irms3", "Irms4", "Irms5", "Irms6", "Irms7",\n        "Vrms"]\n\nimport paho.mqtt.client as mqtt\nimport serial\nser = serial.Serial(\'/dev/ttyAMA0\', 38400)\n\nclient = mqtt.Client("P1")\nclient.username_pw_set(MQTT_USER, MQTT_PASS)\nclient.connect(MQTT_SERV)\n\ntry:\n    while 1:\n        # Read one line from the serial buffer\n         line = ser.readline()\n     \n        # Remove the trailing carriage return line feed\n        line = line[:-2]\n     \n        # Create an array of the data\n        Z = line.split(\' \')\n     \n        # Print it for debug\n        print line\n     \n        # Publish to the MQTT broker\n        for i in range(len(Z)):\n            client.publish("%s/%s" % (MQTT_PATH, CHANNELS[i]), Z[i]) \n \nexcept KeyboardInterrupt:\n    client.disconnect()\n    ser.close()\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://lechacal.com/wiki/index.php?title=Raspberrypi_Current_and_Temperature_Sensor_Adaptor#RPICT_Series"},"RPICT7V1")))}u.isMDXComponent=!0}}]);