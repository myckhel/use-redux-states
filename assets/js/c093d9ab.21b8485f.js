(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(120));const o={id:"action",title:"action()"},c={unversionedId:"apis/action",id:"version-1.0.x/apis/action",isDocsHomePage:!1,title:"action()",description:"Action creator for dispatching setState action for a given state path.",source:"@site/versioned_docs/version-1.0.x/apis/action.md",slug:"/apis/action",permalink:"/use-redux-states/docs/apis/action",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/versioned_docs/version-1.0.x/apis/action.md",version:"1.0.x",sidebar:"version-1.0.x/someSidebar",previous:{title:"setConfig()",permalink:"/use-redux-states/docs/apis/set-config"},next:{title:"cleanup()",permalink:"/use-redux-states/docs/apis/cleanup"}},i=[{value:"<code>Returns</code>",id:"returns",children:[]},{value:"<code>Example</code>",id:"example",children:[]}],s={toc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Action creator for dispatching setState action for a given state path."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"action(stateName, payload, setter?: (state, payload) => newState)\n")),Object(a.b)("h2",{id:"returns"},Object(a.b)("inlineCode",{parentName:"h2"},"Returns")),Object(a.b)("p",null,"setState redux action"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"action(stateName, payload, setter)\n// { type: SET_REDUX_STATE, payload, path, reducer }\n")),Object(a.b)("h2",{id:"example"},Object(a.b)("inlineCode",{parentName:"h2"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport useReduxState, { action } from 'use-redux-states'\nconst Component = () => {\n  useReduxState({\n    state: {\n      state1: 'a',\n      state2: 'b'\n    },\n    path: 'component_state'\n  })\n\n  useEffect(() => {\n    store.dispatch(\n      action(\n        'component_state',\n        { state2: 'c' },\n        (component_state, payload) => ({ ...component_state, ...payload })\n      )\n    )\n    // component_state {state1: 'a', state2: 'c'}\n  }, [])\n}\n")))}p.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);