(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(142)},130:function(e,t,a){},132:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},133:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(45),r=a.n(l),u=(a(130),a(31)),o=a(155),s=a(156),i=a(141),m=a(95);a(132),a(133);var b=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),b=Object(u.a)(r,2),E=b[0],f=b[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),g=p[0],j=p[1],d=Object(n.useState)(""),O=Object(u.a)(d,2),v=O[0],w=O[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),F=C[0],x=C[1],B=Object(n.useState)(""),I=Object(u.a)(B,2),N=I[0],k=I[1],z=Object(n.useState)(""),G=Object(u.a)(z,2),H=G[0],J=G[1],L=Object(n.useState)(null),P=Object(u.a)(L,2),T=P[0],_=P[1];Object(n.useEffect)(function(){fetch("https://api.github.com/users/zhengzhe46").then(function(e){return e.json()}).then(function(e){y(e)})},[]);var y=function(e){var t=e.name,a=e.login,n=e.followers,c=e.following,r=e.public_repos,u=e.avatar_url;l(t),f(a),j(n),w(c),x(r),k(u)};return c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},a),c.a.createElement("div",{className:"search"},c.a.createElement(o.a,{onSubmit:function(){fetch("https://api.github.com/users/".concat(H)).then(function(e){return e.json()}).then(function(e){e.message?_(e.message):(y(e),_(null))})}},c.a.createElement(o.a.Group,null,c.a.createElement(o.a.Input,{placeholder:"Github user",name:"github user",onChange:function(e){J(e.target.value)}}),c.a.createElement(o.a.Button,{content:"\u67e5\u8a62"})))),T?c.a.createElement("h1",null,"\u7121\u4f7f\u7528\u8005\u8cc7\u8a0a"):c.a.createElement("dic",{className:"card"},c.a.createElement(s.a,null,c.a.createElement(i.a,{src:N,wrapped:!0,ui:!1}),c.a.createElement(s.a.Content,null,c.a.createElement(s.a.Header,null,a),c.a.createElement(s.a.Header,null,E)),c.a.createElement(s.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(m.a,{name:"user"}),g," Followers")),c.a.createElement(s.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(m.a,{name:"user"}),F," Repos")),c.a.createElement(s.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(m.a,{name:"user"}),v," Following")))))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,154)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),E()}},[[125,3,2]]]);
//# sourceMappingURL=main.255be39b.chunk.js.map