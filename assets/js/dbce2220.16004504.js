"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[17550],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Introducing chat",description:"Send and receive chat messages in a meeting.",slug:"introduction",tags:["web-core","chat"]},c="Introducing chat",l={unversionedId:"Chat/introduction",id:"version-0.2/Chat/introduction",isDocsHomePage:!1,title:"Introducing chat",description:"Send and receive chat messages in a meeting.",source:"@site/react-native-core_versioned_docs/version-0.2/06-Chat/01-introduction.mdx",sourceDirName:"06-Chat",slug:"/Chat/introduction",permalink:"/react-native-core/Chat/introduction",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native-core_versioned_docs/version-0.2/06-Chat/01-introduction.mdx",tags:[{label:"web-core",permalink:"/react-native-core/tags/web-core"},{label:"chat",permalink:"/react-native-core/tags/chat"}],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:1,frontMatter:{title:"Introducing chat",description:"Send and receive chat messages in a meeting.",slug:"introduction",tags:["web-core","chat"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Participant Events",permalink:"/react-native-core/Participants/participants/events"},next:{title:"Sending a chat message",permalink:"/react-native-core/Chat/sending-a-chat-message"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introducing-chat"},"Introducing chat"),(0,i.kt)("p",null,"The meeting chat object is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.chat"),", which has methods for sending and receiving messages. There are 3 types of messages that can be sent in chat - text messages, images, and files."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.chat.messages")," array contains all the messages that have been sent in the chat. This is an array of objects, where each object is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,i.kt)("p",null,"The type ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," is defined in the following manner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface BaseMessage<T extends MessageType> {\n    type: T;\n    userId: string;\n    displayName: string;\n    time: Date;\n    id: string;\n    read?: boolean;\n    pluginId?: string;\n    pinned?: boolean;\n}\n\ninterface TextMessage extends BaseMessage<MessageType.text> {\n    message: string;\n}\n\ninterface ImageMessage extends BaseMessage<MessageType.image> {\n    link: string;\n}\n\ninterface FileMessage extends BaseMessage<MessageType.file> {\n    name: string;\n    size: number;\n    link: string;\n}\n\ntype Message = TextMessage | ImageMessage | FileMessage;\n")))}d.isMDXComponent=!0}}]);