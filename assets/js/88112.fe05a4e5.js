"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[88112],{88112:function(t,e,s){s.r(e),s.d(e,{dyte_chat_toggle:function(){return c}});var a=s(13441),i=s(14878),n=s(10670);const c=class{constructor(t){(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.lastMessageCount=0,this.iconPack=i.d,this.t=(0,n.u)(),this.chatActive=!1,this.unreadMessageCount=0,this.toggleChat=()=>{this.chatActive=!(this.states.activeSidebar&&"chat"===this.states.sidebar),this.unreadMessageCount=0,this.lastMessageCount=this.meeting.chat.messages.length,this.stateUpdate.emit({activeSidebar:this.chatActive,sidebar:this.chatActive?"chat":"none"})}}connectedCallback(){this.statesChanged(this.states),this.meetingChanged(this.meeting)}meetingChanged(t){null!=t&&(this.chatUpdateListener=({message:e})=>{if(null!=e){const e=t.chat.messages.length-this.lastMessageCount;this.chatActive?this.lastMessageCount=t.chat.messages.length:this.unreadMessageCount=e}},this.unreadMessageCount=t.chat.messages.length,t.chat.addListener("chatUpdate",this.chatUpdateListener))}statesChanged(t){null!=t&&(this.chatActive=this.states.activeSidebar&&"chat"===this.states.sidebar)}render(){return(0,a.h)(a.H,{title:this.t("chat")},0!==this.unreadMessageCount&&!this.chatActive&&(0,a.h)("div",{class:"unread-count"},(0,a.h)("span",null,this.unreadMessageCount)),(0,a.h)("dyte-controlbar-button",{class:{active:this.chatActive},size:this.size,onClick:this.toggleChat,icon:this.iconPack.chat,label:this.t("chat")}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};c.style=":host{position:relative;display:block;font-family:var(--dyte-font-family, sans-serif)}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;display:flex;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px}"},10670:function(t,e,s){s.d(e,{g:function(){return i},u:function(){return n}});const a={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel"},i=async t=>{if(null==t||"en"===t||""===t.trim())return a;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},a,await e.json()):a}catch(e){return a}},n=(t=a)=>e=>{var s;return null!==(s=t[e])&&void 0!==s?s:e}}}]);