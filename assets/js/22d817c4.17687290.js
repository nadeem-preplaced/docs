"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[89686],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],p={sidebar_position:5},l="Advanced usage",c={unversionedId:"advanced-usage",id:"version-0.5.x/advanced-usage",isDocsHomePage:!1,title:"Advanced usage",description:"Turn on the setup / preview screen",source:"@site/flutter_versioned_docs/version-0.5.x/advanced-usage.mdx",sourceDirName:".",slug:"/advanced-usage",permalink:"/flutter/0.5.x/advanced-usage",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.5.x/advanced-usage.mdx",tags:[],version:"0.5.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1646631540,formattedLastUpdatedAt:"3/7/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-0.5.x/mainSidebar",previous:{title:"Customize the meeting UI",permalink:"/flutter/0.5.x/customize-meeting-ui"},next:{title:"Events",permalink:"/flutter/0.5.x/events"}},s=[{value:"Turn on the setup / preview screen",id:"turn-on-the-setup--preview-screen",children:[]},{value:"Dynamic codec switching",id:"dynamic-codec-switching",children:[]},{value:"Control the meeting, and take meeting &amp; participant actions",id:"control-the-meeting-and-take-meeting--participant-actions",children:[]},{value:"Replace the meeting control buttons with your own buttons",id:"replace-the-meeting-control-buttons-with-your-own-buttons",children:[{value:"Mic control",id:"mic-control",children:[]},{value:"Camera control",id:"camera-control",children:[]},{value:"Leave meeting",id:"leave-meeting",children:[]}]},{value:"Get list of all participants in the meeting",id:"get-list-of-all-participants-in-the-meeting",children:[]},{value:"Controlling individual participants and actions",id:"controlling-individual-participants-and-actions",children:[{value:"Get participant list",id:"get-participant-list",children:[]},{value:"Participant info and actions",id:"participant-info-and-actions",children:[]}]}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,r.kt)("h2",{id:"turn-on-the-setup--preview-screen"},"Turn on the setup / preview screen"),(0,r.kt)("p",null,"The audio / video setup screen that appears for the participant right before getting into the meeting is turned off by default. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"showSetupScreen")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to turn it on (default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"{10}","{10}":!0},'SizedBox(\n    width: <width>,\n    height: <height>,\n    child: DyteMeeting(\n        roomName: "<roomName>",\n        authToken: "<authToken>",\n        onInit: (DyteMeetingHandler meeting) async {\n          // your handler\n        },\n        showSetupScreen: true,\n    )\n)\n')),(0,r.kt)("h2",{id:"dynamic-codec-switching"},"Dynamic codec switching"),(0,r.kt)("p",null,"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on participants' video codec support. VP9 is a superior codec but not all browsers support it. If you set ",(0,r.kt)("inlineCode",{parentName:"p"},"autoTune")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", Dyte will use VP8 only for all participants (default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"{10}","{10}":!0},'SizedBox(\n    width: <width>,\n    height: <height>,\n    child: DyteMeeting(\n        roomName: "<roomName>",\n        authToken: "<authToken>",\n        onInit: (DyteMeetingHandler meeting) async {\n          // your handler\n        },\n        autoTune: false,\n    )\n)\n')),(0,r.kt)("h2",{id:"control-the-meeting-and-take-meeting--participant-actions"},"Control the meeting, and take meeting & participant actions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingHandler")," instance (referenced as ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting")," above) helps you interact with the meeting. You can take actions on the meeting as well as the participants. You can also setup custom controls to that interact with the meeting in certain ways that help you send events and messages across to other participants in the meeting. You can find the complete reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingHandler")," type ",(0,r.kt)("a",{parentName:"p",href:"./reference/meeting"},"here"),". Read on to understand how to use these individual controls."),(0,r.kt)("h2",{id:"replace-the-meeting-control-buttons-with-your-own-buttons"},"Replace the meeting control buttons with your own buttons"),(0,r.kt)("p",null,"Let's say you don't want to give many options to the participants in a meeting, other than the basic audio and video turning on, or you don't like our buttons and control bar design (you really should give us feedback too, in this case), or for any other reason - you just want to build your own buttons for basic meeting controls. This is possible with Dyte, with the minor caveat that you will need to put some validations at your end."),(0,r.kt)("p",null,"First thing in such a scenario would be to do away with our control bar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({ controlBar: false });\n")),(0,r.kt)("p",null,"Now you can perform the basic functions of a meeting, like below. These functions can be used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," handlers of your own buttons."),(0,r.kt)("h3",{id:"mic-control"},"Mic control"),(0,r.kt)("p",null,"To turn off the mic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.self.disableAudio();\n")),(0,r.kt)("p",null,"To turn on the mic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.self.enableAudio();\n")),(0,r.kt)("h3",{id:"camera-control"},"Camera control"),(0,r.kt)("p",null,"To turn off the camera"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.self.disableVideo();\n")),(0,r.kt)("p",null,"To turn on the camera"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.self.enableVideo();\n")),(0,r.kt)("h3",{id:"leave-meeting"},"Leave meeting"),(0,r.kt)("p",null,"To leave the meeting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.leaveRoom();\n")),(0,r.kt)("h2",{id:"get-list-of-all-participants-in-the-meeting"},"Get list of all participants in the meeting"),(0,r.kt)("p",null,"You can get a list of all participants in the meeting using the ",(0,r.kt)("inlineCode",{parentName:"p"},"participants")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let participantList = meeting.participants;\n")),(0,r.kt)("p",null,"sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"participantList")," to an array whose elements are instances of type ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteParticipant"),", whose prototype is defined below in the reference section and can be directly used as a type if you prefer using TypeScript bindings. There will be exactly one element of type ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteSelfParticipant"),", which refers to the current participant."),(0,r.kt)("h2",{id:"controlling-individual-participants-and-actions"},"Controlling individual participants and actions"),(0,r.kt)("p",null,"Dyte client SDK provide methods and properties to help you control participant actions and certain UI elements. This could include actions that affect the participant themselves as well as other participants (like a host with privileged permissions may want to control the video of other participants). This section defines all the possible properties and actions that can be taken."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remember that despite the functions being available to every participant via the client SDK, they will not take affect until coupled with the right permissions for the participant who intends to use these."))),(0,r.kt)("h3",{id:"get-participant-list"},"Get participant list"),(0,r.kt)("p",null,"To get a list of all participants, use ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.participants"),": it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Array[DyteParticipant|DyteSelfParticipant]")," where all meeting participants are ",(0,r.kt)("a",{parentName:"p",href:"./reference/participant"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteParticipant"))," and the current participant is ",(0,r.kt)("a",{parentName:"p",href:"./reference/self-participant"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteSelfParticipant")),"."),(0,r.kt)("h3",{id:"participant-info-and-actions"},"Participant info and actions"),(0,r.kt)("p",null,"Once you get the array of participants as mentioned above, you can iterate over that and get certain info about every participant."),(0,r.kt)("p",null,"We will consider the following iterator for the next section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.participants.forEach((p) => {\n  // participant specific code goes here\n});\n")),(0,r.kt)("h4",{id:"peer-id"},"Peer ID"),(0,r.kt)("p",null,"Get unique ID for every participant. This ID is generated by Dyte when a participant joins the meeting. This ID is used for referring to a participant within Dyte, such as for ",(0,r.kt)("a",{parentName:"p",href:"#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"sending custom messages"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even if the same participant, using the same auth token, rejoins the meeting, for example by refreshing the page / app or due to connection drop, the peer ID would be refreshed in that case."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let peerID = p.id;\n")),(0,r.kt)("p",null,"sets the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"peerID")," to a UUID string."),(0,r.kt)("h4",{id:"client-specific-id"},"Client specific ID"),(0,r.kt)("p",null,"Get the client specific ID as you have specified in the add participant API call. You may want to decide exposing custom controls or build other business logic based on this identifier, which helps you find the participant info in your system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let clientSpecificID = p.clientSpecificId;\n")),(0,r.kt)("h4",{id:"participant-name"},"Participant name"),(0,r.kt)("p",null,"Get the participant name as you have specified in the add participant API call. The participant may have changed this name, if enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let name = p.name;\n")),(0,r.kt)("h4",{id:"participant-thumbnail-photo--avatar"},"Participant thumbnail photo / avatar"),(0,r.kt)("p",null,"Get the participant photo as you have specified in the add participant API call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let name = p.picture;\n")),(0,r.kt)("h4",{id:"check-if-participants-audio-is-on"},"Check if participant's audio is on"),(0,r.kt)("p",null,"To check whether a participant's audio is on (mic is turned on), you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let audio = p.audioEnabled;\n")),(0,r.kt)("p",null,"which sets the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"audio")," to a boolean specifying if the mic is on or not."),(0,r.kt)("h4",{id:"check-if-participants-video-is-on"},"Check if participant's video is on"),(0,r.kt)("p",null,"To check whether a participant's video is on (camera is turned on), you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let video = p.videoEnabled;\n")),(0,r.kt)("p",null,"which sets the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"video")," to a boolean specifying if the camera is on or not."),(0,r.kt)("h4",{id:"check-if-the-participant-is-pinned-to-the-grid"},"Check if the participant is pinned to the grid"),(0,r.kt)("p",null,"To check whether a participant's video is pinned to the meeting grid; by the host, by the user, by the preset, or by any other mechanism; you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"let pinned = p.isPinned;\n")),(0,r.kt)("p",null,"which sets the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"pinned")," to a boolean specifying whether the video is pinned or not."))}u.isMDXComponent=!0}}]);