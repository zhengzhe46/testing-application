(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(147)},133:function(e,t,a){},137:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},138:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(45),l=a.n(r),u=(a(133),a(104)),o=a.n(u),s=a(112),i=a(30),m=a(161),E=a(166),p=a(146),f=a(160),b=a(163),h=a(162),d=a(60),g=a(164);a(137),a(138);var j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),j=u[0],v=u[1],O=Object(n.useState)(""),w=Object(i.a)(O,2),S=w[0],C=w[1],x=Object(n.useState)(""),F=Object(i.a)(x,2),k=F[0],H=F[1],I=Object(n.useState)(""),N=Object(i.a)(I,2),y=N[0],z=N[1],B=Object(n.useState)(""),_=Object(i.a)(B,2),D=_[0],G=_[1],J=Object(n.useState)(""),L=Object(i.a)(J,2),P=L[0],T=L[1],A=Object(n.useState)(""),M=Object(i.a)(A,2),R=M[0],U=M[1],q=Object(n.useState)(null),K=Object(i.a)(q,2),Q=K[0],V=K[1];Object(n.useEffect)(function(){fetch("https://api.github.com/users/zhengzhe46").then(function(e){return e.json()}).then(function(e){W(e)})},[]);var W=function(e){var t=e.name,a=e.login,n=e.followers,c=e.following,l=e.public_repos,u=e.avatar_url;r(t),v(a),C(n),H(c),z(l),G(u)};function X(){return(X=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(j,"/repos")).then(function(e){return e.json()}).then(function(e){console.log(36,e);var t=e.map(function(e){return c.a.createElement("div",{className:"text-center"},c.a.createElement(m.a,{divided:!0,relaxed:!0},c.a.createElement(m.a.Item,null,c.a.createElement(m.a.Icon,{name:"github",size:"large",verticalAlign:"middle"}),c.a.createElement(m.a.Content,null,c.a.createElement(m.a.Header,{as:"a",href:e.svn_url},e.name),c.a.createElement(m.a.Description,{as:"a"},e.Updated)))))});U(t)},function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},c.a.createElement(E.a,{as:"h2"},c.a.createElement(p.a,{circular:!0,src:D}),j)),c.a.createElement("div",{className:"search"},c.a.createElement(f.a,{onSubmit:function(){fetch("https://api.github.com/users/".concat(P)).then(function(e){return e.json()}).then(function(e){e.message?V(e.message):(W(e),V(null))})}},c.a.createElement(f.a.Group,null,c.a.createElement(f.a.Input,{placeholder:"Github user",name:"github user",onChange:function(e){T(e.target.value)}}),c.a.createElement(f.a.Button,{content:"\u67e5\u8a62"})))),Q?c.a.createElement("div",{className:"error"},c.a.createElement(b.a,{negative:!0},c.a.createElement(b.a.Header,null,c.a.createElement("h1",null,"\u7121\u7528\u6236\u8cc7\u8a0a")),c.a.createElement("p",null,"(\u8acb\u60a8\u8f38\u5165\u6b63\u78ba\u7528\u6236\u8cec\u865f)"))):c.a.createElement("dic",{className:"card"},c.a.createElement(h.a,null,c.a.createElement(p.a,{src:D,wrapped:!0,ui:!1}),c.a.createElement(h.a.Content,null,c.a.createElement(h.a.Header,null,a),c.a.createElement(h.a.Header,null,j)),c.a.createElement(h.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(d.a,{name:"user"}),S," \u8ffd\u96a8\u8005(Followers)")),c.a.createElement(h.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(d.a,{name:"user"}),y," \u5009\u5132(Repos)")),c.a.createElement(h.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(d.a,{name:"user"}),k," \u95dc\u6ce8\u8005(Following)")),c.a.createElement(g.a,{variant:"primary",onClick:function(){return X.apply(this,arguments)}},"Click Here"),R)))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,159)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),v()}},[[128,3,2]]]);
//# sourceMappingURL=main.993614fa.chunk.js.map