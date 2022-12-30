"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[4838],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1898:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},i="AC Current",s={unversionedId:"automation/python-for-sensors/ac-current",id:"automation/python-for-sensors/ac-current",title:"AC Current",description:"Hardware",source:"@site/docs/automation/python-for-sensors/ac-current.md",sourceDirName:"automation/python-for-sensors",slug:"/automation/python-for-sensors/ac-current",permalink:"/docs/automation/python-for-sensors/ac-current",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Read Sensors with Python",permalink:"/docs/category/read-sensors-with-python"},next:{title:"Car OBD Port",permalink:"/docs/automation/python-for-sensors/car-obd-port"}},l={},c=[{value:"Hardware",id:"hardware",level:3},{value:"Script",id:"script",level:3},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ac-current"},"AC Current"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RPICT7V1 AC current sensor "),(0,o.kt)("li",{parentName:"ul"},"SCT-013-000 100a Current Transformer"),(0,o.kt)("li",{parentName:"ul"},"UK: 77DB-06-09 Voltage Sensor")),(0,o.kt)("h3",{id:"script"},"Script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'MQTT_SERV = "localhost"\nMQTT_PATH = "RPICT7V1"\nMQTT_USER = ""\nMQTT_PASS = ""\n\nCHANNELS = ["NodeID", "RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7",\n        "Irms1", "Irms2", "Irms3", "Irms4", "Irms5", "Irms6", "Irms7",\n        "Vrms"]\n\nimport paho.mqtt.client as mqtt\nimport serial\nser = serial.Serial(\'/dev/ttyAMA0\', 38400)\n\nclient = mqtt.Client("P1")\nclient.username_pw_set(MQTT_USER, MQTT_PASS)\nclient.connect(MQTT_SERV)\n\ntry:\n    while 1:\n        # Read one line from the serial buffer\n         line = ser.readline()\n     \n        # Remove the trailing carriage return line feed\n        line = line[:-2]\n     \n        # Create an array of the data\n        Z = line.split(\' \')\n     \n        # Print it for debug\n        print line\n     \n        # Publish to the MQTT broker\n        for i in range(len(Z)):\n            client.publish("%s/%s" % (MQTT_PATH, CHANNELS[i]), Z[i]) \n \nexcept KeyboardInterrupt:\n    client.disconnect()\n    ser.close()\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://lechacal.com/wiki/index.php?title=Raspberrypi_Current_and_Temperature_Sensor_Adaptor#RPICT_Series"},"RPICT7V1")))}u.isMDXComponent=!0}}]);