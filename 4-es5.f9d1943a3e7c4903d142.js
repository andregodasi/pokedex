(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{qNYQ:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){return function(){}}(),o=e("pMnS"),a=e("Ip0R"),i=e("ZYCi"),r=function(){function n(){}return n.prototype.transform=function(n,l,e){if(n)return n.length>l?n.substr(e,l)+"...":n},n}(),c=function(){function n(){this.show=!1,this.noData=!1,this.isGlobal=!1,this.isSmall=!1}return n.prototype.ngOnInit=function(){},n}(),s=t.vb({encapsulation:0,styles:[[".loader[_ngcontent-%COMP%]{border:.3rem solid #fff;border-radius:50%;border-top:.3rem solid #9fa6ad;width:4rem;height:4rem;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}.loader-small[_ngcontent-%COMP%]{width:2rem;height:2rem}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;min-width:100%;width:100%;height:100%;z-index:9999!important;background-color:rgba(233,236,239,.77);display:flex;justify-content:center;align-items:center}.global[_ngcontent-%COMP%]{z-index:9999999999!important}.global-loading[_ngcontent-%COMP%]{position:fixed;top:50vh}body[_ngcontent-%COMP%]{background-color:#f1f1f1;height:100%}.pokeball[_ngcontent-%COMP%]{width:50px;height:50px;-webkit-animation:1.5s linear infinite rotate;animation:1.5s linear infinite rotate;left:calc(50% - 25px);display:inline-block;position:absolute;top:calc(50% - 25px)}.pokeball[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{width:50px;height:25px;border:17.3333333333px solid #cf283a;box-sizing:border-box}.pokeball[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%], .pokeball[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]{width:100%;position:absolute;height:calc(50% - 2px);overflow:hidden}.pokeball[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]{top:0}.pokeball[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{border-radius:42.3333333333px 42.3333333333px 0 0;border-bottom:0;margin-bottom:-2px}.pokeball[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]{bottom:0}.pokeball[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{margin-top:-2px;border-radius:0 0 42.3333333333px 42.3333333333px;border-top:0}.pokeball[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{border-radius:50%;width:10px;height:10px;background-color:#cf283a;position:absolute;left:calc(50% - 5px);top:calc(50% - 5px)}@-webkit-keyframes rotate{100%{transform:rotate(360deg)}}@keyframes rotate{100%{transform:rotate(360deg)}}"]],data:{}});function p(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,6,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),t.xb(1,0,null,null,5,"div",[["class","pokeball"]],null,null,null,null,null)),(n()(),t.xb(2,0,null,null,1,"div",[["class","upper"]],null,null,null,null,null)),(n()(),t.xb(3,0,null,null,0,"div",[["class","inner"]],null,null,null,null,null)),(n()(),t.xb(4,0,null,null,0,"div",[["class","middle"]],null,null,null,null,null)),(n()(),t.xb(5,0,null,null,1,"div",[["class","lower"]],null,null,null,null,null)),(n()(),t.xb(6,0,null,null,0,"div",[["class","inner"]],null,null,null,null,null))],null,function(n,l){n(l,0,0,t.Bb(1,"container ",!!l.component.isGlobal&&"global",""))})}function b(n){return t.Sb(0,[(n()(),t.mb(16777216,null,null,1,null,p)),t.wb(1,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.show||e.noData)},null)}var g=function(){function n(n,l){this.pokemonService=n,this.router=l,this.loading=!1,this.typesPokemon=[]}return n.prototype.ngOnInit=function(){this.init()},n.prototype.init=function(){var n=this;this.loading=!0,this.pokemonService.getPokemonByNome(this.name).subscribe(function(l){n.pokemon=l,n.pokemon.favorite=n.pokemonService.verifyFavorite(l.id),n.getType(l),n.pokemonService.getPokemonSpecies(l.id).subscribe(function(l){n.getInfo(l),n.getImage(l),n.loading=!1},function(l){n.loading=!1})},function(l){return n.loading=!1})},n.prototype.selectPokemon=function(n){this.router.navigate(["pokemon",n])},n.prototype.getInfo=function(n){if(n.flavor_text_entries){var l=n.flavor_text_entries.filter(function(n){return"en"===n.language.name&&"emerald"===n.version.name}),e=n.genera.filter(function(n){return"en"===n.language.name});this.descriptionPokemon=e[0].genus,l[0]&&l[0].flavor_text&&(this.infoPokemon=l[0].flavor_text)}},n.prototype.getImage=function(n){var l="";n.id<10&&(l="00"+n.id),n.id>=10&&n.id<100&&(l="0"+n.id),n.id>=100&&(l=n.id),this.urlImage="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+l+".png"},n.prototype.getType=function(n){var l=this;n.types.map(function(n){l.typesPokemon.push(n.type.name)})},n.prototype.changeFavorite=function(n){n.favorite?(n.favorite=!1,this.pokemonService.removeFavorite(n.id)):(n.favorite=!0,this.pokemonService.addFavorite(n.id))},n}(),d=e("QcKa"),f=t.vb({encapsulation:0,styles:[[".card-img[_ngcontent-%COMP%]{width:200px;height:200px}#type-pokemon[_ngcontent-%COMP%]{margin:15px 0}#type-pokemon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{margin-left:5px}.description-card[_ngcontent-%COMP%]{background:#fff;border-radius:30px}.type[_ngcontent-%COMP%]{font-size:14px;font-weight:700;border-radius:30px;padding:3px 5px;text-align:center}.favorite[_ngcontent-%COMP%]{cursor:pointer}.container-card[_ngcontent-%COMP%]{border-radius:30px}"]],data:{}});function m(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,1,"div",[["class","col-12 no-gutters d-flex justify-content-center"]],null,null,null,null,null)),(n()(),t.xb(1,0,null,null,0,"img",[["class","card-img"]],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,1,0,e.urlImage,e.name)})}function x(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,7,"div",[["class","d-inline-block"]],null,null,null,null,null)),(n()(),t.xb(1,0,null,null,6,"li",[["class","d-flex justify-content-center align-items-center border shadow "]],null,null,null,null,null)),t.Nb(512,null,a.s,a.t,[t.v,t.w,t.n,t.J]),t.wb(3,278528,null,0,a.i,[a.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Jb(4,2),(n()(),t.xb(5,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(n()(),t.Qb(6,null,[" "," "])),t.Mb(7,1)],function(n,l){var e=n(l,4,0,l.context.$implicit+"-color","type");n(l,3,0,"d-flex justify-content-center align-items-center border shadow ",e)},function(n,l){n(l,5,0,t.Bb(1,"sidebar-menu ",l.context.$implicit,"-icon"));var e=t.Rb(l,6,0,n(l,7,0,t.Ib(l.parent,0),l.context.$implicit));n(l,6,0,e)})}function v(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,5,"p",[["class","d-flex justify-content-end"]],null,null,null,null,null)),(n()(),t.xb(1,0,null,null,4,"a",[["class","text-muted"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Ib(n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.wb(2,671744,null,0,i.m,[i.k,i.a,a.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),t.Lb(3,{page:0}),t.Jb(4,2),(n()(),t.Qb(-1,null,["More Info"]))],function(n,l){var e=l.component,t=n(l,3,0,e.page),u=n(l,4,0,"/pokemon",null==e.pokemon?null:e.pokemon.id);n(l,2,0,t,u)},function(n,l){n(l,1,0,t.Ib(l,2).target,t.Ib(l,2).href)})}function h(n){return t.Sb(0,[t.Kb(0,a.p,[]),t.Kb(0,r,[]),(n()(),t.xb(2,0,null,null,22,"div",[["class","card h-100 shadow border-0 position-relative container-card"],["style","max-width: 540px;"]],null,null,null,null,null)),t.Nb(512,null,a.s,a.t,[t.v,t.w,t.n,t.J]),t.wb(4,278528,null,0,a.i,[a.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t.xb(5,0,null,null,1,"app-spinner",[],null,null,null,b,s)),t.wb(6,114688,null,0,c,[],{show:[0,"show"]},null),(n()(),t.xb(7,0,null,null,17,"div",[["class","row no-gutters h-100"]],null,null,null,null,null)),(n()(),t.mb(16777216,null,null,1,null,m)),t.wb(9,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(n()(),t.xb(10,0,null,null,14,"div",[["class","col-12 no-gutters description-card"]],null,null,null,null,null)),(n()(),t.xb(11,0,null,null,13,"div",[["class","card-body pb-1"]],null,null,null,null,null)),(n()(),t.xb(12,0,null,null,3,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),t.Qb(13,null,["#"," "," "])),t.Mb(14,1),(n()(),t.xb(15,0,null,null,0,"i",[["title","Favorite"]],[[8,"className",0]],[[null,"click"]],function(n,l,e){var t=!0,u=n.component;return"click"===l&&(t=!1!==u.changeFavorite(u.pokemon)&&t),t},null,null)),(n()(),t.xb(16,0,null,null,2,"ul",[["id","type-pokemon"],["style","padding:0;"]],null,null,null,null,null)),(n()(),t.mb(16777216,null,null,1,null,x)),t.wb(18,278528,null,0,a.j,[t.U,t.R,t.v],{ngForOf:[0,"ngForOf"]},null),(n()(),t.xb(19,0,null,null,2,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),t.Qb(20,null,["",""])),t.Mb(21,3),(n()(),t.xb(22,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.mb(16777216,null,null,1,null,v)),t.wb(24,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,4,0,"card h-100 shadow border-0 position-relative container-card",e.typesPokemon[0]+" "+e.typesPokemon[1]+"-secondary gradient"),n(l,6,0,e.loading),n(l,9,0,e.urlImage),n(l,18,0,e.typesPokemon),n(l,24,0,null==e.pokemon?null:e.pokemon.id)},function(n,l){var e=l.component,u=null==e.pokemon?null:e.pokemon.id,o=t.Rb(l,13,1,n(l,14,0,t.Ib(l,0),e.name));n(l,13,0,u,o),n(l,15,0,t.Bb(1,"favorite ",null!=e.pokemon&&e.pokemon.favorite?"fas fa-star":"far fa-star",""));var a=t.Rb(l,20,0,n(l,21,0,t.Ib(l,1),e.infoPokemon,100,0));n(l,20,0,a)})}var k=e("xkgV"),P=t.vb({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function y(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,l,e){var u=!0;return"keyup.enter"===l&&(u=!1!==t.Ib(n.parent.parent.parent,2).previous()&&u),"click"===l&&(u=!1!==t.Ib(n.parent.parent.parent,2).previous()&&u),u},null,null)),(n()(),t.Qb(1,null,[" "," "])),(n()(),t.xb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),t.Qb(3,null,["",""]))],null,function(n,l){var e=l.component;n(l,0,0,e.previousLabel+" "+e.screenReaderPageLabel),n(l,1,0,e.previousLabel),n(l,3,0,e.screenReaderPageLabel)})}function w(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t.Qb(1,null,[" "," "])),(n()(),t.xb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),t.Qb(3,null,["",""]))],null,function(n,l){var e=l.component;n(l,1,0,e.previousLabel),n(l,3,0,e.screenReaderPageLabel)})}function I(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(n()(),t.mb(16777216,null,null,1,null,y)),t.wb(2,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(n()(),t.mb(16777216,null,null,1,null,w)),t.wb(4,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,1<t.Ib(l.parent.parent,2).getCurrent()),n(l,4,0,t.Ib(l.parent.parent,2).isFirstPage())},function(n,l){n(l,0,0,t.Ib(l.parent.parent,2).isFirstPage())})}function C(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,5,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],function(n,l,e){var u=!0;return"keyup.enter"===l&&(u=!1!==t.Ib(n.parent.parent.parent,2).setCurrent(n.parent.context.$implicit.value)&&u),"click"===l&&(u=!1!==t.Ib(n.parent.parent.parent,2).setCurrent(n.parent.context.$implicit.value)&&u),u},null,null)),(n()(),t.xb(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),t.Qb(2,null,[""," "])),(n()(),t.xb(3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.Qb(4,null,["",""])),t.Mb(5,2)],null,function(n,l){n(l,2,0,l.component.screenReaderPageLabel);var e="..."===l.parent.context.$implicit.label?l.parent.context.$implicit.label:t.Rb(l,4,0,n(l,5,0,t.Ib(l.parent.parent.parent,0),l.parent.context.$implicit.label,""));n(l,4,0,e)})}function O(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),t.xb(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),t.Qb(2,null,[""," "])),(n()(),t.xb(3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.Qb(4,null,["",""])),t.Mb(5,2)],null,function(n,l){n(l,2,0,l.component.screenReaderCurrentLabel);var e="..."===l.parent.context.$implicit.label?l.parent.context.$implicit.label:t.Rb(l,4,0,n(l,5,0,t.Ib(l.parent.parent.parent,0),l.parent.context.$implicit.label,""));n(l,4,0,e)})}function M(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(n()(),t.mb(16777216,null,null,1,null,C)),t.wb(2,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(n()(),t.mb(16777216,null,null,1,null,O)),t.wb(4,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,t.Ib(l.parent.parent,2).getCurrent()!==l.context.$implicit.value),n(l,4,0,t.Ib(l.parent.parent,2).getCurrent()===l.context.$implicit.value)},function(n,l){n(l,0,0,t.Ib(l.parent.parent,2).getCurrent()===l.context.$implicit.value,"..."===l.context.$implicit.label)})}function _(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,l,e){var u=!0;return"keyup.enter"===l&&(u=!1!==t.Ib(n.parent.parent.parent,2).next()&&u),"click"===l&&(u=!1!==t.Ib(n.parent.parent.parent,2).next()&&u),u},null,null)),(n()(),t.Qb(1,null,[" "," "])),(n()(),t.xb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),t.Qb(3,null,["",""]))],null,function(n,l){var e=l.component;n(l,0,0,e.nextLabel+" "+e.screenReaderPageLabel),n(l,1,0,e.nextLabel),n(l,3,0,e.screenReaderPageLabel)})}function S(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t.Qb(1,null,[" "," "])),(n()(),t.xb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),t.Qb(3,null,["",""]))],null,function(n,l){var e=l.component;n(l,1,0,e.nextLabel),n(l,3,0,e.screenReaderPageLabel)})}function R(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(n()(),t.mb(16777216,null,null,1,null,_)),t.wb(2,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(n()(),t.mb(16777216,null,null,1,null,S)),t.wb(4,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,!t.Ib(l.parent.parent,2).isLastPage()),n(l,4,0,t.Ib(l.parent.parent,2).isLastPage())},function(n,l){n(l,0,0,t.Ib(l.parent.parent,2).isLastPage())})}function L(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(n()(),t.mb(16777216,null,null,1,null,I)),t.wb(2,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(n()(),t.xb(3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(n()(),t.Qb(4,null,[" "," / "," "])),(n()(),t.mb(16777216,null,null,1,null,M)),t.wb(6,278528,null,0,a.j,[t.U,t.R,t.v],{ngForOf:[0,"ngForOf"]},null),(n()(),t.mb(16777216,null,null,1,null,R)),t.wb(8,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.directionLinks),n(l,6,0,t.Ib(l.parent,2).pages),n(l,8,0,e.directionLinks)},function(n,l){var e=l.component;n(l,0,0,e.screenReaderPaginationLabel,e.responsive),n(l,4,0,t.Ib(l.parent,2).getCurrent(),t.Ib(l.parent,2).getLastPage())})}function H(n){return t.Sb(2,[t.Kb(0,a.d,[t.x]),(n()(),t.xb(1,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"]],function(n,l,e){var t=!0;return"pageChange"===l&&(t=!1!==n.component.pageChange.emit(e)&&t),t},null,null)),t.wb(2,737280,[["p",4]],0,k.d,[k.e,t.i],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange"}),(n()(),t.mb(16777216,null,null,1,null,L)),t.wb(4,16384,null,0,a.k,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.id,e.maxSize),n(l,4,0,!(e.autoHide&&t.Ib(l,2).pages.length<=1))},null)}var Q=e("pugT"),F=function(){function n(n,l,e){this.pokemonService=n,this.route=l,this.stateFooterService=e,this.currentPage=0,this.subscription=new Q.a}return n.prototype.ngOnInit=function(){var n=this,l=this.route.snapshot.queryParamMap.get("page");this.currentPage=l?Number(l):0,this.pokemonService.getPokemon(this.currentPage?20*(this.currentPage-1):0).subscribe(function(l){return n.page=l}),this.subscription.add(this.stateFooterService.previous.subscribe(function(n){var l=document.getElementsByClassName("pagination-previous")[0].querySelector("a");l&&l.click()})).add(this.stateFooterService.next.subscribe(function(n){var l=document.getElementsByClassName("pagination-next")[0].querySelector("a");l&&l.click()})).add(this.stateFooterService.home.subscribe(function(l){n.scrollPage("container-pagination")}))},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n.prototype.pageChange=function(n){var l=this;console.log(this.pagination),this.currentPage=n,this.pokemonService.getPokemon(20*(n-1)).subscribe(function(n){l.page=n,l.scrollPage("container-pagination")})},n.prototype.scrollTo=function(n,l,e){var t=this;if(!(e<=0)){var u=(l-n.scrollTop)/e*10;setTimeout(function(){n.scrollTop=n.scrollTop+u,n.scrollTop!==l&&t.scrollTo(n,l,e-10)},10)}},n.prototype.scrollPage=function(n){var l=document.getElementById(n).offsetTop-90,e=window.innerWidth>480?document.documentElement:document.getElementById("content-container");this.scrollTo(e,l,500)},n.prototype.getTotalPage=function(){var n=0;return this.page&&this.page.count&&(n=Math.ceil(this.page.count/20)),n},n}(),$=e("7H0e"),U=t.vb({encapsulation:0,styles:[[".green[_ngcontent-%COMP%]{color:green}.card-text[_ngcontent-%COMP%]{font-size:13px!important}.text-muted[_ngcontent-%COMP%]{font-size:18px}.more-info[_ngcontent-%COMP%]{cursor:pointer}.current-page[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:20px;font-weight:600}  .ngx-pagination .current{background:var(--color-default)!important}"]],data:{}});function T(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,2,"div",[["class","col-sm-6 col-lg-3 mb-3 px-1 px-md-3"]],null,null,null,null,null)),(n()(),t.xb(1,0,null,null,1,"app-card-pokemon",[],null,null,null,h,f)),t.wb(2,114688,null,0,g,[d.a,i.k],{name:[0,"name"],page:[1,"page"]},null)],function(n,l){n(l,2,0,null==l.context.$implicit?null:l.context.$implicit.name,l.component.currentPage)},null)}function N(n){return t.Sb(0,[t.Ob(671088640,1,{pagination:0}),(n()(),t.xb(1,0,null,null,10,"div",[["class","container"],["id","container-pagination"]],null,null,null,null,null)),(n()(),t.xb(2,0,null,null,6,"div",[["class","row pt-2"]],null,null,null,null,null)),(n()(),t.mb(16777216,null,null,3,null,T)),t.wb(4,278528,null,0,a.j,[t.U,t.R,t.v],{ngForOf:[0,"ngForOf"]},null),t.Lb(5,{itemsPerPage:0,currentPage:1,totalItems:2}),t.Kb(0,k.b,[k.e]),(n()(),t.xb(7,0,null,null,1,"div",[["class","current-page d-sm-none"]],null,null,null,null,null)),(n()(),t.Qb(8,null,[" ","/"," "])),(n()(),t.xb(9,0,null,null,2,"div",[["class","col-lg-12 col-centered mt-3 d-md-flex justify-content-center d-none"]],null,null,null,null,null)),(n()(),t.xb(10,0,null,null,1,"pagination-controls",[["autoHide","true"],["directionLinks","true"],["responsive","true"]],null,[[null,"pageChange"]],function(n,l,e){var t=!0;return"pageChange"===l&&(t=!1!==n.component.pageChange(e)&&t),t},H,P)),t.wb(11,49152,[[1,4],["p",4]],0,k.c,[],{directionLinks:[0,"directionLinks"],autoHide:[1,"autoHide"],responsive:[2,"responsive"]},{pageChange:"pageChange"})],function(n,l){var e=l.component,u=t.Rb(l,4,0,t.Ib(l,6).transform(null==e.page?null:e.page.results,n(l,5,0,20,e.currentPage,null==e.page?null:e.page.count)));n(l,4,0,u),n(l,11,0,"true","true","true")},function(n,l){var e=l.component;n(l,8,0,e.currentPage?e.currentPage:"1",e.getTotalPage())})}function z(n){return t.Sb(0,[(n()(),t.xb(0,0,null,null,1,"app-home",[],null,null,null,N,U)),t.wb(1,245760,null,0,F,[d.a,i.a,$.a],null,null)],function(n,l){n(l,1,0)},null)}var j=t.tb("app-home",F,z,{},{},[]),B=e("gIcY"),K=function(){return function(){}}(),q=e("9Xeq"),J=function(){return function(){}}(),E=e("pKmL");e.d(l,"HomeModuleNgFactory",function(){return G});var G=t.ub(u,[],function(n){return t.Gb([t.Hb(512,t.l,t.fb,[[8,[o.a,j]],[3,t.l],t.B]),t.Hb(4608,a.m,a.l,[t.x,[2,a.v]]),t.Hb(4608,k.e,k.e,[]),t.Hb(4608,B.e,B.e,[]),t.Hb(4608,B.a,B.a,[]),t.Hb(1073742336,a.b,a.b,[]),t.Hb(1073742336,i.n,i.n,[[2,i.s],[2,i.k]]),t.Hb(1073742336,K,K,[]),t.Hb(1073742336,k.a,k.a,[]),t.Hb(1073742336,q.a,q.a,[]),t.Hb(1073742336,J,J,[]),t.Hb(1073742336,B.d,B.d,[]),t.Hb(1073742336,B.b,B.b,[]),t.Hb(1073742336,B.c,B.c,[]),t.Hb(1073742336,E.a,E.a,[]),t.Hb(1073742336,u,u,[]),t.Hb(1024,i.i,function(){return[[{path:"",component:F}]]},[])])})}}]);