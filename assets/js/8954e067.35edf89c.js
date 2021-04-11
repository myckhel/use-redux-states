(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(116)),s={id:"use-set-state",title:"useSetState()"},c={unversionedId:"apis/hooks/use-set-state",id:"version-1.0.0/apis/hooks/use-set-state",isDocsHomePage:!1,title:"useSetState()",description:"This hook gives you a setState function for a given state",source:"@site/versioned_docs/version-1.0.0/apis/hooks/use-set-state.md",slug:"/apis/hooks/use-set-state",permalink:"/use-redux-state-hook/docs/apis/hooks/use-set-state",editUrl:"https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/versioned_docs/version-1.0.0/apis/hooks/use-set-state.md",version:"1.0.0",sidebar:"version-1.0.0/someSidebar",previous:{title:"useMemoSelector()",permalink:"/use-redux-state-hook/docs/apis/hooks/use-memo-selector"},next:{title:"useGetState()",permalink:"/use-redux-state-hook/docs/apis/hooks/use-get-state"}},i=[{value:"Arguments",id:"arguments",children:[{value:"<code>stateName</code>",id:"statename",children:[]}]},{value:"<code>Returns()</code>",id:"returns",children:[{value:"<strong>setState()</strong>",id:"setstate",children:[]}]},{value:"Example",id:"example",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This hook gives you a setState function for a given state"),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("h3",{id:"statename"},Object(o.b)("inlineCode",{parentName:"h3"},"stateName")),Object(o.b)("p",null,"name of the nestable state to be selected"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"useSetState('todos.completed')\n")),Object(o.b)("h2",{id:"returns"},Object(o.b)("inlineCode",{parentName:"h2"},"Returns()")),Object(o.b)("h3",{id:"setstate"},Object(o.b)("strong",{parentName:"h3"},"setState()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"setState(payload, setter?: (state, payload) => newState)\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport useReduxState, { useSetState } from 'use-redux-state-hook'\n\nconst Component = () => {\n  useReduxState({\n    state: {\n      state1: 'a',\n      state2: 'b'\n    },\n    name: 'component_state'\n  })\n\n  const setState = useSetState('component_state')\n\n  useEffect(() => {\n    setState({ state2: 'c' }, (component_state, payload) => ({\n      ...component_state,\n      ...payload\n    }))\n    // component_state {state1: 'a', state2: 'c'}\n  }, [])\n}\n")))}p.isMDXComponent=!0}}]);