"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[66698],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27942:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={title:"Voting on a poll",description:"Voting on polls in a meeting.",slug:"voting-on-a-poll",tags:["web-core","polls","votes"]},p="Voting on a poll",s={unversionedId:"Polls/voting-on-a-poll",id:"version-0.26.x/Polls/voting-on-a-poll",isDocsHomePage:!1,title:"Voting on a poll",description:"Voting on polls in a meeting.",source:"@site/web-core_versioned_docs/version-0.26.x/07-Polls/03-voting-on-a-poll.mdx",sourceDirName:"07-Polls",slug:"/Polls/voting-on-a-poll",permalink:"/web-core/0.26.x/Polls/voting-on-a-poll",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.26.x/07-Polls/03-voting-on-a-poll.mdx",tags:[{label:"web-core",permalink:"/web-core/0.26.x/tags/web-core"},{label:"polls",permalink:"/web-core/0.26.x/tags/polls"},{label:"votes",permalink:"/web-core/0.26.x/tags/votes"}],version:"0.26.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656138642,formattedLastUpdatedAt:"6/25/2022",sidebarPosition:3,frontMatter:{title:"Voting on a poll",description:"Voting on polls in a meeting.",slug:"voting-on-a-poll",tags:["web-core","polls","votes"]},sidebar:"version-0.26.x/mainSidebar",previous:{title:"Creating a poll",permalink:"/web-core/0.26.x/Polls/creating-a-poll"},next:{title:"Other poll functions",permalink:"/web-core/0.26.x/Polls/other-poll-functions"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"voting-on-a-poll"},"Voting on a poll"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"meeting.polls.vote()")," method can be used to register a vote on a poll. It accepts the following params."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the poll that is to be voted on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The index of the option.")))),(0,l.kt)("p",null,"The following snippet votes for the 1st option on the 1st poll created in the meeting."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const poll = meeting.polls.items[0];\nawait meeting.poll.vote(poll.id, 0)\n")))}m.isMDXComponent=!0}}]);