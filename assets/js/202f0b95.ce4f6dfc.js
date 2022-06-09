"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[84424],{3905:function(t,e,o){o.d(e,{Zo:function(){return s},kt:function(){return d}});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(o),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return o?n.createElement(f,a(a({ref:e},s),{},{components:o})):n.createElement(f,a({ref:e},s))}));function d(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},25204:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),a=["components"],l={sidebar_position:6},c="Tooltip",u={unversionedId:"customization/atoms/dyte-tooltip",id:"version-0.2/customization/atoms/dyte-tooltip",isDocsHomePage:!1,title:"Tooltip",description:"`html",source:"@site/ui-kit_versioned_docs/version-0.2/customization/03-atoms/dyte-tooltip.md",sourceDirName:"customization/03-atoms",slug:"/customization/atoms/dyte-tooltip",permalink:"/ui-kit/customization/atoms/dyte-tooltip",editUrl:"https://github.com/dyte-in/docs/tree/main/ui-kit_versioned_docs/version-0.2/customization/03-atoms/dyte-tooltip.md",tags:[],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654781335,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.2/mainSidebar",previous:{title:"Text Field",permalink:"/ui-kit/customization/atoms/dyte-text-field"},next:{title:"Toggle Buttons",permalink:"/ui-kit/customization/atoms/toggle-buttons"}},s=[],p={toc:s};function m(t){var e=t.components,o=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tooltip"},"Tooltip"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<dyte-tooltip label="Some helpful text!">\n  <div>Hover or focus on me</div>\n</dyte-tooltip>\n')),(0,i.kt)("div",{className:"ui-preview"},(0,i.kt)("dyte-tooltip",{label:"Some helpful text!"},(0,i.kt)("div",null,"Hover or focus on me"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<dyte-tooltip label="Some helpful text!" variant="brand" placement="bottom">\n  <div>Hover or focus on me</div>\n</dyte-tooltip>\n')),(0,i.kt)("div",{className:"ui-preview"},(0,i.kt)("dyte-tooltip",{label:"Some helpful text!",variant:"brand",placement:"bottom"},(0,i.kt)("div",null,"Hover or focus on me"))))}m.isMDXComponent=!0}}]);