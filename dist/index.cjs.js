"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@vue/reactivity"),e=e=>t.reactive(e),i=({actions:t,initialState:e})=>(i,s)=>{t[i]?.(e,s)};const s=e,a=i,r=({state:s,actions:a})=>{const r=e(s),o=i({actions:a,initialState:r});return{state:t.readonly(r),dispatch:o}};exports.defineStore=r,exports.useActions=a,exports.useState=s;
//# sourceMappingURL=index.cjs.js.map
