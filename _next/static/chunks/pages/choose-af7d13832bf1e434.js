(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{1058:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/choose",function(){return r(2807)}])},2807:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),c=r(7294),o=r(204),s=r(9564),l=r(9222),a=r(4480),i=r(4926),u=r(6243),d=r(4416),f=r(1163);function h(e){let{card:t,selected:r}=e;(0,f.useRouter)();let c=(0,a.sJ)(i.Ag),o=(0,a.sJ)(i.l2),s=(0,a.sJ)(i.cd),l=(0,a.Zl)(i.cd),u=()=>{if(s.some(e=>e.card_no===t.card_no))l(s.filter(e=>e.card_no!==t.card_no));else{if(s.length>=o){alert("카드를 다 골랐어요!");return}c&&.25>Math.random()?l([...s,{...t,reverse:!0}]):l([...s,{...t,reverse:!1}])}};return(0,n.jsx)(d.E,{src:"../background.jpg",alt:"tarot_back",w:"30px",h:"50px",m:"7px 3px",border:r?"2px solid white":"1px solid black",transform:r?"rotate(0.025turn)":"rotate(0turn)",onClick:u})}function p(){let[e,t]=(0,c.useState)([]),r=(0,f.useRouter)(),d=(0,a.sJ)(i.cd),p=(0,a.sJ)(i.l2),x=(0,a.Zl)(i.cd),_=(0,a.sJ)(i.Ve);(0,c.useEffect)(()=>{x([])},[]);let w=e=>{for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},m=()=>{if(d.length!==p){alert("".concat(p,"장의 카드를 골라주세요!"));return}"celtic"===_?r.push("/celticResult"):r.push("/result")};return(0,c.useEffect)(()=>{switch(_){case"tarot":t(w(u.eG));break;case"symbol":t(w(u.FB))}},[_]),(0,n.jsxs)(o.k,{w:"100%",h:"100%",align:"center",justify:"space-between",direction:"column",padding:"20px 0",children:[(0,n.jsxs)(s.x,{color:"white",fontSize:"2xl",mt:"20px",children:[p,"장의 카드를 골라주세요"]}),(0,n.jsx)(o.k,{align:"center",justify:"center",w:"100%",overflow:"hidden",flexWrap:"wrap",m:"10px 0",maxW:"500px",children:e.map(e=>(0,n.jsx)(h,{card:e,selected:!!d.some(t=>e.card_no===t.card_no)},e.card_no))}),(0,n.jsx)(l.z,{border:"1px solid white",bgColor:"transparent",color:"white",mb:"20px",onClick:m,children:"선택완료"})]})}}},function(e){e.O(0,[918,774,888,179],function(){return e(e.s=1058)}),_N_E=e.O()}]);