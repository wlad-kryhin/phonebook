(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports={form:"ContactForm_form__2Krot",label:"ContactForm_label__2JLVl",input:"ContactForm_input__3hbUS",button:"ContactForm_button__FojeJ"}},21:function(e,t,n){e.exports={list:"PhoneList_list__3AOs1",button:"PhoneList_button__XfxDA",text:"PhoneList_text__18G31",number:"PhoneList_number__39_nB"}},31:function(e,t,n){e.exports={input:"Filter_input__17sxO",label:"Filter_label__1qvjN"}},33:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),s=n.n(r),u=(n(33),n(5)),i=n(15),o=n(1);function l(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(i.b,{to:"/registration",exact:!0,children:"Registration"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/login",exact:!0,children:"Log in"})})]})})}function b(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(i.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contacts",children:"Contacts"})})]})})}var j=function(e){return e.auth.isLoggedIn},d=function(e){return e.auth.user.name};function O(){var e=Object(u.c)(d);return Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Welcome : ",e]})})}function m(){var e=Object(u.c)(j);return console.log(e),Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)(b,{}),e?Object(o.jsx)(O,{}):Object(o.jsx)(l,{})]})}var f=n(21),h=n.n(f),p=n(3),x=Object(p.b)("items/filter"),v=Object(p.b)("items/fetchItemsRequest"),g=Object(p.b)("items/fetchItemsSuccess"),_=Object(p.b)("items/fetchItemsError"),w=Object(p.b)("items/addItemsRequest"),y=Object(p.b)("items/addItemsSuccess"),C=Object(p.b)("items/addItemsError"),L=Object(p.b)("items/deleteItemsRequest"),N=Object(p.b)("items/deleteItemsSuccess"),k=Object(p.b)("items/deleteItemsError"),S=n(14),I=n.n(S),F=function(e){return e.contacts.filter},P=function(e){return e.contacts.items},A=function(e){return function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))}(e.contacts.items,e.contacts.filter)};function R(){var e=Object(u.b)(),t=Object(u.c)(A),n=function(t){return e(function(e){return function(t){t(L()),I.a.delete("/contacts/".concat(e)).then((function(){return t(N(e))})).catch((function(e){return t(k(e))}))}}(t))};return Object(a.useEffect)((function(){e((function(e){e(v()),I.a.get("/contacts").then((function(t){var n=t.data;return e(g(n))})).catch((function(t){return e(_(t))}))}))}),[e]),Object(o.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.tel;return Object(o.jsxs)("li",{children:[Object(o.jsx)("p",{className:h.a.text,children:a}),Object(o.jsx)("p",{className:h.a.number,children:c}),Object(o.jsx)("button",{className:h.a.button,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}var E=n(13),T=n(16),q=n.n(T);function D(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(E.a)(r,2),i=s[0],l=s[1],b=Object(u.b)();return Object(o.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),b((t={name:n,tel:i},function(e){e(w()),I.a.post("/contacts",t).then((function(t){var n=t.data;return e(y(n))})).catch((function(t){return e(C(t))}))})),c(""),l("")},className:q.a.form,children:[Object(o.jsxs)("label",{className:q.a.label,children:["Name",Object(o.jsx)("input",{type:"text",name:"name",className:q.a.input,value:n,placeholder:"Name Surname",onChange:function(e){c(e.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),Object(o.jsxs)("label",{className:q.a.label,children:["Tel",Object(o.jsx)("input",{type:"tel",name:"tel",className:q.a.input,placeholder:"774-333-22",onChange:function(e){l(e.currentTarget.value)},value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0})]}),Object(o.jsx)("button",{type:"submit",className:q.a.button,children:"Add contact"})]})}var z=n(31),B=n.n(z);function J(){var e=Object(u.c)(F),t=Object(u.b)();return Object(o.jsxs)("label",{className:B.a.label,children:["Find contacts by name",Object(o.jsx)("input",{className:B.a.input,type:"text",value:e,onChange:function(e){return t(x(e.target.value))},placeholder:"Find contact..."})]})}function Z(){var e=Object(u.c)(P);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(D,{}),Object(o.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(o.jsx)(J,{}),Object(o.jsx)(R,{})]})}function U(){return Object(o.jsx)("div",{children:"This is home page"})}var G=n(17),H=n.n(G),K=n(27);I.a.defaults.baseURL="https://connections-api.herokuapp.com/";var M=function(e){I.a.defaults.headers.common.Authorization="Bearer ".concat(e)},V=function(){I.a.defaults.headers.common.Authorization=""},W=Object(p.c)("auth/register",function(){var e=Object(K.a)(H.a.mark((function e(t){var n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("users/signup",t);case 3:return n=e.sent,a=n.data,M(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),X=Object(p.c)("auth/login",function(){var e=Object(K.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,I.a.post("users/login",t);case 4:return n=e.sent,M(n.data.token),e.abrupt("return",n.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),$=Object(p.c)("auth/logout",Object(K.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("users/logout");case 3:return t=e.sent,V(),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))));function Q(){var e=Object(u.b)(),t=Object(a.useState)(""),n=Object(E.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(E.a)(s,2),l=i[0],b=i[1],j=Object(a.useState)(""),d=Object(E.a)(j,2),O=d[0],m=d[1],f=Object(a.useState)(""),h=Object(E.a)(f,2),p=h[0],x=h[1],v=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return r(a);case"email":return b(a);case"password":return m(a);case"repPassword":return x(a);default:return}};return Object(o.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),O!==p)return alert("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442");e(W({name:c,email:l,password:O})),t.target.reset(),r(""),b(""),m(""),x("")},children:[Object(o.jsxs)("label",{children:["Name",Object(o.jsx)("input",{onChange:v,type:"text",name:"name"})]}),Object(o.jsxs)("label",{children:["Email",Object(o.jsx)("input",{onChange:v,type:"email",name:"email"})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{onChange:v,type:"password",name:"password"})]}),Object(o.jsxs)("label",{children:["Repeat password",Object(o.jsx)("input",{onChange:v,type:"password",name:"repPassword"})]}),Object(o.jsx)("button",{type:"submit",children:"Registration"})]})}var Y=n(4);function ee(){var e=Object(u.b)(),t=Object(a.useState)(""),n=Object(E.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(E.a)(s,2),l=i[0],b=i[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return r(a);case"password":return b(a);default:return}};return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X({email:c,password:l})),t.target.reset(),r(""),b("")},children:[Object(o.jsxs)("label",{children:["Email",Object(o.jsx)("input",{onChange:j,name:"email",type:"email"})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{onChange:j,name:"password",type:"password"})]}),Object(o.jsx)("button",{type:"submit",children:"Log in"})]})}var te,ne,ae,ce=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{}),Object(o.jsxs)(Y.c,{children:[Object(o.jsx)(Y.a,{path:"/",exact:!0,children:Object(o.jsx)(U,{})}),Object(o.jsx)(Y.a,{path:"/contacts",children:Object(o.jsx)(Z,{})}),Object(o.jsx)(Y.a,{path:"/registration",children:Object(o.jsx)(Q,{})}),Object(o.jsx)(Y.a,{path:"/login",children:Object(o.jsx)(ee,{})})]})]})},re=n(7),se=n(47),ue=n(6),ie=Object(p.d)([],(te={},Object(re.a)(te,g,(function(e,t){return t.payload})),Object(re.a)(te,y,(function(e,t){var n=t.payload;if(e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))alert("".concat(n.name," is already in contacts."));else{if(!e.find((function(e){return e.tel===n.tel})))return[].concat(Object(se.a)(e),[n]);alert("".concat(n.tel," is already in contacts."))}})),Object(re.a)(te,N,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),te)),oe=Object(p.d)("",Object(re.a)({},x,(function(e,t){return t.payload}))),le=Object(p.d)(!1,(ne={},Object(re.a)(ne,w,(function(){return!0})),Object(re.a)(ne,y,(function(){return!1})),Object(re.a)(ne,C,(function(){return!1})),Object(re.a)(ne,L,(function(){return!0})),Object(re.a)(ne,N,(function(){return!1})),Object(re.a)(ne,k,(function(){return!1})),ne)),be=Object(ue.b)({items:ie,filter:oe,isLoading:le}),je=n(32),de=n(44),Oe=n.n(de),me=n(45),fe=n.n(me),he=Object(p.e)({name:"auth",initialState:{user:{name:"",email:""},token:null,isLoggedIn:!1},extraReducers:(ae={},Object(re.a)(ae,W.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(re.a)(ae,X.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(re.a)(ae,$.fulfilled,(function(e){e.user={name:"",email:""},e.token=null,e.isLoggedIn=!0})),ae)}).reducer,pe={key:"auth",storage:Oe.a,whitelist:["token"]},xe=Object(je.a)(pe,he),ve=Object(p.a)({reducer:{auth:xe,contacts:be},middleware:function(e){return e().concat(fe.a)},devTools:!1}),ge=Object(je.b)(ve),_e=n(46),we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u.a,{store:ve,children:Object(o.jsx)(_e.a,{loading:null,persistor:ge,children:Object(o.jsx)(i.a,{children:Object(o.jsx)(ce,{})})})})}),document.getElementById("root")),we()}},[[78,1,2]]]);
//# sourceMappingURL=main.ec3f37d7.chunk.js.map