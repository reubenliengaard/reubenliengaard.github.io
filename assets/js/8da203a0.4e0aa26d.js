"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[6374],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},_="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),_=c(t),p=r,u=_["".concat(i,".").concat(p)]||_[p]||m[p]||o;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[_]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2},l="Car OBD Port",s={unversionedId:"automation/read-sensors-with-python/car-obd-port",id:"automation/read-sensors-with-python/car-obd-port",title:"Car OBD Port",description:"Hardware",source:"@site/docs/automation/read-sensors-with-python/car-obd-port.md",sourceDirName:"automation/read-sensors-with-python",slug:"/automation/read-sensors-with-python/car-obd-port",permalink:"/docs/automation/read-sensors-with-python/car-obd-port",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AC Current",permalink:"/docs/automation/read-sensors-with-python/ac-current"},next:{title:"Carbon Dioxide",permalink:"/docs/automation/read-sensors-with-python/carbon-dioxide"}},i={},c=[{value:"Hardware",id:"hardware",level:3},{value:"Script",id:"script",level:3},{value:"References",id:"references",level:2}],d={toc:c};function _(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"car-obd-port"},"Car OBD Port"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OBD-II PIDs (On-board diagnostics Parameter IDs) are codes used to request data from a vehicle, used as a diagnostic tool.")),(0,r.kt)("h3",{id:"script"},"Script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python3\nimport obd\nimport time\nimport json\nimport paho.mqtt.client as mqtt\n\n# define variables\nconnection = obd.Async("/dev/ttyUSB0")\n\n# global variables to hold values\nlatest_speed = {}\nlatest_rpm = {}\nlatest_engine_load = {}\nlatest_coolant_temp = {}\nlatest_intake_pressure = {}\nlatest_intake_temp = {}\nlatest_maf = {}\nlatest_distance_w_mil = {}\nlatest_fuel_rail_pressure_direct = {}\nlatest_commanded_egr = {}\nlatest_fuel_level = {}\nlatest_barometric_pressure = {}\n\n# loop\ndef myLoop():\n    message = [\n                {\n                    "measurement": "obd",\n                        "fields": {\n                            "commanded_egr": latest_commanded_egr,\n                            "speed": latest_speed,\n                            "rpm": latest_rpm,\n                            "engine_load": latest_engine_load,\n                            "coolant_temp": latest_coolant_temp,\n                            "intake_pressure": latest_intake_pressure,\n                            "intake_temp": latest_intake_temp,                            \n                            "maf": latest_maf,\n                            "distance_w_mil": latest_distance_w_mil,\n                            "fuel_rail_pressure_direct": latest_fuel_rail_pressure_direct,\n                            "commanded_egr": latest_commanded_egr,\n                            "fuel_level": latest_fuel_level,\n                            "barometric_pressure": latest_barometric_pressure\n                    }\n            }\n            ]\n    # convert to json string\n    data_out=json.dumps(message) \n\n    # This is the Publisher  \n    client = mqtt.Client()\n    client.username_pw_set(username="admin",password="35d8e")\n    client.connect("localhost",1883,60)\n    client.publish("sensors/obd", data_out);\n    client.disconnect();\n    time.sleep(3)\n\n# callbacks for each sensor\ndef new_speed(r):\n    global latest_speed\n    latest_speed = r.value.magnitude\n    \ndef new_rpm(r):\n    global latest_rpm\n    latest_rpm = r.value.magnitude\n\ndef new_engine_load(r):\n    global latest_engine_load\n    latest_engine_load = r.value.magnitude\n   \ndef new_coolant_temp(r):\n    global latest_coolant_temp\n    latest_coolant_temp = r.value.magnitude\n    \ndef new_intake_pressure(r):\n    global latest_intake_pressure\n    latest_intake_pressure = r.value.magnitude\n    \ndef new_intake_temp(r):\n    global latest_intake_temp\n    latest_intake_temp = r.value.magnitude\n    \ndef new_maf(r):\n    global latest_maf\n    latest_maf = r.value.magnitude\n    \ndef new_distance_w_mil(r):\n    global latest_distance_w_mil\n    latest_distance_w_mil = r.value.magnitude\n    \ndef new_fuel_rail_pressure_direct(r):\n    global latest_fuel_rail_pressure_direct\n    latest_fuel_rail_pressure_direct =  r.value.magnitude\n    \ndef new_commanded_egr(r):\n    global latest_commanded_egr\n    latest_commanded_egr = r.value.magnitude\n    \ndef new_fuel_level(r):\n    global latest_fuel_level\n    latest_fuel_level = r.value.magnitude\n    \ndef new_barometric_pressure(r):\n    global latest_barometric_pressure\n    latest_barometric_pressure = r.value.magnitude\n   \n# callbacks will fire upon receipt of new values\nconnection.watch(obd.commands.SPEED, callback=new_speed)\nconnection.watch(obd.commands.RPM, callback=new_rpm)\nconnection.watch(obd.commands.ENGINE_LOAD, callback=new_engine_load)\nconnection.watch(obd.commands.COOLANT_TEMP, callback=new_coolant_temp)\nconnection.watch(obd.commands.INTAKE_PRESSURE, callback=new_intake_pressure)\nconnection.watch(obd.commands.INTAKE_TEMP, callback=new_intake_temp)\nconnection.watch(obd.commands.MAF, callback=new_maf)\nconnection.watch(obd.commands.DISTANCE_W_MIL, callback=new_distance_w_mil)\nconnection.watch(obd.commands.FUEL_RAIL_PRESSURE_DIRECT, callback=new_fuel_rail_pressure_direct)\nconnection.watch(obd.commands.COMMANDED_EGR, callback=new_commanded_egr)\nconnection.watch(obd.commands.FUEL_LEVEL, callback=new_fuel_level)\nconnection.watch(obd.commands.BAROMETRIC_PRESSURE, callback=new_barometric_pressure)\n\n# start connection\nconnection.start()\n\nwhile True:\n    myLoop()\n    time.sleep(3)\n\ntime.sleep(60000)\nconnection.stop()\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OBD-II_PIDs"},"Wikipedia"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VilmaH/Python-OBD-MQTT/blob/master/obdmqtt.py"},"GitHub")))}_.isMDXComponent=!0}}]);