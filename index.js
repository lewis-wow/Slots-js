const Slot={s:{},use(t,e){const o=document.currentScript,n=Slot.s[t].content.cloneNode(!0);n.textContent=n.textContent.replace(/\{(.+?)\}/g,(t,o)=>e[o]),o.parentNode.insertBefore(n,o)},init(){Array.from(document.querySelectorAll("[data-slot]")).forEach(t=>{Slot.s[t.dataset.slot]=t})}};
