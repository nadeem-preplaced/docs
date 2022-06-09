"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29532],{2679:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(70499),u=["components"],s={},c="Name Tag",m={unversionedId:"Customization/molecules/dyte-nametag",id:"version-0.2/Customization/molecules/dyte-nametag",isDocsHomePage:!1,title:"Name Tag",description:"Participant name along with their audio status",source:"@site/react-ui-kit_versioned_docs/version-0.2/04-Customization/04-molecules/dyte-nametag.md",sourceDirName:"04-Customization/04-molecules",slug:"/Customization/molecules/dyte-nametag",permalink:"/react-ui-kit/Customization/molecules/dyte-nametag",editUrl:"https://github.com/dyte-in/docs/tree/main/react-ui-kit_versioned_docs/version-0.2/04-Customization/04-molecules/dyte-nametag.md",tags:[],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",frontMatter:{},sidebar:"version-0.2/mainSidebar",previous:{title:"Meeting Title",permalink:"/react-ui-kit/Customization/molecules/dyte-meeting-title"},next:{title:"Notification",permalink:"/react-ui-kit/Customization/molecules/dyte-notification"}},p=[],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"name-tag"},"Name Tag"),(0,i.kt)("p",null,"Participant name along with their audio status"),(0,i.kt)("p",null,"You can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.self")," DyteSelf object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<DyteNameTag peer={meeting.self} />\n")),(0,i.kt)("p",null,"or ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteParticipant")," object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<DyteNameTag peer={meeting.participants.joined[0]} />\n")),(0,i.kt)("div",{class:"ui-preview space-x-6",ref:function(){return(0,o.GB)("#dyte-name-tag")}},(0,i.kt)("dyte-name-tag",{size:"sm",id:"dyte-name-tag"})))}d.isMDXComponent=!0},70499:function(e,t,n){n.d(t,{XH:function(){return m},iY:function(){return p},GB:function(){return l},J1:function(){return d}});var r=n(55196),a=n(15861),i=n(87757),o=n.n(i),u=n(28285);function s(){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.meeting){e.next=5;break}return e.next=3,u.Z.init({authToken:"",roomName:"",defaults:{audio:!1,video:!1}});case 3:t=e.sent,window.meeting=t;case 5:return e.abrupt("return",window.meeting);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return n=e.sent,(r=document.getElementById(t))&&(r.meeting=n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(o().mark((function e(t){var n,a,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:for(n=e.sent,a=document.getElementsByClassName(t),i=(0,r.Z)(a);!(u=i()).done;)u.value.meeting=n;return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return n=e.sent,document.querySelectorAll(t).forEach((function(e){e.peer=n.self,e.meeting=n})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.getElementById(t))&&(n.notification={id:"notif-1",message:"A notification message."});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);