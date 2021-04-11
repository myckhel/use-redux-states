(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(116)),c={id:"set-config",title:"setConfig()"},i={unversionedId:"apis/set-config",id:"version-1.0.0/apis/set-config",isDocsHomePage:!1,title:"setConfig()",description:"function to configure the use-redux-state-hook.",source:"@site/versioned_docs/version-1.0.0/apis/set-config.md",slug:"/apis/set-config",permalink:"/use-redux-state-hook/docs/apis/set-config",editUrl:"https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/versioned_docs/version-1.0.0/apis/set-config.md",version:"1.0.0",sidebar:"version-1.0.0/someSidebar",previous:{title:"setState()",permalink:"/use-redux-state-hook/docs/apis/set-state"},next:{title:"action()",permalink:"/use-redux-state-hook/docs/apis/action"}},s=[{value:"<code>config objects</code>",id:"config-objects",children:[{value:"<strong>cleanup.</strong>",id:"cleanup",children:[]},{value:"<strong>setter()?</strong>",id:"setter",children:[]}]},{value:"<code>Example</code>",id:"example",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"function to configure the ",Object(a.b)("inlineCode",{parentName:"p"},"use-redux-state-hook"),"."),Object(a.b)("h2",{id:"config-objects"},Object(a.b)("inlineCode",{parentName:"h2"},"config objects")),Object(a.b)("h3",{id:"cleanup"},Object(a.b)("strong",{parentName:"h3"},"cleanup.")),Object(a.b)("p",null,"boolean value to determine if the state should be deleted when all component that subscribed to a state name have been unmounted from react tree.\n",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"this is experimental"))),Object(a.b)("h3",{id:"setter"},Object(a.b)("strong",{parentName:"h3"},"setter()?")),Object(a.b)("p",null,"function to replace the initial ",Object(a.b)("inlineCode",{parentName:"p"},"use-redux-state-hook")," setter function."),Object(a.b)("h2",{id:"example"},Object(a.b)("inlineCode",{parentName:"h2"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { setConfig } from 'use-redux-state-hook'\nsetConfig({\n  cleanup: false,\n  setter: (stateValue, payload) => {\n    switch (stateValue?.constructor) {\n      case Object:\n        return { ...stateValue, ...payload }\n      case Array:\n        return [...stateValue, ...payload]\n      default:\n        return payload\n    }\n  }\n})\n")))}l.isMDXComponent=!0}}]);