"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47107],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,p=m["".concat(u,".").concat(f)]||m[f]||d[f]||r;return n?i.createElement(p,o(o({ref:t},s),{},{components:n})):i.createElement(p,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=n(55064),l=n(58215),u=["components"],c={sidebar_position:3},s="Basic Usage",d={unversionedId:"usage",id:"version-1.2.8/usage",isDocsHomePage:!1,title:"Basic Usage",description:"Configure the meeting connection",source:"@site/ios_versioned_docs/version-1.2.8/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/ios/1.2.8/usage",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.2.8/usage.mdx",tags:[],version:"1.2.8",lastUpdatedBy:"rohitkhirid",lastUpdatedAt:1649240097,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-1.2.8/mainSidebar",previous:{title:"Quickstart",permalink:"/ios/1.2.8/quickstart"},next:{title:"Customize the meeting UI",permalink:"/ios/1.2.8/customize-meeting-ui"}},m=[{value:"Configure the meeting connection",id:"configure-the-meeting-connection",children:[]},{value:"Choose between programmatic initialization of view or view initialization using Storyboard",id:"choose-between-programmatic-initialization-of-view-or-view-initialization-using-storyboard",children:[{value:"Programatic view initialization",id:"programatic-view-initialization",children:[]},{value:"Storyboard view initialization",id:"storyboard-view-initialization",children:[]}]},{value:"Join the meeting",id:"join-the-meeting",children:[]}],f={toc:m};function p(e){var t=e.components,c=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,i.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("h2",{id:"configure-the-meeting-connection"},"Configure the meeting connection"),(0,r.kt)("p",null,"You need to pass a ",(0,r.kt)("a",{parentName:"p",href:"./reference/connection-config"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteMeetingConfig"))," to ",(0,r.kt)("a",{parentName:"p",href:"./reference/dyte-meeting"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteMeetingView"))," to define which meeting should the client connect to and a couple of other setup parameters, out of which only ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"roomName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," are mandatory."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'import DyteSdk;\n\nlet  config = DyteMeetingConfig();\nmeetingConfig.roomName = "YOUR_ROOM_NAME";\nmeetingConfig.authToken = "YOUR_AUTH_TOKEN";\n'))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'@import DyteSdk;\n\nDyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\nmeetingConfig.roomName = @"YOUR_ROOM_NAME";\nmeetingConfig.authToken = @"YOUR_AUTH_TOKEN";\n')))),(0,r.kt)("h2",{id:"choose-between-programmatic-initialization-of-view-or-view-initialization-using-storyboard"},"Choose between programmatic initialization of view or view initialization using Storyboard"),(0,r.kt)("h3",{id:"programatic-view-initialization"},"Programatic view initialization"),(0,r.kt)("p",null,"On a button click or similar user action, you can call the following code."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let dyteView = DyteMeetingView(frame: CGRect(x: 0, y: 0, width: self.view.bounds.size.width, height:self.view.bounds.size.height ))\nself.view.addSubview(dyteView)\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"DyteMeetingView *dyteView = [[DyteMeetingView alloc] initWithFrame:CGRectMake(0.0, 0.0, meetingConfig.width, meetingConfig.height)];\n[self.view addSubview:dyteView];\n")))),(0,r.kt)("h3",{id:"storyboard-view-initialization"},"Storyboard view initialization"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a View in Storyboard and set it's custom class to ",(0,r.kt)("inlineCode",{parentName:"li"},"DyteMeetingView"),". Similar to above example, if you want to use ",(0,r.kt)("inlineCode",{parentName:"li"},"tag"),", you can set that too in Storyboard.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"xcode-screenshot-showing-storyboard-setup",src:n(35874).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Reference the view in your code and initiate the meeting.")),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let dyteView = self.view as DyteMeetingView\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"DyteMeetingView *dyteView = (DyteMeetingView *) self.view;\n")))),(0,r.kt)("h2",{id:"join-the-meeting"},"Join the meeting"),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"dyteView.join(config)\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[dyteView join:meetingConfig];\n")))))}p.isMDXComponent=!0},58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(67294),a=n(79443);var r=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,s=e.values,d=e.groupId,m=e.className,f=i.Children.toArray(e.children),p=null!=s?s:f.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),b=v.tabGroupChoices,y=v.setTabGroupChoices,w=(0,i.useState)(g),h=w[0],k=w[1],C=[];if(null!=d){var N=b[d];null!=N&&N!==h&&p.some((function(e){return e.value===N}))&&k(N)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),i=p[n].value;k(i),null!=d&&(y(d,i),setTimeout((function(){var e,n,i,a,r,o,l,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&a<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=C.indexOf(e.target)+1;n=C[i]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.default)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,i.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},86010:function(e,t,n){function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})},35874:function(e,t,n){t.Z=n.p+"assets/images/ios-setup-4e05106d2933e92cfaac387752ad62bb.png"}}]);