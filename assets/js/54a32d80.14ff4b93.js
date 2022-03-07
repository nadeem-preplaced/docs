"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[27134],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79715:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_position:7},l="Events",s={unversionedId:"reference/dyte-meeting-events",id:"version-0.1.x/reference/dyte-meeting-events",isDocsHomePage:!1,title:"Events",description:"| Event               | Triggered when                                                                                                                                                                                 |",source:"@site/flutter_versioned_docs/version-0.1.x/reference/dyte-meeting-events.mdx",sourceDirName:"reference",slug:"/reference/dyte-meeting-events",permalink:"/flutter/0.1.x/reference/dyte-meeting-events",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.1.x/reference/dyte-meeting-events.mdx",tags:[],version:"0.1.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1646631540,formattedLastUpdatedAt:"3/7/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-0.1.1/mainSidebar",previous:{title:"DyteSelfParticipant",permalink:"/flutter/0.1.x/reference/self-participant"},next:{title:"UI Config options",permalink:"/flutter/0.1.x/reference/dyte-ui-config"}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Triggered when"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingConnected"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant has connected to the meeting but hasn\u2019t started producing or consuming content streams - think of this as establishing a successful connection to the meeting and nothing else")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingJoin"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant actually joins the meeting, and can start producing as well as consuming content streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingDisconnected"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant gets disconnected from the meeting for any reason")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingEnd"),(0,i.kt)("td",{parentName:"tr",align:null},"the meeting is ended by the host or by the organization (as an admin function)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participantJoin"),(0,i.kt)("td",{parentName:"tr",align:null},'another participant joins the meeting ("join" here as the same context as the ',(0,i.kt)("inlineCode",{parentName:"td"},"meetingJoin")," event)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participantLeave"),(0,i.kt)("td",{parentName:"tr",align:null},'another participant disconnects from the meeting ("disconnect" here as the same context as the ',(0,i.kt)("inlineCode",{parentName:"td"},"disconnect")," event)")))))}u.isMDXComponent=!0}}]);