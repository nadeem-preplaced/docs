"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[73719],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89210:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"Quickstart",description:"Quickstart guide for react-native-core.",slug:"quickstart",tags:["react-native-core","quickstart","setup"]},u="Quickstart",s={unversionedId:"quickstart",id:"version-0.2/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Quickstart guide for react-native-core.",source:"@site/react-native-core_versioned_docs/version-0.2/02-quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/react-native-core/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native-core_versioned_docs/version-0.2/02-quickstart.md",tags:[{label:"react-native-core",permalink:"/react-native-core/tags/react-native-core"},{label:"quickstart",permalink:"/react-native-core/tags/quickstart"},{label:"setup",permalink:"/react-native-core/tags/setup"}],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:2,frontMatter:{title:"Quickstart",description:"Quickstart guide for react-native-core.",slug:"quickstart",tags:["react-native-core","quickstart","setup"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Installation",permalink:"/react-native-core/installation"},next:{title:"React Hooks",permalink:"/react-native-core/Hooks-provider"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useDyteClient } from '@dytesdk/react-web-core';\n\nfunction App() {\n  const [ client, initClient ] = useDyteClient();\n\n  useEffect(() => {\n    initClient({\n      roomName: '<room-name>',\n      authToken: '<auth-token>',\n    });\n  }, []);\n\n  return (\n    <DyteProvider value={client}>\n      <YourMeetingComponent />\n    </DyteProvider>\n  );\n}\n")),(0,i.kt)("p",null,"You can get the roomName and authToken using our backend APIs and then pass it to the init method of DyteClient."),(0,i.kt)("p",null,"Now at this point you have joined the meeting, the next steps would be configuring local media publishing and participant's media playback"))}d.isMDXComponent=!0}}]);