(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1025)}])},1025:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var r=t(5893),i=t(9222),c=t(1163),a=t(4480),l=t(4926);function s(n){let{text:e,onClickUrl:t,type:s}=n,o=(0,c.useRouter)(),u=(0,a.Zl)(l.l2),f=(0,a.Zl)(l.Ve),d=()=>{(f(s),"celtic"===t)?(u(10),o.push("/choose")):o.push(t)};return(0,r.jsx)(i.z,{w:"150px",h:"40px",m:"10px 0",bgColor:"white",transitionDuration:"1s",onClick:d,_hover:{background:"black",color:"white"},children:e})}var o=t(204),u=t(9564);function f(){return(0,r.jsxs)(o.k,{w:"100%",h:"100%",align:"center",justify:"center",direction:"column",children:[(0,r.jsx)(u.x,{color:"white",fontSize:"7xl",mb:"50px",children:"영수타로"}),(0,r.jsxs)(o.k,{align:"center",justify:"center",direction:"column",children:[(0,r.jsx)(s,{text:"타로카드",onClickUrl:"/count",type:"tarot"}),(0,r.jsx)(s,{text:"심볼론카드",onClickUrl:"/count",type:"symbol"}),(0,r.jsx)(s,{text:"켈픽크로스",onClickUrl:"celtic",type:"celtic"})]})]})}},9222:function(n,e,t){"use strict";t.d(e,{z:function(){return h}});var r=t(7294),[i,c]=(0,t(5227).k)({strict:!1,name:"ButtonGroupContext"}),a=t(2504),l=t(5432),s=t(5893);function o(n){let{children:e,className:t,...i}=n,c=(0,r.isValidElement)(e)?(0,r.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,o=(0,l.cx)("chakra-button__icon",t);return(0,s.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o,children:c})}o.displayName="ButtonIcon";var u=t(295);function f(n){let{label:e,placement:t,spacing:i="0.5rem",children:c=(0,s.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:f,...d}=n,x=(0,l.cx)("chakra-button__spinner",o),m="start"===t?"marginEnd":"marginStart",p=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[m]:e?i:0,fontSize:"1em",lineHeight:"normal",...f}),[f,e,m,i]);return(0,s.jsx)(a.m.div,{className:x,...d,__css:p,children:c})}f.displayName="ButtonSpinner";var d=t(1103),x=t(5059),m=t(1639),p=t(3179),h=(0,x.G)((n,e)=>{let t=c(),i=(0,m.mq)("Button",{...t,...n}),{isDisabled:o=null==t?void 0:t.isDisabled,isLoading:u,isActive:x,children:h,leftIcon:j,rightIcon:g,loadingText:k,iconSpacing:y="0.5rem",type:b,spinner:v,spinnerPlacement:N="start",className:w,as:C,...E}=(0,p.Lr)(n),S=(0,r.useMemo)(()=>{let n={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!t&&{_focus:n}}},[i,t]),{ref:B,type:q}=function(n){let[e,t]=(0,r.useState)(!n),i=(0,r.useCallback)(n=>{n&&t("BUTTON"===n.tagName)},[]);return{ref:i,type:e?"button":void 0}}(C),T={rightIcon:g,leftIcon:j,iconSpacing:y,children:h};return(0,s.jsxs)(a.m.button,{ref:(0,d.qq)(e,B),as:C,type:null!=b?b:q,"data-active":(0,l.PB)(x),"data-loading":(0,l.PB)(u),__css:S,className:(0,l.cx)("chakra-button",w),...E,disabled:o||u,children:[u&&"start"===N&&(0,s.jsx)(f,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:y,children:v}),u?k||(0,s.jsx)(a.m.span,{opacity:0,children:(0,s.jsx)(_,{...T})}):(0,s.jsx)(_,{...T}),u&&"end"===N&&(0,s.jsx)(f,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:y,children:v})]})});function _(n){let{leftIcon:e,rightIcon:t,children:r,iconSpacing:i}=n;return(0,s.jsxs)(s.Fragment,{children:[e&&(0,s.jsx)(o,{marginEnd:i,children:e}),r,t&&(0,s.jsx)(o,{marginStart:i,children:t})]})}h.displayName="Button"},204:function(n,e,t){"use strict";t.d(e,{k:function(){return a}});var r=t(5059),i=t(2504),c=t(5893),a=(0,r.G)(function(n,e){let{direction:t,align:r,justify:a,wrap:l,basis:s,grow:o,shrink:u,...f}=n;return(0,c.jsx)(i.m.div,{ref:e,__css:{display:"flex",flexDirection:t,alignItems:r,justifyContent:a,flexWrap:l,flexBasis:s,flexGrow:o,flexShrink:u},...f})});a.displayName="Flex"},9564:function(n,e,t){"use strict";t.d(e,{x:function(){return o}});var r=t(5059),i=t(1639),c=t(3179),a=t(2504),l=t(5432),s=t(5893),o=(0,r.G)(function(n,e){let t=(0,i.mq)("Text",n),{className:r,align:o,decoration:u,casing:f,...d}=(0,c.Lr)(n),x=function(n){let e=Object.assign({},n);for(let n in e)void 0===e[n]&&delete e[n];return e}({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return(0,s.jsx)(a.m.p,{ref:e,className:(0,l.cx)("chakra-text",n.className),...x,...d,__css:t})});o.displayName="Text"},1103:function(n,e,t){"use strict";t.d(e,{lq:function(){return i},qq:function(){return c}});var r=t(7294);function i(...n){return e=>{n.forEach(n=>{!function(n,e){if(null!=n){if("function"==typeof n){n(e);return}try{n.current=e}catch(t){throw Error(`Cannot assign value '${e}' to ref '${n}'`)}}}(n,e)})}}function c(...n){return(0,r.useMemo)(()=>i(...n),n)}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);