(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(99)),c={id:"selector",title:"selector()"},s={unversionedId:"apis/selector",id:"apis/selector",isDocsHomePage:!1,title:"selector()",description:"function to select state for a given state name.",source:"@site/docs/apis/selector.md",slug:"/apis/selector",permalink:"/use-redux-state-hook/docs/next/apis/selector",editUrl:"https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/docs/apis/selector.md",version:"current",sidebar:"someSidebar",previous:{title:"useGetState()",permalink:"/use-redux-state-hook/docs/next/apis/hooks/use-get-state"},next:{title:"getState()",permalink:"/use-redux-state-hook/docs/next/apis/get-state"}},i=[{value:"<code>Example</code>",id:"example",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"function to select state for a given state name."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"selector(storeRootState, stateName)\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns")," Redux state for the given name"),Object(a.b)("h2",{id:"example"},Object(a.b)("inlineCode",{parentName:"h2"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import {useEffect} from 'react'\nimport useReduxState, {selector} from 'use-redux-state-hook'\n\nconst Component = () => {\n  useReduxState({\n    state: {\n      state1: 'a',\n      state2: 'b',\n    },\n    name: 'component_state'\n  })\n\n  useEffect(() => {\n    selector(\n      store.getState(),\n      'component_state',\n    )\n    // component_state {state1: 'a', state2: 'b'}\n  }, [])\n}\n")))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||a;return n?o.a.createElement(d,s(s({ref:t},u),{},{components:n})):o.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);