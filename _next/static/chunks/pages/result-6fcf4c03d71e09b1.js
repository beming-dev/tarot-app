(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{7170:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/result",function(){return n(9666)}])},9666:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(8986),o=n(1231),l=n(1204),s=n(7294),c=n(204),a=n(9564),d=n(4416),u=n(9222),x=n(4480),p=n(4926),h=n(1163),w=n(6243);function f(e){let{card:t,selected:n,setSelectedCard:i}=e,o=()=>{i(t)};return(0,r.jsx)(d.E,{src:"/cards/tarot_back.jpg",alt:"tarot_back",w:"30px",h:"60px",m:"5px 3px",border:n?"1px solid white":"1px solid black",onClick:o})}function m(e){let{setShowModal:t,clickedCardNo:n,setSubCardList:i,subCardList:o}=e,l=(0,x.sJ)(p.g8),[d,h]=(0,s.useState)([]),m=(0,x.sJ)(p.cd),[j,g]=(0,s.useState)(),b=e=>{let t=e.filter(e=>!m.some(t=>t.card_no==e.card_no));for(let e=d.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[d[e],d[t]]=[d[t],d[e]]}return t},k=()=>{let e=[...o.slice(0,n),j,...o.slice(n+1)];i(e),t(!1)};return(0,s.useEffect)(()=>{switch(l){case"tarot":h(b(w.eG));break;case"symbol":h(b(w.FB))}},[l]),(0,r.jsx)(c.k,{w:"100vw",h:"100vh",position:"absolute",alignItems:"center",justifyContent:"center",zIndex:10,children:(0,r.jsxs)(c.k,{bgColor:"rgba(0, 0, 0, 0.7)",flexDir:"column",w:"90vw",h:"90vh",alignItems:"center",justifyContent:"center",borderRadius:"10px",p:"10px 0",border:"1px solid white",children:[(0,r.jsx)(a.x,{color:"white",children:"보조카드 뽑기"}),(0,r.jsx)(c.k,{align:"center",justify:"center",w:"100%",overflow:"scroll",flexWrap:"wrap",flex:1,m:"10px 0",children:d.map(e=>(0,r.jsx)(f,{setSelectedCard:g,card:e,selected:e.card_no===(null==j?void 0:j.card_no)},e.card_no))}),(0,r.jsx)(u.z,{bgColor:"transparent",onClick:k,border:"1px solid white",color:"white",children:"완료"})]})})}function j(){let[e,t]=(0,s.useState)(!1),[n,w]=(0,s.useState)(0),[f,j]=(0,s.useState)([,,,,,]);(0,s.useEffect)(()=>{console.log(111,f)},[f]);let g=(0,x.sJ)(p.cd),b=(0,x.sJ)(p.mC),k=(0,x.sJ)(p.l2),_=(0,h.useRouter)(),C=function(e){let{theme:t}=(0,l.uP)(),n=(0,i.OX)();return(0,s.useMemo)(()=>(0,o.Cj)(t.direction,{...n,...e}),[e,t.direction,n])}(),v=e=>{f[e]||(w(e),t(!0))},S=(e,t)=>{var n,i;return(0,r.jsxs)(c.k,{position:"relative",w:"".concat(90/k,"%"),m:"1%",alignItems:"center",justify:"center",children:[f[t]&&(0,r.jsxs)(c.k,{position:"absolute",top:"".concat(-21*k,"%"),w:"90%",direction:"column",alignItems:"center",children:[(0,r.jsx)(a.x,{w:"100%",textAlign:"center",fontSize:"sm",color:"white",mt:"5px",textOverflow:"clip",whiteSpace:"nowrap",children:null===(n=f[t])||void 0===n?void 0:n.card_name}),(0,r.jsx)(d.E,{w:"100%",src:null===(i=f[t])||void 0===i?void 0:i.img_name,alt:"resultImg"})]}),(0,r.jsxs)(c.k,{w:"100%",direction:"column",alignItems:"center",onClick:()=>v(t),zIndex:"1",children:[(0,r.jsx)(d.E,{transform:e.reverse?"rotate(0.5turn)":"",w:"100%",src:e.img_name,alt:"resultImg"}),(0,r.jsx)(a.x,{w:"100%",textAlign:"center",fontSize:"sm",color:"white",mt:"5px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:e.card_name})]})]},e.card_no)};return(0,r.jsxs)(c.k,{w:"100%",h:"100%",align:"center",justify:"space-between",direction:"column",position:"relative",children:[e&&(0,r.jsx)(m,{subCardList:f,setSubCardList:j,clickedCardNo:n,setShowModal:t}),(0,r.jsx)(a.x,{w:"25px",h:"25px",lineHeight:"23px",textAlign:"center",position:"absolute",color:"white",right:"15px",top:"10px",border:"1px solid white",borderRadius:"100px",onClick:()=>{C({description:"카드를 클릭하면 보조카드를 선택할 수 있어요!",status:"info",duration:2e3,isClosable:!0})},children:"?"}),(0,r.jsx)(a.x,{w:"80%",color:"white",fontSize:"xl",mt:"20px",textAlign:"center",children:b||"결과"}),(0,r.jsx)(c.k,{align:"center",justify:"center",direction:"column",children:(0,r.jsx)(c.k,{p:"0 1%",w:"100%",justifyContent:"center",alignItems:"center",flexWrap:"wrap",m:"10px 0",children:g.map((e,t)=>S(e,t))})}),(0,r.jsx)(c.k,{mb:"20px",children:(0,r.jsx)(u.z,{bgColor:"transparent",color:"white",border:"1px solid white",onClick:()=>{confirm("정말 돌아가시겠습니까?")&&_.push("/")},children:"메인으로"})})]})}}},function(e){e.O(0,[918,774,888,179],function(){return e(e.s=7170)}),_N_E=e.O()}]);