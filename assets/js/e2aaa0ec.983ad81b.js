"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[50258],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11179:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:1,web_core_version:"0.18.1"},p=void 0,m={unversionedId:"Reference/DyteClient",id:"version-0.2/Reference/DyteClient",isDocsHomePage:!1,title:"DyteClient",description:"The DyteClient class is the main class of the web core library.",source:"@site/react-native-core_versioned_docs/version-0.2/Reference/DyteClient.md",sourceDirName:"Reference",slug:"/Reference/DyteClient",permalink:"/react-native-core/Reference/DyteClient",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native-core_versioned_docs/version-0.2/Reference/DyteClient.md",tags:[],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,web_core_version:"0.18.1"},sidebar:"version-0.2/mainSidebar",previous:{title:"Functions to disable plugins",permalink:"/react-native-core/Plugins/disable-plugins"},next:{title:"DyteSelf",permalink:"/react-native-core/Reference/DyteSelf"}},s=[{value:"meeting.participants",id:"meetingparticipants",children:[]},{value:"meeting.self",id:"meetingself",children:[]},{value:"meeting.meta",id:"meetingmeta",children:[]},{value:"meeting.plugins",id:"meetingplugins",children:[]},{value:"meeting.chat",id:"meetingchat",children:[]},{value:"meeting.polls",id:"meetingpolls",children:[]},{value:"meeting.joinRoom()",id:"meetingjoinroom",children:[]},{value:"meeting.leaveRoom()",id:"meetingleaveroom",children:[]},{value:"meeting.init(options)",id:"meetinginitoptions",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_DyteClient"}),(0,r.kt)("p",null,"The DyteClient class is the main class of the web core library.\nAn object of the DyteClient class can be created using\n",(0,r.kt)("inlineCode",{parentName:"p"},"await DyteClient.init({ ... })"),". Typically, an object of ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteClient")," is\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient"},"DyteClient"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"instance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+participants"},".participants")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+self"},".self")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+meta"},".meta")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+plugins"},".plugins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+chat"},".chat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+polls"},".polls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+joinRoom"},".joinRoom()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient+leaveRoom"},".leaveRoom()")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"static"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteClient.init"},".init(options)"))))))),(0,r.kt)("a",{name:"module_DyteClient+participants"}),(0,r.kt)("h3",{id:"meetingparticipants"},"meeting.participants"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"participants")," object consists of 4 maps of participants,\n",(0,r.kt)("inlineCode",{parentName:"p"},"waitlisted"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"joined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pinned"),". The maps are indexed by\n",(0,r.kt)("inlineCode",{parentName:"p"},"peerId"),"s, and the values are the corresponding participant objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient+self"}),(0,r.kt)("h3",{id:"meetingself"},"meeting.self"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," object can be used to manipulate audio and video settings,\nand other configurations for the local participant. This exposes methods\nto enable and disable media tracks, share the user's screen, etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient+meta"}),(0,r.kt)("h3",{id:"meetingmeta"},"meeting.meta"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"room")," object stores information about the current meeting, such\nas chat messages, polls, room name, etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient+plugins"}),(0,r.kt)("h3",{id:"meetingplugins"},"meeting.plugins"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," object stores information about the plugins available in\nthe current meeting. It exposes methods to activate and deactivate them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient+chat"}),(0,r.kt)("h3",{id:"meetingchat"},"meeting.chat"),(0,r.kt)("p",null,"The chat object stores the chat messages that were sent in the meeting.\nThis includes text messages, images, and files."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient+polls"}),(0,r.kt)("h3",{id:"meetingpolls"},"meeting.polls"),(0,r.kt)("p",null,"The polls object stores the polls that were initiated in the meeting.\nIt exposes methods to create and vote on polls."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient+joinRoom"}),(0,r.kt)("h3",{id:"meetingjoinroom"},"meeting.joinRoom()"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"joinRoom()")," method can be used to join the meeting. A ",(0,r.kt)("inlineCode",{parentName:"p"},"roomJoined")," event\nis emitted on ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," when the room is joined successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient+leaveRoom"}),(0,r.kt)("h3",{id:"meetingleaveroom"},"meeting.leaveRoom()"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"leaveRoom()")," method can be used to leave a meeting."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("a",{name:"module_DyteClient.init"}),(0,r.kt)("h3",{id:"meetinginitoptions"},"meeting.init(options)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method can be used to instantiate the DyteClient class.\nThis returns an instance of DyteClient, which can be used to perform\nactions on the meeting."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteClient"},(0,r.kt)("code",null,"DyteClient")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"The options object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.roomName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the room.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.authToken"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization token received using the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.apiBase"),(0,r.kt)("td",{parentName:"tr",align:null},"The base URL of the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.defaults"),(0,r.kt)("td",{parentName:"tr",align:null},"The default audio and video settings.")))))}u.isMDXComponent=!0}}]);