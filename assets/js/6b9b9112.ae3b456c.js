(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(116)),s={id:"selector",title:"selector()"},c={unversionedId:"apis/selector",id:"version-1.0.0/apis/selector",isDocsHomePage:!1,title:"selector()",description:"function to select state for a given state name.",source:"@site/versioned_docs/version-1.0.0/apis/selector.md",slug:"/apis/selector",permalink:"/use-redux-states/docs/apis/selector",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/versioned_docs/version-1.0.0/apis/selector.md",version:"1.0.0",sidebar:"version-1.0.0/someSidebar",previous:{title:"useGetState()",permalink:"/use-redux-states/docs/apis/hooks/use-get-state"},next:{title:"getState()",permalink:"/use-redux-states/docs/apis/get-state"}},i=[{value:"<code>Example</code>",id:"example",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"function to select state for a given state name."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"selector(storeRootState, stateName)\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns")," Redux state for the given name"),Object(a.b)("h2",{id:"example"},Object(a.b)("inlineCode",{parentName:"h2"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import {useEffect} from 'react'\nimport useReduxState, {selector} from 'use-redux-states'\n\nconst Component = () => {\n  useReduxState({\n    state: {\n      state1: 'a',\n      state2: 'b',\n    },\n    name: 'component_state'\n  })\n\n  useEffect(() => {\n    selector(\n      store.getState(),\n      'component_state',\n    )\n    // component_state {state1: 'a', state2: 'b'}\n  }, [])\n}\n")))}p.isMDXComponent=!0}}]);