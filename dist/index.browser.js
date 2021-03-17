!function(t,e){"use strict";var i=t=>e.reactive(t),a=({actions:t,initialState:e})=>(i,a)=>{t[i]?.(e,a)};const n=i,s=a,c=({state:t,actions:n})=>{const s=i(e.reactive)(t),c=a({actions:n,initialState:s});return{state:e.readonly(s),dispatch:c}};t.defineStore=c,t.useActions=s,t.useState=n,Object.defineProperty(t,"__esModule",{value:!0})}({},VueReactivity);
//# sourceMappingURL=index.browser.js.map
