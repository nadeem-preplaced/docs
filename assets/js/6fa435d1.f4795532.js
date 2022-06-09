"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[50009],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:5},p="DyteSelfParticipant",c={unversionedId:"reference/self-participant",id:"version-0.1.x/reference/self-participant",isDocsHomePage:!1,title:"DyteSelfParticipant",description:"Being a subclass of DyteParticipant, all the properties and methods of DyteParticipant are available to DyteSelfParticipant. Other than that, it exposes a few special properties and methods.",source:"@site/android_versioned_docs/version-0.1.x/reference/self-participant.mdx",sourceDirName:"reference",slug:"/reference/self-participant",permalink:"/android/0.1.x/reference/self-participant",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-0.1.x/reference/self-participant.mdx",tags:[],version:"0.1.x",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-0.1.30/mainSidebar",previous:{title:"DyteParticipant",permalink:"/android/0.1.x/reference/participant"},next:{title:"MeetingErrorListener",permalink:"/android/0.1.x/reference/dyte-errors"}},d=[{value:"Methods",id:"methods",children:[]}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dyteselfparticipant"},"DyteSelfParticipant"),(0,i.kt)("p",null,"Being a subclass of ",(0,i.kt)("a",{parentName:"p",href:"./participant"},(0,i.kt)("inlineCode",{parentName:"a"},"DyteParticipant")),", all the properties and methods of ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteParticipant")," are available to ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteSelfParticipant"),". Other than that, it exposes a few special properties and methods."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method name"),(0,i.kt)("th",{parentName:"tr",align:null},"Params (with data type)"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enableAudio"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Enable audio stream sharing from the participant to the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disableAudio"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Disable audio stream from another participant, effectively muting them for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enableVideo"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Enable video stream sharing from the participant to the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disableVideo"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Disable video stream from another participant, effectively blanking them out for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pin"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Pin the participant video to the grid for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"unpin"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Unpin the participant video from the grid for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"leaveRoom"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Makes the current participant leave the meeting")))))}m.isMDXComponent=!0}}]);