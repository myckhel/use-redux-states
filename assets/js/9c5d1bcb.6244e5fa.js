(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(138)),s={id:"get-state",title:"getState()"},c={unversionedId:"apis/get-state",id:"version-1.1.x/apis/get-state",isDocsHomePage:!1,title:"getState()",description:"function to get the state for a given state path.",source:"@site/versioned_docs/version-1.1.x/apis/get-state.md",slug:"/apis/get-state",permalink:"/use-redux-states/docs/apis/get-state",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/versioned_docs/version-1.1.x/apis/get-state.md",version:"1.1.x",sidebar:"version-1.1.x/someSidebar",previous:{title:"selector()",permalink:"/use-redux-states/docs/apis/selector"},next:{title:"setState()",permalink:"/use-redux-states/docs/apis/set-state"}},i=[{value:"<code>Arguments</code>",id:"arguments",children:[{value:"<strong>statePath</strong>",id:"statepath",children:[]}]},{value:"<code>Returns</code>",id:"returns",children:[{value:"<strong>stateValue</strong>",id:"statevalue",children:[]}]},{value:"<code>Example</code>",id:"example",children:[]}],u={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"function to get the state for a given state path."),Object(o.b)("h2",{id:"arguments"},Object(o.b)("inlineCode",{parentName:"h2"},"Arguments")),Object(o.b)("h3",{id:"statepath"},Object(o.b)("strong",{parentName:"h3"},"statePath")),Object(o.b)("p",null,"path of the nest-able state to be selected"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"getState(store, statePath, getter?: (state) => selectedState)\n")),Object(o.b)("h2",{id:"returns"},Object(o.b)("inlineCode",{parentName:"h2"},"Returns")),Object(o.b)("h3",{id:"statevalue"},Object(o.b)("strong",{parentName:"h3"},"stateValue")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"getState(store, 'todos.completed', (state) => state.todos) // any value\n")),Object(o.b)("h2",{id:"example"},Object(o.b)("inlineCode",{parentName:"h2"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport useReduxState, { getState } from 'use-redux-states'\nconst Component = () => {\n  useReduxState({\n    state: {\n      state1: [],\n    },\n    path: 'todos.completed'\n  })\n\n  useEffect(() => {\n    console.log(getState(store, 'todos.completed', (state) => state.todos))\n    // {state1: []}\n  }, [])\n}\n")))}l.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);