(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(s,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(120)),s={id:"set-state",title:"setState()"},c={unversionedId:"apis/set-state",id:"version-1.x/apis/set-state",isDocsHomePage:!1,title:"setState()",description:"function to dispatch set state action.",source:"@site/versioned_docs/version-1.x/apis/set-state.md",slug:"/apis/set-state",permalink:"/use-redux-states/docs/apis/set-state",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/versioned_docs/version-1.x/apis/set-state.md",version:"1.x",sidebar:"version-1.x/someSidebar",previous:{title:"getState()",permalink:"/use-redux-states/docs/apis/get-state"},next:{title:"setConfig()",permalink:"/use-redux-states/docs/apis/set-config"}},i=[{value:"<code>Arguments</code>",id:"arguments",children:[{value:"<strong>storeDispatcher()</strong>",id:"storedispatcher",children:[]},{value:"<strong>action()</strong>",id:"action",children:[]},{value:"<strong>payload</strong>",id:"payload",children:[]},{value:"<strong>setter()?</strong>",id:"setter",children:[]}]},{value:"<code>Example</code>",id:"example",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"function to dispatch set state action."),Object(o.b)("h2",{id:"arguments"},Object(o.b)("inlineCode",{parentName:"h2"},"Arguments")),Object(o.b)("h3",{id:"storedispatcher"},Object(o.b)("strong",{parentName:"h3"},"storeDispatcher()")),Object(o.b)("p",null,"redux store's dispatch function."),Object(o.b)("h3",{id:"action"},Object(o.b)("strong",{parentName:"h3"},"action()")),Object(o.b)("p",null,"a state's set state action creator."),Object(o.b)("h3",{id:"payload"},Object(o.b)("strong",{parentName:"h3"},"payload")),Object(o.b)("p",null,"value to set in the state."),Object(o.b)("h3",{id:"setter"},Object(o.b)("strong",{parentName:"h3"},"setter()?")),Object(o.b)("p",null,"function to determine how the state should be set."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"setState(store.dispatch, action, payload, setter?: (state, payload) => newState)\n")),Object(o.b)("h2",{id:"example"},Object(o.b)("inlineCode",{parentName:"h2"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport useReduxState, { setState } from 'use-redux-states'\nconst Component = () => {\n  const { action } = useReduxState({\n    state: {\n      state1: []\n    },\n    name: 'todos.completed'\n  })\n\n  useEffect(() => {\n    console.log(\n      setState(store.dispatch, action, [1], (state, payload) => [\n        ...state,\n        payload\n      ])\n    )\n    // {state1: [1]}\n  }, [])\n}\n")))}u.isMDXComponent=!0}}]);