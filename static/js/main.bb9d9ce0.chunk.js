(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(142)},130:function(e,t,a){},132:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},133:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(45),r=a.n(l),u=(a(130),a(31)),o=a(155),s=a(156),i=a(141),m=a(95);a(132),a(133);var b=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),b=Object(u.a)(r,2),E=b[0],f=b[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),j=p[0],g=p[1],d=Object(n.useState)(""),O=Object(u.a)(d,2),v=O[0],S=O[1],w=Object(n.useState)(""),C=Object(u.a)(w,2),F=C[0],x=C[1],I=Object(n.useState)(""),B=Object(u.a)(I,2),G=B[0],N=B[1],k=Object(n.useState)(""),z=Object(u.a)(k,2),H=(z[0],z[1]),J=Object(n.useState)(null),L=Object(u.a)(J,2);return L[0],L[1],Object(n.useEffect)(function(){fetch("https://api.github.com/users/zhengzhe46").then(function(e){return e.json()}).then(function(e){console.log(e)})},[]),c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},"Github Search"),c.a.createElement("div",{className:"search"},c.a.createElement(o.a,{onSubmit:function(){fetch("https://api.github.com/users/${userInput}").then(function(e){return e.json()}).then(function(e){!function(e){var t=e.name,a=e.login,n=e.followers,c=e.following,r=e.public_repos,u=e.avatar_url;l(t),f(a),g(n),S(c),x(r),N(u)}(e)})}},c.a.createElement(o.a.Group,null,c.a.createElement(o.a.Input,{placeholder:"Github user",name:"github user",onChange:function(e){H(e.target.value)}}),c.a.createElement(o.a.Button,{content:"\u67e5\u8a62"})))),c.a.createElement("dic",{className:"card"},c.a.createElement(s.a,null,c.a.createElement(i.a,{src:G,wrapped:!0,ui:!1}),c.a.createElement(s.a.Content,null,c.a.createElement(s.a.Header,null,a),c.a.createElement(s.a.Header,null,E)),c.a.createElement(s.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(m.a,{name:"user"}),j," Followers")),c.a.createElement(s.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(m.a,{name:"user"}),F," Repos")),c.a.createElement(s.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(m.a,{name:"user"}),v," Following")))))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,154)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),E()}},[[125,3,2]]]);
//# sourceMappingURL=main.bb9d9ce0.chunk.js.map