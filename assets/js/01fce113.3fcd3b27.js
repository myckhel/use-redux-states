(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(120));const o={id:"set-config",title:"setConfig()"},c={unversionedId:"apis/set-config",id:"apis/set-config",isDocsHomePage:!1,title:"setConfig()",description:"function to configure the use-redux-states.",source:"@site/docs/apis/set-config.md",slug:"/apis/set-config",permalink:"/use-redux-states/docs/next/apis/set-config",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/docs/apis/set-config.md",version:"current",sidebar:"someSidebar",previous:{title:"setState()",permalink:"/use-redux-states/docs/next/apis/set-state"},next:{title:"action()",permalink:"/use-redux-states/docs/next/apis/action"}},i=[{value:"<code>config objects</code>",id:"config-objects",children:[{value:"<strong>cleanup.</strong>",id:"cleanup",children:[]},{value:"<strong>setter()?</strong>",id:"setter",children:[]}]},{value:"<code>Example</code>",id:"example",children:[]}],s={toc:i};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"function to configure the ",Object(a.b)("inlineCode",{parentName:"p"},"use-redux-states"),"."),Object(a.b)("h2",{id:"config-objects"},Object(a.b)("inlineCode",{parentName:"h2"},"config objects")),Object(a.b)("h3",{id:"cleanup"},Object(a.b)("strong",{parentName:"h3"},"cleanup.")),Object(a.b)("p",null,"boolean value to determine if the state should be deleted when all component that subscribed to a state path have been unmounted from react tree.\n",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"this is experimental"))),Object(a.b)("h3",{id:"setter"},Object(a.b)("strong",{parentName:"h3"},"setter()?")),Object(a.b)("p",null,"function to replace the initial ",Object(a.b)("inlineCode",{parentName:"p"},"use-redux-states")," setter function."),Object(a.b)("h2",{id:"example"},Object(a.b)("inlineCode",{parentName:"h2"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { setConfig } from 'use-redux-states'\nsetConfig({\n  cleanup: false,\n  setter: (stateValue, payload) => {\n    switch (stateValue?.constructor) {\n      case Object:\n        return { ...stateValue, ...payload }\n      case Array:\n        return [...stateValue, ...payload]\n      default:\n        return payload\n    }\n  }\n})\n")))}u.isMDXComponent=!0}}]);