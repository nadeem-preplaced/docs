"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[621],{621:function(e,t,n){n.r(t),n.d(t,{dyte_leave_button:function(){return o}});var i=n(13441),a=n(14878),s=n(10670);const o=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.iconPack=a.d,this.t=(0,s.u)()}leave(){this.stateUpdate.emit({activeLeaveConfirmation:!0})}render(){const e=this.t("leave");return(0,i.h)(i.H,{label:e},(0,i.h)("dyte-controlbar-button",{class:"leave",onClick:()=>this.leave(),size:this.size,icon:this.iconPack.call_end,label:e}))}};o.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},10670:function(e,t,n){n.d(t,{g:function(){return a},u:function(){return s}});const i={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel"},a=async e=>{if(null==e||"en"===e||""===e.trim())return i;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i,await t.json()):i}catch(t){return i}},s=(e=i)=>t=>{var n;return null!==(n=e[t])&&void 0!==n?n:t}}}]);