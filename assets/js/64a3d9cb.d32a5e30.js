"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[55027],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90146:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=t(55064),s=t(58215),l=["components"],u={sidebar_position:2},c="Quickstart",d={unversionedId:"quickstart",id:"version-0.6.x/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Get the roomName for the meeting and the participant's authToken from our backend APIs (read more about our server APIs here), and pass them to Dyte's client SDK.",source:"@site/android_versioned_docs/version-0.6.x/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/android/0.6.x/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-0.6.x/quickstart.mdx",tags:[],version:"0.6.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1657025706,formattedLastUpdatedAt:"7/5/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.6.0/mainSidebar",previous:{title:"Installation",permalink:"/android/0.6.x/installation"},next:{title:"Basic Usage",permalink:"/android/0.6.x/usage"}},m=[{value:"Using <code>Activity</code>",id:"using-activity",children:[]},{value:"Using <code>View</code>",id:"using-view",children:[]}],p={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"Get the ",(0,a.kt)("inlineCode",{parentName:"p"},"roomName")," for the meeting and the participant's ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken")," from our backend APIs (read more about our server APIs ",(0,a.kt)("a",{parentName:"p",href:"/api"},"here"),"), and pass them to Dyte's client SDK."),(0,a.kt)("p",null,"There are 2 ways to launch a meeting:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Activity"),(0,a.kt)("li",{parentName:"ol"},"View")),(0,a.kt)("p",null,"The activity based setup is straightforward while using a view requires some additional boilerplate code."),(0,a.kt)("h2",{id:"using-activity"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"Activity")),(0,a.kt)("p",null,"This will launch a fullscreen view with your meeting."),(0,a.kt)(o.Z,{groupId:"android-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.dyteclientmobile.MeetingConfig;\nimport com.dyteclientmobile.DyteMeeting;\nimport com.dyteclientmobile.DyteMeetingActivity;\n\n// Configure meeting parameters\nval config = MeetingConfig();\nconfig.setRoomName("<roomName>")\n.setAuthToken("<authToken>");\n\nDyteMeeting.setup(config);\n\n// Launch the activity\nval meetingIntent = Intent(this, DyteMeetingActivity::class.java)\nstartActivity(meetingIntent)\n'))),(0,a.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.dyteclientmobile.MeetingConfig;\nimport com.dyteclientmobile.DyteMeeting;\nimport com.dyteclientmobile.DyteMeetingActivity;\n\n// Configure meeting parameters\nMeetingConfig config = new MeetingConfig();\nconfig.setRoomName("<roomName>")\n      .setAuthToken("<authToken>");\n\nDyteMeeting.setup(config);\n\n// Launch the activity\nIntent meetingIntent = new Intent(this, DyteMeetingActivity.class);\nstartActivity(meetingIntent);\n')))),(0,a.kt)("h2",{id:"using-view"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"View")),(0,a.kt)("p",null,"Using a view allows you more control on how your meeting is rendered, but it comes with setup boilerplate code. The main reason anyone would use a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," based initialization is when they want the meeting to be rendered with custom dimensions and not occupy the full screen like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Activity"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.dyteclientmobile.MeetingConfig;\nimport com.dyteclientmobile.DyteMeeting;\nimport com.dyteMobileSdk.DyteInstanceManager;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.main_layout);\n            // Configure meeting parameters\n            MeetingConfig config = MeetingConfig();\n                config.setRoomName("<roomName>")\n                    .setAuthToken("<authToken>");\n\n            DyteMeeting.setup(config);\n            View view = DyteMeeting.init(this,width, height);\n\n            // Example\n            ViewGroup viewgroup = findViewById(R.id.main_layout);\n            viewgroup.add(view);\n    }\n\n\n    @Override\n    protected void onActivityResult(int requestCode, int resultCode, Intent data) {\n        super.onActivityResult(requestCode, resultCode, data);\n        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {\n            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n                if (!Settings.canDrawOverlays(this)) {\n                    // SYSTEM_ALERT_WINDOW permission not granted\n                }\n            }\n        }\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onActivityResult(this, requestCode, resultCode, data);\n        }\n    }\n\n\n\n    @Override\n    protected void onPause() {\n        super.onPause();\n\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onHostPause(this);\n        }\n    }\n\n    @Override\n    protected void onResume() {\n        super.onResume();\n\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onHostResume(this, this);\n        }\n    }\n\n    @Override\n    protected void onDestroy() {\n        super.onDestroy();\n\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onHostDestroy(this);\n        }\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.unmountApplication();\n        }\n    }\n\n\n    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {\n        if (DyteInstanceManager.permissionsHandler != null) {\n            DyteInstanceManager.permissionsHandler.onRequestPermissionsResult(requestCode, permissions, grantResults);\n        }\n    }\n')))}f.isMDXComponent=!0},58215:function(e,n,t){var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(67294),r=t(79443);var a=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,r=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,p=i.Children.toArray(e.children),f=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value,v=a(),y=v.tabGroupChoices,h=v.setTabGroupChoices,b=(0,i.useState)(g),k=b[0],w=b[1],D=[];if(null!=d){var C=y[d];null!=C&&C!==k&&f.some((function(e){return e.value===C}))&&w(C)}var I=function(e){var n=e.currentTarget,t=D.indexOf(n),i=f[t].value;w(i),null!=d&&(h(d,i),setTimeout((function(){var e,t,i,r,a,o,s,u;(e=n.getBoundingClientRect(),t=e.top,i=e.left,r=e.bottom,a=e.right,o=window,s=o.innerHeight,u=o.innerWidth,t>=0&&a<=u&&r<=s&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=D.indexOf(e.target)+1;t=D[i]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.target)-1;t=D[r]||D[D.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":r},m)},f.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,o.default)("tabs__item",s,{"tabs__item--active":k===n}),key:n,ref:function(e){return D.push(e)},onKeyDown:O,onFocus:I,onClick:I},null!=t?t:n)}))),t?(0,i.cloneElement)(p.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},p.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},79443:function(e,n,t){var i=(0,t(67294).createContext)(void 0);n.Z=i},86010:function(e,n,t){function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}t.r(n),t.d(n,{default:function(){return r}})}}]);