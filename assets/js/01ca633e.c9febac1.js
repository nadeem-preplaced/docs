"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[54897],{73717:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=n(70499),u=["components"],a={},s="Clock",l={unversionedId:"Customization/molecules/dyte-clock",id:"version-0.2/Customization/molecules/dyte-clock",isDocsHomePage:!1,title:"Clock",description:"Meeting clock / timer",source:"@site/react-ui-kit_versioned_docs/version-0.2/04-Customization/04-molecules/dyte-clock.mdx",sourceDirName:"04-Customization/04-molecules",slug:"/Customization/molecules/dyte-clock",permalink:"/react-ui-kit/Customization/molecules/dyte-clock",editUrl:"https://github.com/dyte-in/docs/tree/main/react-ui-kit_versioned_docs/version-0.2/04-Customization/04-molecules/dyte-clock.mdx",tags:[],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",frontMatter:{},sidebar:"version-0.2/mainSidebar",previous:{title:"Toggle Buttons",permalink:"/react-ui-kit/Customization/atoms/toggle-buttons"},next:{title:"Meeting Title",permalink:"/react-ui-kit/Customization/molecules/dyte-meeting-title"}},m=[],d={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clock"},"Clock"),(0,i.kt)("p",null,"Meeting clock / timer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<DyteClock meeting={meeting} />\n")),(0,i.kt)("div",{class:"ui-preview space-x-4",ref:function(){return(0,c.XH)("dyte-clock")}},(0,i.kt)("dyte-clock",{size:"sm",id:"dyte-clock"})))}p.isMDXComponent=!0},70499:function(e,t,n){n.d(t,{XH:function(){return l},iY:function(){return m},GB:function(){return d},J1:function(){return p}});var r=n(55196),o=n(15861),i=n(87757),c=n.n(i),u=n(28285);function a(){return s.apply(this,arguments)}function s(){return(s=(0,o.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.meeting){e.next=5;break}return e.next=3,u.Z.init({authToken:"",roomName:"",defaults:{audio:!1,video:!1}});case 3:t=e.sent,window.meeting=t;case 5:return e.abrupt("return",window.meeting);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=function(){var e=(0,o.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:return n=e.sent,(r=document.getElementById(t))&&(r.meeting=n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,o.Z)(c().mark((function e(t){var n,o,i,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:for(n=e.sent,o=document.getElementsByClassName(t),i=(0,r.Z)(o);!(u=i()).done;)u.value.meeting=n;return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:return n=e.sent,document.querySelectorAll(t).forEach((function(e){e.peer=n.self,e.meeting=n})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.getElementById(t))&&(n.notification={id:"notif-1",message:"A notification message."});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);