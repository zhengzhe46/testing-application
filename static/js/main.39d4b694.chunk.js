(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(146)},132:function(e,t,a){},136:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},137:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(45),l=a.n(r),u=(a(132),a(107)),o=a.n(u),s=a(111),i=a(30),m=a(164),E=a(145),f=a(159),p=a(161),b=a(160),h=a(97),g=a(162);a(136),a(137);var j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),j=u[0],d=u[1],v=Object(n.useState)(""),O=Object(i.a)(v,2),w=O[0],S=O[1],C=Object(n.useState)(""),x=Object(i.a)(C,2),k=x[0],F=x[1],N=Object(n.useState)(""),y=Object(i.a)(N,2),H=y[0],_=y[1],B=Object(n.useState)(""),I=Object(i.a)(B,2),z=I[0],G=I[1],J=Object(n.useState)(""),L=Object(i.a)(J,2),P=L[0],T=L[1],D=Object(n.useState)(""),M=Object(i.a)(D,2),R=(M[0],M[1]),q=Object(n.useState)(null),A=Object(i.a)(q,2),K=A[0],Q=A[1];Object(n.useEffect)(function(){fetch("https://api.github.com/users/zhengzhe46").then(function(e){return e.json()}).then(function(e){U(e)})},[]);var U=function(e){var t=e.name,a=e.login,n=e.followers,c=e.following,l=e.public_repos,u=e.avatar_url;r(t),d(a),S(n),F(c),_(l),G(u)};function V(){return(V=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(j,"/repos")).then(function(e){return e.json()}).then(function(e){console.log(36,e);var t=e.map(function(e){return c.a.createElement("div",{className:"text-center"},c.a.createElement("a",{target:"_blank",href:e.svn_url},e.name))});R(t)},function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},c.a.createElement(m.a,{as:"h2"},c.a.createElement(E.a,{circular:!0,src:z}),j)),c.a.createElement("div",{className:"search"},c.a.createElement(f.a,{onSubmit:function(){fetch("https://api.github.com/users/".concat(P)).then(function(e){return e.json()}).then(function(e){e.message?Q(e.message):(U(e),Q(null))})}},c.a.createElement(f.a.Group,null,c.a.createElement(f.a.Input,{placeholder:"Github user",name:"github user",onChange:function(e){T(e.target.value)}}),c.a.createElement(f.a.Button,{content:"\u67e5\u8a62"})))),K?c.a.createElement("div",{className:"error"},c.a.createElement(p.a,{negative:!0},c.a.createElement(p.a.Header,null,c.a.createElement("h1",null,"\u7121\u7528\u6236\u8cc7\u8a0a")),c.a.createElement("p",null,"(\u8acb\u60a8\u8f38\u5165\u6b63\u78ba\u7528\u6236\u8cec\u865f)"))):c.a.createElement("dic",{className:"card"},c.a.createElement(b.a,null,c.a.createElement(E.a,{src:z,wrapped:!0,ui:!1}),c.a.createElement(b.a.Content,null,c.a.createElement(b.a.Header,null,a),c.a.createElement(b.a.Header,null,j)),c.a.createElement(b.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(h.a,{name:"user"}),w," \u8ffd\u96a8\u8005(Followers)")),c.a.createElement(b.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(h.a,{name:"user"}),H," \u5009\u5132(Repos)")),c.a.createElement(b.a.Content,{extra:!0},c.a.createElement("a",null,c.a.createElement(h.a,{name:"user"}),k," \u95dc\u6ce8\u8005(Following)")))),c.a.createElement(g.a,{variant:"primary",onClick:function(){return V.apply(this,arguments)}},"Click Here"))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,158)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),d()}},[[127,3,2]]]);
//# sourceMappingURL=main.39d4b694.chunk.js.map