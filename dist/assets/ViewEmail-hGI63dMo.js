import{j as e,s as n,B as t,T as s,A as d,D as p}from"./index-7Jz0WdH2.js";import{c as a,u as x,e as m,A as h}from"./api.urls-WYgzZirq.js";const g=a(e.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),f=a(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),j=n(t)({padding:15}),w=n(s)({fontSize:22,margin:"10px 0 20px 75px",display:"flex"}),u=n(t)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-left: 6px;
    padding: 2px 4px;
    align-self: center;
`,y=n("img")({borderRadius:"50%",width:40,height:40,margin:"5px 10px 0 10px",backgroundColor:"#cccccc"}),E=n(t)({marginLeft:15,width:"100%","& > div":{display:"flex","& > p > span":{fontSize:12,color:"#5E5E5E"}}}),b=n(s)({margin:"0 50px 0 auto",fontSize:12,color:"#5E5E5E"}),D=()=>{const{openDrawer:i}=d(),{state:c}=p(),{email:o}=c,l=x(h.moveEmailsToBin),r=()=>{l.call([o._id]),window.history.back()};return e.jsxs(t,{style:i?{marginLeft:250}:{width:"100%"},children:[e.jsxs(j,{children:[e.jsx(g,{fontSize:"small",color:"action",onClick:()=>window.history.back()}),e.jsx(f,{fontSize:"small",color:"action",style:{marginLeft:40},onClick:()=>r()})]}),e.jsxs(w,{children:[o.subject," ",e.jsx(u,{component:"span",children:"Inbox"})]}),e.jsxs(t,{style:{display:"flex"},children:[e.jsx(y,{src:m,alt:"profile"}),e.jsxs(E,{children:[e.jsxs(t,{children:[e.jsxs(s,{children:[o.to.split("@")[0],e.jsxs(t,{component:"span",children:[" <",o.to,">"]})]}),e.jsxs(b,{children:[new window.Date(o.date).getDate()," ",new window.Date(o.date).toLocaleString("default",{month:"long"})," ",new window.Date(o.date).getFullYear()]})]}),e.jsx(s,{style:{marginTop:20},children:o.body})]})]})]})};export{D as default};
