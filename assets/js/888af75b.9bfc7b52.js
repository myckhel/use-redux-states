(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(o,".").concat(m)]||l[m]||d[m]||s;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(120));const s={id:"use-set-state",title:"useSetState()"},o={unversionedId:"apis/hooks/use-set-state",id:"version-1.x/apis/hooks/use-set-state",isDocsHomePage:!1,title:"useSetState()",description:"This hook gives you a setState function for a given state",source:"@site/versioned_docs/version-1.x/apis/hooks/use-set-state.md",slug:"/apis/hooks/use-set-state",permalink:"/use-redux-states/docs/apis/hooks/use-set-state",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/versioned_docs/version-1.x/apis/hooks/use-set-state.md",version:"1.x",sidebar:"version-1.x/someSidebar",previous:{title:"useRootMemoSelector()",permalink:"/use-redux-states/docs/apis/hooks/use-root-memo-selector"},next:{title:"useGetState()",permalink:"/use-redux-states/docs/apis/hooks/use-get-state"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>stateName</code>",id:"statename",children:[]}]},{value:"<code>Returns()</code>",id:"returns",children:[{value:"<strong>setState()</strong>",id:"setstate",children:[]}]},{value:"Example",id:"example",children:[]}],i={toc:c};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This hook gives you a setState function for a given state"),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("h3",{id:"statename"},Object(a.b)("inlineCode",{parentName:"h3"},"stateName")),Object(a.b)("p",null,"path of the nestable state to be selected"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"useSetState('todos.completed')\n")),Object(a.b)("h2",{id:"returns"},Object(a.b)("inlineCode",{parentName:"h2"},"Returns()")),Object(a.b)("h3",{id:"setstate"},Object(a.b)("strong",{parentName:"h3"},"setState()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"setState(payload, setter?: (state, payload) => newState)\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport useReduxState, { useSetState } from 'use-redux-states'\n\nconst Component = () => {\n  useReduxState({\n    state: {\n      state1: 'a',\n      state2: 'b'\n    },\n    path: 'component_state'\n  })\n\n  const setState = useSetState('component_state')\n\n  useEffect(() => {\n    setState({ state2: 'c' }, (component_state, payload) => ({\n      ...component_state,\n      ...payload\n    }))\n    // component_state {state1: 'a', state2: 'c'}\n  }, [])\n}\n")))}u.isMDXComponent=!0}}]);