(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),u=t.n(l),o=t(14),c=t(2),i=function(e){var n=e.search,t=e.handleSearchChange;return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"filter shown with"),r.a.createElement("td",null,r.a.createElement("input",{value:n,onChange:t})))))},m=function(e){var n=e.newName,t=e.newNumber,a=e.addNumber,l=e.handleNameChange,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:a},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"name:"),r.a.createElement("td",null,r.a.createElement("input",{value:n,onChange:l}))),r.a.createElement("tr",null,r.a.createElement("td",null,"number:"),r.a.createElement("td",null,r.a.createElement("input",{value:t,onChange:u}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"add"))))))},d=function(e){var n=e.rows;return r.a.createElement("table",null,r.a.createElement("tbody",null,n))},f=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:t},"delete")))},s=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"White",fontStyle:"bold",fontSize:20,background:"black",padding:10,margin:10}},n)},h=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"White",fontStyle:"bold",fontSize:20,background:"Red",padding:10,margin:10}},n)},b=t(3),E=t.n(b),g="/api/persons",v=function(){return E.a.get(g).then((function(e){return e.data}))},p=function(e){return E.a.post(g,e).then((function(e){return e.data}))},w=function(e,n){return E.a.put("".concat(g,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return E.a.delete("".concat(g,"/").concat(e)).then((function(e){return e.data}))},O=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],l=n[1],u=Object(a.useState)(""),b=Object(c.a)(u,2),E=b[0],g=b[1],O=Object(a.useState)(""),y=Object(c.a)(O,2),S=y[0],k=y[1],C=Object(a.useState)(""),N=Object(c.a)(C,2),T=N[0],W=N[1],D=Object(a.useState)(null),I=Object(c.a)(D,2),P=I[0],x=I[1],z=Object(a.useState)(null),B=Object(c.a)(z,2),J=B[0],R=B[1],A=function(){return x(null)},$=function(){return R(null)};Object(a.useEffect)((function(){v().then((function(e){return l(e)}))}),[]);var q=t.filter((function(e){return new RegExp(T,"i").test(e.name)})),F=function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&j(e).then((function(a){console.log(a),l(t.filter((function(n){return n.id!==e}))),x("Deleted ".concat(n.name)),setTimeout(A,5e3)})).catch((function(a){R("Information for ".concat(n.name," was not found on the server")),setTimeout($,5e3),l(t.filter((function(n){return n.id!==e})))}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{message:P}),r.a.createElement(h,{message:J}),r.a.createElement(i,{search:T,handleSearchChange:function(e){W(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{addNumber:function(e){if(e.preventDefault(),t.some((function(e){return e.name===E&&e.number===S})))alert(E+" is already added to the phonebook");else if(t.some((function(e){return e.name===E}))){var n=t.find((function(e){return e.name===E})),a=n.id;if(window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with new one?"))){var r=Object(o.a)({},n,{number:S});w(n.id,r).then((function(e){l(t.map((function(n){return n.id!==a?n:e}))),g(""),k(""),x("Changed number for ".concat(n.name)),setTimeout(A,5e3)})).catch((function(e){R("Information for ".concat(n.name," was not found on the server")),setTimeout($,5e3),l(t.filter((function(e){return e.id!==a})))}))}}else{var u={name:E,number:S};p(u).then((function(e){l(t.concat(e)),g(""),k(""),x("Added ".concat(u.name)),setTimeout(A,5e3)}))}},newName:E,newNumber:S,handleNameChange:function(e){g(e.target.value)},handleNumberChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{rows:q.map((function(e){return r.a.createElement(f,{key:e.name,person:e,deletePerson:function(){return F(e.id)}})}))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.8620055f.chunk.js.map