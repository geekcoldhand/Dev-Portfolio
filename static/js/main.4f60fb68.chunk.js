(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=(a(13),a(15),a(1));var o=function(){return l.a.createElement("nav",{className:"navigation"},l.a.createElement("menu",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#projects"}," ",l.a.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"30px",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}))," ","Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},l.a.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"30px",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))," ","Story")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},l.a.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"30px",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}))," ","Contact")))))};var s=function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(o,null)))};function m(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){var e=0,t=setInterval(function(){r("Hi, Horatious here".slice(0,e)),++e>"Hi, Horatious here".length&&clearInterval(t)},100);return function(){return clearInterval(t)}},[]),l.a.createElement("section",{className:"hero"},l.a.createElement(s,null),l.a.createElement("div",{className:"hello-box jumbotron d-flex"},l.a.createElement("div",{className:"intro d-flex justify-content-center"},l.a.createElement("div",{className:"name"},a))))}function d(e){var t=e.projectCards,a=Object(n.useRef)(null);return Object(n.useEffect)(function(){var e=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(e.target.classList.remove("hide-card"),e.target.classList.add("show-card"))})});return e.observe(a.current),function(){e.unobserve(a.current)}},[]),l.a.createElement("div",{id:"card-list",className:"cardList",key:t.key,ref:a},t.map(function(e){return l.a.createElement("div",{className:"cards-box"},l.a.createElement("div",{className:"my-card card py-5"},l.a.createElement("button",{className:"card-button p-1",href:e.gitLink},l.a.createElement("div",{className:"repo-icon "},l.a.createElement("svg",{className:"button-svg w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"})))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title text-center"},e.projectName),l.a.createElement("div",{className:"site-icon",id:"icon"},e.logoImg),l.a.createElement("p",{className:"card-text-box-p"},e.descript),l.a.createElement("hr",null),l.a.createElement("p",{className:"card-text"}," xxxx | xxx | xxxx "))))}))}function u(){var e=Object(n.useState)([{projectName:"WhO's App",logoImg:"\ud83e\udd89",demoGif:"../../public/img/demos/Who's App.demo.gif",gitLink:"https://github.com/geekcoldhand/Whos-App",siteLink:"https://whooooos-app.herokuapp.com/login",descript:"Real-time chatting application",id:1223},{projectName:"Wine N Dine",logoImg:"\ud83c\udf77",demoGif:"../../",gitLink:"https://github.com/parsonjd/Wine-Dine",siteLink:"https://parsonjd.github.io/Wine-Dine/",descript:"Food & Cocktail filter search",id:23344},{projectName:"Weather Wheel",logoImg:"\u2600\ufe0f",demoGif:"../../public/img/demos/Weather-Wheel-Demo.gif",gitLink:"https://github.com/geekcoldhand/Weather-Color-Wheel",siteLink:"https://geekcoldhand.github.io/Weather-Color-Wheel/",descript:"Open weather API",id:34322},{projectName:"Two-Due",logoImg:"\ud83d\udcc5",demoGif:"../../public/img/demos/two-due.gif",gitLink:"https://github.com/geekcoldhand/TwoDue-Task-Manager",siteLink:"https://geekcoldhand.github.io/TwoDue-Task-Manager/",descript:"A simple TODO application",id:45432},{projectName:"Dynamic JS Quiz",logoImg:"\ud83d\udcdd",demoGif:"../../public/img/demos/Js-quiz.gif",gitLink:"https://github.com/geekcoldhand/js-dynamic-quiz",siteLink:"https://geekcoldhand.github.io/js-dynamic-quiz/",descript:"Timed javascript quiz",id:56343}]),t=Object(i.a)(e,2),a=t[0];t[1];return l.a.createElement("section",{id:"projects",className:"space-section all-projects d-flex justify-content-center"},l.a.createElement("h2",{class:"space-section"}," ",l.a.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"30px",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})),"Projects"),l.a.createElement(d,{key:a.id,projectCards:a}))}function h(){return l.a.createElement("footer",null,l.a.createElement("ul",{className:"footerLinksList"},l.a.createElement("li",null,l.a.createElement("a",{className:"bi bi-github",href:"https://github.com/geekcoldhand"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/horatious-harris-ii-41970a159/"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://stackoverflow.com/users/3412616/horatious-harris"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-stack-overflow",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"}),l.a.createElement("path",{d:"M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"}))))))}function p(){return l.a.createElement("section",{id:"about",className:"space-section about"},l.a.createElement("div",{className:""},l.a.createElement("h2",{className:" space-section"}," ",l.a.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"30px",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})),"About"),l.a.createElement("div",{className:"about-box mt-4 p-2"},l.a.createElement("p",{className:"pr-3"},"I'm a software engineer and designer based in Atlanta. focused on computer networking, API consumption, integration, full-stack development, IoT devices, and everything in between. Additionally, I am a designer and tailor. My desgins inspiration stems from many similarites I observe in technical and fashion design; allowing me to bridge the gap for dynamiclly sophistocated tailored garments.",l.a.createElement("div",{className:" d-flex justify-content-center"},l.a.createElement("ul",{className:"tools mr-3 ml-3"},l.a.createElement("span",null," Tools"),l.a.createElement("li",null,"VS Code"),l.a.createElement("li",null,"Git/Github"),l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"React.js")),l.a.createElement("ul",{className:"tech mr-3 ml-3"},l.a.createElement("span",null,"Tech"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"Html/Css"),l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"SQL/NoSQL")))),l.a.createElement("div",{className:"about-img-figure"},l.a.createElement("img",{src:"/img/me.png",className:"my-about-img",alt:"photographed me"})))))}var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(u,null),l.a.createElement(p,null),l.a.createElement(h,null))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)))},4:function(e,t,a){e.exports=a(17)}},[[4,2,1]]]);
//# sourceMappingURL=main.4f60fb68.chunk.js.map