(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},i),{},{components:n})):a.a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(116)),s={id:"use-get-state",title:"useGetState()"},c={unversionedId:"apis/hooks/use-get-state",id:"apis/hooks/use-get-state",isDocsHomePage:!1,title:"useGetState()",description:"This hook gives you a getState function for a given state",source:"@site/docs/apis/hooks/use-get-state.md",slug:"/apis/hooks/use-get-state",permalink:"/use-redux-state-hook/docs/next/apis/hooks/use-get-state",editUrl:"https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/docs/apis/hooks/use-get-state.md",version:"current",sidebar:"someSidebar",previous:{title:"useSetState()",permalink:"/use-redux-state-hook/docs/next/apis/hooks/use-set-state"},next:{title:"selector()",permalink:"/use-redux-state-hook/docs/next/apis/selector"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>stateName</code>",id:"statename",children:[]}]},{value:"Returns",id:"returns",children:[{value:"<code>getState()</code>",id:"getstate",children:[]}]},{value:"Example",id:"example",children:[]}],i={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This hook gives you a getState function for a given state"),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("h3",{id:"statename"},Object(o.b)("inlineCode",{parentName:"h3"},"stateName")),Object(o.b)("p",null,"name of the nestable state to be selected"),Object(o.b)("h2",{id:"returns"},"Returns"),Object(o.b)("h3",{id:"getstate"},Object(o.b)("inlineCode",{parentName:"h3"},"getState()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"getState(stateName)\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport useReduxState, { useGetState } from 'use-redux-state-hook'\nconst Component = () => {\n  useReduxState({\n    state: {\n      state1: 'a',\n      state2: 'b'\n    },\n    name: 'component_state'\n  })\n  const getState = useGetState('component_state')\n\n  useEffect(() => {\n    console.log(getState((component_state) => component_state?.state2))\n    // 'c'\n  }, [])\n}\n")))}p.isMDXComponent=!0}}]);