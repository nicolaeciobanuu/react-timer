(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var o={};e.r(o),e.d(o,"Content",(function(){return C})),e.d(o,"Controls",(function(){return P})),e.d(o,"ControlsButton",(function(){return N})),e.d(o,"Button",(function(){return T})),e.d(o,"Shortcuts",(function(){return R})),e.d(o,"ShortcutsBox",(function(){return z})),e.d(o,"Shortcut",(function(){return D})),e.d(o,"Icon",(function(){return I})),e.d(o,"TimeDisplay",(function(){return E})),e.d(o,"Time",(function(){return F})),e.d(o,"Status",(function(){return L})),e.d(o,"ToggleSound",(function(){return M})),e.d(o,"ButtonSound",(function(){return W})),e.d(o,"VolumeIcon",(function(){return J})),e.d(o,"TypeSelect",(function(){return q})),e.d(o,"PomodoroContent",(function(){return A})),e.d(o,"Pomodoro",(function(){return U}));var r,i,c,a,s,d,u,l,p,f,b,x,h,j,m,g,y,O=e(0),v=e.n(O),k=e(9),w=e.n(k),S=(e(18),e(2)),B=e(3),C=B.a.div(r||(r=Object(S.a)(["\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    max-width: 1200px;\n    margin: 0 auto;\n    \n"]))),P=B.a.div(i||(i=Object(S.a)(["\n    width: 250px;\n    display: flex;\n    justify-content: center;\n    div{\n        width: 250px;\n        display: flex;\n        justify-content: center;\n    }\n    .start{\n        background: #D9534F;\n        color: #fff;\n        &:hover{\n            background: #b64441;\n        }   \n    }\n    .reset{\n        background: transparent;\n        flex: 0;\n        margin-right: 25px;\n        color: #888;\n        &:hover{\n            color: #666;\n        }\n    }\n    .pause{\n        background: #eea73c;\n        color: #fff;\n        &:hover{\n            background: #d3912f;\n        }\n    }\n    .resume{\n        background: #91b62d;\n        color: #fff;\n        &:hover{\n            background: #7d9e23;\n        }\n    }\n"]))),N=B.a.button(c||(c=Object(S.a)(["\n    height: 40px;\n    border-radius: 40px;\n    border: 0;\n    flex: 1;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n    font-size: 14px;\n    letter-spacing: 1px;\n    position: relative;\n    outline: 0;\n    transition: all .3s;\n    padding: 0;\n    \n"]))),T=B.a.button(a||(a=Object(S.a)(["\n    flex: 1;\n    border: 2px solid #ccc;\n    border-right: 0;\n    background: transparent;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    padding: 10px;\n    color: #999;\n    outline: 0;\n    transition: all .3s;\n    cursor: pointer;\n    \n"]))),R=B.a.div(s||(s=Object(S.a)(["\n    position: absolute;\n    width: 27px;\n    height: 24px;\n    right: 70px;\n    top: 25px;\n    @media screen and (max-width: 768px){\n        display: none;\n    }\n    &:hover{\n        .box{\n            opacity: 1;\n            visibility: visible;\n        }\n    }\n"]))),z=B.a.div(d||(d=Object(S.a)(["\n    position: absolute;\n    top: 34px;\n    right: 0;\n    width: 300px;\n    background: #fff;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);\n    padding: 25px;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity .3s;\n    \n"]))),D=B.a.div(u||(u=Object(S.a)(["\n    display: flex;\n    border-bottom: 1px solid #eee;\n    padding: 10px 0;\n    justify-content: space-between;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    font-size: 13px;\n    color: #666;\n    &:first-child{\n        padding-top: 0;\n    }\n    &:last-child{\n        border-bottom: 0;\n        padding-bottom: 0;\n    }\n    div{\n        white-space: nowrap;\n    }\n    kbd{\n        display: inline-block;\n        font-family: monospace;\n        background-color: #f4f4f4;\n        border: 1px solid #ccc;\n        border-radius: 3px;\n        box-shadow: 0 1px 0 rgba(0,0,0,.1), inset 0 0 0 1px #fff;\n        color: #333;\n        font-size: 11px;\n        margin: 0 .15em;\n        padding: .25em .7em;\n        white-space: nowrap;\n    }\n    &:hover{\n        opacity: 1;\n        visibility: visible;\n    }\n\n"]))),I=B.a.div(l||(l=Object(S.a)(["\n    font-size: 24px;\n    color: #666;\n    opacity: .5;\n    transition: all .3s;\n    &:hover{\n        opacity: 1;\n    }\n"]))),E=B.a.div(p||(p=Object(S.a)(["\n    position: relative;\n    svg{\n        max-width: 300px;\n    }\n    circle{\n        transition: stroke-dashoffset 1s;\n        transform: rotate(-90deg);\n        transform-origin: 50% 50%;\n    }\n    div{\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -32px);\n        text-align: center;\n    }\n\n"]))),F=B.a.h1(f||(f=Object(S.a)(["\n    font-size: 52px;\n    font-weight: 300;\n    color: #D9534F;\n    letter-spacing: 2px;\n    margin: 0;\n"]))),L=B.a.p(b||(b=Object(S.a)(["\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #bbb;\n    letter-spacing: 3px;\n    margin: 10px 0 0;\n"]))),M=B.a.div(x||(x=Object(S.a)(["\n    position: absolute;\n    width: 27px;\n    height: 24px;\n    right: 25px;\n    top: 25px;\n    border: 0;\n    background: transparent;\n    font-size: 24px;\n    color: #666;\n    opacity: .5;\n    transition: all .3s;\n    outline: 0;\n    cursor: pointer;\n    padding: 0;\n    text-align: left;\n    .active{\n        opacity: 1;\n    }\n"]))),W=B.a.button(h||(h=Object(S.a)(["\n\n"]))),J=B.a.div(j||(j=Object(S.a)(["\n"]))),q=B.a.div(m||(m=Object(S.a)(["\n    width: 400px;\n    display: flex;\n    @media screen and (max-width: 500px) {\n        width: 100%;\n    }\n    .active{\n        background: #fff;\n        color: #D9534F;\n        box-shadow: 0 3px 10px rgba(0, 0, 0, .12);\n    }\n"]))),A=B.a.div(g||(g=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    @media (max-width: 1000px) {\n        flex-direction: column;\n    }\n"]))),U=B.a.div(y||(y=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    min-height: 600px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 80px 0;\n"]))),V=e(4),G=e(1),H={types:[{name:"Pomodoro",time:1500},{name:"Short Break",time:300},{name:"Long Break",time:900}]},K=function(){var n=Object(O.useState)(H.types[0]),t=Object(V.a)(n,2),e=t[0],r=t[1],i=Object(O.useState)(H.types[0].time),c=Object(V.a)(i,2),a=c[0],s=c[1],d=Object(O.useState)(!1),u=Object(V.a)(d,2),l=u[0],p=u[1],f=Object(O.useState)(null),b=Object(V.a)(f,2),x=b[0],h=b[1];Object(O.useEffect)((function(){return document.addEventListener("keyup",j),Notification.requestPermission(),function(){document.removeEventListener("keyup",j)}}),[]);var j=function(n){"INPUT"!==n.target.tagName&&(""===n.key?w():"Escape"===n.key?k():n.key>=1&&n.key<=H.types.length&&m(H.types[n.key-1]))},m=function(n){k(),r(n),s(n.time),p(!1)},g=function(){if(a<=1){y(),p(!1);try{navigator.serviceWorker.register("service-worker.js").then((function(n){n.showNotification("".concat(e.name," finished!"))}))}catch(n){console.log("Notification error",n)}}s((function(n){return n-1}))},y=function(){clearInterval(x),h(null)},v=function(){p(!0),h(setInterval(g,1e3)),a<0&&s(e.time)},k=function(){y(),s(e.time),p(!1)},w=function(){x?y():v()},S=function(){return 0===a?"Finished":l&&!x?"Paused":l?"Running":void 0};return Object(G.jsx)(o.PomodoroContent,{children:Object(G.jsxs)(o.Pomodoro,{children:[Object(G.jsx)(tn,{types:H.types,selected:e,changeType:m}),Object(G.jsx)(nn,{time:a,status:S(),progress:(e.time-a)/e.time*100}),Object(G.jsx)(Q,{start:v,reset:k,pause:w,status:S()}),Object(G.jsx)(Z,{})]})})},Q=function(n){var t=n.start,e=n.reset,r=n.pause,i=n.status,c=["Running","Paused","Resume","Finished"];return Object(G.jsxs)(o.Controls,{children:[!i&&Object(G.jsx)(o.ControlsButton,{onClick:function(){return t()},className:"start",children:"Start Timer"}),i===c[3]&&Object(G.jsx)(o.ControlsButton,{onClick:function(){return t()},className:"start",children:"Restart Timer"}),(i===c[1]||i===c[0])&&Object(G.jsxs)("div",{children:[Object(G.jsx)(o.ControlsButton,{onClick:function(){return e()},className:"reset",children:"Reset"}),Object(G.jsx)(o.ControlsButton,{onClick:function(){return r()},className:i===c[1]?"resume":"pause",children:i===c[1]?c[2]:"Pause"})]})]})},X=e(13),Y=[{name:"Play / Pause / Resume",key:"Space"},{name:"Reset",key:"Esc"},{name:"Pomodoro",key:"1"},{name:"Short Break",key:"2"},{name:"Long Break",key:"3"}],Z=function(){return Object(G.jsxs)(o.Shortcuts,{children:[Object(G.jsx)(o.Icon,{children:Object(G.jsx)(X.a,{})}),Object(G.jsx)(o.ShortcutsBox,{className:"box",children:Y.map((function(n,t){return Object(G.jsxs)(o.Shortcut,{children:[Object(G.jsx)("div",{children:n.name}),Object(G.jsx)("div",{children:Object(G.jsx)("kbd",{children:n.key})})]},t)}))})]})},$=function(n){return n>9?n:"0".concat(n)},_=function(n){var t=$(Math.floor(n/60)),e=$(Math.floor(n%60));return"".concat(t,":").concat(e)},nn=function(n){var t=n.time,e=n.status,r=n.progress;document.title="(".concat(_(t),") Pomodoro");var i=150,c=280*Math.PI,a=c-r/100*c;return Object(G.jsxs)(o.TimeDisplay,{children:[Object(G.jsxs)("svg",{width:"100%",viewBox:"0 0 ".concat(300," ").concat(300),children:[Object(G.jsx)("circle",{stroke:"#ddd",fill:"#fff",strokeWidth:5,r:140,cx:i,cy:i}),Object(G.jsx)("circle",{stroke:"#D9534F",fill:"transparent",strokeWidth:5,strokeDasharray:c+" "+c,style:{strokeDashoffset:a},r:140,cx:i,cy:i})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)(o.Time,{children:_(t)}),Object(G.jsx)(o.Status,{children:e})]})]})},tn=function(n){var t=n.types,e=n.changeType,r=n.selected;return Object(G.jsx)(o.TypeSelect,{children:t.map((function(n){return Object(G.jsx)(o.Button,{onClick:function(){return e(n)},className:n.name===r.name?"active":"",children:n.name},n.name)}))})},en=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(o.Content,{children:Object(G.jsx)(K,{})})})};w.a.render(Object(G.jsx)(v.a.StrictMode,{children:Object(G.jsx)(en,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5692d89d.chunk.js.map