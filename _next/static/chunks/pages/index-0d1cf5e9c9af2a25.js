(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1025)}])},1025:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(5893),i=n(9222),a=n(1163),c=n(4480),l=n(4926);function s(t){let{text:e,onClickUrl:n,type:s,idx:o}=t,u=(0,a.useRouter)(),f=(0,c.Zl)(l.l2),d=(0,c.Zl)(l.Ve),x=(0,c.Zl)(l.Ag),m=()=>{switch(d(s),n){case"celtic":f(10),u.push("/choose");break;case"tarot-fast":f(3),d("tarot"),x(!1);break;case"symbol-fast":f(3),d("symbol"),x(!1);break;default:u.push(n)}};return(0,r.jsx)(i.z,{w:"150px",h:"40px",m:"10px 0",bgColor:["#C6DBDA","#FEE1E8","#FED7C3","#F6EAC2","#ECD5E3"][o%5],transitionDuration:"1s",onClick:m,_hover:{background:"black",color:"white"},children:e})}var o=n(204),u=n(9564);function f(){return(0,r.jsxs)(o.k,{w:"100%",h:"100%",align:"center",justify:"center",direction:"column",children:[(0,r.jsx)(u.x,{color:"white",fontSize:"7xl",mb:"50px",children:"YS 타로"}),(0,r.jsxs)(o.k,{align:"center",justify:"center",direction:"column",children:[(0,r.jsx)(s,{text:"빠른 타로2",onClickUrl:"/choose",type:"tarot-fast",idx:0}),(0,r.jsx)(s,{text:"빠른 심볼론",onClickUrl:"/choose",type:"symbol-fast",idx:1}),(0,r.jsx)(s,{text:"타로카드",onClickUrl:"/count",type:"tarot",idx:2}),(0,r.jsx)(s,{text:"심볼론카드",onClickUrl:"/count",type:"symbol",idx:3}),(0,r.jsx)(s,{text:"켈픽크로스",onClickUrl:"celtic",type:"celtic",idx:4})]})]})}},4926:function(t,e,n){"use strict";n.d(e,{Ag:function(){return s},Ve:function(){return i},cd:function(){return l},g8:function(){return a},l2:function(){return c},mC:function(){return o}});var r=n(4480);let i=(0,r.cn)({key:"type",default:"tarot"}),a=(0,r.cn)({key:"tarotState",default:"tarot"}),c=(0,r.cn)({key:"countState",default:3}),l=(0,r.cn)({key:"selectedList",default:[]}),s=(0,r.cn)({key:"reverseState",default:!1}),o=(0,r.cn)({key:"subjectState",default:""})},9222:function(t,e,n){"use strict";n.d(e,{z:function(){return h}});var r=n(7294),[i,a]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),c=n(2504),l=n(5432),s=n(5893);function o(t){let{children:e,className:n,...i}=t,a=(0,r.isValidElement)(e)?(0,r.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,o=(0,l.cx)("chakra-button__icon",n);return(0,s.jsx)(c.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o,children:a})}o.displayName="ButtonIcon";var u=n(295);function f(t){let{label:e,placement:n,spacing:i="0.5rem",children:a=(0,s.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:f,...d}=t,x=(0,l.cx)("chakra-button__spinner",o),m="start"===n?"marginEnd":"marginStart",p=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[m]:e?i:0,fontSize:"1em",lineHeight:"normal",...f}),[f,e,m,i]);return(0,s.jsx)(c.m.div,{className:x,...d,__css:p,children:a})}f.displayName="ButtonSpinner";var d=n(1103),x=n(5059),m=n(1639),p=n(3179),h=(0,x.G)((t,e)=>{let n=a(),i=(0,m.mq)("Button",{...n,...t}),{isDisabled:o=null==n?void 0:n.isDisabled,isLoading:u,isActive:x,children:h,leftIcon:k,rightIcon:_,loadingText:b,iconSpacing:j="0.5rem",type:g,spinner:v,spinnerPlacement:C="start",className:N,as:E,...w}=(0,p.Lr)(t),S=(0,r.useMemo)(()=>{let t={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:t}}},[i,n]),{ref:B,type:D}=function(t){let[e,n]=(0,r.useState)(!t),i=(0,r.useCallback)(t=>{t&&n("BUTTON"===t.tagName)},[]);return{ref:i,type:e?"button":void 0}}(E),q={rightIcon:_,leftIcon:k,iconSpacing:j,children:h};return(0,s.jsxs)(c.m.button,{ref:(0,d.qq)(e,B),as:E,type:null!=g?g:D,"data-active":(0,l.PB)(x),"data-loading":(0,l.PB)(u),__css:S,className:(0,l.cx)("chakra-button",N),...w,disabled:o||u,children:[u&&"start"===C&&(0,s.jsx)(f,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:j,children:v}),u?b||(0,s.jsx)(c.m.span,{opacity:0,children:(0,s.jsx)(y,{...q})}):(0,s.jsx)(y,{...q}),u&&"end"===C&&(0,s.jsx)(f,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:j,children:v})]})});function y(t){let{leftIcon:e,rightIcon:n,children:r,iconSpacing:i}=t;return(0,s.jsxs)(s.Fragment,{children:[e&&(0,s.jsx)(o,{marginEnd:i,children:e}),r,n&&(0,s.jsx)(o,{marginStart:i,children:n})]})}h.displayName="Button"},204:function(t,e,n){"use strict";n.d(e,{k:function(){return c}});var r=n(5059),i=n(2504),a=n(5893),c=(0,r.G)(function(t,e){let{direction:n,align:r,justify:c,wrap:l,basis:s,grow:o,shrink:u,...f}=t;return(0,a.jsx)(i.m.div,{ref:e,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:c,flexWrap:l,flexBasis:s,flexGrow:o,flexShrink:u},...f})});c.displayName="Flex"},9564:function(t,e,n){"use strict";n.d(e,{x:function(){return o}});var r=n(5059),i=n(1639),a=n(3179),c=n(2504),l=n(5432),s=n(5893),o=(0,r.G)(function(t,e){let n=(0,i.mq)("Text",t),{className:r,align:o,decoration:u,casing:f,...d}=(0,a.Lr)(t),x=function(t){let e=Object.assign({},t);for(let t in e)void 0===e[t]&&delete e[t];return e}({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return(0,s.jsx)(c.m.p,{ref:e,className:(0,l.cx)("chakra-text",t.className),...x,...d,__css:n})});o.displayName="Text"},1103:function(t,e,n){"use strict";n.d(e,{lq:function(){return i},qq:function(){return a}});var r=n(7294);function i(...t){return e=>{t.forEach(t=>{!function(t,e){if(null!=t){if("function"==typeof t){t(e);return}try{t.current=e}catch(n){throw Error(`Cannot assign value '${e}' to ref '${t}'`)}}}(t,e)})}}function a(...t){return(0,r.useMemo)(()=>i(...t),t)}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);