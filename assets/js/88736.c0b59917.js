"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[88736],{88736:function(t,e,i){i.r(e),i.d(e,{dyte_settings:function(){return r}});var o=i(13441),s=i(14878),a=i(10670);const r=class{constructor(t){(0,o.r)(this,t),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.keyPressListener=t=>{"Escape"===t.key&&this.close()},this.iconPack=s.d,this.t=(0,a.u)(),this.activeTab="connection",this.isMobileMainVisible=!1,this.networkStatus="good",this.canProduceAudio=!1,this.canProduceVideo=!1}connectedCallback(){document.addEventListener("keydown",this.keyPressListener),this.meetingChanged(this.meeting)}disconnectedCallback(){var t,e;null===(t=this.meeting)||void 0===t||t.self.disablePreview(),this.keyPressListener&&document.removeEventListener("keydown",this.keyPressListener),this.poorConnectionListener&&(null===(e=this.meeting)||void 0===e||e.meta.removeListener("poorConnection",this.poorConnectionListener))}meetingChanged(t){null!=t&&(this.canProduceAudio=t.self.permissions.produceAudio,this.canProduceVideo=t.self.permissions.produceVideo.allow,this.canProduceAudio||this.canProduceVideo?this.canProduceAudio?this.activeTab="audio":this.activeTab="video":this.activeTab="connection",this.poorConnectionListener=({score:t})=>{t<7?this.networkStatus="poor":t<4&&(this.networkStatus="poorest"),setTimeout((()=>{this.networkStatus="good"}),5e3)},this.meeting.meta.addListener("poorConnection",this.poorConnectionListener))}changeTab(t){this.activeTab=t,"sm"===this.size&&(this.isMobileMainVisible||(this.isMobileMainVisible=!0))}close(){this.stateUpdate.emit({activeSettings:!1})}render(){if(null==this.meeting)return null;const t={meeting:this.meeting,states:this.states,iconPack:this.iconPack,t:this.t};return(0,o.h)(o.H,null,(0,o.h)("dyte-button",{kind:"icon",class:"dismiss-btn",onClick:()=>this.close()},(0,o.h)("dyte-icon",{icon:this.iconPack.dismiss})),(0,o.h)("aside",{class:{hide:this.isMobileMainVisible}},(0,o.h)("header",null,(0,o.h)("h2",null,this.t("settings"))),this.canProduceAudio&&(0,o.h)("button",{type:"button",class:{active:"audio"===this.activeTab},onClick:()=>this.changeTab("audio")},this.t("audio"),(0,o.h)("div",{class:"right"},(0,o.h)("dyte-icon",{icon:this.iconPack.mic_on}),"sm"===this.size&&(0,o.h)("dyte-icon",{icon:this.iconPack.chevron_right}))),this.canProduceVideo&&(0,o.h)("button",{type:"button",class:{active:"video"===this.activeTab},onClick:()=>this.changeTab("video")},this.t("video"),(0,o.h)("div",{class:"right"},(0,o.h)("dyte-icon",{icon:this.iconPack.video_on}),"sm"===this.size&&(0,o.h)("dyte-icon",{icon:this.iconPack.chevron_right}))),(0,o.h)("button",{type:"none",title:`Your network condition is ${this.networkStatus}`},this.t("connection"),(0,o.h)("div",{class:"right"},(0,o.h)("dyte-icon",{icon:this.iconPack.wifi,class:this.networkStatus})))),(0,o.h)("main",{class:{active:this.isMobileMainVisible}},"sm"===this.size&&(0,o.h)("header",null,(0,o.h)("dyte-button",{kind:"icon",class:"back-btn",onClick:()=>this.isMobileMainVisible=!1},(0,o.h)("dyte-icon",{icon:this.iconPack.chevron_left})),(0,o.h)("h2",null,this.t("audio"===this.activeTab?"audio":"video"))),"audio"===this.activeTab&&(0,o.h)("dyte-settings-audio",Object.assign({},t)),"video"===this.activeTab&&(0,o.h)("dyte-settings-video",Object.assign({},t))))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{position:relative;display:flex;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));font-family:var(--dyte-font-family, sans-serif)}header{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}.title{font-size:20px;line-height:1}.back-btn,.dismiss-btn{border-radius:var(--dyte-border-radius-sm, 4px);background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.back-btn:hover,.dismiss-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside{box-sizing:border-box;display:flex;min-width:var(--dyte-space-56, 224px);flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px)}aside button{margin-top:var(--dyte-space-4, 16px);box-sizing:border-box;display:flex;width:100%;align-items:center;justify-content:space-between;border-top-left-radius:var(--dyte-border-radius-sm, 4px);border-bottom-left-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));cursor:default;font-size:16px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px}aside button .right{display:flex;align-items:center}aside button .right dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}aside button .right dyte-icon:last-child{margin-left:var(--dyte-space-4, 16px)}aside button[type='button']{cursor:pointer;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}aside button[type='button']:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside button[type='button']{border-right:var(--dyte-border-width-md, 2px) solid transparent}aside button.active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}aside button.active:hover{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}dyte-icon.poor{--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}dyte-icon.poorest{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.good{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 131 208 23) / var(--tw-text-opacity))}main{display:flex;flex:1 1 0%;align-items:center;justify-content:center;padding-left:var(--dyte-space-6, 24px);padding-right:var(--dyte-space-6, 24px);box-sizing:border-box;width:100%}.dismiss-btn{position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px)}:host([size='sm']) .dismiss-btn{top:var(--dyte-space-5, 20px);right:var(--dyte-space-4, 16px)}:host([size='sm']) aside{width:100%;padding-left:var(--dyte-space-0, 0px)}:host([size='sm']) aside button{border-radius:var(--dyte-border-radius-none, 0)}:host([size='sm']) aside button.active{border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}:host([size='sm']) aside button.active:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) aside.hide{display:none}:host([size='sm']) main{display:none;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='sm']) main header{justify-content:center}:host([size='sm']) main header dyte-button{position:absolute;left:var(--dyte-space-4, 16px)}:host([size='sm']) main.active{display:block}"},10670:function(t,e,i){i.d(e,{g:function(){return s},u:function(){return a}});const o={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel"},s=async t=>{if(null==t||"en"===t||""===t.trim())return o;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},o,await e.json()):o}catch(e){return o}},a=(t=o)=>e=>{var i;return null!==(i=t[e])&&void 0!==i?i:e}}}]);