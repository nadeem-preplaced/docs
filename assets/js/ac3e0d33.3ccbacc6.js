"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[19569],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,g=h["".concat(c,".").concat(m)]||h[m]||d[m]||a;return n?i.createElement(g,o(o({ref:t},l),{},{components:n})):i.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88957:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return h}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:6},c="Events",p={unversionedId:"events",id:"version-0.4.x/events",isDocsHomePage:!1,title:"Events",description:"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the meeting object, which is an instance of Meeting.",source:"@site/flutter_versioned_docs/version-0.4.x/events.mdx",sourceDirName:".",slug:"/events",permalink:"/flutter/0.4.x/events",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.4.x/events.mdx",tags:[],version:"0.4.x",lastUpdatedBy:"rohitkhirid",lastUpdatedAt:1649240097,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.4.x/mainSidebar",previous:{title:"Advanced usage",permalink:"/flutter/0.4.x/advanced-usage"},next:{title:"Sample app",permalink:"/flutter/0.4.x/sample-app"}},l=[{value:"Connected to the meeting",id:"connected-to-the-meeting",children:[]},{value:"Joined the meeting",id:"joined-the-meeting",children:[]},{value:"Disconnected from the meeting",id:"disconnected-from-the-meeting",children:[]},{value:"End of the meeting",id:"end-of-the-meeting",children:[]},{value:"Another participant joins the meeting",id:"another-participant-joins-the-meeting",children:[]},{value:"Another participant leaves the meeting",id:"another-participant-leaves-the-meeting",children:[]}],d={toc:l};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting")," object, which is an instance of ",(0,a.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,a.kt)("inlineCode",{parentName:"a"},"Meeting")),"."),(0,a.kt)("h3",{id:"connected-to-the-meeting"},"Connected to the meeting"),(0,a.kt)("p",null,"This event is triggered when the participant has connected to the meeting but hasn't started producing or consuming content streams. Think of this as establishing a successful connection to the meeting and nothing else."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingConnected', this, (ev, cont) {\n\n});\n")),(0,a.kt)("h3",{id:"joined-the-meeting"},"Joined the meeting"),(0,a.kt)("p",null,"This event is triggered when the participant actually joins the meeting, and can start producing as well as consuming content streams."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingJoin', this, (ev, cont) {\n\n});\n")),(0,a.kt)("h3",{id:"disconnected-from-the-meeting"},"Disconnected from the meeting"),(0,a.kt)("p",null,"This event is triggered when the participant gets disconnected from the meeting for any reason. It could be a bad network connection, the meeting being exited by the participant manually, the meeting tab / browser / app being closed by the participant, or just any other reason."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingDisconnected', this, (ev, cont) {\n\n});\n")),(0,a.kt)("h3",{id:"end-of-the-meeting"},"End of the meeting"),(0,a.kt)("p",null,"This event is triggered when the meeting is ended by the host or by the organization (as an admin function). In this case, all the participants are kicked out and you can take actions such as asking for feedback or redirecting to an exercise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingEnd', this, (ev, cont) {\n\n});\n")),(0,a.kt)("h3",{id:"another-participant-joins-the-meeting"},"Another participant joins the meeting"),(0,a.kt)("p",null,'This event is triggered when another participant joins the meeting. "Join" here as the same context as the ',(0,a.kt)("inlineCode",{parentName:"p"},"meetingJoined")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dyte_client/dyteParticipant.dart';\nmeeting.events.on('participantJoin', this, (ev, cont) {\n    DyteParticipant p = ev.eventData as DyteParticipant;\n});\n")),(0,a.kt)("h3",{id:"another-participant-leaves-the-meeting"},"Another participant leaves the meeting"),(0,a.kt)("p",null,'This event is triggered when another participant disconnects from the meeting. "Disconnect" here as the same context as the ',(0,a.kt)("inlineCode",{parentName:"p"},"disconnect")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dyte_client/dyteParticipant.dart';\nmeeting.events.on('participantLeave', this, (ev, cont) {\n    DyteParticipant p = ev.eventData as DyteParticipant;\n});\n")))}h.isMDXComponent=!0}}]);