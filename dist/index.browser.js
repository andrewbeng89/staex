var Staex=function(t,e){"use strict";var a=t=>e.reactive(t),i=({actions:t,initialState:e})=>(a,i)=>{t[a]?.(e,i)};const n=a,s=i,c=({state:t,actions:n})=>{const s=a(t),c=i({actions:n,initialState:s});return{state:e.readonly(s),dispatch:c}};return t.defineStore=c,t.useActions=s,t.useState=n,Object.defineProperty(t,"__esModule",{value:!0}),t}({},VueReactivity);
//# sourceMappingURL=index.browser.js.map
