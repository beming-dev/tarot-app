(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{1058:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/choose",function(){return r(2807)}])},2807:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(5893),c=r(7294),o=r(204),s=r(9564),l=r(9222),a=r(4480),u=r(4926),i=r(6243),d=r(4416),f=r(1163);function h(e){let{card:t,selected:r}=e;(0,f.useRouter)();let c=(0,a.sJ)(u.uo),o=(0,a.sJ)(u.Ag),s=(0,a.sJ)(u.l2),l=(0,a.sJ)(u.cd),i=(0,a.Zl)(u.cd),h=()=>{if(l.some(e=>e.card_no===t.card_no))i(l.filter(e=>e.card_no!==t.card_no));else{if(l.length>=s){alert("카드를 다 골랐어요!");return}o&&.25>Math.random()?i([...l,{...t,reverse:!0}]):i([...l,{...t,reverse:!1}])}};return(0,n.jsx)(d.E,{src:"".concat(c,"/cards/tarot_back.jpg"),alt:"tarot_back",w:"30px",m:"5px 3px",border:r?"2px solid black":"1px solid white",transform:r?"rotate(0.025turn)":"rotate(0turn)",onClick:h})}function _(){let[e,t]=(0,c.useState)([]),r=(0,f.useRouter)(),d=(0,a.sJ)(u.cd),_=(0,a.sJ)(u.l2),p=(0,a.Zl)(u.cd),x=(0,a.sJ)(u.Ve);(0,c.useEffect)(()=>{p([])},[]);let w=e=>{for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},k=()=>{if(d.length!==_){alert("".concat(_,"장의 카드를 골라주세요!"));return}"celtic"===x?r.push("/celticResult"):r.push("/result")};return(0,c.useEffect)(()=>{switch(x){case"tarot":t(w(i.eG));break;case"symbol":t(w(i.FB))}},[x]),(0,n.jsxs)(o.k,{w:"100%",h:"100%",align:"center",justify:"center",direction:"column",children:[(0,n.jsxs)(s.x,{color:"white",fontSize:"2xl",mt:"20px",children:[_,"장의 카드를 골라주세요"]}),(0,n.jsx)(o.k,{align:"center",justify:"center",w:"100%",overflow:"scroll",flexWrap:"wrap",flex:1,m:"10px 0",children:e.map(e=>(0,n.jsx)(h,{card:e,selected:!!d.some(t=>e.card_no===t.card_no)},e.card_no))}),(0,n.jsx)(l.z,{border:"1px solid white",bgColor:"transparent",color:"white",mb:"20px",onClick:k,children:"선택완료"})]})}}},function(e){e.O(0,[784,774,888,179],function(){return e(e.s=1058)}),_N_E=e.O()}]);