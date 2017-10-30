/*! Built with http://stenciljs.com */

App.loadComponents("l3dk4lkb",function(e,t,n,o,l){"use strict";var r=function(){function e(){}return e.prototype.render=function(){return t("stencil-router",{"title-suffix":" - Stencil Router Demos"},t("ul",null,t("li",null,t("stencil-route-link",{url:"/",exact:!0},"Exact Base Link")),t("li",null,t("stencil-route-link",{url:"/"},"Base Link")),t("li",null,t("stencil-route-link",{url:"/demo",urlMatch:["/demo","/demox"],exact:!0},"Demo Link")),t("li",null,t("stencil-route-link",{url:"/demo2"},"Demo2 Link")),t("li",null,t("stencil-route-link",{url:"/demo3"},"Demo3 Link")),t("li",null,t("stencil-route-link",{url:"/demo3/page1"},"Demo3 Page1 Link")),t("li",null,t("stencil-route-link",{url:"/demo3/page2"},"Demo3 Page2 Link")),t("li",null,t("stencil-route-link",{url:"/demo4"},"Demo4 Link")),t("li",null,t("stencil-route-link",{url:"/demo6/"},"Demo6 Link"))),t("stencil-route",{url:"/",exact:!0,routeRender:function(e){return console.log(e),t("span",null,"rendering /")}}),t("stencil-route",{url:["/demo","/demox"],exact:!0,routeRender:function(e){return console.log(e),[t("stencil-route-title",{title:"DEMO"}),t("span",null,"rendering /demo")]}}),t("stencil-route",{url:"/demo2",exact:!0,routeRender:function(e){return console.log(e),[t("span",null,"rendering /demo2"),t("stencil-router-redirect",{url:"/demo3"})]}}),t("stencil-route",{url:"/demo3",exact:!0,routeRender:function(e){return console.log(e),[t("stencil-route-title",{title:"Demo 3"}),t("span",null,"rendering /demo 3")]}}),t("stencil-route",{url:"/demo3",component:"test-demo-three",componentProps:{pages:["intro/index.html"]}}),t("stencil-route",{url:"/demo4",component:"test-demo-four"}),t("stencil-route",{url:"/demo5",component:"async-content",componentProps:{location:"/"}}),t("stencil-route",{url:"/demo6",component:"test-demo-six"}))},e}(),u=function(){function e(){}return e.prototype.handleClick=function(e,t){e.preventDefault(),this.history.push(t,{blue:"blue"})},e.prototype.render=function(){var e=this;console.log("pages: ",this.pages),console.log("match: ",this.match),console.log("history: ",this.history.location);return t("div",null,t("a",{onclick:function(t){return e.handleClick(t,"/demo3/page1")},href:"/demo3/page1"},"History push to ","/demo3/page1"),t("pre",null,t("b",null,"this.pages"),":",t("br",null),JSON.stringify(this.pages,null,2)),t("pre",null,t("b",null,"this.match"),":",t("br",null),JSON.stringify(this.match,null,2)),t("pre",null,t("b",null,"this.history.location"),":",t("br",null),JSON.stringify(this.history.location,null,2)))},e}(),i=function(){function e(){}return e.prototype.render=function(){return console.log("pages: ",this.pages),console.log("match: ",this.match),console.log("history: ",this.history.location),[t("span",null,"Demo 6 Test Page",t("br",null)),t("stencil-route",{url:"/demo6/",group:"main",exact:!0,routeRender:function(e){return[t("h1",null,"One"),t("stencil-route-link",{url:"/demo6/asdf"},"Next")]}}),t("stencil-route",{url:"/demo6/:any*",group:"main",routeRender:function(e){return console.log("Got match props:",e.match),[t("h1",null,"Two: ",e.match),t("stencil-route-link",{url:"/demo6/"},"Back")]}})]},e}(),s=function(){function e(){}return e.prototype.render=function(){var e=this;return console.log("pages: ",this.pages),console.log("match: ",this.match),console.log("history: ",this.history.location),[t("span",null,"Demo 3 Test Page",t("br",null)),t("stencil-route",{url:"/demo3/page1",exact:!0,routeRender:function(n){return console.log(n),[t("a",{onclick:function(t){t.preventDefault(),e.history.push("/demo3/page2",{blue:"blue"})},href:"#"},"History push to /demo3/page2"),t("pre",null,t("b",null,"props.pages"),":",t("br",null),JSON.stringify(e.pages,null,2)),t("pre",null,t("b",null,"props.match"),":",t("br",null),JSON.stringify(e.match,null,2)),t("pre",null,t("b",null,"props.history.location"),":",t("br",null),JSON.stringify(e.history.location,null,2))]}}),t("stencil-route",{url:"/demo3/page2",exact:!0,routeRender:function(n){return console.log(n),[t("a",{onclick:function(t){t.preventDefault(),e.history.push("/demo3/page1",{red:"red"})},href:"#"},"History push to /demo3/page1"),t("pre",null,t("b",null,"props.pages"),":",t("br",null),JSON.stringify(e.pages,null,2)),t("pre",null,t("b",null,"props.match"),":",t("br",null),JSON.stringify(e.match,null,2)),t("pre",null,t("b",null,"props.history.location"),":",t("br",null),JSON.stringify(e.history.location,null,2))]}})]},e}();e["test-app"]=r,e["test-demo-four"]=u,e["test-demo-six"]=i,e["test-demo-three"]=s},["test-app"],["test-demo-four",[["history",1,1,1],["match",1,1,1],["pages",1,1,1]]],["test-demo-six",[["history",1,1,1],["match",1,1,1],["pages",1,1,1]]],["test-demo-three",[["history",1,1,1],["match",1,1,1],["pages",1,1,1]]]);;