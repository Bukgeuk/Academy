(this.webpackJsonpacademy=this.webpackJsonpacademy||[]).push([[0],{12:function(e,t,n){e.exports={Nav:"LectureNav_Nav__11DB8",LectureTitle:"LectureNav_LectureTitle__2BCoq",UnitTitle:"LectureNav_UnitTitle__3pHgM",opened:"LectureNav_opened__mlmp-",closed:"LectureNav_closed__3B0t4",SmallUnitTitle:"LectureNav_SmallUnitTitle__2H3bN",low:"LectureNav_low__jKXwh",selected:"LectureNav_selected__1pzoj"}},19:function(e,t,n){e.exports={Article:"Lecture_Article__2wM6j",LectureTitle:"Lecture_LectureTitle__3K8mz"}},23:function(e,t,n){e.exports={MenuBar:"Home_MenuBar__3hHUM",logo:"Home_logo__2wkbP",member:"Home_member__2EQhl",menu:"Home_menu__2gR6i",Article:"Home_Article__2Wk26",Title:"Home_Title__u1iJA",Container:"Home_Container__mjAk5",Item:"Home_Item__1_rUb"}},24:function(e,t,n){e.exports={MenuBar:"MenuBar_MenuBar__3skI-",logo:"MenuBar_logo__156N4",member:"MenuBar_member__1Ddiw",menu:"MenuBar_menu__35OVP"}},25:function(e,t,n){e.exports={MarkDownStyle:"MarkdownRenderer_MarkDownStyle__15-lI",InlineCodeStyle:"MarkdownRenderer_InlineCodeStyle__3kpe_",BlockQuoteStyle:"MarkdownRenderer_BlockQuoteStyle__2NhGo",allowDrag:"MarkdownRenderer_allowDrag__2y19_"}},32:function(e,t,n){e.exports={Footer:"Footer_Footer__2h_Np",Top:"Footer_Top__2QDGJ",FooterMenu:"Footer_FooterMenu__1ar1G"}},323:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(50),r=n.n(i),a=(n(73),n(17)),l=n(20),o=n(6),s=n(31),u=n.n(s),d=n(22),j=n.n(d),b=n(23),_=n.n(b),h=n(24),O=n.n(h),m=n(1),x=function(){var e=Object(o.f)();return Object(m.jsxs)("header",{id:O.a.MenuBar,children:[Object(m.jsxs)("div",{id:O.a.logo,onClick:function(){e.push("/")},children:[Object(m.jsx)("img",{src:"/img/logo_colored.png",alt:"\ub85c\uace0",onDragStart:function(e){e.preventDefault()}}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{children:"Dev Academy"})})]}),Object(m.jsx)("div",{id:O.a.menu,children:Object(m.jsx)("div",{children:Object(m.jsx)("span",{onClick:function(){e.push("/about")},children:"About"})})}),Object(m.jsx)("img",{src:"/img/member.png",alt:"\uba64\ubc84",id:O.a.member})]})},p=n(32),f=n.n(p),g=function(){return Object(m.jsx)("footer",{id:f.a.Footer,children:Object(m.jsxs)("div",{id:f.a.Top,children:[Object(m.jsx)("img",{src:"/img/logo_white.png",alt:"\ub85c\uace0"}),Object(m.jsxs)("div",{className:f.a.FooterMenu,children:[Object(m.jsx)("div",{children:Object(m.jsx)("span",{children:"\uc774\uc6a9\uc57d\uad00"})}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{children:"\uac1c\uc778\uc815\ubcf4 \ucde8\uae09\ubc29\uce68"})})]})]})})},v=function(e){var t=Object(o.f)();return Object(m.jsxs)("div",{className:_.a.Item,onClick:function(){t.push("/"+e.id)},children:[Object(m.jsx)("img",{src:"http://academyapi.bukgeuk.dev:3000"+"/lecture/image/".concat(e.id),alt:"\uc774\ubbf8\uc9c0",onDragStart:function(e){e.preventDefault()}}),Object(m.jsx)("div",{children:e.name})]})},N=function(e){var t=e.lectureList.map((function(e,t){return Object(m.jsx)(v,{id:t,name:e},t)}));return Object(m.jsxs)("section",{children:[Object(m.jsx)(x,{}),Object(m.jsxs)("article",{id:_.a.Article,children:[Object(m.jsx)("div",{id:_.a.Title,children:"\ub4f1\ub85d\ub41c \uac15\uc88c"}),Object(m.jsx)("div",{className:_.a.Container,children:t})]}),Object(m.jsx)(g,{})]})},k=n(53),T=n.n(k),L=n(12),w=n.n(L),M=function(e){var t=Object(o.f)(),n="".concat(w.a.SmallUnitTitle);return window.location.href.substr("".concat("http://academyapi.bukgeuk.dev:3000").length)===e.href&&(n+=" ".concat(w.a.selected)),Object(m.jsx)("div",{className:n,children:Object(m.jsx)("span",{onClick:function(){t.push(e.href)},children:e.smallUnitId+1+". "+e.smallUnit.name})})},A=function(e){var t=e.unit.children.map((function(t,n){return Object(m.jsx)(M,{smallUnit:t,href:"".concat(e.href,"/").concat(n),smallUnitId:n},n)}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:w.a.UnitTitle,onClick:function(){return e.toggleUnitTitleOpened(e.unitId)},children:[Object(m.jsx)("span",{children:"Unit "+(e.unitId+1)+". "+e.unit.name}),Object(m.jsx)("img",{src:"/img/right-arrow.png",alt:"\ub4dc\ub86d\ub2e4\uc6b4",className:e.isUnitTitleOpened[e.unitId]?w.a.opened:w.a.closed})]}),Object(m.jsx)("div",{className:w.a.low,children:e.isUnitTitleOpened[e.unitId]&&t})]})},y=function(e){if(void 0===e.lecture)return Object(m.jsx)("nav",{id:w.a.Nav});var t=e.lecture.children.map((function(t,n){return Object(m.jsx)(A,{unit:t,href:"".concat(e.href,"/").concat(n),size:e.lecture.children.length,unitId:n,toggleUnitTitleOpened:e.toggleUnitTitleOpened,isUnitTitleOpened:e.isUnitTitleOpened},n)}));return Object(m.jsxs)("nav",{id:w.a.Nav,children:[Object(m.jsxs)("div",{className:w.a.LectureTitle,onClick:function(){return e.toggleLectureTitleOpened()},children:[Object(m.jsx)("span",{children:e.lecture.name}),Object(m.jsx)("img",{src:"/img/right-arrow.png",alt:"\ub4dc\ub86d\ub2e4\uc6b4",className:e.isLectureTitleOpened?w.a.opened:w.a.closed})]}),Object(m.jsx)("div",{className:w.a.low,children:e.isLectureTitleOpened&&t})]})},S=n(13),B=n(66),U=n(64),D=n(65),I=n(332),C=n(331),F=n(25),H=n.n(F),X=["node","inline","className","children"],q=function(e){return Object(m.jsx)("span",{className:H.a.InlineCodeStyle,children:e.children})},E=function(e){return Object(m.jsx)("blockquote",{className:H.a.BlockQuoteStyle,children:e.children})},J=function(e){return Object(m.jsx)("div",{className:H.a.MarkDownStyle,children:Object(m.jsx)(U.a,{remarkPlugins:[D.a],components:{code:function(e){e.node;var t=e.inline,n=e.className,c=e.children,i=Object(B.a)(e,X);if(t)return Object(m.jsx)(q,{children:c});var r=/language-(\w+)/.exec(n||"");return r?Object(m.jsx)("div",{className:H.a.allowDrag,children:Object(m.jsx)(I.a,{children:String(c).replace(/\n$/,""),style:C.a,language:r[1],PreTag:"div"})}):Object(m.jsx)("code",Object(S.a)(Object(S.a)({className:n},i),{},{children:c}))},blockquote:function(e){var t=Object.assign({},e);return Object(m.jsx)(E,{children:t.children})}},children:e.children})})},P=n(19),Q=n.n(P),R=function(e){return Object(m.jsxs)("article",{id:Q.a.Article,children:[Object(m.jsx)("div",{id:Q.a.LectureTitle,children:Object(m.jsx)("span",{children:e.title})}),Object(m.jsx)(J,{children:e.article})]})},z=n(39),G=n.n(z),K=function(e){return Object(m.jsx)("div",{className:G.a.Description,children:Object(m.jsx)("span",{children:e.children})})},V=function(e){return Object(m.jsxs)("article",{id:Q.a.Article,children:[Object(m.jsx)("div",{id:Q.a.LectureTitle,children:Object(m.jsx)("span",{children:e.name})}),Object(m.jsx)("div",{id:G.a.Author,children:Object(m.jsx)("span",{children:"by "+e.author})}),e.description&&Object(m.jsx)(K,{children:e.description})]})};u.a.config();var W=function(){var e=Object(o.g)().path,t=window.location.href.substr("".concat("http://academyapi.bukgeuk.dev:3000").length+1).split("/").filter((function(e){return""!==e})),n=Number(t[0]),i=Number(t[1]),r=Number(t[2]),l=Object(c.useState)(),s=Object(a.a)(l,2),u=s[0],d=s[1],b=Object(c.useState)(""),_=Object(a.a)(b,2),h=_[0],O=_[1],p=Object(c.useState)(!0),f=Object(a.a)(p,2),v=f[0],N=f[1],k=Object(c.useState)(new Array(void 0===u?0:u.children.length).fill(!1)),L=Object(a.a)(k,2),w=L[0],M=L[1];Object(c.useEffect)((function(){j.a.get("http://academyapi.bukgeuk.dev:3000"+"/lecture/".concat(n)).then((function(e){M(new Array(e.data.children.length).fill(!1)),d(e.data)}))}),[n]),Object(c.useEffect)((function(){t.length>1&&j.a.get("http://academyapi.bukgeuk.dev:3000"+"/lecture/".concat(n,"/").concat(i,"/").concat(r)).then((function(e){O(e.data)}))}),[n,t.length,r,i]);return Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{}),Object(m.jsxs)("section",{id:T.a.Section,children:[Object(m.jsx)(y,{lecture:u,href:"/".concat(n),toggleLectureTitleOpened:function(){N(!v)},isLectureTitleOpened:v,toggleUnitTitleOpened:function(e){var t=w.slice();t[e]=!t[e],M(t)},isUnitTitleOpened:w}),Object(m.jsx)(o.a,{exact:!0,path:e,component:function(){return u?Object(m.jsx)(V,{name:u.name,author:u.author,description:u.description}):Object(m.jsx)("div",{})}}),Object(m.jsx)(o.a,{path:e+"/:uid/:suid",component:function(){if(u){var e=u.children[i].children[r].name;return e?Object(m.jsx)(R,{title:e,article:h}):Object(m.jsx)("div",{})}return Object(m.jsx)("div",{})}})]}),Object(m.jsx)(g,{})]})},Z=n(62),$=n.n(Z),Y=function(){return Object(m.jsxs)("article",{id:$.a.Article,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/img/code_thinking.svg",alt:"404"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"404"}),Object(m.jsx)("span",{children:"\uc694\uccad\ud558\uc2e0 \ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"})]})]})},ee=(n(323),n(63)),te=n.n(ee),ne=function(){return Object(m.jsxs)("section",{children:[Object(m.jsx)(x,{}),Object(m.jsx)("article",{id:te.a.Article}),Object(m.jsx)(g,{})]})};u.a.config();var ce=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){j.a.get("http://academyapi.bukgeuk.dev:3000/lecture").then((function(e){i(e.data)}))}),[]),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(l.a,{basename:"",children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(m.jsx)(N,{lectureList:n})}}),Object(m.jsx)(o.a,{path:"/about",component:ne}),Object(m.jsx)(o.a,{path:"/:id",component:W}),Object(m.jsx)(o.a,{component:Y})]})})})};r.a.render(Object(m.jsx)(ce,{}),document.getElementById("root"))},39:function(e,t,n){e.exports={LectureTitle:"LectureContent_LectureTitle__2XSyH",Author:"LectureContent_Author__UXym4",Description:"LectureContent_Description__1BNyL"}},53:function(e,t,n){e.exports={MenuBar:"Lecture_MenuBar__19olv",logo:"Lecture_logo__1qvTp",member:"Lecture_member__1_Xt8",menu:"Lecture_menu__-aiFz",Section:"Lecture_Section__3dH6H"}},62:function(e,t,n){e.exports={MenuBar:"NotFound_MenuBar__1lKwq",logo:"NotFound_logo__3ZXSh",member:"NotFound_member__285n9",menu:"NotFound_menu__3PLCo",Article:"NotFound_Article__Di6dk"}},63:function(e,t,n){e.exports={MenuBar:"About_MenuBar__3SMJ0",logo:"About_logo__2sXkO",member:"About_member__2MT8I",menu:"About_menu__3OHgx",Article:"About_Article__2FvI6"}},73:function(e,t,n){}},[[324,1,2]]]);
//# sourceMappingURL=main.a2ec8669.chunk.js.map