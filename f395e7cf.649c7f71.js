(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return y})),n.d(t,"metadata",(function(){return v})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return j}));var r=n(2),a=n(6),o=n(0),l=n.n(o),s=n(86),c=n(95),i=n(87),u=n(79),d=n.n(u);const b=37,p=39;var m=function(e){const{block:t,children:n,defaultValue:r,values:a,groupId:s,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(c.a)(),[y,v]=Object(o.useState)(r),[O,h]=Object(o.useState)(!1);if(null!=s){const e=m[s];null!=e&&e!==y&&a.some((t=>t.value===e))&&v(e)}const j=e=>{v(e),null!=s&&f(s,e)},g=[],x=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},w=()=>{h(!1)};return Object(o.useEffect)((()=>(window.addEventListener("keydown",x),window.addEventListener("mousedown",w),()=>{window.removeEventListener("keydown",x),window.removeEventListener("mousedown",w)})),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},u)},a.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===e,className:Object(i.a)("tabs__item",d.a.tabItem,{"tabs__item--active":y===e}),style:O?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),x(e)},onFocus:()=>j(e),onClick:()=>{j(e),h(!1)},onPointerDown:()=>h(!1)},t)))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((e=>e.props.value===y))[0]))};var f=function(e){return l.a.createElement("div",null,e.children)},y={id:"install",title:"Installation",sidebar_label:"Installation",slug:"/install"},v={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"Install",source:"@site/docs\\install.md",slug:"/install",permalink:"/use-redux-state-hook/docs/next/install",editUrl:"https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/docs/install.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/use-redux-state-hook/docs/next/"},next:{title:"Usage",permalink:"/use-redux-state-hook/docs/next/usage"}},O=[{value:"Install",id:"install",children:[]},{value:"Install with peerDependencies",id:"install-with-peerdependencies",children:[]}],h={rightToc:O};function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"install"},"Install"),Object(s.b)(m,{groupId:"syntax",values:[{label:"Yarn",value:"yarn"},{label:"Npm",value:"npm"}],mdxType:"Tabs"},Object(s.b)(f,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"yarn add use-redux-state-hook@beta\n"))),Object(s.b)(f,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save use-redux-state-hook@beta\n")))),Object(s.b)("h2",{id:"install-with-peerdependencies"},"Install with peerDependencies"),Object(s.b)(m,{groupId:"syntax",values:[{label:"Yarn",value:"yarn"},{label:"Npm",value:"npm"}],mdxType:"Tabs"},Object(s.b)(f,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"yarn add use-redux-state-hook@beta redux react-redux @reduxjs/toolkit\n"))),Object(s.b)(f,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save use-redux-state-hook@beta redux react-redux @reduxjs/toolkit\n")))))}j.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(m,s(s({ref:t},i),{},{components:n})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},95:function(e,t,n){"use strict";var r=n(0),a=n(96);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a}}]);