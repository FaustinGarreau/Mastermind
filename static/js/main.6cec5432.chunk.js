(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(81),c=a.n(i),l=(a(92),a(10)),s=a(82),o=a(83),u=a(86),m=a(84),d=a(6),v=a(85);a(11);var g=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light right"},r.a.createElement("img",{id:"logo",src:"http://www.billselby.com/Graphics/PopUps/PopUps2/gamelogos/mastermind.jpg"}),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav link pause"},r.a.createElement("a",{className:"nav-item nav-link",href:"#"},"Score"),r.a.createElement("a",{className:"nav-item nav-link",href:"https://docs.google.com/presentation/d/191Zc9zGeZ5rJx-_DbMx6Edh6-gdC8SK0dcDsDcQvF3M/edit#slide=id.g706c6c5dc2_0_51"},"R\xe9gles du jeu")))))};var b=function(e){return r.a.createElement("main",null,r.a.createElement("div",{className:"d-flex justify-content-around margin"},r.a.createElement("div",{className:"ligne d-flex justify-content-around "+(e.selected?"bg":"")},r.a.createElement("div",{className:"rond rounded-circle "+(e.line[0][0]?e.line[0][0]:"")}),r.a.createElement("div",{className:"rond rounded-circle "+(e.line[0][1]?e.line[0][1]:"")}),r.a.createElement("div",{className:"rond rounded-circle "+(e.line[0][2]?e.line[0][2]:"")}),r.a.createElement("div",{className:"rond rounded-circle "+(e.line[0][3]?e.line[0][3]:"")})),r.a.createElement("div",{className:"littleligne "+(e.selected?"bg":"")},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("div",{className:"rond2 rounded-circle "+(e.line[1][0]?e.line[1][0]:"")}),r.a.createElement("div",{className:"rond2 rounded-circle "+(e.line[1][1]?e.line[1][1]:"")})),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("div",{className:"rond2 rounded-circle "+(e.line[1][2]?e.line[1][2]:"")}),r.a.createElement("div",{className:"rond2 rounded-circle "+(e.line[1][3]?e.line[1][3]:"")})))))};var h=function(e){var t=e.game.map((function(t,a){return r.a.createElement(b,{key:a,selected:e.currentLine==a,line:t})}));return r.a.createElement("div",{className:"plateau"},t)};var f=function(e){return r.a.createElement("footer",null,r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"violet rounded-circle",onClick:function(){return e.colorize("violet")}}),r.a.createElement("div",{className:"grey rounded-circle",onClick:function(){return e.colorize("grey")}}),r.a.createElement("div",{className:"blue rounded-circle",onClick:function(){return e.colorize("blue")}}),r.a.createElement("div",{className:"yellow rounded-circle",onClick:function(){return e.colorize("yellow")}}),r.a.createElement("div",{className:"red rounded-circle",onClick:function(){return e.colorize("red")}}),r.a.createElement("div",{className:"green rounded-circle",onClick:function(){return e.colorize("green")}})),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{onClick:e.undo,type:"button",className:"btn btn-primary btn-sm"},"Undo"),r.a.createElement("button",{onClick:e.submit,type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModal"},"Submit"))))};a(93);var p=function(e){return r.a.createElement("section",null,r.a.createElement("div",{className:"modal "+e.isWin},r.a.createElement("div",{id:"back"},r.a.createElement("p",{className:"bottom"},e.message),r.a.createElement("span",{onClick:e.closeModal},"x"))))},E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={iswin:"loose",currentCase:0,currentLine:0,message:"",combinationToFind:a.generateCombination(),game:[[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]]},a.change=a.change.bind(Object(d.a)(a)),a.undo=a.undo.bind(Object(d.a)(a)),a.compare=a.compare.bind(Object(d.a)(a)),a.submit=a.submit.bind(Object(d.a)(a)),a.closeModal=a.closeModal.bind(Object(d.a)(a)),a.generateCombination=a.generateCombination.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"change",value:function(e){var t=Object(l.a)(this.state.game);this.state.currentCase<4&&(t[this.state.currentLine][0].push(e),this.setState((function(e){return{game:t,currentCase:e.currentCase+1}})))}},{key:"undo",value:function(){var e=Object(l.a)(this.state.game);this.state.currentCase>0&&(e[this.state.currentLine][0].pop(),this.setState((function(t){return{game:e,currentCase:t.currentCase-1}})))}},{key:"compare",value:function(){for(var e=Object(l.a)(this.state.game[this.state.currentLine][0]),t=Object(l.a)(this.state.combinationToFind),a=0,n=0,r=0;r<e.length;r++)e[r]==t[r]&&(a++,t[r]="z",e[r]="a");for(var i=0;i<t.length;i++)t.includes(e[i])&&(console.log("bad"),n++,t[t.indexOf(e[i])]="a",e[i]="z");return[a,n]}},{key:"submit",value:function(){var e=Object(l.a)(this.state.combinationToFind),t=this.state.currentLine,a=(this.state.currentCase,Object(l.a)(this.state.game));if(4==this.state.currentCase){var n=this.compare();console.log(n);for(var r=0;r<n[0];r++)a[this.state.currentLine][1].push("black");for(var i=0;i<n[1];i++)a[this.state.currentLine][1].push("gray");4==n[0]&&this.setState((function(e){return{iswin:"win",message:"tu as win gg"}})),9==t&&4!=n[0]&&this.setState((function(t){return{iswin:"win",message:"tu as loose desol\xe9 gros la combinaison \xe9tait "+e}})),this.setState((function(e){return{game:a,currentLine:e.currentLine+1,currentCase:0}}))}}},{key:"closeModal",value:function(){this.setState((function(e){return{iswin:"loose",currentCase:0,currentLine:0,game:[[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]]}}))}},{key:"generateCombination",value:function(){for(var e=[],t=0;t<4;t++){var a=Math.floor(6*Math.random());e.push(["red","blue","violet","yellow","green","grey"][a])}return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(h,{currentLine:this.state.currentLine,game:this.state.game}),r.a.createElement(f,{colorize:this.change,undo:this.undo,submit:this.submit}),r.a.createElement(p,{message:this.state.message,closeModal:this.closeModal,isWin:this.state.iswin}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,a){e.exports=a(230)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.6cec5432.chunk.js.map