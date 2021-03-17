import{reactive as t,readonly as i}from"@vue/reactivity";var a=i=>t(i),e=({actions:t,initialState:i})=>(a,e)=>{t[a]?.(i,e)};const n=a,o=e,s=({state:n,actions:o})=>{const s=a(t)(n),c=e({actions:o,initialState:s});return{state:i(s),dispatch:c}};export{s as defineStore,o as useActions,n as useState};
//# sourceMappingURL=index.esm.js.map
