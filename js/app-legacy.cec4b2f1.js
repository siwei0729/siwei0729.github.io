(function(){"use strict";var e={5536:function(e,t,r){r(6992),r(8674),r(9601),r(7727),r(4916),r(5306);var n=r(9963),a=r(6252),o=r(3577),i=(0,a._)("i",{"data-feather":"chevron-up"},null,-1);function l(e,t,r,l,d,u){var s=(0,a.up)("AppHeader"),c=(0,a.up)("router-view"),m=(0,a.up)("back-to-top"),p=(0,a.up)("AppFooter");return(0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)([e.appTheme,"pt-0.5"])},[(0,a.Wm)(s),(0,a.Wm)(n.uT,{name:"fade",mode:"out-in"},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{theme:e.appTheme},null,8,["theme"])]})),_:1}),(0,a.Wm)(m,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,a.w5)((function(){return[i]})),_:1}),(0,a.Wm)(p)],2)}var d=r(8508),u=r.n(d),s={id:"nav",class:"sm:container sm:mx-auto"},c={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},m={class:"flex justify-between items-center px-4 sm:px-0"},p={class:"sm:hidden"},h={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},f={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},g={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},v={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"};function y(e,t,r,n,o,i){var l=(0,a.up)("theme-switcher"),d=(0,a.up)("AppHeaderLinks"),u=(0,a.up)("HireMeModal");return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("div",c,[(0,a._)("div",m,[(0,a.Wm)(l,{theme:o.theme,onThemeChanged:i.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,a._)("div",p,[(0,a._)("button",{onClick:t[0]||(t[0]=function(e){return o.isOpen=!o.isOpen}),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,a.wg)(),(0,a.iD)("svg",h,[o.isOpen?((0,a.wg)(),(0,a.iD)("path",f)):(0,a.kq)("",!0),o.isOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("path",g))]))])])]),(0,a.Wm)(d,{showModal:i.showModal,isOpen:o.isOpen},null,8,["showModal","isOpen"]),(0,a._)("div",v,[(0,a.Wm)(l,{theme:o.theme,onThemeChanged:i.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])]),(0,a.Wm)(u,{showModal:i.showModal,modal:o.modal,categories:o.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}var b={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},w={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function x(e,t,r,o,i,l){return(0,a.wg)(),(0,a.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,n.iM)((function(){return l.toggleTheme&&l.toggleTheme.apply(l,arguments)}),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,a.wg)(),(0,a.iD)("i",b)):((0,a.wg)(),(0,a.iD)("i",w))])}var k={props:{theme:{type:String,required:!0}},methods:{toggleTheme:function(){var e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},_=r(3744);const C=(0,_.Z)(k,[["render",x]]);var T=C,j=(r(8309),function(e){return(0,a.dD)("data-v-9dee52b8"),e=e(),(0,a.Cn)(),e}),M={class:"font-general-regular fixed inset-0 z-30"},S={class:"flex flex-col items-center justify-center h-full w-full"},O={class:"modal-wrapper flex items-center z-30"},A={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},D={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},E=j((function(){return(0,a._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," What project are you looking for? ",-1)})),H=j((function(){return(0,a._)("i",{"data-feather":"x"},null,-1)})),W=[H],q={class:"modal-body p-5 w-full h-full"},N={class:"max-w-xl m-4 text-left"},z=j((function(){return(0,a._)("div",{class:"mt-0"},[(0,a._)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})],-1)})),B=j((function(){return(0,a._)("div",{class:"mt-6"},[(0,a._)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})],-1)})),F={class:"mt-6"},I={class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category"},L=["value"],P=j((function(){return(0,a._)("div",{class:"mt-6"},[(0,a._)("textarea",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"})],-1)})),Z={class:"mt-6 pb-4 sm:pb-1"},U={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};function K(e,t,r,i,l,d){var u=(0,a.up)("Button");return(0,a.wg)(),(0,a.j4)(n.uT,{name:"fade"},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",M,[(0,a.wy)((0,a._)("div",{onClick:t[0]||(t[0]=function(e){return r.showModal()}),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[n.F8,r.modal]]),(0,a._)("main",S,[(0,a.Wm)(n.uT,{name:"fade-up-down"},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",O,[(0,a._)("div",A,[(0,a._)("div",D,[E,(0,a._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=function(e){return r.showModal()})},W)]),(0,a._)("div",q,[(0,a._)("form",N,[z,B,(0,a._)("div",F,[(0,a._)("select",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.categories,(function(e){return(0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.value},(0,o.zw)(e.name),9,L)})),128))])]),P,(0,a._)("div",Z,[(0,a.Wm)(u,{title:"Send Request",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",type:"submit","aria-label":"Submit Request"})])])]),(0,a._)("div",U,[(0,a.Wm)(u,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",onClick:t[2]||(t[2]=function(e){return r.showModal()}),"aria-label":"Close Modal"})])])],512),[[n.F8,r.modal]])]})),_:1})])],512),[[n.F8,r.modal]])]})),_:1})}function R(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("button",null,(0,o.zw)(r.title),1)}var V={props:["title"],data:function(){return{}}};const Y=(0,_.Z)(V,[["render",R]]);var $=Y,G={props:["showModal","modal","categories"],components:{Button:$},data:function(){return{}},mounted:function(){u().replace()},updated:function(){u().replace()},methods:{}};const X=(0,_.Z)(G,[["render",K],["__scopeId","data-v-9dee52b8"]]);var J=X;function Q(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},null,2)}var ee={props:["showModal","isOpen"]};const te=(0,_.Z)(ee,[["render",Q]]);var re=te,ne={components:{ThemeSwitcher:T,HireMeModal:J,AppHeaderLinks:re},data:function(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"mobile",name:"Mobile Application"},{id:3,value:"ui-ux",name:"UI/UX Design"},{id:4,value:"branding",name:"Branding & Anim"}]}},created:function(){this.theme=localStorage.getItem("theme")||"light"},mounted:function(){u().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme:function(e){this.theme=e},showModal:function(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated:function(){u().replace()}};const ae=(0,_.Z)(ne,[["render",y],["__scopeId","data-v-29cedd84"]]);var oe=ae,ie={class:"container mx-auto"},le={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"};function de(e,t,r,n,o,i){var l=(0,a.up)("FooterCopyright");return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("div",le,[(0,a.Wm)(l)])])}var ue={class:"flex justify-center items-center text-center"},se={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},ce={href:"https://github.com/realstoman/vuejs-tailwindcss-portfolio",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"},me=(0,a.Uk)(" . Developed by "),pe={href:"https://stoman.me",target:"__blank",class:"font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"};function he(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("div",ue,[(0,a._)("div",se,[(0,a.Uk)(" © "+(0,o.zw)(e.copyrightDate)+". ",1),(0,a._)("a",ce,(0,o.zw)(e.projectName),1),me,(0,a._)("a",pe,(0,o.zw)(e.author),1)])])}var fe={data:function(){return{copyrightDate:(new Date).getFullYear(),projectName:"Vue.js & Tailwind CSS Portfolio",author:"Stoman"}}};const ge=(0,_.Z)(fe,[["render",he]]);var ve=ge,ye={components:{FooterCopyright:ve},data:function(){return{socials:[{id:1,name:"GitHub",icon:"github",url:"https://github.com/realstoman"},{id:2,name:"Twitter",icon:"twitter",url:"https://twitter.com/realstoman"},{id:3,name:"Medium",icon:"book",url:"https://stoman.medium.com"},{id:4,name:"Instagram",icon:"instagram",url:"https://instagram.com/realstoman"}]}},mounted:function(){u().replace()},updated:function(){u().replace()}};const be=(0,_.Z)(ye,[["render",de]]);var we=be,xe={components:{AppHeader:oe,AppFooter:we},data:function(){return{appTheme:localStorage.getItem("theme")}},mounted:function(){u().replace()},updated:function(){u().replace()}};const ke=(0,_.Z)(xe,[["render",l]]);var _e=ke,Ce=(r(1539),r(8783),r(3948),r(9826),r(7042),r(1249),r(1038),r(4747),r(7941),r(2119)),Te=[{path:"/",name:"Home",component:function(){return r.e(443).then(r.bind(r,2449))},meta:{title:"Chen Siwei's Homepage"}},{path:"/about",name:"About",component:function(){return r.e(443).then(r.bind(r,2449))},meta:{title:"Chen Siwei's Homepage"}}],je=(0,Ce.p7)({history:(0,Ce.PO)("/"),routes:Te,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),Me=je;je.beforeEach((function(e,t,r){var n=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),o=t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(n?document.title=n.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!a)return r();a.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),r()}));var Se=r(617),Oe=r(8508);Oe.replace(),(0,n.ri)(_e).use(Me).use(Se.Z).mount("#app");var Ae=localStorage.getItem("theme");"dark"===Ae&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],o=e[s][2];for(var l=!0,d=0;d<n.length;d++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[d])}))?n.splice(d--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about-legacy.75eba56f.js"}}(),function(){r.miniCssF=function(e){return"css/about.01d3c504.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-tailwindcss-portfolio:";r.l=function(n,a,o,i){if(e[n])e[n].push(a);else{var l,d;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+o){l=c;break}}l||(d=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[a];var m=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),d&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,a.parentNode.removeChild(a),n(d)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return a();e(n,l,a,o)}))},a={143:0};r.f.miniCss=function(e,t){var r={443:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var i=r.p+r.u(t),l=new Error,d=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}};r.l(i,d,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],l=n[1],d=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(d)var s=d(r)}for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},n=self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(5536)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.cec4b2f1.js.map