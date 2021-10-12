(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={form:"ContactForm_form__2Krot",label:"ContactForm_label__2JLVl",input:"ContactForm_input__3hbUS",button:"ContactForm_button__FojeJ"}},21:function(e,t,n){e.exports={list:"PhoneList_list__3AOs1",button:"PhoneList_button__XfxDA",text:"PhoneList_text__18G31",number:"PhoneList_number__39_nB"}},31:function(e,t,n){e.exports={input:"Filter_input__17sxO",label:"Filter_label__1qvjN"}},33:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(24),s=n.n(r),o=(n(33),n(5)),i=n(15),u=n(1);function l(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"nav__list",children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(i.b,{to:"/registration",exact:!0,children:"Registration"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/login",exact:!0,children:"Log in"})})]})})}function j(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"nav__list",children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(i.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/contacts",children:"Contacts"})})]})})}var b=function(e){return e.auth.isLoggedIn},d=function(e){return e.auth.user.name};function O(){var e=Object(o.c)(d);return Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Welcome ",e]})})}function h(){var e=Object(o.c)(b);return console.log(e),Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)(j,{}),e?Object(u.jsx)(O,{}):Object(u.jsx)(l,{})]})}var m=n(21),f=n.n(m),p=n(3),x=Object(p.b)("items/filter"),v=Object(p.b)("items/fetchItemsRequest"),g=Object(p.b)("items/fetchItemsSuccess"),_=Object(p.b)("items/fetchItemsError"),w=Object(p.b)("items/addItemsRequest"),y=Object(p.b)("items/addItemsSuccess"),C=Object(p.b)("items/addItemsError"),L=Object(p.b)("items/deleteItemsRequest"),N=Object(p.b)("items/deleteItemsSuccess"),k=Object(p.b)("items/deleteItemsError"),S=n(13),I=n.n(S);I.a.defaults.baseURL="http://localhost:3000";var F=function(e){return e.contacts.filter},P=function(e){return e.contacts.items},R=function(e){return function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))}(e.contacts.items,e.contacts.filter)};function A(){var e=Object(o.b)(),t=Object(o.c)(R),n=function(t){return e(function(e){return function(t){t(L()),I.a.delete("/contacts/".concat(e)).then((function(){return t(N(e))})).catch((function(e){return t(k(e))}))}}(t))};return Object(c.useEffect)((function(){e((function(e){e(v()),I.a.get("/contacts").then((function(t){var n=t.data;return e(g(n))})).catch((function(t){return e(_(t))}))}))}),[e]),Object(u.jsx)("ul",{className:f.a.list,children:t.map((function(e){var t=e.id,c=e.name,a=e.tel;return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{className:f.a.text,children:c}),Object(u.jsx)("p",{className:f.a.number,children:a}),Object(u.jsx)("button",{className:f.a.button,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}var E=n(14),T=n(16),q=n.n(T);function D(){var e=Object(c.useState)(""),t=Object(E.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(E.a)(r,2),i=s[0],l=s[1],j=Object(o.b)();return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(function(e){var t=e.name,n=e.tel;return function(e){var c={name:t,tel:n};e(w()),I.a.post("/contacts",c).then((function(t){var n=t.data;return e(y(n))})).catch((function(t){return e(C(t))}))}}({name:n,tel:i})),a(""),l("")},className:q.a.form,children:[Object(u.jsxs)("label",{className:q.a.label,children:["Name",Object(u.jsx)("input",{type:"text",name:"name",className:q.a.input,value:n,placeholder:"Name Surname",onChange:function(e){a(e.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),Object(u.jsxs)("label",{className:q.a.label,children:["Tel",Object(u.jsx)("input",{type:"tel",name:"tel",className:q.a.input,placeholder:"774-333-22",onChange:function(e){l(e.currentTarget.value)},value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0})]}),Object(u.jsx)("button",{type:"submit",className:q.a.button,children:"Add contact"})]})}var z=n(31),B=n.n(z);function J(){var e=Object(o.c)(F),t=Object(o.b)();return Object(u.jsxs)("label",{className:B.a.label,children:["Find contacts by name",Object(u.jsx)("input",{className:B.a.input,type:"text",value:e,onChange:function(e){return t(x(e.target.value))},placeholder:"Find contact..."})]})}function U(){var e=Object(o.c)(P);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(D,{}),Object(u.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(u.jsx)(J,{}),Object(u.jsx)(A,{})]})}function Z(){return Object(u.jsx)("div",{children:"This is home page"})}var G=n(17),H=n.n(G),K=n(27);I.a.defaults.baseURL="https://connections-api.herokuapp.com/";var M=function(e){I.a.defaults.headers.common.Authorization="Bearer ".concat(e)},V=function(){I.a.defaults.headers.common.Authorization=""},W=Object(p.c)("auth/register",function(){var e=Object(K.a)(H.a.mark((function e(t){var n,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("users/signup",t);case 3:return n=e.sent,c=n.data,M(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),X=Object(p.c)("auth/login",function(){var e=Object(K.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("users/login",t);case 3:return n=e.sent,M(n.data.token),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}());Object(p.c)("auth/logout",Object(K.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("users/logout");case 3:V(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))));function $(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(E.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(E.a)(s,2),l=i[0],j=i[1],b=Object(c.useState)(""),d=Object(E.a)(b,2),O=d[0],h=d[1],m=Object(c.useState)(""),f=Object(E.a)(m,2),p=f[0],x=f[1],v=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":return r(c);case"email":return j(c);case"password":return h(c);case"repPassword":return x(c);default:return}};return Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),O!==p)return alert("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442");e(W({name:a,email:l,password:O})),t.target.reset(),r(""),j(""),h(""),x("")},children:[Object(u.jsxs)("label",{children:["Name",Object(u.jsx)("input",{onChange:v,type:"text",name:"name"})]}),Object(u.jsxs)("label",{children:["Email",Object(u.jsx)("input",{onChange:v,type:"email",name:"email"})]}),Object(u.jsxs)("label",{children:["Password",Object(u.jsx)("input",{onChange:v,type:"password",name:"password"})]}),Object(u.jsxs)("label",{children:["Repeat password",Object(u.jsx)("input",{onChange:v,type:"password",name:"repPassword"})]}),Object(u.jsx)("button",{type:"submit",children:"Registration"})]})}var Q=n(4);function Y(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(E.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(E.a)(s,2),l=i[0],j=i[1],b=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"email":return r(c);case"password":return j(c);default:return}};return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X({email:a,password:l})),t.target.reset(),r(""),j("")},children:[Object(u.jsxs)("label",{children:["Email",Object(u.jsx)("input",{onChange:b,name:"email",type:"email"})]}),Object(u.jsxs)("label",{children:["Password",Object(u.jsx)("input",{onChange:b,name:"password",type:"password"})]}),Object(u.jsx)("button",{type:"submit",children:"Log in"})]})}var ee,te,ne,ce=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsxs)(Q.c,{children:[Object(u.jsx)(Q.a,{path:"/",exact:!0,children:Object(u.jsx)(Z,{})}),Object(u.jsx)(Q.a,{path:"/contacts",children:Object(u.jsx)(U,{})}),Object(u.jsx)(Q.a,{path:"/registration",children:Object(u.jsx)($,{})}),Object(u.jsx)(Q.a,{path:"/login",children:Object(u.jsx)(Y,{})})]})]})},ae=n(8),re=n(47),se=n(6),oe=Object(p.d)([],(ee={},Object(ae.a)(ee,g,(function(e,t){return t.payload})),Object(ae.a)(ee,y,(function(e,t){var n=t.payload;if(e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))alert("".concat(n.name," is already in contacts."));else{if(!e.find((function(e){return e.tel===n.tel})))return[].concat(Object(re.a)(e),[n]);alert("".concat(n.tel," is already in contacts."))}})),Object(ae.a)(ee,N,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),ee)),ie=Object(p.d)("",Object(ae.a)({},x,(function(e,t){return t.payload}))),ue=Object(p.d)(!1,(te={},Object(ae.a)(te,w,(function(){return!0})),Object(ae.a)(te,y,(function(){return!1})),Object(ae.a)(te,C,(function(){return!1})),Object(ae.a)(te,L,(function(){return!0})),Object(ae.a)(te,N,(function(){return!1})),Object(ae.a)(te,k,(function(){return!1})),te)),le=Object(se.b)({items:oe,filter:ie,isLoading:ue}),je=n(32),be=n(44),de=n.n(be),Oe=n(45),he=n.n(Oe),me=Object(p.e)({name:"auth",initialState:{user:{name:"",email:""},token:null,isLoggedIn:!1},extraReducers:(ne={},Object(ae.a)(ne,W.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(ae.a)(ne,X.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),ne)}).reducer,fe={key:"auth",storage:de.a,whitelist:["token"]},pe=Object(je.a)(fe,me),xe=Object(p.a)({reducer:{auth:pe,contacts:le},middleware:function(e){return e().concat(he.a)},devTools:!1}),ve=Object(je.b)(xe),ge=n(46),_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{store:xe,children:Object(u.jsx)(ge.a,{loading:null,persistor:ve,children:Object(u.jsx)(i.a,{children:Object(u.jsx)(ce,{})})})})}),document.getElementById("root")),_e()}},[[78,1,2]]]);
//# sourceMappingURL=main.67ed0f82.chunk.js.map