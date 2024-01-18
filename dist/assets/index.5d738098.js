import{j as e,r,a as i,C as L,b as M,S as B,c as T,L as O,d as E,T as k,F as C,R as j,e as _}from"./vendor.ac42481c.js";const P=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};P();const F=({children:s,tipo:a})=>e("div",{className:`alert ${a}`,children:s}),$=({budget:s,setBudget:a,setIsValidBudget:o})=>{const[c,t]=r.exports.useState("");return e("div",{className:"container-budget container shadow",children:e("form",{onSubmit:d=>{if(d.preventDefault(),!s||s<0){t("No es un budget valido");return}t(""),o(!0)},className:"form",children:i("div",{className:"field",children:[e("label",{children:"Define budget"}),e("input",{className:"nuevo-budget",type:"text",placeholder:"add a budget",value:s,onChange:d=>a(Number(d.target.value))}),e("input",{type:"submit",value:"Add Budget"}),c&&e(F,{tipo:"error",children:c})]})})})};const R=({expenses:s,setExpenses:a,budget:o,setBudget:c,setIsValidbudget:t})=>{const[n,d]=r.exports.useState(0),[u,v]=r.exports.useState(0),[p,f]=r.exports.useState(0);r.exports.useEffect(()=>{const g=s.reduce((y,N)=>N.amount+y,0),b=o-g,S=((o-b)/o*100).toFixed(2);v(b),f(g),setTimeout(()=>{d(S)},1e3)},[s]);const h=g=>g.toLocaleString("en-US",{style:"currency",currency:"USD"}),m=()=>{confirm("\xBFDeseas reiniciar budgets y expenses?")&&(a([]),c(0),t(!1))};return i("div",{className:"container-budget container shadow two-columns",children:[e("div",{children:e(L,{styles:M({pathColor:n>100?"#DC2626":"#3B82F6",trailColor:"#F5F5F5",textColor:n>100?"#DC2626":"#3B82F6"}),value:n,text:`${n}% spent`})}),i("div",{className:"content-budget",children:[e("button",{className:"reset-app",type:"button",onClick:m,children:"Reset App"}),i("p",{children:[e("span",{children:"budget:"}),h(o)]}),i("p",{className:`${u<0?"negative":""}`,children:[e("span",{children:"available:"}),h(u)]}),i("p",{children:[e("span",{children:"spent:"}),h(p)]})]})]})},U=({expenses:s,setExpenses:a,budget:o,setBudget:c,isValidBudget:t,setIsValidBudget:n})=>i("header",{children:[e("h1",{children:"Expense Planner"}),t?e(R,{expenses:s,setExpenses:a,budget:o,setBudget:c,setIsValidBudget:n}):e($,{budget:o,setBudget:c,setIsValidBudget:n})]});var V="/assets/cerrar.ab3aac92.svg";const z=({setModal:s,animateModal:a,setAnimateModal:o,saveExpense:c,editExpense:t,setEditExpense:n})=>{const[d,u]=r.exports.useState(""),[v,p]=r.exports.useState(""),[f,h]=r.exports.useState(0),[m,g]=r.exports.useState(""),[b,S]=r.exports.useState(""),[y,N]=r.exports.useState("");return r.exports.useEffect(()=>{Object.keys(t).length>0&&(p(t.name),h(t.amount),g(t.category),N(t.id),S(t.date))},[]),i("div",{className:"modal",children:[e("div",{className:"close-modal",children:e("img",{src:V,alt:"close modal",onClick:()=>{o(!1),setTimeout(()=>{s(!1)},500)}})}),i("form",{onSubmit:l=>{if(l.preventDefault(),[v,f,m].includes("")){u("Todos los fields son obligatorios"),setTimeout(()=>{u("")},2e3);return}c({name:v,amount:f,category:m,id:y,date:b})},className:`form ${a?"animate":"close"}`,children:[e("legend",{children:t.name?"Editar expense":"Nuevo expense"}),d&&e(F,{tipo:"error",children:d}),i("div",{className:"field",children:[e("label",{htmlFor:"name",children:"name expense"}),e("input",{id:"name",type:"text",placeholder:"A\xF1ade el name del expense",value:v,onChange:l=>p(l.target.value)})]}),i("div",{className:"field",children:[e("label",{htmlFor:"amount",children:"amount"}),e("input",{id:"amount",type:"number",placeholder:"A\xF1ade la amount del expense: ej. 300",value:f,onChange:l=>h(Number(l.target.value))})]}),i("div",{className:"field",children:[e("label",{htmlFor:"category",children:"category"}),i("select",{id:"category",value:m,onChange:l=>g(l.target.value),children:[e("option",{value:"",children:"--Seleccione"}),e("option",{value:"savings",children:"savings"}),e("option",{value:"food",children:"food"}),e("option",{value:"house",children:"house"}),e("option",{value:"expenses",children:"expenses Varios"}),e("option",{value:"ocio",children:"Ocio"}),e("option",{value:"health",children:"health"}),e("option",{value:"subscriptions",children:"subscriptions"})]})]}),e("input",{type:"submit",value:t.name?"Guardar Cambio":"A\xF1adir expense"})]})]})},J=({filter:s,setFilter:a})=>e("div",{className:"filters shadow container",children:e("form",{children:i("div",{className:"field",children:[e("label",{children:"Filter expenses"}),i("select",{value:s,onChange:o=>a(o.target.value),children:[e("option",{value:"",children:"--All the categorys--"}),e("option",{value:"savings",children:"savings"}),e("option",{value:"food",children:"food"}),e("option",{value:"house",children:"house"}),e("option",{value:"expenses",children:"expenses Varios"}),e("option",{value:"leisure",children:"leisure"}),e("option",{value:"health",children:"health"}),e("option",{value:"subscriptions",children:"subscriptions"})]})]})})});const q=()=>{const s=Math.random().toString(36).substring(2),a=Date.now().toString(36);return s+a},G=s=>{const a=new Date(s),o={year:"numeric",month:"long",day:"2-digit"};return a.toLocaleDateString("en-US",o)};var H="/assets/icono_ahorro.ff2959d3.svg",K="/assets/icono_casa.1170ce11.svg",Q="/assets/icono_comida.db0a9016.svg",W="/assets/icono_gastos.e6dea3b0.svg",X="/assets/icono_ocio.ad5d0e9e.svg",Y="/assets/icono_salud.41ba3136.svg",Z="/assets/icono_suscripciones.97f04dc8.svg";const ee={savings:H,food:Q,house:K,expenses:W,leisure:X,health:Y,subscriptions:Z},w=({expense:s,setEditExpense:a,eliminateExpense:o})=>{const{category:c,name:t,amount:n,id:d,date:u}=s,v=()=>e(O,{children:e(E,{onClick:()=>a(s),children:"Editar"})}),p=()=>e(k,{children:e(E,{onClick:()=>o(d),destructive:!0,children:"Eliminar"})});return e(B,{children:e(T,{leadingActions:v(),trailingActions:p(),children:i("div",{className:"expense shadow",children:[i("div",{className:"content-expense",children:[e("img",{src:ee[c],alt:"Icons-expenses"}),i("div",{className:"description-expense",children:[e("p",{className:"category",children:c}),e("p",{className:"name-expense",children:t}),i("p",{className:"date-expense",children:["Agregando el: ","",e("span",{children:G(u)})]})]})]}),i("p",{className:"amount-expense",children:["$ ",n," "]})]})})})},te=({expenses:s,setEditExpense:a,eliminateExpense:o,filter:c,leakedExpenses:t})=>e("div",{className:"list-expenses container",children:c?i(C,{children:[e("h2",{children:t.length?"expenses":"There are no expenses in this category"}),t.map(n=>e(w,{expense:n,setEditExpense:a,eliminateExpense:o},n.id))]}):i(C,{children:[e("h2",{children:s.length?"expenses":"There are no expenses yet"}),s.map(n=>e(w,{expense:n,setEditExpense:a,eliminateExpense:o},n.id))]})});var se="/assets/nuevo-gasto.3ab385ce.svg";function ne(){var I;const[s,a]=r.exports.useState(localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[]),[o,c]=r.exports.useState((I=Number(localStorage.getItem("budget")))!=null?I:0),[t,n]=r.exports.useState(!1),[d,u]=r.exports.useState(!1),[v,p]=r.exports.useState(!1),[f,h]=r.exports.useState({}),[m,g]=r.exports.useState(""),[b,S]=r.exports.useState([]);return r.exports.useEffect(()=>{Object.keys(f).length>0&&u(!0),setTimeout(()=>{p(!0)},500)},[f]),r.exports.useEffect(()=>{localStorage.setItem("budget",o!=null?o:0)},[o]),r.exports.useEffect(()=>{var l;localStorage.setItem("expenses",(l=JSON.stringify(s))!=null?l:[])},[s]),r.exports.useEffect(()=>{if(m){const l=s.filter(x=>x.category===m);S(l)}},[m]),r.exports.useEffect(()=>{var x;((x=localStorage.getItem("budget"))!=null?x:0)>0&&n(!0)},[]),i("div",{className:d?"set":"",children:[" ",e(U,{expenses:s,setExpenses:a,budget:o,setBudget:c,isValidBudget:t,setIsValidBudget:n}),t&&i(C,{children:[i("main",{children:[e(J,{filter:m,setFilter:g}),e(te,{expenses:s,setEditExpense:h,eliminateExpense:l=>{const x=s.filter(A=>A.id!==l);a(x)},filter:m,leakedExpenses:b})]}),e("div",{className:"new-expense",children:e("img",{src:se,alt:"Icono nuevo expense",onClick:()=>{u(!0),h({}),setTimeout(()=>{p(!0)},500)}})})]}),d&&e(z,{setModal:u,animateModal:v,setAnimateModal:p,saveExpense:l=>{if(l.id){const x=s.map(A=>A.id===l.id?l:A);a(x),h({})}else l.id=q(),l.date=Date.now(),a([...s,l]);p(!1),setTimeout(()=>{u(!1)},500)},editExpense:f,setEditExpense:h})]})}j.render(e(_.StrictMode,{children:e(ne,{})}),document.getElementById("root"));
