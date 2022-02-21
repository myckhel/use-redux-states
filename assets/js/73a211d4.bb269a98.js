(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{120:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),i=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=(r(0),r(120));const a={id:"use-memo-selector",title:"useMemoSelector()"},s={unversionedId:"apis/hooks/use-memo-selector",id:"apis/hooks/use-memo-selector",isDocsHomePage:!1,title:"useMemoSelector()",description:"This hook allows to select redux state efficiently and in a memoized way.",source:"@site/docs/apis/hooks/use-memo-selector.md",slug:"/apis/hooks/use-memo-selector",permalink:"/use-redux-states/docs/next/apis/hooks/use-memo-selector",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/docs/apis/hooks/use-memo-selector.md",version:"current",sidebar:"someSidebar",previous:{title:"useReduxState()",permalink:"/use-redux-states/docs/next/apis/hooks/use-redux-state"},next:{title:"useRootMemoSelector()",permalink:"/use-redux-states/docs/next/apis/hooks/use-root-memo-selector"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>selector()||statePath&#39;&#39;</code>",id:"selectorstatepath",children:[]},{value:"<code>result()</code>",id:"result",children:[]},{value:"<code>equality()</code>",id:"equality",children:[]}]},{value:"Example",id:"example",children:[]}],l={toc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This hook allows to select redux state efficiently and in a memoized way.\nit uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc"},"createSelector")," to make sure selector is not recomputed unless one of its arguments changes.\nit also uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-fast-compare"},"react-fast-compare")," to prevent unnecessary updates."),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("h3",{id:"selectorstatepath"},Object(o.b)("inlineCode",{parentName:"h3"},"selector()||statePath''")),Object(o.b)("h4",{id:"selector"},Object(o.b)("inlineCode",{parentName:"h4"},"selector()")),Object(o.b)("p",null,"function that selects from the state.\nreceives 1 argument"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"(storeState) => selectedState\n")),Object(o.b)("h4",{id:"statepath"},Object(o.b)("inlineCode",{parentName:"h4"},"statePath")),Object(o.b)("p",null,"path of the nestable state to be selected"),Object(o.b)("h3",{id:"result"},Object(o.b)("inlineCode",{parentName:"h3"},"result()")),Object(o.b)("p",null,"function that returns the result of the selected state"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"(selectedState) => selectedState\n")),Object(o.b)("h3",{id:"equality"},Object(o.b)("inlineCode",{parentName:"h3"},"equality()")),Object(o.b)("p",null,"function that compare prevState against newState to determine if selected state has changed. defaults to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-fast-compare"},"react-fast-compare")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import useReduxState, { useMemoSelector } from 'use-redux-states'\nconst Component = () => {\n  const { selector } = useReduxState({\n    state: {\n      state1: 'a',\n      state2: 'b'\n    },\n    path: 'component_state'\n  })\n  const state1 = useMemoSelector(\n    selector,\n    (component_state) => component_state?.state1\n  )\n  const state2 = useMemoSelector('component_state.state2')\n\n  console.log({ state1, state2 }) // {state1: 'a', state2: 'b'}\n}\n")))}u.isMDXComponent=!0}}]);