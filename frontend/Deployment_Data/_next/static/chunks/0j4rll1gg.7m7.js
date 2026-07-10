(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62368,e=>{"use strict";let t=(0,e.i(56420).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",0,t],62368)},67927,e=>{"use strict";let t=(0,e.i(56420).default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["ChevronRight",0,t],67927)},53928,e=>{"use strict";var t=e.i(43476),n=e.i(62368);e.s(["PrintButton",0,function(){return(0,t.jsxs)("button",{onClick:()=>window.print(),className:"w-full bg-gray-100 hover:bg-gray-200 text-navy py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors",children:[(0,t.jsx)(n.Download,{size:16})," Save / Print PDF"]})}])},44125,e=>{"use strict";var t=e.i(43476),n=e.i(71645),s=e.i(57688);e.s(["default",0,function({images:e,alt:a}){let[r,l]=(0,n.useState)(0),[i,o]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");o(e.matches);let t=e=>o(e.matches);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),(0,n.useEffect)(()=>{if(i||e.length<=1)return;let t=setInterval(()=>{l(t=>(t+1)%e.length)},7e3);return()=>clearInterval(t)},[i,e.length]),e&&0!==e.length)?(0,t.jsxs)("div",{className:"absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0",children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes kenburns-slow {
          0% {
            transform: scale(1.02) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.08) translate3d(0.5%, 0.5%, 0);
          }
          100% {
            transform: scale(1.02) translate3d(0, 0, 0);
          }
        }
        .animate-kenburns-gpu {
          animation: kenburns-slow 24s ease-in-out infinite;
          will-change: transform;
        }
      `}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 to-black/50 z-10"}),(0,t.jsx)("div",{className:"relative w-full h-full",children:e.map((e,n)=>{let l=n===r;return i&&0!==n?null:(0,t.jsx)("div",{className:`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out transform-gpu ${l?"opacity-25":"opacity-0 pointer-events-none"}`,style:{transitionProperty:"opacity"},children:(0,t.jsx)(s.default,{src:e,alt:`${a} campus slide ${n+1}`,fill:!0,sizes:"100vw",priority:0===n,loading:0===n?"eager":"lazy",className:`object-cover object-center w-full h-full transform-gpu ${l&&!i?"animate-kenburns-gpu":""}`})},e)})})]}):null}])},77511,e=>{"use strict";var t=e.i(43476),n=e.i(45031),s=e.i(67927);e.s(["ApplyNowButton",0,({className:e="",fullWidth:a=!1,noDefault:r=!1,children:l})=>{let{openModal:i}=(0,n.useApplyModal)();return(0,t.jsx)("button",{onClick:i,className:r?e:`btn-primary flex justify-center items-center gap-2 ${a?"w-full":""} ${e}`,children:l||(0,t.jsxs)(t.Fragment,{children:["Apply Now ",(0,t.jsx)(s.ChevronRight,{size:18})]})})}])}]);