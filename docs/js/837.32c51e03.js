"use strict";(self["webpackChunksqg_doc"]=self["webpackChunksqg_doc"]||[]).push([[837],{84405:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});n(74916),n(23123),n(92222),n(41539);var i=n(73396),c=n(44870),r=(n(68309),n(87139)),a=["title"];const o=(0,i.aZ)({__name:"SliderItem",props:{item:{default:function(){return{name:"",type:""}}},active:{default:!1}},emits:["click"],setup:function(e,t){var n=t.emit;return function(t,c){return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(["doc-slider-item",{"doc-slider-item-active":e.active}]),title:e.item.type,onClick:c[0]||(c[0]=function(e){return n("click")})},(0,r.zw)(e.item.name),11,a)}}}),l=o,u=l;var s=n(40874),d=["label"],v={class:"doc-slider-dir-name"};const f=(0,i.aZ)({__name:"SliderMenu",setup:function(e){var t=function(e){s.h.active=e};return function(e,n){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,c.SU)(s.h).docs,(function(e,n){return(0,i.wg)(),(0,i.iD)("div",{class:"slider-bar-dir",key:n,label:e.name},[(0,i._)("div",v,(0,r.zw)(e.name),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.files,(function(e,n){return(0,i.wg)(),(0,i.j4)(u,{key:n,item:e,active:(0,c.SU)(s.h).active===e,onClick:function(n){return t(e)}},null,8,["item","active","onClick"])})),128))],8,d)})),128)}}}),m=f,p=m;var h=n(13995),_={class:"slider-bar"},w={class:"slider-bar-scroll"},k={class:"doc-main"},g={class:"doc-editor"};const b=(0,i.aZ)({__name:"DocExample",setup:function(e){var t=function(){var e="/#/",t=window.location.href.split(e)[0],n=document.createElement("iframe");return n.setAttribute("class","doc-iframe"),n.setAttribute("src","".concat(t).concat(e,"core:").concat(s.h.active.path)),n},n=(0,c.qj)({code:"",show1:!1,count:0});(0,i.JJ)("doc",n);var r=(0,c.iH)(),a=function(){fetch(s.h.active.url).then((function(e){e.text().then((function(e){n.code=e,l()}))}))},o=t(),l=function(){var e;o.remove(),o=t(),o.addEventListener("load",(function(){var e=o.contentWindow;e.postMessage({type:"sqg-code",code:n.code})})),null===(e=r.value)||void 0===e||e.appendChild(o)};return(0,i.YP)((function(){return s.h.active}),a),(0,i.bv)(a),function(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",_,[(0,i._)("div",w,[(0,i.Wm)(p)])]),(0,i._)("div",k,[(0,i._)("div",{class:"doc-pre",ref_key:"pre",ref:r},null,512),(0,i._)("div",g,[(0,i.Wm)(h.Z,{onChange:l})])])],64)}}}),C=b,y=C}}]);