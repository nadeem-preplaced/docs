"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[68865],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:3},p="DyteMeetingHandler",c={unversionedId:"reference/meeting",id:"version-0.6.x/reference/meeting",isDocsHomePage:!1,title:"DyteMeetingHandler",description:"Properties",source:"@site/flutter_versioned_docs/version-0.6.x/reference/meeting.mdx",sourceDirName:"reference",slug:"/reference/meeting",permalink:"/flutter/reference/meeting",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.6.x/reference/meeting.mdx",tags:[],version:"0.6.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1646631540,formattedLastUpdatedAt:"3/7/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.6.x/mainSidebar",previous:{title:"DyteMeeting (Flutter widget)",permalink:"/flutter/reference/dyte-meeting"},next:{title:"DyteParticipant",permalink:"/flutter/reference/participant"}},d=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],u={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dytemeetinghandler"},"DyteMeetingHandler"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participants"),(0,i.kt)("td",{parentName:"tr",align:null},"Array <",(0,i.kt)("a",{parentName:"td",href:"./self-participant"},"DyteSelfParticipant")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"./participant"},"DyteParticipant"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"Array of participants, including the current participant (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#controlling-individual-participants-and-actions"},"participant controls and actions")," for more info)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"self"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./self-participant"},"DyteSelfParticipant")),(0,i.kt)("td",{parentName:"tr",align:null},"The current participant (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#check-if-the-participant-is-current-participant"},"self participant controls")," for more info)")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method name"),(0,i.kt)("th",{parentName:"tr",align:null},"Params (with data type)"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"updateUIConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"uiConfigOptions: ",(0,i.kt)("a",{parentName:"td",href:"./dyte-ui-config"},"Map <String, dynamic>")),(0,i.kt)("td",{parentName:"tr",align:null},"Change the UI and layout of the current meeting according to the relevant params specified in the object (see ",(0,i.kt)("a",{parentName:"td",href:"./../customize-meeting-ui"},"customize the meeting UI")," for available options)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"events.on"),(0,i.kt)("td",{parentName:"tr",align:null},"eventName: ",(0,i.kt)("a",{parentName:"td",href:"./dyte-meeting-events"},"String"),", context: Object?, callback: function(event: ",(0,i.kt)("a",{parentName:"td",href:"https://pub.dev/documentation/eventify/latest/eventify/Event-class.html"},"Event"),", context: Object?)"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the handler for given ",(0,i.kt)("inlineCode",{parentName:"td"},"eventName")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"callback")," function (see ",(0,i.kt)("a",{parentName:"td",href:"./../events"},"events")," for more details)")))))}s.isMDXComponent=!0}}]);