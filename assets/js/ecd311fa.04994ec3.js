"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[1331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},o="Generating text with OpenAI",p={unversionedId:"artificial-intelligence/generating-text-with-open-ai",id:"artificial-intelligence/generating-text-with-open-ai",title:"Generating text with OpenAI",description:"This is an example pet name generator app used in the OpenAI API quickstart tutorial. It uses the Next.js framework with React. Check out the tutorial or follow the instructions below to get set up.",source:"@site/docs/artificial-intelligence/generating-text-with-open-ai.md",sourceDirName:"artificial-intelligence",slug:"/artificial-intelligence/generating-text-with-open-ai",permalink:"/docs/artificial-intelligence/generating-text-with-open-ai",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Artificial Intelligence",permalink:"/docs/category/artificial-intelligence"},next:{title:"Generating text with OpenAI",permalink:"/docs/artificial-intelligence/translating-text"}},l={},c=[{value:"Setup",id:"setup",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generating-text-with-openai"},"Generating text with OpenAI"),(0,r.kt)("h1",{id:"openai-api-quickstart---nodejs-example-app"},"OpenAI API Quickstart - Node.js example app"),(0,r.kt)("p",null,"This is an example pet name generator app used in the OpenAI API ",(0,r.kt)("a",{parentName:"p",href:"https://beta.openai.com/docs/quickstart"},"quickstart tutorial"),". It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," framework with ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". Check out the tutorial or follow the instructions below to get set up."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you don\u2019t have Node.js installed, ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"install it from here"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone this repository")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate into the project directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd openai-quickstart-node\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the requirements"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a copy of the example environment variables file"),(0,r.kt)("p",{parentName:"li"},"On Linux systems: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cp .env.example .env\n")),(0,r.kt)("p",{parentName:"li"},"On Windows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$ copy .env.example .env\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your ",(0,r.kt)("a",{parentName:"p",href:"https://beta.openai.com/account/api-keys"},"API key")," to the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the app"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")))),(0,r.kt)("p",null,"You should now be able to access the app at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"! For the full context behind this example app, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://beta.openai.com/docs/quickstart"},"tutorial"),"."))}u.isMDXComponent=!0}}]);