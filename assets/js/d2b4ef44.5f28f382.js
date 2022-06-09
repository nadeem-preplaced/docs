"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[20299],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,u=p["".concat(o,".").concat(h)]||p[h]||g[h]||s;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10886:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],c={title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",slug:"receiving-chat-messages",tags:["web-core","chat"]},o="Receiving chat messages",l={unversionedId:"Chat/receiving-chat-messages",id:"version-0.2/Chat/receiving-chat-messages",isDocsHomePage:!1,title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",source:"@site/react-native-core_versioned_docs/version-0.2/06-Chat/03-receiving-chat-messages.mdx",sourceDirName:"06-Chat",slug:"/Chat/receiving-chat-messages",permalink:"/react-native-core/Chat/receiving-chat-messages",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native-core_versioned_docs/version-0.2/06-Chat/03-receiving-chat-messages.mdx",tags:[{label:"web-core",permalink:"/react-native-core/tags/web-core"},{label:"chat",permalink:"/react-native-core/tags/chat"}],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:3,frontMatter:{title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",slug:"receiving-chat-messages",tags:["web-core","chat"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Sending a chat message",permalink:"/react-native-core/Chat/sending-a-chat-message"},next:{title:"Other chat functions",permalink:"/react-native-core/Chat/other-chat-functions"}},m=[],g={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"receiving-chat-messages"},"Receiving chat messages"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"meeting.chat")," object emits events when new chat messages are received. You can listen for the ",(0,s.kt)("inlineCode",{parentName:"p"},"chatUpdate")," event to log when a new chat message is received."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.chat.on('chatUpdate', ({ message, messages }) => {\n    console.log(`Received message ${message}`);\n    console.log(`All messages in chat: ${messages.join(', ')}`);\n});\n")),(0,s.kt)("p",null,"Here, the ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," is of type ",(0,s.kt)("inlineCode",{parentName:"p"},"Message"),", as defined in ",(0,s.kt)("a",{parentName:"p",href:"./introduction"},"introduction"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," is a list of all chat messages in the meeting, which is the same as ",(0,s.kt)("inlineCode",{parentName:"p"},"meeting.chat.messages"),"."),(0,s.kt)("p",null,"When a chat message is received, the ",(0,s.kt)("inlineCode",{parentName:"p"},"meeting.chat.messages")," list is also updated."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(JSON.stringify(meeting.chat.messages));\nmeeting.chat.on('chatUpdate', () => {\n    console.log(JSON.stringify(meeting.chat.messages));\n});\n")))}p.isMDXComponent=!0}}]);