var ye=Object.defineProperty,$e=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var re=(e,t,o)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,U=(e,t)=>{for(var o in t||(t={}))we.call(t,o)&&re(e,o,t[o]);if(ae)for(var o of ae(t))Ce.call(t,o)&&re(e,o,t[o]);return e},q=(e,t)=>$e(e,Se(t));import{M as u,o as r,B as b,i as j,c as h,a as $,u as p,L as xe,a9 as R,O as i,U as a,I as D,J as V,H,h as Z,C as ee,F as O,a5 as E,S as I,T as A,G as Te,au as te,av as ne,K as Q,R as le,z as Ie,j as ke,aq as Me}from"./@vue.1646188923532.js";import{I as ie,f as Fe,e as Le,s as Oe,a as je}from"./@element-plus.1646188923532.js";import{i as ze,E as Ee}from"./element-plus.1646188923532.js";import{u as Ne,a as oe,c as Ve,b as Ae}from"./vue-router.1646188923532.js";import{u as N,c as Be}from"./vuex.1646188923532.js";import"./@vueuse.1646188923532.js";import"./lodash.1646188923532.js";import"./dayjs.1646188923532.js";import"./@popperjs.1646188923532.js";import"./async-validator.1646188923532.js";import"./memoize-one.1646188923532.js";import"./normalize-wheel-es.1646188923532.js";const Re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const _ of s)if(_.type==="childList")for(const d of _.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const _={};return s.integrity&&(_.integrity=s.integrity),s.referrerpolicy&&(_.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?_.credentials="include":s.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function n(s){if(s.ep)return;s.ep=!0;const _=o(s);fetch(s.href,_)}};Re();var S=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o};const Ue={};function qe(e,t){const o=u("router-view");return r(),b(o)}var De=S(Ue,[["render",qe]]);function He(e){e.use(ze),Object.keys(ie).forEach(t=>{e.component(t,ie[t])}),e.config.globalProperties.$message=Ee}const Pe=["xlink:href"],Je={props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const t=e,o=j(()=>`#icon-${t.name}`),n=j(()=>t.name?`svg-icon icon-${t.name}`:"svg-icon");return(s,_)=>(r(),h("svg",xe({class:p(n)},s.$attrs,{style:{color:e.color}}),[$("use",{"xlink:href":p(o)},null,8,Pe)],16))}};var Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je});const Ke={class:"el-main"},We={props:{menuList:Array,navbarInfo:Object},setup(e){const t=e,{menuList:o,navbarInfo:n}=R(t),s=Ne(),_=N();j(()=>s.path);const d=j(()=>_.state.navbarType);j(()=>_.state.isCollapse);const m=j(()=>_.state.isCollapse?"64px":"200px");return(g,v)=>{const f=u("sidebar"),y=u("el-aside"),l=u("navbar"),w=u("el-header"),M=u("tabs"),C=u("el-main"),c=u("el-container");return p(d)==="\u5DE6\u4FA7\u83DC\u5355\u6A21\u5F0F"?(r(),b(c,{key:0},{default:i(()=>[a(y,{width:p(m)},{default:i(()=>[a(f,{showLogo:!0,menuList:p(o)},null,8,["menuList"])]),_:1},8,["width"]),a(c,null,{default:i(()=>[a(w,null,{default:i(()=>[a(l,{navbarInfo:p(n)},null,8,["navbarInfo"])]),_:1}),a(M),a(C,null,{default:i(()=>[D(g.$slots,"home")]),_:3})]),_:3})]),_:3})):p(d)==="\u9876\u90E8\u83DC\u5355\u6DF7\u5408\u6A21\u5F0F"?(r(),b(c,{key:1},{default:i(()=>[a(w,null,{default:i(()=>[a(l,{showLogo:!0,navbarInfo:p(n)},null,8,["navbarInfo"])]),_:1}),a(c,null,{default:i(()=>[a(y,{width:p(m)},{default:i(()=>[a(f,{menuList:p(o)},null,8,["menuList"])]),_:1},8,["width"]),a(c,{direction:"vertical"},{default:i(()=>[a(M),$("main",Ke,[D(g.$slots,"home")])]),_:3})]),_:3})]),_:3})):p(d)==="\u9876\u90E8\u83DC\u5355\u6A21\u5F0F"?(r(),b(c,{key:2},{default:i(()=>[a(w,null,{default:i(()=>[a(l,{showLogo:!0,navbarInfo:p(n)},{sidebar:i(()=>[a(f,{mode:"horizontal",menuList:p(o)},null,8,["menuList"])]),_:1},8,["navbarInfo"])]),_:1}),a(c,{direction:"vertical"},{default:i(()=>[a(M),a(C,null,{default:i(()=>[D(g.$slots,"home")]),_:3})]),_:3})]),_:3})):(r(),b(c,{key:3},{default:i(()=>[a(y,{width:"80px"},{default:i(()=>[a(f,{showLogo:!0,collapse:!0,menuList:p(o)},null,8,["menuList"])]),_:1}),a(c,null,{default:i(()=>[a(w,null,{default:i(()=>[a(l,{navbarInfo:p(n)},null,8,["navbarInfo"])]),_:1}),a(M),a(C,null,{default:i(()=>[D(g.$slots,"home")]),_:3})]),_:3})]),_:3}))}}};var Qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We});const Xe={name:"Logo",setup(){const e=N();return{isHideTitle:j(()=>e.state.isCollapse)}}},Ye={class:"el-logo"};function Ze(e,t,o,n,s,_){return r(),h("div",Ye,[$("span",{class:V(["title",{"is-hide":n.isHideTitle}])},"\u5355\u4F4D\u4F1A\u5458\u7BA1\u7406\u7CFB\u7EDF",2)])}var et=S(Xe,[["render",Ze]]),tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et});const ve=e=>{let t=document.documentElement;e.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()},nt=(e,t)=>{document.onkeydown=o=>{o.keyCode==122&&(o.preventDefault(),ve(t))},document.addEventListener("fullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("msfullscreenchange",e)},ot={setup(){const e=H({fullscreen:!1});nt(()=>{e.fullscreen=!e.fullscreen},e);const t=()=>ve(e),o=R(e);return q(U({},o),{handleFullScreen:t})}};function st(e,t,o,n,s,_){const d=u("svg-icon"),m=u("el-tooltip");return r(),b(m,{class:"item",effect:"dark",content:e.fullscreen?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",placement:"bottom"},{default:i(()=>[e.fullscreen?(r(),b(d,{key:1,sss:e.fullscreen,name:"full-screen-min",onClick:n.handleFullScreen},null,8,["sss","onClick"])):(r(),b(d,{key:0,name:"full-screen-max",onClick:n.handleFullScreen},null,8,["onClick"]))]),_:1},8,["content"])}var at=S(ot,[["render",st]]),rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:at});const J=(e,t)=>{t&&e.forEach(o=>o.active=o.id===t),sessionStorage.setItem("TABS_LIST",JSON.stringify(e))},G=()=>{let e=sessionStorage.getItem("TABS_LIST");return e=e?JSON.parse(e):[],e},lt=e=>{localStorage.setItem("THEMES",JSON.stringify(e))},se=()=>{let e=localStorage.getItem("THEMES");return e=e?JSON.parse(e):{showBreadcrumb:!0,showTabs:!0},e},_e=e=>{e=e||[],e=e.reverse(),sessionStorage.setItem("BREADCRUMB",JSON.stringify(e))},ce=()=>{let e=sessionStorage.getItem("BREADCRUMB");return e=e?JSON.parse(e):[],e},it={class:"header-content"},_t={class:"header-left"},ct={class:"header-right"},ut={props:{showLogo:Boolean,navbarInfo:Object},setup(e){const t=e,{showLogo:o,navbarInfo:n}=R(t),s=N(),_=H({setting:null,breadcrumb:ce()}),d=()=>_.setting.showDraw(),m=j(()=>t.showLogo),g=j(()=>s.state.isCollapse),v=f=>s.commit("getCollapse",f);return Z(()=>s.state.activeMenu,(f,y)=>_.breadcrumb=ce()),(f,y)=>{const l=u("logo"),w=u("el-breadcrumb-item"),M=u("el-breadcrumb"),C=u("full-screen"),c=u("svg-icon"),x=u("user-info"),F=u("system-setting");return r(),h(O,null,[$("div",it,[p(m)?(r(),b(l,{key:0})):ee("",!0),$("div",{class:V(["header",{"has-logo":p(m)}])},[$("div",_t,[p(g)?(r(),b(p(Le),{key:1,class:"navbar-icon _fold",onClick:y[1]||(y[1]=T=>v(!1))})):(r(),b(p(Fe),{key:0,class:"navbar-icon _fold",onClick:y[0]||(y[0]=T=>v(!0))})),a(M,{separator:"/"},{default:i(()=>[(r(!0),h(O,null,E(p(_).breadcrumb,T=>(r(),b(w,{key:T.menuId},{default:i(()=>[I(A(T.menuName),1)]),_:2},1024))),128))]),_:1}),D(f.$slots,"sidebar")]),$("div",ct,[a(C),a(c,{name:"language"}),a(x,{navbarInfo:p(n)},null,8,["navbarInfo"]),a(p(Oe),{class:"navbar-icon",onClick:d})])],2)]),a(F,{ref:"setting"},null,512)],64)}}};var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ut}),mt="/assets/user.1646188923532.jpg";const vt={class:"header-user"},ft=["src"],pt={props:{navbarInfo:Object},setup(e){const t=oe(),o=N(),n=s=>{o.commit("getActiveMenu",s.menuId),t.push(s.path)};return(s,_)=>{const d=u("el-dropdown-item"),m=u("el-dropdown-menu"),g=u("el-dropdown");return r(),b(g,null,{dropdown:i(()=>[a(m,null,{default:i(()=>[(r(!0),h(O,null,E(e.navbarInfo.url_list,(v,f)=>(r(),b(d,{onClick:y=>n(v),key:f},{default:i(()=>[I(A(v.menuName),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:i(()=>[$("div",vt,[$("img",{src:e.navbarInfo.img_url==""?p(mt):e.navbarInfo.img_url,alt:""},null,8,ft),$("span",null,A(e.navbarInfo.name),1)])]),_:1})}}};var bt=S(pt,[["__scopeId","data-v-5727bb48"]]),gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const Y={drawer:!1,nightMode:!1,navbarType:"\u5DE6\u4FA7\u83DC\u5355\u6A21\u5F0F",navbarList:["\u5DE6\u4FA7\u83DC\u5355\u6A21\u5F0F","\u9876\u90E8\u83DC\u5355\u6DF7\u5408\u6A21\u5F0F","\u9876\u90E8\u83DC\u5355\u6A21\u5F0F","\u5DE6\u4FA7\u83DC\u5355\u6DF7\u5408\u6A21\u5F0F"],systemThemeColor:"#0960BD",systemThemeList:["#0960BD","#0084F4","#009688","#536DF3","#FF5C93","#EE4F12","#0096C7","#9C27B0","#FF9800"],navbarThemeColor:"#FFFFFF",navbarThemeList:["#FFFFFF","#151515","#009688","#5172DC","#409EFF","#E74C3C","#24292E","#394664","#001529","#383F45"],sidebarThemeColor:"#001529",sidebarThemeList:["#001529","#212121","#273352","#FFFFFF","#191B24","#191A23","#304156","#28333E","#344058","#383F45"],showBreadcrumb:!0,showTabs:!0},ht=e=>{let{type:t,value:o,store:n,data:s}=e;s[t]=o,yt({type:t,value:o}),t==="navbarType"&&(s.drawer=!1,n.commit("getNavbarType",o))},yt=e=>{const{type:t,value:o}=e;let n=se();n[t]=o,lt(n),fe()},fe=e=>{let t=se();if(e){let{data:n}=e;Object.keys(n).forEach(s=>{n[s]=t[s]||n[s]})}let o="";t.systemThemeColor&&(o+=`--systemThemeColor: ${t.systemThemeColor};`,o+=`--systemThemeColorActive: ${ue(t.systemThemeColor,58)};`),t.navbarThemeColor&&(o+=`--navbarThemeColor: ${t.navbarThemeColor};`,o+=`--sidebarThemeColorActive: ${ue(t.navbarThemeColor,6)};`),t.sidebarThemeColor&&(o+=`--sidebarThemeColor: ${t.sidebarThemeColor};`,B({flag:t.sidebarThemeColor==="#FFFFFF",cls:"sidebar--white"})),B({flag:t.nightMode,cls:"night-mode"}),B({flag:t.showBreadcrumb,dom:".el-breadcrumb",cls:"is-show"}),B({flag:t.showTabs,dom:".tabs-content",cls:"is-show"}),B({flag:(t==null?void 0:t.navbarThemeColor)?t.navbarThemeColor==="#FFFFFF":!0,cls:"navbar--white"}),Y.navbarList.forEach((n,s)=>{B({flag:n===Y.navbarType,cls:`layout-type-${s+1}`})}),document.querySelector(":root").setAttribute("style",o)},B=e=>{var _;let{flag:t,cls:o,dom:n}=e;n=n||"body";let s=(_=document.querySelector(n))==null?void 0:_.classList;t?s==null||s.add(o):s==null||s.remove(o)},ue=(e,t)=>(e=e.indexOf("#")>=0?e.substring(1,e.length):e,t=Math.trunc(255*t/100),`#${X(e.substring(0,2),t)}${X(e.substring(2,4),t)}${X(e.substring(4,6),t)}`),X=(e,t)=>{const o=parseInt(e,16)+t,n=o>255?255:o;return n.toString(16).length>1?n.toString(16):`0${n.toString(16)}`};const $t={setup(){const e=H(Y),t=N();Te(()=>{fe({data:e})});const o=()=>e.drawer=!0,n=(_,d)=>{ht({type:_,value:d,store:t,data:e})},s=R(e);return q(U({},s),{showDraw:o,changeSetting:n})}},pe=e=>(te("data-v-acec63e6"),e=e(),ne(),e),St={class:"draw-content"},wt=I("\u4E3B\u9898"),Ct={class:"flex-justify-center day-mode"},xt=I("\u5BFC\u822A\u680F\u6A21\u5F0F"),Tt={class:"nav-row"},It=["onClick"],kt=I("\u7CFB\u7EDF\u4E3B\u9898"),Mt={class:"checkbox-row"},Ft=["onClick"],Lt=I("\u9876\u680F\u4E3B\u9898"),Ot={class:"checkbox-row"},jt=["onClick"],zt=I("\u83DC\u5355\u4E3B\u9898"),Et={class:"checkbox-row"},Nt=["onClick"],Vt=I("\u754C\u9762\u663E\u793A"),At={class:"other-row"},Bt=pe(()=>$("span",null,"\u9762\u5305\u5C51",-1)),Rt={class:"other-row"},Ut=pe(()=>$("span",null,"\u5BFC\u822A\u9875",-1)),qt=I("\u4FDD\u5B58");function Dt(e,t,o,n,s,_){const d=u("el-divider"),m=u("el-switch"),g=u("el-tooltip"),v=u("el-color-picker"),f=u("el-button"),y=u("el-drawer");return r(),b(y,{title:"\u9879\u76EE\u914D\u7F6E",modelValue:e.drawer,"onUpdate:modelValue":t[12]||(t[12]=l=>e.drawer=l),"show-close":!0},{default:i(()=>[$("div",St,[a(d,null,{default:i(()=>[wt]),_:1}),$("div",Ct,[a(m,{modelValue:e.nightMode,"onUpdate:modelValue":t[0]||(t[0]=l=>e.nightMode=l),"active-text":"\u591C\u95F4\u6A21\u5F0F","inactive-text":"\u65E5\u95F4\u6A21\u5F0F",onChange:t[1]||(t[1]=l=>n.changeSetting("nightMode",e.nightMode))},null,8,["modelValue"])]),a(d,null,{default:i(()=>[xt]),_:1}),$("div",Tt,[(r(!0),h(O,null,E(e.navbarList,(l,w)=>(r(),b(g,{effect:"dark",placement:"bottom",key:w,content:l,disabled:!e.drawer},{default:i(()=>[$("div",{class:V(["nav-item",`nav-item-${w}`,{active:e.navbarType===l}]),onClick:M=>n.changeSetting("navbarType",l)},null,10,It)]),_:2},1032,["content","disabled"]))),128))]),a(d,null,{default:i(()=>[kt]),_:1}),$("div",Mt,[(r(!0),h(O,null,E(e.systemThemeList,(l,w)=>(r(),h("div",{class:V(["checkbox-item",{active:l===e.systemThemeColor}]),key:w,style:Q({backgroundColor:l}),onClick:M=>n.changeSetting("systemThemeColor",l)},null,14,Ft))),128)),a(v,{modelValue:e.systemThemeColor,"onUpdate:modelValue":t[2]||(t[2]=l=>e.systemThemeColor=l),onActiveChange:t[3]||(t[3]=l=>n.changeSetting("systemThemeColor",l))},null,8,["modelValue"])]),a(d,null,{default:i(()=>[Lt]),_:1}),$("div",Ot,[(r(!0),h(O,null,E(e.navbarThemeList,(l,w)=>(r(),h("div",{class:V(["checkbox-item",{active:l===e.navbarThemeColor}]),key:w,style:Q({backgroundColor:l}),onClick:M=>n.changeSetting("navbarThemeColor",l)},null,14,jt))),128)),a(v,{modelValue:e.navbarThemeColor,"onUpdate:modelValue":t[4]||(t[4]=l=>e.navbarThemeColor=l),onActiveChange:t[5]||(t[5]=l=>n.changeSetting("navbarThemeColor",l))},null,8,["modelValue"])]),a(d,null,{default:i(()=>[zt]),_:1}),$("div",Et,[(r(!0),h(O,null,E(e.sidebarThemeList,(l,w)=>(r(),h("div",{class:V(["checkbox-item",{active:l===e.sidebarThemeColor}]),key:w,style:Q({backgroundColor:l}),onClick:M=>n.changeSetting("sidebarThemeColor",l)},null,14,Nt))),128)),a(v,{modelValue:e.sidebarThemeColor,"onUpdate:modelValue":t[6]||(t[6]=l=>e.sidebarThemeColor=l),onActiveChange:t[7]||(t[7]=l=>n.changeSetting("sidebarThemeColor",l))},null,8,["modelValue"])]),a(d,null,{default:i(()=>[Vt]),_:1}),$("div",At,[Bt,a(m,{modelValue:e.showBreadcrumb,"onUpdate:modelValue":t[8]||(t[8]=l=>e.showBreadcrumb=l),class:"custom-switch",onChange:t[9]||(t[9]=l=>n.changeSetting("showBreadcrumb",l))},null,8,["modelValue"])]),$("div",Rt,[Ut,a(m,{modelValue:e.showTabs,"onUpdate:modelValue":t[10]||(t[10]=l=>e.showTabs=l),class:"custom-switch",onChange:t[11]||(t[11]=l=>n.changeSetting("showTabs",l))},null,8,["modelValue"])])]),a(f,{class:"draw-save"},{default:i(()=>[qt]),_:1})]),_:1},8,["modelValue"])}var Ht=S($t,[["render",Dt],["__scopeId","data-v-acec63e6"]]),Pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ht});const Jt={props:{mode:String,showLogo:Boolean,collapse:Boolean,menuList:Array},setup(e){const t=N(),o=e.collapse,n=H({activeMenu:"",menuList:e.menuList}),s=j(()=>e.showLogo),_=j(()=>e.collapse?o:t.state.isCollapse);G().forEach(v=>{v.active&&(n.activeMenu=v.id)});const m=(v,f)=>{for(let y in v){if(v[y].menuId==f)return[v[y]];if(v[y].children){let l=m(v[y].children,f);if(l!==void 0)return l.concat(v[y])}}};_e(m(n.menuList,n.activeMenu)),Z(()=>t.state.activeMenu,(v,f)=>{n.activeMenu=v,_e(m(n.menuList,v))});const g=R(n);return q(U({},g),{isShowLogo:s,isCollapse:_})}};function Gt(e,t,o,n,s,_){const d=u("logo"),m=u("sidebar-item"),g=u("el-menu");return r(),b(g,{"default-active":e.activeMenu,"unique-opened":!0,mode:o.mode,collapse:n.isCollapse&&o.mode!=="horizontal",class:V({"no-transition":n.isCollapse})},{default:i(()=>[n.isShowLogo?(r(),b(d,{key:0})):ee("",!0),(r(!0),h(O,null,E(o.menuList,v=>(r(),b(m,{key:v.menuId,item:v,collapse:o.collapse},null,8,["item","collapse"]))),128))]),_:1},8,["default-active","mode","collapse","class"])}var Kt=S(Jt,[["render",Gt]]),Wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kt});const Qt={key:0},Xt={props:{item:Object,collapse:Boolean},setup(e){const t=N(),o=oe(),n=s=>{const{menuId:_,menuName:d,path:m}=s;let g=G(),v=!0;g.forEach(f=>{f.id===_&&(v=!1)}),v&&g.push({id:_,name:d,path:m,active:!0}),t.commit("getActiveMenu",_),J(g,_),o.push({path:m})};return(s,_)=>{const d=u("el-icon"),m=u("sidebar-item",!0),g=u("el-sub-menu"),v=u("el-menu-item");return e.item.children.length>0?(r(),b(g,{key:0,index:e.item.menuId},{title:i(()=>[a(d,null,{default:i(()=>[(r(),b(le(e.item.icon)))]),_:1}),$("span",null,A(e.item.menuName),1)]),default:i(()=>[(r(!0),h(O,null,E(e.item.children,f=>(r(),b(m,{key:f.menuId,item:f},null,8,["item"]))),128))]),_:1},8,["index"])):(r(),b(v,{key:1,index:e.item.menuId,onClick:_[0]||(_[0]=f=>n(e.item))},{title:i(()=>[I(A(e.item.menuName),1)]),default:i(()=>[a(d,null,{default:i(()=>[(r(),b(le(e.item.icon)))]),_:1}),e.collapse?(r(),h("span",Qt,A(e.item.menuName),1)):ee("",!0)]),_:1},8,["index"]))}}};var Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xt});const Zt={class:"tabs-content"},en={class:"tabs-scroll"},tn=I("\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875"),nn=I("\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875"),on=I("\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875"),sn=I("\u5173\u95ED\u5176\u4ED6\u6807\u7B7E\u9875"),an=I("\u5173\u95ED\u6240\u6709\u6807\u7B7E\u9875"),rn={setup(e){const t=oe(),o=N(),n=H({left:0,tabs:G(),activeMenu:"",disabledCurrent:!0,disabledLeft:!0,disabledRight:!0,disabledOther:!0,disabledAll:!0}),{tabs:s,activeMenu:_,disabledCurrent:d,disabledLeft:m,disabledRight:g,disabledOther:v,disabledAll:f}=R(n);n.tabs.forEach(C=>{C.active&&(n.activeMenu=C.id)});const y=C=>{o.commit("getActiveMenu",C.props.name),J(n.tabs,C.props.name),M();const c=n.tabs.findIndex(x=>x.id==C.props.name);c!=-1&&t.push({path:n.tabs[c].path})},l=C=>{let c=0,x=!1;n.tabs.forEach((F,T)=>{F.id===C&&(c=T,x=F.active)}),x?w("current"):(n.tabs.splice(c,1),J(n.tabs),M())},w=C=>{var T,k;let c=n.tabs,x=0,F="";if(c.forEach((L,W)=>{L.active&&(x=W)}),C==="current"){if(x=x>0?x-1:x+1,F=(k=(T=c[x])==null?void 0:T.id)!=null?k:"",c.length==1)return;c=c.filter(L=>!L.active),o.commit("getActiveMenu",F),t.push(c[x].path)}else if(C==="other")c=c.filter(L=>L.active),n.tabs=c;else if(C==="all")c=c.filter(L=>L.unCloseable),o.commit("getActiveMenu","");else{let L=c.length-1;C==="left"?c.splice(0,x):c.splice(x+1,L-x)}J(c,F),M()},M=()=>{let C=!0,c=!0,x=!0,F=0,T=n.tabs.length;if(n.tabs.forEach((k,L)=>{k.active&&!k.unCloseable&&(C=!1),k.active&&(F=L)}),F>0){for(let k=0;k<F;k++)if(!n.tabs[k].unCloseable){c=!1;break}}if(F+1<T){for(let k=T;k>F+1;k--)if(!n.tabs[k-1].unCloseable){x=!1;break}}n.disabledCurrent=C,n.disabledLeft=c,n.disabledRight=x,n.disabledOther=c&&x,n.disabledAll=c&&x&&C};return M(),Z(()=>o.state.activeMenu,(C,c)=>{n.activeMenu=C,n.tabs=G(),M()}),(C,c)=>{const x=u("el-tab-pane"),F=u("el-tabs"),T=u("el-dropdown-item"),k=u("el-divider"),L=u("el-dropdown-menu"),W=u("el-dropdown");return r(),h("div",Zt,[$("div",en,[a(F,{modelValue:p(_),"onUpdate:modelValue":c[0]||(c[0]=z=>Ie(_)?_.value=z:null),type:"card",onTabClick:y,onTabRemove:l},{default:i(()=>[(r(!0),h(O,null,E(p(s),(z,he)=>(r(),b(x,{closable:!z.unCloseable,name:z.id,key:he,label:z.name},null,8,["closable","name","label"]))),128))]),_:1},8,["modelValue"])]),a(W,{trigger:"click"},{dropdown:i(()=>[a(L,{class:"tabs-menu"},{default:i(()=>[a(T,{disabled:p(d),onClick:c[1]||(c[1]=z=>w("current")),icon:"el-icon-close"},{default:i(()=>[tn]),_:1},8,["disabled"]),a(k),a(T,{disabled:p(m),onClick:c[2]||(c[2]=z=>w("left"))},{default:i(()=>[nn]),_:1},8,["disabled"]),a(T,{disabled:p(g),onClick:c[3]||(c[3]=z=>w("right"))},{default:i(()=>[on]),_:1},8,["disabled"]),a(k),a(T,{disabled:p(v),onClick:c[4]||(c[4]=z=>w("other"))},{default:i(()=>[sn]),_:1},8,["disabled"]),a(T,{disabled:p(f),onClick:c[5]||(c[5]=z=>w("all"))},{default:i(()=>[an]),_:1},8,["disabled"])]),_:1})]),default:i(()=>[a(p(je),{class:"tabs-svg border-left"})]),_:1})])}}};var ln=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rn});function _n(e){const t={"../../components/SvgIcon.vue":Ge,"../../components/layout/Layout.vue":Qe,"../../components/layout/components/Logo.vue":tt,"../../components/layout/components/navbar/FullScreen.vue":rt,"../../components/layout/components/navbar/Navbar.vue":dt,"../../components/layout/components/navbar/UserInfo.vue":gt,"../../components/layout/components/setting/SystemSetting.vue":Pt,"../../components/layout/components/sidebar/Sidebar.vue":Wt,"../../components/layout/components/sidebar/SidebarItem.vue":Yt,"../../components/layout/components/tabs/Tabs.vue":ln};Object.keys(t).forEach(o=>{const n=t[o];e.component(n.default.name||cn(un(o)),n.default)})}function cn(e){return e&&e.replace(/\-(\w)/g,function(t,o){return o.toUpperCase()}).replace(/(\s|^)[a-z]/g,function(t){return t.toUpperCase()})}function un(e){return e&&e.split("/").filter(n=>!!n&&n!==".").reverse().find(n=>n!=="index.vue"&&n!=="index.ts"&&n!=="index.js").replace(".vue","")||""}function dn(e){He(e),_n(e)}const mn={class:"index h-screen"},vn={setup(e){const t=[{menuId:"111",menuName:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:"tools",children:[{menuId:"111-1",menuName:"\u9000\u51FA\u7CFB\u7EDF",path:"/admin/system/loginout",children:[],icon:"arrow-right-bold"}]},{menuId:"222",menuName:"\u4E2A\u4EBA\u4E2D\u5FC3",icon:"avatar",children:[{menuId:"222-1",menuName:"\u4E2A\u4EBA\u4FE1\u606F",path:"/admin/user/info",children:[],icon:"menu"},{menuId:"222-2",menuName:"\u4FEE\u6539\u5BC6\u7801",path:"/admin/user/password",children:[],icon:"menu"}]}],o={img_url:"",url_list:[{menuId:"222-2",menuName:"\u4FEE\u6539\u5BC6\u7801",path:"/admin/user/password"},{menuId:"222-1",menuName:"\u4E2A\u4EBA\u4FE1\u606F",path:"/admin/user/info"},{menuId:"111-1",menuName:"\u9000\u51FA\u7CFB\u7EDF",path:"/admin/system/loginout"}],name:"\u6B22\u8FCE\u4F7F\u7528\u7CFB\u7EDF"};return(n,s)=>{const _=u("router-view"),d=u("layout");return r(),h("div",mn,[a(d,{menuList:t,navbarInfo:o},{home:i(()=>[a(_)]),_:1})])}}};var fn=S(vn,[["__scopeId","data-v-51baed6e"]]),pn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fn});const bn={},gn={class:"index"};function hn(e,t){return r(),h("div",gn," \u627E\u56DE\u5BC6\u7801\u9875\u9762 ")}var yn=S(bn,[["render",hn],["__scopeId","data-v-3a848876"]]),$n=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yn});const Sn={};function wn(e,t){const o=u("router-view");return r(),b(o)}var Cn=S(Sn,[["render",wn],["__scopeId","data-v-68546b86"]]),xn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cn});const Tn={},In={class:"index"};function kn(e,t){return r(),h("div",In," \u8FD9\u662F\u767B\u5F55\u9875\u9762 ")}var Mn=S(Tn,[["render",kn],["__scopeId","data-v-198dc051"]]),Fn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mn});const Ln={},On={class:"index"};function jn(e,t){return r(),h("div",On," \u8FD9\u662F\u6CE8\u518C\u9875\u9762 ")}var zn=S(Ln,[["render",jn],["__scopeId","data-v-867b71e4"]]),En=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zn});const Nn={};function Vn(e,t){const o=u("router-view");return r(),b(o)}var An=S(Nn,[["render",Vn],["__scopeId","data-v-661fc305"]]),Bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:An});const Rn={route:{test:"1246789",meta:{auth:!0}}},Un={class:"index"};function qn(e,t,o,n,s,_){return r(),h("div",Un," index.test ")}var Dn=S(Rn,[["render",qn],["__scopeId","data-v-594fdd05"]]),Hn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dn});const Pn={};function Jn(e,t){const o=u("router-view");return r(),b(o)}var Gn=S(Pn,[["render",Jn],["__scopeId","data-v-500ba72a"]]),Kn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gn});const be=e=>(te("data-v-35929b1e"),e=e(),ne(),e),Wn=be(()=>$("div",{class:"index"}," \u8FD9\u662Ftest\u521D\u59CB\u5316\u9875\u9762 ",-1)),Qn={style:{color:"red"}},Xn=be(()=>$("div",{class:"red"},null,-1)),Yn={setup(e){const t=N();console.log(t.state.user.title),console.log(t.getters);const o=()=>{t.dispatch("user/clickTest")};return(n,s)=>(r(),h(O,null,[Wn,$("p",Qn,A(p(t).getters["user/title"]),1),$("button",{onClick:o},"you click,this is test"),Xn],64))}};var Zn=S(Yn,[["__scopeId","data-v-35929b1e"]]),eo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zn});const to={},no={class:"index"},oo=I(" \u8FD9\u662F\u4E00home\u9996\u9875 "),so=I("Primary");function ao(e,t){const o=u("el-button");return r(),h("div",no,[oo,a(o,{type:"primary"},{default:i(()=>[so]),_:1})])}var ro=S(to,[["render",ao],["__scopeId","data-v-495b52ca"]]),lo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ro});const io={};function _o(e,t){const o=u("router-view");return r(),b(o)}var co=S(io,[["render",_o],["__scopeId","data-v-3fd3b676"]]),uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:co});const mo={},vo=e=>(te("data-v-25debea7"),e=e(),ne(),e),fo=vo(()=>$("div",{class:"index"},"admin-home-test",-1)),po=I("Primary");function bo(e,t){const o=u("el-button");return r(),h(O,null,[fo,a(o,{type:"primary"},{default:i(()=>[po]),_:1})],64)}var go=S(mo,[["render",bo],["__scopeId","data-v-25debea7"]]),ho=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:go});const yo={};function $o(e,t){const o=u("router-view");return r(),b(o)}var So=S(yo,[["render",$o],["__scopeId","data-v-0a4514ad"]]),wo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:So});const Co={},xo={class:"index"};function To(e,t){return r(),h("div",xo,"\u8FD9\u662F\u9000\u51FA\u9875\u9762")}var Io=S(Co,[["render",To],["__scopeId","data-v-1957e968"]]),ko=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Io});const Mo={};function Fo(e,t){const o=u("router-view");return r(),b(o)}var Lo=S(Mo,[["render",Fo],["__scopeId","data-v-6bae7ea6"]]),Oo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lo});const jo={},zo={class:"index"};function Eo(e,t){return r(),h("div",zo,"\u8FD9\u662F\u4E2A\u4EBA\u4FE1\u606F")}var No=S(jo,[["render",Eo],["__scopeId","data-v-a3d7792c"]]),Vo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:No});const Ao={class:"index"},Bo={setup(e){const{ctx:t}=ke();return console.log(t),(o,n)=>(r(),h("div",Ao,"\u8FD9\u662F\u4FEE\u6539\u5BC6\u7801\u9875\u9762"))}};var Ro=S(Bo,[["__scopeId","data-v-be076c52"]]),Uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ro});const qo={};function Do(e,t){const o=u("router-view");return r(),b(o)}var Ho=S(qo,[["render",Do],["__scopeId","data-v-31798278"]]),Po=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ho});const Jo={route:{meta:{auth:!0}}};function Go(e,t,o,n,s,_){return null}var Ko=S(Jo,[["render",Go],["__scopeId","data-v-3d56c6de"]]),Wo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ko});const Qo={};function Xo(e,t){return" \u8FD9\u662Findex-home-test2 "}var Yo=S(Qo,[["render",Xo],["__scopeId","data-v-5d1c30d0"]]),Zo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yo});const es={class:"index"},ts={setup(e){return(t,o)=>(r(),h("div",es," \u8FD9\u662Flist\u91CC\u9762\u7684index "))}};var ns=S(ts,[["__scopeId","data-v-050c272e"]]),os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ns});const ss={"../views/admin/index.vue":pn,"../views/auth/forgot.vue":$n,"../views/auth/index.vue":xn,"../views/auth/login.vue":Fn,"../views/auth/regist.vue":En,"../views/index/index.vue":Bn,"../views/index/test.vue":Hn,"../views/test/index.vue":Kn,"../views/test/Init.vue":eo,"../views/admin/home/home.vue":lo,"../views/admin/home/index.vue":uo,"../views/admin/home/test.vue":ho,"../views/admin/system/index.vue":wo,"../views/admin/system/loginout.vue":ko,"../views/admin/user/index.vue":Oo,"../views/admin/user/info.vue":Vo,"../views/admin/user/password.vue":Uo,"../views/index/home/index.vue":Po,"../views/index/home/test.vue":Wo,"../views/index/home/test2.vue":Zo,"../views/index/list/index.vue":os},P=[];function as(){const e=Object.entries(ss);return e.forEach(([t,o])=>{let n={};const s=t.split("/");if(s.length===3){const _=s[2].split(".")[0];n.path=`/${_}`,n.name=_,n.children=[],n.component=o.default,o.default.route!=null&&Object.assign(n,o.default.route),P.push(n)}else if(s.length>3){t=t.replace("../views/",""),t=t.split("/");const _=t.length;let d=[],m=P;t.forEach((g,v)=>{if(n={},v==_-1){let f=g.split(".")[0];d.push(f),n.name=d.join("-"),n.path=f,n.component=o.default,o.default.route!=null&&Object.assign(n,o.default.route),m.push(n),d=[],m=P}else if(d.push(g),v==0){let f=m.findIndex((y,l)=>y.path==`/${g}`);if(f==-1){n.path=`/${g}`,n.name=d.join("-"),n.children=[];const y="../views/"+d.join("/")+"/index.vue",l=e.findIndex(function(w){return w[0]==y});l!=-1&&(n.component=e[l][1].default),m.push(n),f=m.length-1}m=m[f].children}else{let f=m.findIndex((y,l)=>y.path==`${g}`);if(f==-1){n.path=`${g}`,n.name=d.join("-"),n.children=[];const y="../views/"+d.join("/")+"/index.vue",l=e.findIndex(function(w){return w[0]==y});l!=-1&&(n.component=e[l][1].default),m.push(n),f=m.length-1}m=m[f].children}})}}),P}var rs=as();function ls(e="token"){return localStorage.getItem(e)||sessionStorage.getItem(e)||!1}function is(e){return!!e.meta.auth}function _s(e){e.beforeEach((t,o)=>{if(is(t)&&!ls())return{path:"/auth/login"}})}const cs=[{path:"/",redirect:"/admin/home"},...rs],ge=Ve({history:Ae(),routes:cs});_s(ge);var de,me;const us=(me=(de=se())==null?void 0:de.navbarType)!=null?me:"\u5DE6\u4FA7\u83DC\u5355\u6A21\u5F0F";var ds={state:{navbarType:us,isCollapse:!1,activeMenu:""},mutations:{getNavbarType(e,t){e.navbarType=t},getCollapse(e,t){e.isCollapse=t},getActiveMenu(e,t){e.activeMenu=t}}};const ms={namespaced:!0,state:{title:"name is user"},getters:{title:e=>e.title},mutations:{test:(e,t)=>{e.title=t}},actions:{clickTest:e=>{e.commit("test","this is actios test")}}},vs={namespaced:!0,state:{title:"list"},getters:{},mutations:{test:()=>{console.log("456789")}},actions:{}},fs=new Be(q(U({},ds),{actions:{},modules:{user:ms,list:vs}})),K=Me(De);dn(K);K.use(ge);K.use(fs);K.mount("#app");
