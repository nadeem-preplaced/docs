"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[46449],{56258:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return v}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(70499),u=n(55064),s=n(58215),c=["components"],l={sidebar_position:2},d="Quickstart",f={unversionedId:"quickstart",id:"version-0.2/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Here is how you can integrate Dyte's UI Kit into your project seamlessly.",source:"@site/ui-kit_versioned_docs/version-0.2/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/ui-kit/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/ui-kit_versioned_docs/version-0.2/quickstart.mdx",tags:[],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.2/mainSidebar",previous:{title:"Installation",permalink:"/ui-kit/installation"},next:{title:"Design System",permalink:"/ui-kit/design"}},m=[],p={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"Here is how you can integrate Dyte's UI Kit into your project seamlessly."),(0,a.kt)(u.Z,{groupId:"ui-quick",defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <dyte-meeting id=\"my-meeting\" show-setup-screen=\"true\"></dyte-meeting>\n\n  <script>\n    const init = async () => {\n      const meeting = await DyteClient.init({\n        authToken: '',\n        roomName: '',\n        defaults: {\n          audio: true,\n          video: true,\n        },\n      });\n\n      document.getElementById('my-meeting').meeting = meeting;\n    };\n    init();\n  <\/script>\n</body>\n"))),(0,a.kt)(s.Z,{value:"preview",mdxType:"TabItem"},(0,a.kt)("div",{ref:function(){return(0,o.XH)("my-meeting")},style:{width:"100%",height:"600px"}},(0,a.kt)("dyte-meeting",{id:"my-meeting","show-setup-screen":"false"})))))}v.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),i=n(79443);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),u="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,i=e.block,c=e.defaultValue,l=e.values,d=e.groupId,f=e.className,m=r.Children.toArray(e.children),p=null!=l?l:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,y=a(),h=y.tabGroupChoices,g=y.setTabGroupChoices,k=(0,r.useState)(v),b=k[0],w=k[1],x=[];if(null!=d){var I=h[d];null!=I&&I!==b&&p.some((function(e){return e.value===I}))&&w(I)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;w(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,i,a,o,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,u=o.innerHeight,c=o.innerWidth,n>=0&&a<=c&&i<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.target)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":i},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.default)("tabs__item",u,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},70499:function(e,t,n){n.d(t,{XH:function(){return l},iY:function(){return d},GB:function(){return f},J1:function(){return m}});var r=n(55196),i=n(15861),a=n(87757),o=n.n(a),u=n(28285);function s(){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.meeting){e.next=5;break}return e.next=3,u.Z.init({authToken:"",roomName:"",defaults:{audio:!1,video:!1}});case 3:t=e.sent,window.meeting=t;case 5:return e.abrupt("return",window.meeting);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=function(){var e=(0,i.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return n=e.sent,(r=document.getElementById(t))&&(r.meeting=n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)(o().mark((function e(t){var n,i,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:for(n=e.sent,i=document.getElementsByClassName(t),a=(0,r.Z)(i);!(u=a()).done;)u.value.meeting=n;return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return n=e.sent,document.querySelectorAll(t).forEach((function(e){e.peer=n.self,e.meeting=n})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.getElementById(t))&&(n.notification={id:"notif-1",message:"A notification message."});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},86010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.r(t),n.d(t,{default:function(){return i}})}}]);