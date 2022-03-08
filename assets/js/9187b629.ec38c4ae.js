"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[15106],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,g=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78677:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:3},p="Meeting",d={unversionedId:"reference/meeting",id:"version-0.5.x/reference/meeting",isDocsHomePage:!1,title:"Meeting",description:"Properties",source:"@site/react-native_versioned_docs/version-0.5.x/reference/meeting.mdx",sourceDirName:"reference",slug:"/reference/meeting",permalink:"/react-native/0.5.x/reference/meeting",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.5.x/reference/meeting.mdx",tags:[],version:"0.5.x",lastUpdatedBy:"Palash",lastUpdatedAt:1646744347,formattedLastUpdatedAt:"3/8/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.5.2/mainSidebar",previous:{title:"Connection Config",permalink:"/react-native/0.5.x/reference/connection-config"},next:{title:"DyteParticipant",permalink:"/react-native/0.5.x/reference/participant"}},c=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],m={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meeting"},"Meeting"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connectionConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./connection-config"},"DyteConnectionConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"Connection info about the current meeting in progress, as defined below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uiConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./dyte-ui-config"},"DyteUIConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"The UI and layout of the current meeting (see ",(0,i.kt)("a",{parentName:"td",href:"./../customize-meeting-ui"},"customize the meeting UI")," for available options)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participants"),(0,i.kt)("td",{parentName:"tr",align:null},"Array <",(0,i.kt)("a",{parentName:"td",href:"./self-participant"},"DyteSelfParticipant")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"./participant"},"DyteParticipant"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"Array of participants, including the current participant (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#controlling-individual-participants-and-actions"},"participant controls and actions")," for more info)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"self"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./self-participant"},"DyteSelfParticipant")),(0,i.kt)("td",{parentName:"tr",align:null},"The current participant (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#check-if-the-participant-is-current-participant"},"self participant controls")," for more info)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"Array <",(0,i.kt)("a",{parentName:"td",href:"./dyte-plugin"},"DytePlugin"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"Array of plugins enabled for the current meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Events"),(0,i.kt)("td",{parentName:"tr",align:null},"Enum (typeof ",(0,i.kt)("a",{parentName:"td",href:"./dyte-meeting-events"},"Events"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Enum of events emitted by the meeting component (see ",(0,i.kt)("a",{parentName:"td",href:"./../events"},"events")," for more details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"showSetupScreen"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Should the participants be shown the audio / video setup screen")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method name"),(0,i.kt)("th",{parentName:"tr",align:null},"Params (with data type)"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sendRoomMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"message: any"),(0,i.kt)("td",{parentName:"tr",align:null},"Send a custom event to the room (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"this section")," for usage)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sendMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"peerId: string, message: any"),(0,i.kt)("td",{parentName:"tr",align:null},"Send a message to specified peer (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"this section")," for usage)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"on"),(0,i.kt)("td",{parentName:"tr",align:null},"event: ",(0,i.kt)("a",{parentName:"td",href:"./dyte-meeting-events"},"DyteMeetingEvent"),", handler: function"),(0,i.kt)("td",{parentName:"tr",align:null},"Capture the event specified by the ",(0,i.kt)("inlineCode",{parentName:"td"},"event")," and execute ",(0,i.kt)("inlineCode",{parentName:"td"},"handler")," as the callback function with params supported by the event (see ",(0,i.kt)("a",{parentName:"td",href:"./../events"},"events")," for more details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"leaveRoom"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Makes the current participant leave the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"updateUIConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"uiConfig: ",(0,i.kt)("a",{parentName:"td",href:"./dyte-ui-config"},"DyteUIConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"Change the UI and layout of the current meeting according to the relevant params specified in the object (see ",(0,i.kt)("a",{parentName:"td",href:"./../customize-meeting-ui"},"customize the meeting UI")," for available options)")))))}s.isMDXComponent=!0}}]);