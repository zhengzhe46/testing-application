(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(147)},133:function(e,t,a){},137:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},138:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),l=a.n(c),u=(a(133),a(104)),s=a.n(u),o=a(112),m=a(27),i=a(162),E=a(161),p=a(166),h=a(146),b=a(160),f=a(163),g=a(60),d=a(164),v=a(167);a(137),a(138);var j=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),j=u[0],O=u[1],w=Object(n.useState)(""),C=Object(m.a)(w,2),S=C[0],x=C[1],k=Object(n.useState)(""),N=Object(m.a)(k,2),F=N[0],_=N[1],y=Object(n.useState)(""),z=Object(m.a)(y,2),H=z[0],I=z[1],B=Object(n.useState)(""),D=Object(m.a)(B,2),G=D[0],J=D[1],L=Object(n.useState)(""),P=Object(m.a)(L,2),T=P[0],A=P[1],M=Object(n.useState)(""),R=Object(m.a)(M,2),Y=R[0],q=R[1],K=Object(n.useState)(""),Q=Object(m.a)(K,2),U=Q[0],V=Q[1],W=Object(n.useState)(null),X=Object(m.a)(W,2),Z=X[0],$=X[1];Object(n.useEffect)(function(){fetch("https://api.github.com/users/zhengzhe46").then(function(e){return e.json()}).then(function(e){ee(e)})},[]);var ee=function(e){var t=e.name,a=e.login,n=e.followers,r=e.following,l=e.public_repos,u=e.avatar_url,s=e.html_url;c(t),O(a),x(n),_(r),I(l),V(s),J(u)};function te(){return(te=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(j,"/repos")).then(function(e){return e.json()}).then(function(e){console.log(36,e);var t=e.map(function(e){return r.a.createElement("div",{className:"repo"},r.a.createElement(i.a,null,r.a.createElement(i.a.Content,null,r.a.createElement(E.a,{divided:!0,relaxed:!0},r.a.createElement(E.a.Item,null,r.a.createElement(E.a.Icon,{name:"github",size:"large",verticalAlign:"middle"}),r.a.createElement(E.a.Content,null,r.a.createElement(E.a.Header,{as:"a",href:e.svn_url,target:"_blank"},e.name),r.a.createElement(E.a.Description,{as:"a"},e.created_at),r.a.createElement(E.a.Description,{as:"a"},"stargazers:",e.stargazers_count)))))))});q(t)},function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",null,Z?r.a.createElement("div",{className:"navbar"},r.a.createElement(p.a,{as:"h2"},r.a.createElement(h.a,{circular:!0,src:"https://react.semantic-ui.com/images/avatar/large/patrick.png"}),"unknown")):r.a.createElement("div",{className:"navbar"},r.a.createElement(p.a,{as:"h2"},r.a.createElement(h.a,{circular:!0,src:G}),j)),r.a.createElement("div",{className:"search"},r.a.createElement(b.a,{onSubmit:function(){fetch("https://api.github.com/users/".concat(T)).then(function(e){return e.json()}).then(function(e){e.message?$(e.message):(ee(e),$(null))})}},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Input,{placeholder:"Github user",name:"github user",onChange:function(e){A(e.target.value)}}),r.a.createElement(b.a.Button,{content:"\u67e5\u8a62"})))),Z?r.a.createElement("div",{className:"error"},r.a.createElement(f.a,{negative:!0},r.a.createElement(f.a.Header,null,r.a.createElement("h1",null,"\u7121\u7528\u6236\u8cc7\u8a0a")),r.a.createElement("p",null,"(\u8acb\u60a8\u8f38\u5165\u6b63\u78ba\u7528\u6236\u8cec\u865f)"))):r.a.createElement("dic",{className:"card"},r.a.createElement(i.a,null,r.a.createElement(h.a,{src:G,wrapped:!0,ui:!1}),r.a.createElement(i.a.Content,null,r.a.createElement(i.a.Header,null,a),r.a.createElement(i.a.Header,null,j)),r.a.createElement(i.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(g.a,{name:"user"}),S," \u8ffd\u96a8\u8005(Followers)")),r.a.createElement(i.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(g.a,{name:"user"}),H," \u5009\u5132(Repos)")),r.a.createElement(i.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(g.a,{name:"user"}),F," \u95dc\u6ce8\u8005(Following)")),r.a.createElement(i.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(g.a,{name:"user"}),U," \u95dc\u6ce8\u8005(Following)")),r.a.createElement(d.a,{variant:"primary",onClick:function(){return te.apply(this,arguments)}},"Click Here"))),Z?r.a.createElement("div",{className:"error"}):r.a.createElement("div",{className:"inputid"},r.a.createElement(i.a,null,r.a.createElement(v.a,null,r.a.createElement("pre",{style:{height:210,overflowY:"scroll"}},Y)))))},O=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,159)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),O()}},[[128,3,2]]]);
//# sourceMappingURL=main.21f1aa1d.chunk.js.map