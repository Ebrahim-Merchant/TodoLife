!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var c,a=t[Symbol.iterator]();!(i=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);i=!0);}catch(l){o=!0,r=l}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(e,o,r){"use strict";r.r(o),r.d(o,"HomePageModule",function(){return D});var c=r("okzB"),a=r("KgUy"),l=r("1C6Z"),s=r("WAHi"),d=r("wLDe"),u=r("TEn/"),b=r("ofXK"),g=r("3Pt+"),f=r("tyNb"),h=r("4yXp"),m=r("vkgz"),p=r("lJxs"),y=r("itXk"),M=r("NaNb"),v=r("fXoL"),C=r("NfFs"),O=function(t){return{background:t}};function P(t,e){if(1&t&&v.Lb(0,"ion-icon",6),2&t){var n=v.Xb();v.cc("ngStyle",v.dc(2,O,n.color))("name",n.iconName)}}var _,N=function(t){return{background:t,color:"white"}},k=((_=function t(){i(this,t),this.isColumn=!1,this.color="#000000"}).\u0275fac=function(t){return new(t||_)},_.\u0275cmp=v.Eb({type:_,selectors:[["app-favorite-list-card"]],inputs:{title:"title",subtitle:"subtitle",iconName:"iconName",isColumn:"isColumn",color:"color"},decls:8,vars:6,consts:[[1,"fav-list-card",3,"ngStyle"],[1,"container"],["class","icon",3,"ngStyle","name",4,"ngIf"],[1,"text-container"],[1,"text"],[1,"subtext"],[1,"icon",3,"ngStyle","name"]],template:function(t,e){1&t&&(v.Nb(0,"ion-card",0),v.Nb(1,"div",1),v.mc(2,P,1,4,"ion-icon",2),v.Nb(3,"div",3),v.Nb(4,"ion-label",4),v.nc(5),v.Mb(),v.Nb(6,"ion-label",5),v.nc(7),v.Mb(),v.Mb(),v.Mb(),v.Mb()),2&t&&(v.cc("ngStyle",v.dc(4,N,e.color)),v.yb(2),v.cc("ngIf",e.iconName),v.yb(3),v.pc(" ",e.title," "),v.yb(2),v.pc(" ",e.subtitle," "))},directives:[u.d,b.k,b.j,u.r,u.l],styles:["[_nghost-%COMP%]   .fav-list-card[_ngcontent-%COMP%]{width:9rem;height:6rem;margin-bottom:1rem}[_nghost-%COMP%]   .fav-list-card[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;height:100%;justify-content:center;align-items:center}[_nghost-%COMP%]   .fav-list-card[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1.675rem;width:1.675rem;padding-right:.5rem}[_nghost-%COMP%]   .fav-list-card[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}[_nghost-%COMP%]   .fav-list-card[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font:700 15px/20px Segoe UI;text-align:center}[_nghost-%COMP%]   .fav-list-card[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%]{font:Regular 13px/17px Segoe UI;text-align:center}@media (min-width:1000px){[_nghost-%COMP%]   .fav-list-card[_ngcontent-%COMP%]{width:100%}}"]}),_),w=r("b1vF"),x=function(t){return["/list",t]},I=function(t){return{color:t}};function S(t,e){if(1&t&&v.Lb(0,"app-favorite-list-card",10),2&t){var n=e.$implicit;v.cc("routerLink",v.dc(6,x,n.id))("queryParams",v.dc(8,I,n.color))("title",n.listName)("subtitle",n.completed+" of "+n.count+" items")("color",n.color)("iconName",n.iconName)}}function L(t,e){if(1&t){var n=v.Ob();v.Nb(0,"app-list-item",18),v.Vb("checkedChange",function(t){return e.$implicit.status=t})("checkedChange",function(){v.hc(n);var t=e.$implicit;return v.Xb(2).onCheckChange(t)})("itemChanged",function(){v.hc(n);var t=e.$implicit;return v.Xb(2).utilsService.showEditTaskModal({componentProps:{todo:t}})}),v.Mb()}if(2&t){var i=e.$implicit,o=v.Xb(2);v.cc("checked",i.status)("taskTitle",i.taskTitle)("additionalInfo",i.extraDetails)("dueDate",i.dueDate)("color",o.listItem.hasOwnProperty(i.listId)?o.listItem[i.listId].color:null)("listName",o.listItem.hasOwnProperty(i.listId)?o.listItem[i.listId].listName:null)}}function j(t,e){if(1&t){var n=v.Ob();v.Nb(0,"div",11),v.Nb(1,"ion-label",12),v.nc(2,"Tasks"),v.Mb(),v.Nb(3,"ion-segment",13),v.Vb("ionChange",function(t){return v.hc(n),v.Xb().segmentChanged(t)}),v.Yb(4,"async"),v.Nb(5,"ion-segment-button",14),v.Nb(6,"ion-label"),v.nc(7,"All"),v.Mb(),v.Mb(),v.Nb(8,"ion-segment-button",15),v.Nb(9,"ion-label"),v.nc(10,"Completed"),v.Mb(),v.Mb(),v.Nb(11,"ion-segment-button",16),v.Nb(12,"ion-label"),v.nc(13,"Pending"),v.Mb(),v.Mb(),v.Mb(),v.Nb(14,"ion-list"),v.mc(15,L,1,6,"app-list-item",17),v.Mb(),v.Mb()}if(2&t){var i=e.ngIf,o=v.Xb();v.yb(3),v.cc("value",v.Zb(4,2,o.filter)),v.yb(12),v.cc("ngForOf",i)}}var A,T,F,X=[{path:"home",component:(A=function(){function e(t,n){i(this,e),this.utilsService=t,this.todoService=n,this.listItem={}}var o,r,c;return o=e,(r=[{key:"ngOnInit",value:function(){var e=this;this.filter=this.todoService.getFilter(),this.list=this.todoService.getListItems().pipe(Object(m.a)(function(t){return t.map(function(t){return e.listItem[t.id]=t})})),this.todoList=Object(y.b)([this.todoService.getTodoList(),this.todoService.getFilter()]).pipe(Object(p.a)(function(e){var n=t(e,2),i=n[0],o=n[1];return h.a.filterValues(i,o)}))}},{key:"onCheckChange",value:function(t){this.todoService.updateTodoItem(t)}},{key:"segmentChanged",value:function(t){this.todoService.updateFilter(t.detail.value)}}])&&n(o.prototype,r),c&&n(o,c),e}(),A.\u0275fac=function(t){return new(t||A)(v.Kb(h.a),v.Kb(M.a))},A.\u0275cmp=v.Eb({type:A,selectors:[["app-home"]],decls:12,vars:12,consts:[[3,"fullscreen"],[1,"grid-container"],[1,"header",3,"isLanding","title","subtitle"],[1,"card-list"],[3,"routerLink","queryParams","title","subtitle","color","iconName",4,"ngFor","ngForOf"],[3,"title","iconName","click"],["class","body",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],[3,"routerLink","queryParams","title","subtitle","color","iconName"],[1,"body"],[1,"heading"],[3,"value","ionChange"],["value","all"],["value","completed"],["value","pending"],[3,"checked","taskTitle","additionalInfo","dueDate","color","listName","checkedChange","itemChanged",4,"ngFor","ngForOf"],[3,"checked","taskTitle","additionalInfo","dueDate","color","listName","checkedChange","itemChanged"]],template:function(t,e){1&t&&(v.Nb(0,"ion-content",0),v.Nb(1,"div",1),v.Lb(2,"app-header",2),v.Nb(3,"div",3),v.mc(4,S,1,10,"app-favorite-list-card",4),v.Yb(5,"async"),v.Nb(6,"app-favorite-list-card",5),v.Vb("click",function(){return e.utilsService.showAddListModal()}),v.Mb(),v.Mb(),v.mc(7,j,16,4,"div",6),v.Yb(8,"async"),v.Mb(),v.Nb(9,"ion-fab",7),v.Nb(10,"ion-fab-button",8),v.Vb("click",function(){return e.utilsService.showAddTaskModal()}),v.Lb(11,"ion-icon",9),v.Mb(),v.Mb(),v.Mb()),2&t&&(v.cc("fullscreen",!0),v.yb(2),v.cc("isLanding",!0)("title","Let's plan")("subtitle","Your lists"),v.yb(2),v.cc("ngForOf",v.Zb(5,8,e.list)),v.yb(2),v.cc("title","Add a list")("iconName","add"),v.yb(1),v.cc("ngIf",v.Zb(8,10,e.todoList)))},directives:[u.g,C.a,b.i,k,b.j,u.i,u.j,u.l,u.E,f.g,u.r,u.u,u.F,u.v,u.s,w.a],pipes:[b.b],styles:['[_nghost-%COMP%]   .grid-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header header header header header header" "position position position position position position" "body body body body body body"}[_nghost-%COMP%]   .card-list[_ngcontent-%COMP%]{grid-area:position;padding-top:5rem;display:flex;flex-direction:row;overflow:auto}@media (min-width:1000px){[_nghost-%COMP%]   .grid-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header header header header header header" "position body body body body body"}[_nghost-%COMP%]   .card-list[_ngcontent-%COMP%]{padding-top:7rem;flex-direction:column}[_nghost-%COMP%]   .card-list[_ngcontent-%COMP%]   .fav-list-card[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .body[_ngcontent-%COMP%]{padding-top:8rem;margin:2rem}}[_nghost-%COMP%]   .body[_ngcontent-%COMP%]{grid-area:body;display:flex;flex-direction:column}[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font:33px/43px Segoe UI;color:#707070;padding:1rem 0 1rem 1rem}']}),A)},{path:"",redirectTo:"/home",pathMatch:"full"}],E=((F=function t(){i(this,t)}).\u0275mod=v.Ib({type:F}),F.\u0275inj=v.Hb({factory:function(t){return new(t||F)},imports:[[f.h.forChild(X)],f.h]}),F),D=((T=function t(){i(this,t)}).\u0275mod=v.Ib({type:T}),T.\u0275inj=v.Hb({factory:function(t){return new(t||T)},imports:[[u.A,d.a,b.c,s.ListPageModule,E,l.AddTaskModalModule,a.AddListModalModule,c.a,g.a]]}),T)}}])}();