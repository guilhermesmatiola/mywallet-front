(this["webpackJsonpprojeto10-trackit"]=this["webpackJsonpprojeto10-trackit"]||[]).push([[0],{66:function(n,e,t){},67:function(n,e,t){"use strict";t.r(e);var i,a,o,r=t(0),c=t(30),l=t.n(c),s=t(4),d=t(9),p=t(2),x=t(5),f=t(3),u=t(8),b=t.n(u),h=Object(r.createContext)(),j=t(10),g=t(1);function m(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(""),o=Object(s.a)(a,2),c=o[0],l=o[1],x=Object(r.useState)(!1),f=Object(s.a)(x,2),u=f[0],m=f[1],O=Object(p.f)(),y=Object(r.useContext)(h),w=(y.user,y.setUser);return Object(g.jsxs)(F,{children:[Object(g.jsx)(v,{children:"MyWallet"}),u?Object(g.jsxs)(k,{background:"#f2f2f2",color:"#afafaf",children:[Object(g.jsx)("input",{disabled:!0,type:"email",id:"email",value:t,placeholder:"E-mail",required:!0,onChange:function(n){return i(n.target.value)}}),Object(g.jsx)("input",{disabled:!0,type:"password",id:"password",value:c,placeholder:"Senha",required:!0,onChange:function(n){return l(n.target.value)}}),Object(g.jsx)("button",{type:"submit",disabled:!0,opacity:.7,children:Object(g.jsx)(j.a,{color:"#ffffff",width:51})})]}):Object(g.jsxs)(k,{background:"#ffffff",color:"#666666",onSubmit:function(n){n.preventDefault(),m(!0);var e={email:t,password:c};b.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",e).then((function(n){i(""),l(""),m(!1),console.log(n.data),w({image:n.data.image,token:n.data.token}),O("/main")}))},children:[Object(g.jsx)("input",{type:"email",id:"email",value:t,placeholder:"E-mail",required:!0,onChange:function(n){return i(n.target.value)}}),Object(g.jsx)("input",{type:"password",id:"password",value:c,placeholder:"Senha",required:!0,onChange:function(n){return l(n.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"Entrar"})]}),Object(g.jsx)(d.b,{to:"/cadastro",children:"Primeira vez? Cadastre-se!"})]})}var O,y,w,v=f.a.div(i||(i=Object(x.a)(["\n    font-family: 'Saira Stencil One';\n    font-weight: 500;\n    font-size: 36px;\n    margin-bottom: 35px;\n    color: white;\n    line-height: 50px;\n"]))),F=f.a.div(a||(a=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    margin-top: 68px;\n    \n    font-family: 'Lexend Deca', sans-serif;\n    img{\n        width: 180px;\n        height: 178px;\n        margin-bottom: 35px;\n    }\n    a{\n        margin-top: 25px;\n        font-family: 'Lexend Deca';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 13.976px;\n        line-height: 17px;\n        text-align: center;\n        text-decoration:none;\n\n        color: white;\n    }\n\n"]))),k=f.a.form(o||(o=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: 36px;\n    margin-left: 36px;\n    \n    input {\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        min-width: 303px;\n        margin-bottom: 6px;\n        border-radius: 5px;\n        border: 1px solid #D4D4D4; \n        padding-left:11px ;\n        box-sizing: border-box;\n    }\n    input::placeholder {\n        color: grey;\n        font-size: 20px;\n        font-style: italic;\n        box-sizing: border-box;\n    }\n    button {\n        min-width: 303px;\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        text-align: center;\n        background: #A328D6;\n\n        color: #FFFFFF;\n        font-size: 21px;\n        border: none;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        a{\n            text-decoration: none;\n        }\n    }\n"])));function D(){var n=Object(p.f)(),e=Object(r.useState)(""),t=Object(s.a)(e,2),i=t[0],a=t[1],o=Object(r.useState)(""),c=Object(s.a)(o,2),l=c[0],x=c[1],f=Object(r.useState)(""),u=Object(s.a)(f,2),h=u[0],j=u[1],m=Object(r.useState)(""),O=Object(s.a)(m,2),y=O[0],w=O[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(U,{children:[Object(g.jsx)(B,{children:"MyWallet"}),Object(g.jsxs)(M,{onSubmit:function(e){e.preventDefault();var t={email:i,password:y,name:l,image:h};b.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",t).then((function(e){a(""),j(""),w(""),n("/"),console.log(e.data)}))},children:[Object(g.jsx)("input",{type:"text",placeholder:"email",onChange:function(n){return a(n.target.value)},value:i}),Object(g.jsx)("input",{type:"text",placeholder:"nome",onChange:function(n){return x(n.target.value)},value:l}),Object(g.jsx)("input",{type:"text",placeholder:"foto",onChange:function(n){return j(n.target.value)},value:h}),Object(g.jsx)("input",{type:"text",placeholder:"senha",onChange:function(n){return w(n.target.value)},value:y}),Object(g.jsx)("button",{type:"submit",children:"Cadastrar"})]}),Object(g.jsx)(d.b,{to:"/",children:"J\xe1 tem uma conta? Entre agora! "})]})})}var C,z,S,q,E,L,R,A,B=f.a.div(O||(O=Object(x.a)(["\n    font-family: 'Saira Stencil One';\n    font-weight: 500;\n    font-size: 36px;\n    margin-bottom: 35px;\n    color: white;\n    line-height: 50px;\n"]))),U=f.a.div(y||(y=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    margin-top: 68px;\n    \n    font-family: 'Lexend Deca', sans-serif;\n    img{\n        width: 180px;\n        height: 178px;\n        margin-bottom: 35px;\n    }\n    a{\n        margin-top: 25px;\n        font-family: 'Lexend Deca';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 13.976px;\n        line-height: 17px;\n        text-align: center;\n        text-decoration:none;\n\n        color: white;\n    }\n\n"]))),M=f.a.form(w||(w=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: 36px;\n    margin-left: 36px;\n    \n    input {\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        min-width: 150px;\n        margin-bottom: 6px;\n        border-radius: 5px;\n        border: 1px solid #D4D4D4; \n        padding-left:11px ;\n        box-sizing: border-box;\n\n    }\n    input::placeholder {\n        color: grey;\n        font-size: 20px;\n        font-style: italic;\n        box-sizing: border-box;\n    }\n    button {\n        min-width: 303px;\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        text-align: center;\n        background: #A328D6;\n\n        color: #FFFFFF;\n        font-size: 21px;\n        border: none;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        a{\n            text-decoration: none;\n        }\n        \n    }\n"]))),N=t(16),V=t.n(N);t(65);function J(){var n=Object(p.f)(),e=Object(r.useState)([]),t=Object(s.a)(e,2),i=t[0],a=(t[1],Object(r.useContext)(h)),o=a.user,c=(a.setUser,o.image,o.token,V()().locale("pt-br"));var l=0;!function(){for(var n=0;n<i.length;n++)i[n].done&&l++;0===l||("#8FC549","".concat((l/i.length*100).toFixed(0),"% dos h\xe1bitos conclu\xeddos"))}();var d=c.format("dddd"),x=d.charAt(0).toUpperCase()+d.slice(1);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(H,{children:[Object(g.jsx)("h1",{children:"Ol\xe1, Fulano"}),Object(g.jsx)("ion-icon",{name:"log-out-outline"})]}),Object(g.jsxs)(X,{children:[Object(g.jsxs)(Y,{children:[Object(g.jsx)(I,{children:c.format("DD/MM")}),"  ",x]}),Object(g.jsxs)(Z,{children:[Object(g.jsx)(K,{onClick:function(){return n("/add")},children:Object(g.jsxs)(Q,{children:[Object(g.jsx)("ion-icon",{name:"add-circle-outline"}),Object(g.jsx)(T,{children:"Nova entrada"})]})}),Object(g.jsx)(K,{onClick:function(){return n("/remove")},children:Object(g.jsxs)(Q,{children:[Object(g.jsx)("ion-icon",{name:"remove-circle-outline"}),Object(g.jsx)(T,{children:"Nova sa\xedda"})]})})]})]})]})}var P,W,G,H=f.a.div(C||(C=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 70px;\n    background-color:#8C11BE ;\n    justify-content: space-between;\n    position:fixed;\n    top:0;\n    right:0;\n    h1{\n        margin:18px; \n        font-family: 'Raleway';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 26px;\n        line-height: 31px;\n        color: #FFFFFF;\n    }\n    ion-icon{\n        color:white;\n        margin:18px;\n        width: 30px;\n        height: 51px;\n        border-radius: 98.5px;\n    }\n"]))),I=f.a.h1(z||(z=Object(x.a)(["font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 19px;\n    color: #C6C6C6;\n"]))),K=f.a.button(S||(S=Object(x.a)(["\n        font-family: 'Raleway';\n        font-weight: 700;\n        width: 155px;\n        height: 114px;\n        margin: auto;\n        text-align: center;\n        background-color: #A328D6;\n        color: #FFFFFF;\n        font-size: 21px;\n        border: none;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        a{\n            text-decoration: none;\n        }\n"]))),Q=f.a.div(q||(q=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 95%;\n    margin-top: 20px;\n    margin-bottom: 35px;\n"]))),T=f.a.div(E||(E=Object(x.a)(["\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 17px;\n    line-height: 20px;\n    color: #FFFFFF;\n"]))),X=f.a.div(L||(L=Object(x.a)(["\n    margin-top:70px;\n    margin-bottom:70px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: calc(100vh - 140px);\n    overflow-x: scroll;\n"]))),Y=f.a.div(R||(R=Object(x.a)(["\n    margin-top: 80px;\n    width: 90%;\n    height: 60%;\n    background-color: white;\n    border-radius: 5px;\n"]))),Z=f.a.div(A||(A=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 15px;\n    justify-content: space-between;\n    width: 90%;\n    font-family: 'Lexend Deca', sans-serif;\n    h1{\n        font-family: 'Lexend Deca';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 22.976px;\n        line-height: 29px;\n        color: #126BA5;\n    }\n"])));function $(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(""),o=Object(s.a)(a,2),c=o[0],l=o[1],d=Object(r.useState)(!1),x=Object(s.a)(d,2),f=x[0],u=x[1],m=Object(p.f)(),O=Object(r.useContext)(h),y=(O.user,O.setUser);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(an,{children:[Object(g.jsx)("h1",{children:"Nova Entrada"}),Object(g.jsx)("ion-icon",{name:"log-out-outline"})]}),Object(g.jsx)(on,{children:f?Object(g.jsxs)(tn,{background:"#f2f2f2",color:"#afafaf",children:[Object(g.jsx)("input",{disabled:!0,type:"email",id:"email",value:t,placeholder:"Valor",required:!0,onChange:function(n){return i(n.target.value)}}),Object(g.jsx)("input",{disabled:!0,type:"password",id:"password",value:c,placeholder:"Descri\xe7\xe3o",required:!0,onChange:function(n){return l(n.target.value)}}),Object(g.jsx)("button",{type:"submit",disabled:!0,opacity:.7,children:Object(g.jsx)(j.a,{color:"#ffffff",width:51})})]}):Object(g.jsxs)(tn,{background:"#ffffff",color:"#000000",onSubmit:function(n){n.preventDefault(),u(!0);var e={email:t,password:c};b.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",e).then((function(n){i(""),l(""),u(!1),console.log(n.data),y({image:n.data.image,token:n.data.token,percentage:0}),m("/principal")}))},children:[Object(g.jsx)("input",{type:"email",id:"email",value:t,placeholder:"Valor",required:!0,onChange:function(n){return i(n.target.value)}}),Object(g.jsx)("input",{type:"password",id:"password",value:c,placeholder:"Descri\xe7\xe3o",required:!0,onChange:function(n){return l(n.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"Enviar entrada"})]})})]})}var _,nn,en,tn=f.a.form(P||(P=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: 36px;\n    margin-left: 36px;\n    \n    input {\n        font-family: 'Raleway';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 20px;\n        line-height: 23px;\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        min-width:  100px;\n        margin-bottom: 6px;\n        border-radius: 5px;\n        border: 1px solid #D4D4D4; \n        padding-left:11px ;\n        color: ",";\n        background-color: ",";\n    }\n    input::placeholder {\n        \n        color: darkgray;\n        font-size: 20px;\n        font-style: italic;\n    }\n    button {\n        font-family: 'Raleway';\n        font-weight: 700;\n        min-width: 100px;\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        text-align: center;\n        background-color: #A328D6;\n        color: #FFFFFF;\n        font-size: 21px;\n        border: none;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        a{\n            text-decoration: none;\n        }\n    }\n"])),(function(n){return n.color}),(function(n){return n.background})),an=f.a.div(W||(W=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 70px;\n    background-color:#8C11BE ;\n    justify-content: space-between;\n    position:fixed;\n    top:0;\n    right:0;\n    h1{\n        margin:18px; \n        font-family: 'Raleway';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 26px;\n        line-height: 31px;\n        color: #FFFFFF;\n    }\n    ion-icon{\n        color:white;\n        margin:18px;\n        width: 30px;\n        height: 51px;\n        border-radius: 98.5px;\n    }\n"]))),on=f.a.div(G||(G=Object(x.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmargin-top: 80px;\njustify-content: space-between;\nwidth: 90%;\nfont-family: 'Lexend Deca', sans-serif;\nh1{\n    font-family: 'Lexend Deca';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 22.976px;\n    line-height: 29px;\n    color: #8C11BE;\n}\n"])));function rn(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(""),o=Object(s.a)(a,2),c=o[0],l=o[1],d=Object(r.useState)(!1),x=Object(s.a)(d,2),f=x[0],u=x[1],m=Object(p.f)(),O=Object(r.useContext)(h),y=(O.user,O.setUser);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(ln,{children:[Object(g.jsx)("h1",{children:"Nova Sa\xedda"}),Object(g.jsx)("ion-icon",{name:"log-out-outline"})]}),Object(g.jsx)(sn,{children:f?Object(g.jsxs)(cn,{background:"#f2f2f2",color:"#afafaf",children:[Object(g.jsx)("input",{disabled:!0,type:"email",id:"email",value:t,placeholder:"Valor",required:!0,onChange:function(n){return i(n.target.value)}}),Object(g.jsx)("input",{disabled:!0,type:"password",id:"password",value:c,placeholder:"Descri\xe7\xe3o",required:!0,onChange:function(n){return l(n.target.value)}}),Object(g.jsx)("button",{type:"submit",disabled:!0,opacity:.7,children:Object(g.jsx)(j.a,{color:"#ffffff",width:51})})]}):Object(g.jsxs)(cn,{background:"#ffffff",color:"#000000",onSubmit:function(n){n.preventDefault(),u(!0);var e={email:t,password:c};b.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",e).then((function(n){i(""),l(""),u(!1),console.log(n.data),y({image:n.data.image,token:n.data.token,percentage:0}),m("/principal")}))},children:[Object(g.jsx)("input",{type:"email",id:"email",value:t,placeholder:"Valor",required:!0,onChange:function(n){return i(n.target.value)}}),Object(g.jsx)("input",{type:"password",id:"password",value:c,placeholder:"Descri\xe7\xe3o",required:!0,onChange:function(n){return l(n.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"Enviar sa\xedda"})]})})]})}var cn=f.a.form(_||(_=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: 36px;\n    margin-left: 36px;\n    \n    input {\n        font-family: 'Raleway';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 20px;\n        line-height: 23px;\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        min-width:  100px;\n        margin-bottom: 6px;\n        border-radius: 5px;\n        border: 1px solid #D4D4D4; \n        padding-left:11px ;\n        color: ",";\n        background-color: ",";\n    }\n    input::placeholder {\n        \n        color: darkgray;\n        font-size: 20px;\n        font-style: italic;\n    }\n    button {\n        font-family: 'Raleway';\n        font-weight: 700;\n        min-width: 100px;\n        height: 45px;\n        margin-right: 36px;\n        margin-left: 36px;\n        text-align: center;\n        background-color: #A328D6;\n        color: #FFFFFF;\n        font-size: 21px;\n        border: none;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        a{\n            text-decoration: none;\n        }\n    }\n"])),(function(n){return n.color}),(function(n){return n.background})),ln=f.a.div(nn||(nn=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 70px;\n    background-color:#8C11BE ;\n    justify-content: space-between;\n    position:fixed;\n    top:0;\n    right:0;\n    h1{\n        margin:18px; \n        font-family: 'Raleway';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 26px;\n        line-height: 31px;\n        color: #FFFFFF;\n    }\n    ion-icon{\n        color:white;\n        margin:18px;\n        width: 30px;\n        height: 51px;\n        border-radius: 98.5px;\n    }\n"]))),sn=f.a.div(en||(en=Object(x.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmargin-top: 80px;\njustify-content: space-between;\nwidth: 90%;\nfont-family: 'Lexend Deca', sans-serif;\nh1{\n    font-family: 'Lexend Deca';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 22.976px;\n    line-height: 29px;\n    color: #8C11BE;\n}\n"])));function dn(){var n=Object(r.useState)({}),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(g.jsx)(h.Provider,{value:{user:t,setUser:i},children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{path:"/",element:Object(g.jsx)(m,{})}),Object(g.jsx)(p.a,{path:"/cadastro",element:Object(g.jsx)(D,{})}),Object(g.jsx)(p.a,{path:"/main",element:Object(g.jsx)(J,{})}),Object(g.jsx)(p.a,{path:"/add",element:Object(g.jsx)($,{})}),Object(g.jsx)(p.a,{path:"/remove",element:Object(g.jsx)(rn,{})})]})})})}t(66);l.a.render(Object(g.jsx)(dn,{}),document.querySelector(".root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.983ca8a8.chunk.js.map