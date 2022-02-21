(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=(r(0),r(120));const o={id:"use-state-selector",title:"useStateSelector()"},s={unversionedId:"apis/hooks/use-state-selector",id:"version-1.0.x/apis/hooks/use-state-selector",isDocsHomePage:!1,title:"useStateSelector()",description:"This hook allows to select redux state efficiently and in a memoized way.",source:"@site/versioned_docs/version-1.0.x/apis/hooks/use-state-selector.md",slug:"/apis/hooks/use-state-selector",permalink:"/use-redux-states/docs/apis/hooks/use-state-selector",editUrl:"https://github.com/myckhel/use-redux-states/edit/master/redux-state/versioned_docs/version-1.0.x/apis/hooks/use-state-selector.md",version:"1.0.x",sidebar:"version-1.0.x/someSidebar",previous:{title:"useGetState()",permalink:"/use-redux-states/docs/apis/hooks/use-get-state"},next:{title:"selector()",permalink:"/use-redux-states/docs/apis/selector"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>result()</code>",id:"result",children:[]},{value:"<code>equality()</code>",id:"equality",children:[]}]},{value:"Example",id:"example",children:[]}],i={toc:c};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This hook allows to select redux state efficiently and in a memoized way.\nit uses ",Object(a.b)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc"},"createSelector")," to make sure selector is not recomputed unless one of its arguments changes.\nit also uses ",Object(a.b)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-fast-compare"},"react-fast-compare")," to prevent unnecessary updates."),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("h3",{id:"result"},Object(a.b)("inlineCode",{parentName:"h3"},"result()")),Object(a.b)("p",null,"function that returns the result of the selected state"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"(selectedState) => selectedState\n")),Object(a.b)("h3",{id:"equality"},Object(a.b)("inlineCode",{parentName:"h3"},"equality()")),Object(a.b)("p",null,"function that compare prevState against newState to determine if selected state has changed. defaults to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-fast-compare"},"react-fast-compare")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import useReduxState from 'use-redux-states'\nconst Component = () => {\n  const { useStateSelector } = useReduxState({\n    state: {\n      name: 'john',\n      age: 22\n    },\n    path: 'users.john'\n  })\n  const age = useStateSelector(\n    (users) => users?.john?.age\n  )\n\n  console.log({ age }) // {age: 22}\n}\n")))}u.isMDXComponent=!0}}]);