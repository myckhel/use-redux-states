(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(7),a=(o(0),o(138)),s={id:"use-root-memo-selector",title:"useRootMemoSelector()"},c={unversionedId:"apis/hooks/use-root-memo-selector",id:"apis/hooks/use-root-memo-selector",isDocsHomePage:!1,title:"useRootMemoSelector()",description:"This hook is similar to useMemoSelector but it select state from the root store.",source:"@site/docs/apis/hooks/use-root-memo-selector.md",slug:"/apis/hooks/use-root-memo-selector",permalink:"/use-redux-states/docs/next/apis/hooks/use-root-memo-selector",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/docs/apis/hooks/use-root-memo-selector.md",version:"current",sidebar:"someSidebar",previous:{title:"useMemoSelector()",permalink:"/use-redux-states/docs/next/apis/hooks/use-memo-selector"},next:{title:"useSetState()",permalink:"/use-redux-states/docs/next/apis/hooks/use-set-state"}},i=[{value:"What is the root store?",id:"what-is-the-root-store",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>selector()||statePath&#39;&#39;</code>",id:"selectorstatepath",children:[]},{value:"<code>result()</code>",id:"result",children:[]},{value:"<code>equality()</code>",id:"equality",children:[]}]},{value:"Example",id:"example",children:[]}],u={toc:i};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This hook is similar to ",Object(a.b)("a",{parentName:"p",href:"/use-redux-states/docs/next/apis/hooks/use-memo-selector"},"useMemoSelector")," but it select state from the root store."),Object(a.b)("h3",{id:"what-is-the-root-store"},"What is the root store?"),Object(a.b)("p",null,"Root store is the main store of your app."),Object(a.b)("p",null,"Given your app store ",Object(a.b)("inlineCode",{parentName:"p"},"{...yourAppStates}")," the package adds state to the store named ",Object(a.b)("inlineCode",{parentName:"p"},"_use_redux_state")," so at the end,  your app store looks like ",Object(a.b)("inlineCode",{parentName:"p"},"{...yourAppStates, _use_redux_state: {...}}"),"."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/use-redux-states/docs/next/apis/hooks/use-memo-selector"},"useMemoSelector")," only selects state in ",Object(a.b)("inlineCode",{parentName:"p"},"_use_redux_state")," path, incase you need to select state outside the ",Object(a.b)("inlineCode",{parentName:"p"},"_use_redux_state")," path, then you will need to use ",Object(a.b)("inlineCode",{parentName:"p"},"useRootMemoSelector")," hook."),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("h3",{id:"selectorstatepath"},Object(a.b)("inlineCode",{parentName:"h3"},"selector()||statePath''")),Object(a.b)("h4",{id:"selector"},Object(a.b)("inlineCode",{parentName:"h4"},"selector()")),Object(a.b)("p",null,"function that selects from the state.\nreceives 1 argument"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"(storeState) => selectedState\n")),Object(a.b)("h4",{id:"statepath"},Object(a.b)("inlineCode",{parentName:"h4"},"statePath")),Object(a.b)("p",null,"path of the nestable state to be selected"),Object(a.b)("h3",{id:"result"},Object(a.b)("inlineCode",{parentName:"h3"},"result()")),Object(a.b)("p",null,"function that returns the result of the selected state"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"(selectedState) => selectedState\n")),Object(a.b)("h3",{id:"equality"},Object(a.b)("inlineCode",{parentName:"h3"},"equality()")),Object(a.b)("p",null,"function that compare prevState against newState to determine if selected state has changed. defaults to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-fast-compare"},"react-fast-compare")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { useRootMemoSelector } from 'use-redux-states'\n\n// store: {state: {userName: 'mike'}, _use_redux_state: {}}\n\nconst Component = () => {\n  const state = useRootMemoSelector('state')\n  const userName = useRootMemoSelector('state.userName')\n\n  console.log({ state, userName })\n  // {{state: {userName: 'mike'}, userName: 'mike'}\n}\n")))}l.isMDXComponent=!0},138:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return b}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return o?n.a.createElement(b,c(c({ref:t},u),{},{components:o})):n.a.createElement(b,c({ref:t},u))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<a;u++)s[u]=o[u];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);