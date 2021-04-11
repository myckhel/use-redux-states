(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(116)),s={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"intro",id:"version-1.0.0/intro",isDocsHomePage:!1,title:"Introduction",description:"Overview",source:"@site/versioned_docs/version-1.0.0/intro.md",slug:"/",permalink:"/use-redux-state-hook/docs/",editUrl:"https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/versioned_docs/version-1.0.0/intro.md",version:"1.0.0",sidebar_label:"Introduction",sidebar:"version-1.0.0/someSidebar",next:{title:"Installation",permalink:"/use-redux-state-hook/docs/install"}},i=[{value:"<code>Overview</code>",id:"overview",children:[]},{value:"<code>Problems solved</code>",id:"problems-solved",children:[{value:"<strong>handles unnecessary selectors re-rendering</strong>",id:"handles-unnecessary-selectors-re-rendering",children:[]},{value:"<strong>reduces redux code boilerplate</strong>",id:"reduces-redux-code-boilerplate",children:[]}]},{value:"<code>Example</code>",id:"example",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},Object(a.b)("inlineCode",{parentName:"h2"},"Overview")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"use-redux-state-hook")," allows you to create redux states at runtime for your react components without creating static actions and reducers.\nIt was also designed to solve react's unnecessary re-render issue by using ",Object(a.b)("inlineCode",{parentName:"p"},"useMemoSelector")," api and to improve your app's performance."),Object(a.b)("h2",{id:"problems-solved"},Object(a.b)("inlineCode",{parentName:"h2"},"Problems solved")),Object(a.b)("h3",{id:"handles-unnecessary-selectors-re-rendering"},Object(a.b)("strong",{parentName:"h3"},"handles unnecessary selectors re-rendering")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"use-redux-state-hook")," makes sure selectors doesn't re-render component when state has no changes."),Object(a.b)("h3",{id:"reduces-redux-code-boilerplate"},Object(a.b)("strong",{parentName:"h3"},"reduces redux code boilerplate")),Object(a.b)("p",null,"Say bye to redux action/reducers boilerplates!",Object(a.b)("br",null),"\nwith redux, before you create states you have to at least define the store in advance in a similar way to example below."),Object(a.b)("h2",{id:"example"},Object(a.b)("inlineCode",{parentName:"h2"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// reducer.js\nconst INIT_STATE = {\n  state1: 'one',\n  state2: 'two',\n};\n\nconst reducer = (state = INIT_STATE, {type, payload}) => {\n  switch (type) {\n    case 'addState1':\n      return {...state, state1: 'ones'}\n    default:\n      case 'addState2':\n        return {...state, state2: 'twos'}\n    default:\n      return state;\n  }\n};\nexport default reducer;\n")),Object(a.b)("p",null,"Sometimes you would need to move your small react components states to redux store, so for every components state you would have to define them in advance.",Object(a.b)("br",null),"\nThis can be redundant and unnecessary.",Object(a.b)("br",null),"\nBut ",Object(a.b)("inlineCode",{parentName:"p"},"use-redux-state-hook")," found a way to create redux state much easier and dynamically without writing redundant codes.",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"use-redux-state-hook")," can make you have similar states above with few lines of codes."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const Component = () => {\n  const {setState, getState} = useReduxState({\n    name: 'component_state',\n    state: {\n      state1: 'one',\n      state2: 'two',\n    }\n  });\n\n  useEffect(() => {\n    console.log(getState()) // {state1: 'one', state2: 'two'}\n\n    setState({\n      state1: 'ones',\n      state2: 'twos',\n    });\n    console.log(getState()) // {state1: 'ones', state2: 'twos'}\n  }, [])\n}\n")))}u.isMDXComponent=!0}}]);