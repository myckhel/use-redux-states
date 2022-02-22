(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(138)),s={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Overview",source:"@site/docs/intro.md",slug:"/",permalink:"/use-redux-states/docs/next/",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/docs/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/use-redux-states/docs/next/install"}},i=[{value:"<code>Overview</code>",id:"overview",children:[]},{value:"<code>Problems solved</code>",id:"problems-solved",children:[{value:"<strong>handles unnecessary selectors re-rendering</strong>",id:"handles-unnecessary-selectors-re-rendering",children:[]},{value:"<strong>reduces redux code boilerplate</strong>",id:"reduces-redux-code-boilerplate",children:[]}]},{value:"<code>Example</code>",id:"example",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},Object(o.b)("inlineCode",{parentName:"h2"},"Overview")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"use-redux-states")," allows you to create redux states at runtime for your react components without creating static actions and reducers.\nIt was also designed to stop react's components unnecessary re-render by using ",Object(o.b)("a",{parentName:"p",href:"./apis/hooks/use-memo-selector"},"useMemoSelector")," api and to improve your app's performance."),Object(o.b)("h2",{id:"problems-solved"},Object(o.b)("inlineCode",{parentName:"h2"},"Problems solved")),Object(o.b)("h3",{id:"handles-unnecessary-selectors-re-rendering"},Object(o.b)("strong",{parentName:"h3"},"handles unnecessary selectors re-rendering")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"use-redux-states")," makes sure selectors doesn't re-render component when state has no changes."),Object(o.b)("h3",{id:"reduces-redux-code-boilerplate"},Object(o.b)("strong",{parentName:"h3"},"reduces redux code boilerplate")),Object(o.b)("p",null,"Say bye to redux action/reducers boilerplates!",Object(o.b)("br",null),"\nwith redux, before you create states you have to at least define the store in advance in a similar way to example below."),Object(o.b)("h2",{id:"example"},Object(o.b)("inlineCode",{parentName:"h2"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// reducer.js\nconst INIT_STATE = {\n  state1: 'one',\n  state2: 'two',\n};\n\nconst reducer = (state = INIT_STATE, {type, payload}) => {\n  switch (type) {\n    case 'addState1':\n      return {...state, state1: 'ones'}\n    default:\n      case 'addState2':\n        return {...state, state2: 'twos'}\n    default:\n      return state;\n  }\n};\nexport default reducer;\n")),Object(o.b)("p",null,"Sometimes you would need to move your small react components states to redux store, so for every components state you would have to define them in advance.",Object(o.b)("br",null),"\nThis can be redundant and unnecessary.",Object(o.b)("br",null),"\nBut ",Object(o.b)("inlineCode",{parentName:"p"},"use-redux-states")," found a way to create redux state much easier and dynamically without writing redundant codes.",Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"use-redux-states")," can make you have similar states above with few lines of codes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const Component = () => {\n  const {setState, getState} = useReduxState({\n    path: 'component_state',\n    state: {\n      state1: 'one',\n      state2: 'two',\n    }\n  });\n\n  useEffect(() => {\n    console.log(getState()) // {state1: 'one', state2: 'two'}\n\n    setState({\n      state1: 'ones',\n      state2: 'twos',\n    });\n    console.log(getState()) // {state1: 'ones', state2: 'twos'}\n  }, [])\n}\n")))}u.isMDXComponent=!0}}]);