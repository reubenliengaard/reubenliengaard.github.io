"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[735],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>h});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?t.createElement(h,a(a({ref:r},c),{},{components:n})):t.createElement(h,a({ref:r},c))}));function h(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4380:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="AC Current",s={unversionedId:"rpi4-sensors-into-influxdb-pod-with-python/reading-rpi4-sensors-with-python/ac-current",id:"rpi4-sensors-into-influxdb-pod-with-python/reading-rpi4-sensors-with-python/ac-current",title:"AC Current",description:"Hardware",source:"@site/docs/rpi4-sensors-into-influxdb-pod-with-python/reading-rpi4-sensors-with-python/ac-current.md",sourceDirName:"rpi4-sensors-into-influxdb-pod-with-python/reading-rpi4-sensors-with-python",slug:"/rpi4-sensors-into-influxdb-pod-with-python/reading-rpi4-sensors-with-python/ac-current",permalink:"/docs/rpi4-sensors-into-influxdb-pod-with-python/reading-rpi4-sensors-with-python/ac-current",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python for Sensors on RPI4",permalink:"/docs/category/python-for-sensors-on-rpi4"},next:{title:"Starting Scripts with Systemd",permalink:"/docs/rpi4-sensors-into-influxdb-pod-with-python/reading-rpi4-sensors-with-python/starting-scripts-with-systemd"}},p={},l=[{value:"Hardware",id:"hardware",level:3},{value:"Script",id:"script",level:3},{value:"References",id:"references",level:2}],c={toc:l};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ac-current"},"AC Current"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RPICT7V1 AC current sensor "),(0,i.kt)("li",{parentName:"ul"},"SCT-013-000 100a Current Transformer"),(0,i.kt)("li",{parentName:"ul"},"UK: 77DB-06-09 Voltage Sensor")),(0,i.kt)("h3",{id:"script"},"Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'MQTT_SERV = "localhost"\nMQTT_PATH = "RPICT7V1"\nMQTT_USER = ""\nMQTT_PASS = ""\n\nCHANNELS = ["NodeID", "RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7",\n        "Irms1", "Irms2", "Irms3", "Irms4", "Irms5", "Irms6", "Irms7",\n        "Vrms"]\n\nimport paho.mqtt.client as mqtt\nimport serial\nser = serial.Serial(\'/dev/ttyAMA0\', 38400)\n\nclient = mqtt.Client("P1")\nclient.username_pw_set(MQTT_USER, MQTT_PASS)\nclient.connect(MQTT_SERV)\n\ntry:\n    while 1:\n        # Read one line from the serial buffer\n         line = ser.readline()\n     \n        # Remove the trailing carriage return line feed\n        line = line[:-2]\n     \n        # Create an array of the data\n        Z = line.split(\' \')\n     \n        # Print it for debug\n        print line\n     \n        # Publish to the MQTT broker\n        for i in range(len(Z)):\n            client.publish("%s/%s" % (MQTT_PATH, CHANNELS[i]), Z[i]) \n \nexcept KeyboardInterrupt:\n    client.disconnect()\n    ser.close()\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://lechacal.com/wiki/index.php?title=Raspberrypi_Current_and_Temperature_Sensor_Adaptor#RPICT_Series"},"RPICT7V1")))}u.isMDXComponent=!0}}]);