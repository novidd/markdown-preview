(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),c=t.n(r),s=(t(14),t(5)),i=t(6),l=t(1),d=t(8),m=t(7),h=t(2),u=t.n(h),w=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).state={markdown:'# This is a bold header\n## This a subheader\n\n**Bold text**\n\n[This is a link](https://www.google.com "Google\'s homepage")\n\n`const succes = "I am inline code";`\n\n```\nconst succesBlock = () => {\n  console.log("I am block code"); \n}\nsuccesBlock();\n```\n\n1. I am a ordered list\n1. I am a ordered list\n\n> I am a block quote\n\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Image")\n'},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"render",value:function(){return document.getElementById("preview").innerHTML=u()(this.state.markdown),u.a.setOptions({breaks:!0}),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Editor"),o.a.createElement("textarea",{onChange:this.handleChange,id:"editor"},this.state.markdown))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.226b0e15.chunk.js.map