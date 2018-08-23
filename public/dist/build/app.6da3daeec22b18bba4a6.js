!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="public/dist/build/",t(t.s=3)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.utils=n.Router=n.Component=void 0;var r=i(t(5)),a=i(t(9)),o=i(t(14));function i(e){return e&&e.__esModule?e:{default:e}}n.Component=r.default,n.Router=a.default,n.utils=o.default},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(t(12)),a=o(t(13));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){var e=location.hash,n=e,t="",o="";if(n.includes("?")){var i=n.split("?");if(n=i[0],""!==(t=i[1].replace(/\//g,""))){for(var s={},d=t.split("&"),l=0;l<d.length;l++){var u=d[l].split("="),c=u[0],f=u[1];s[c]=f}o=s}}return n=n.endsWith("/")&&!n.endsWith("#/")?n.slice(0,-1).replace("#",""):n.replace("#",""),{hash:e.replace("#",""),path:n,search:t,query:o,set:r.default,get:a.default}};n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new r.default;return'\n    <nav class="navbar">\n      '+(n?t.Render():"")+'\n      <span class="navbar__title">'+e+'</span>\n      <ol class="navbar__links">\n        <li class="navbar__links__li navbar__links__li--homepage">\n          <b><a href="#/" title="Homepage">DOMR</a></b>\n        </li>\n        <li class="navbar__links__li navbar__links__li--github">\n          <a href="https://github.com/siddacool/domr-framework" title="Github Repo" target="_blank" rel="noopener">\n            <svg role="img" data-id="full" class="icon">\n              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-github-1"></use>\n            </svg>\n          </a>\n        </li>\n        <li class="navbar__links__li navbar__links__li--npm">\n          <a href="https://www.npmjs.com/package/domr-framework" title="NPM Package" target="_blank" rel="noopener">\n            <svg role="img" data-id="full" class="icon">\n              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-npm-svg-icon"></use>\n            </svg>\n          </a>\n        </li>\n      </ol>\n    </nav>\n  '};var r=function(e){return e&&e.__esModule?e:{default:e}}(t(18))},function(e,n,t){"use strict";t(4),t(28)},function(e,n,t){"use strict";var r=t(0),a=function(e){return e&&e.__esModule?e:{default:e}}(t(15));new r.Router(a.default).Start()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(6)),a=i(t(7)),o=i(t(8));function i(e){return e&&e.__esModule?e:{default:e}}n.default=class{constructor(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"domr-component";this.createElement=r.default,this.domrid=n+"-"+(0,o.default)(7),this.target=function(){return(0,a.default)(e.domrid)},this.GetThisComponent=this.target,this.GetDomrID=this.domrid,this.handlingParent=document.querySelector("body")}errorHandler(e,n){var t="_ "+e+": "+n;this.ErrorLog(t)}ErrorLog(e){}Markup(){return""}deligateEvents(e,n,t){var r=this;this.handlingParent.addEventListener(n,function(n){var a=n;if(a.target){if(a.target.matches(e))return a.closest=!1,void t(a.target,a);if(a.target.closest(e))return a.closest=!0,a.closestDomrId=r.domrid,a.closestElm=e,void t(a.target.closest(e),a)}})}On(e,n){this.deligateEvents('[data-domr-id="'+this.domrid+'"]',e,n)}Click(e){this.On("click",e)}Mouseover(e){this.On("mouseover",e)}Mouseout(e){this.On("mouseout",e)}Input(e){this.On("input",e)}Blur(e){this.On("blur",e)}Keydown(e){this.On("keydown",e)}Keypress(e){this.On("keypress",e)}Keyup(e){this.On("keyup",e)}Events(){}AfterRenderDone(){}delayedContent(){var e=this;setTimeout(function(){e.target()&&e.AfterRenderDone()},50)}optimizedDom(){return this.Events(),this.createElement(this.Markup(),this.domrid)}Render(){return this.delayedContent(),this.optimizedDom()}AddTo(e){e?(e.insertAdjacentHTML("beforeend",this.optimizedDom()),this.delayedContent()):this.errorHandler("AddTo","parent not found")}AddFromStartTo(e){e?(e.insertAdjacentHTML("afterbegin",this.optimizedDom()),this.delayedContent()):this.errorHandler("AddFromStartTo","parent not found")}Before(e){e?(e.insertAdjacentHTML("beforebegin",this.optimizedDom()),this.delayedContent()):this.errorHandler("Before","sibling not found")}After(e){e?(e.insertAdjacentHTML("afterend",this.optimizedDom()),this.delayedContent()):this.errorHandler("After","sibling not found")}Replace(e){if(e){var n=e.parentElement;n?(e.insertAdjacentHTML("afterend",this.optimizedDom()),n.removeChild(e),this.delayedContent()):this.errorHandler("Replace","sibling has no parentElement")}else this.errorHandler("Replace","sibling not found")}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=document.createElement("div");t.innerHTML=e;for(var r=document.createDocumentFragment(),a=0;a<t.childNodes.length;a++){var o=t.childNodes[a].cloneNode(!0);r.appendChild(o)}return n&&r.childNodes[1].setAttribute("data-domr-id",n),r.childNodes[1].outerHTML}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=document.querySelector('[data-domr-id="'+e+'"]');if(n)return n}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;return Math.random().toString(36).substr(2,e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(t(10)),a=o(t(1));function o(e){return e&&e.__esModule?e:{default:e}}var i={routes:[],config:{refreshPage:!1}};n.default=class{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.routes,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.config;this.routes=function(e){var n=[];return e.forEach(function(e){e.path&&e.view&&n.push(e)}),n}(e),this.refreshPage=n.refreshPage||!1,this.addView=r.default}ShowRoutes(){console.log(this.routes)}reloadOnHashChange(){var e=this;addEventListener("hashchange",function(n){e.refreshPage?location.reload():(e.Start(),n.stopImmediatePropagation())})}Start(){var e=(0,a.default)(),n=e.path,t=void 0;if(""===n&&(location.hash="#/"),this.routes.forEach(function(r){var a=r.path;a.endsWith("/")&&"/"!==a&&(a=a.slice(0,-1));var o=[],i=a.replace(/([:*])(\w+)/g,function(e,n,t){return o.push(t),"([^/]+)"})+"(?:/|$)",s=n.match(new RegExp(i));if(s){var d=s.slice(1,s.length).reduce(function(e,n,t){return null===e&&(e={}),e[o[t]]=n,e},null);r.metadata=d||"",r.query=e.query,t=r}}),t)this.addView(t);else{var r=this.routes.find(function(e){return!0===e.isDefault});r?this.addView(r):console.error("Page Not Found")}this.reloadOnHashChange()}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(t(11));n.default=function(e){var n=e.view,t=(0,r.default)(e,["view"]);e&&n&&"function"==typeof n&&n(t)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=["view"];n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,t={};return Object.keys(e).forEach(function(r){var a=e[r];(function(e,n){for(var t=0;t<e.length;t++)if(e[t]===n)return!0})(n,r)||(t[r]=a)}),t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(t(1));function a(e){var n=e;return n.startsWith("#")||(n="#"+n),n}function o(e){var n=e,t=(0,r.default)().path;return t.endsWith("/")&&(t=t.slice(0,-1)),n.startsWith("?")||(n="?"+n),n=a(t+"/"+n)}n.default=function(e,n){var t=n,i=void 0;switch(e){case"search":i=o(t);break;case"query":i=function(e){return o(function(e){var n=[];for(var t in e)n.push(t+"="+e[t]);return"?"+n.join("&")}(e))}(t);break;case"path":i=function(e){var n=(0,r.default)().search,t=e;return t.startsWith("#")&&(t=t.slice(0,-1)),n&&(t.endsWith("/")||(t+="/"),t=t+"?"+n),t=a(t)}(t);break;case"hash":i=a(t)}i?function(e){location.hash=e}(i):console.error("incorrect set location params")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(t(1));n.default=function(e){var n=(0,r.default)()[e];if(n)return n;console.error("incorrect get location params")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={hashLocation:function(e){return e&&e.__esModule?e:{default:e}}(t(1)).default};n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(t(16)),a=o(t(19));function o(e){return e&&e.__esModule?e:{default:e}}var i=[{path:"/",view:r.default,title:"homepage",isDefault:!0},{path:"/config/",view:a.default,title:"Get Started"},{path:"/config/:topic",view:a.default,title:"Get Started"}];n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=document.getElementById("wrapper"),n=new r.default;e.innerHTML=n.Render()};var r=function(e){return e&&e.__esModule?e:{default:e}}(t(17))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=function(e){return e&&e.__esModule?e:{default:e}}(t(2));n.default=class extends r.Component{constructor(){super()}Markup(){return'\n      <div class="home">\n        '+(0,a.default)()+'\n        <div class="container">\n          <h1>DOMR Framework</h1>\n          <p>Component based JavaScript micro framework equipped with a static router.</p>\n          <div class="code code--single">npm install domr-framework</div>\n          <a href="#/config" class="btn">Get Started</a>\n        </div>\n      </div>\n    '}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0);n.default=class extends r.Component{constructor(){super()}Markup(){return'\n      <a href="#" class="toggle active">\n        <svg role="img" data-id="full" class="icon">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-fast-food-1"></use>\n        </svg>\n        <svg role="img" data-id="empty" class="icon" style="display:none">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-fast-food-2"></use>\n        </svg>\n      </a>\n    '}Events(){this.Click(function(e,n){n.preventDefault();var t=e,r=t.parentElement.parentElement.querySelector(".sidebar"),a=t.querySelector('[data-id="full"]'),o=t.querySelector('[data-id="empty"]');t.classList.contains("active")?(r.style.display="none",a.style.display="none",o.style.display="",t.classList.remove("active")):(r.style.display="",a.style.display="",o.style.display="none",t.classList.add("active"))})}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=document.getElementById("wrapper"),t=e&&e.metadata&&e.metadata.topic?e.metadata.topic:"install",o=a.filter(function(e){return e.id===t}),i=0!==o.length?o[0].id:"install",s=new r.default(a,i);n.innerHTML=s.Render()};var r=function(e){return e&&e.__esModule?e:{default:e}}(t(20));var a=[{id:"install",name:"Install"},{id:"router",name:"Router"},{id:"view",name:"View"},{id:"component",name:"Component"},{id:"render",name:"Render Methods"}]},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=s(t(21)),o=s(t(22)),i=s(t(2));function s(e){return e&&e.__esModule?e:{default:e}}n.default=class extends r.Component{constructor(e,n){super(),this.arr=e,this.topic=n}Markup(){var e=(0,a.default)(this.arr,this.topic),n=o.default[this.topic];return'\n      <div class="config">\n        '+(0,i.default)("Getting Started..",!0)+"\n        "+e+'\n        <div class="description">\n          <div class="container">\n             '+n()+"\n          </div>\n        </div>\n      </div>\n    "}AfterRenderDone(){this.GetThisComponent().querySelectorAll("pre").forEach(function(e){var n=e.querySelector("code");n&&hljs.highlightBlock(n)})}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"install";return'\n    <ul class="sidebar">\n      '+e.map(function(e){return function(e,n){return'\n    <li><a href="#/config/'+e.id+'" '+(n===e.id?'class="active"':"")+">"+e.name+"</a></li>\n  "}(e,n)}).join("")+"\n    </ul>\n  "}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=d(t(23)),a=d(t(24)),o=d(t(25)),i=d(t(26)),s=d(t(27));function d(e){return e&&e.__esModule?e:{default:e}}n.default={install:r.default,router:a.default,view:o.default,component:i.default,render:s.default}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return'\n    <h2>Install</h2>\n\n    <p>Use <b>npm</b> or <b>yarn</b> to install domr-framework</p>\n    \n    <pre>\n    <code class="bash" style="max-width: 600px;">\n    npm install domr-framework --save\n    </code>\n    \n    <pre>\n    <code class="bash" style="max-width: 600px;">\n    yarn add domr-framework\n    </code>\n  '}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return"\n    <h2>Router</h2>\n\n    <p>A static router for creating hash routes.</p>\n    \n    <pre>\n    <code class=\"javascript\">\n    import { Router } from 'domr-framework';\n    import HomePageView from './views/HomePageView';\n    import ConfigView from './views/ConfigView';\n\n    const router = new Router([\n      {\n        path: '/',\n        view: HomePageView,\n        isDefault: true,\n      },\n      {\n        path: '/config/',\n        view: ConfigView,\n      },\n      {\n        path: '/config/:topic',\n        view: ConfigView,\n      },\n    ]);\n\n    router.Start();\n    </code>\n    </pre>\n    <p>Router supports wildcard entries like (*, :name)</p>\n\n\n    <h3>Router class</h3>\n\n    <p>\n      Router() class takes array of routes as the first parameter.\n      The routes object contains two main parameter and one optional isDefault parameter.\n      <ul>\n        <li><b>path</b> - hash url location</li>\n        <li><b>view</b> - a function to execute (without parentheses)</li>\n        <li><b>isDefault (optional)</b> - if set true then the route becomes the default path</li>\n      </ul>\n    </p>\n\n    <h3>.Start()</h3>\n\n    <p>\n      Initializes the router\n    </p>\n\n    <h3>Advanced Router class props</h3>\n    <pre>\n    <code class=\"javascript\">\n    ...\n\n    const router = new Router(routes, {\n      refreshPage: true,\n    });\n\n    ...\n    </code>\n    </pre>\n    <p>\n      Besides the first parameter i.e. the array of routes Router class also takes config obj as the second parameter.\n      <ul>\n        <li><b>refreshPage</b> - if set true then refresh the page on every hash change</li>\n      </ul>\n    </p>\n  "}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return'\n    <h2>View</h2>\n\n    <p>View is a function that executes when matching route is active.</p>\n    \n    <pre>\n    <code class="javascript">\n    import HomePageContainer from \'../containers/HomePageContainer\';\n\n    export default function (data) {\n      const wrapper = document.getElementById(\'wrapper\');\n      const home = new HomePageContainer();\n\n      wrapper.innerHTML = home.Render();\n    }\n    </code>\n    </pre>\n\n    <p>A view updates root HTML element (#wrapper in this case) with the markup of given <a href="#/config/component">Component</a></p>\n\n    <h3>data parameter</h3>\n    <p>a View takes data as an optional parameter</p>\n\n    <pre>\n    <code class="javascript">\n    console.log(data);\n\n    //output\n\n    {\n      path: "/",\n      metadata: "",\n      query: "",\n    }\n    </code>\n    </pre>\n\n    <p>data obj can have three diffrent params\n      <ul>\n        <li><b>path</b> - hash router path</li>\n        <li><b>metadata</b> - data from wild card entries (e.g :entry) if they are present</li>\n        <li><b>query</b> - data from query entries (e.g ?interval=300&active=true) if they are present</li>\n      </ul>\n    </p>\n  '}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return'\n    <h2>Component</h2>\n\n    <p>Component is a class with HTML markup and events attached to it.</p>\n  \n    <pre>\n    <code class="javascript">\n      import { Component } from \'domr-framework\';\n\n      export default class extends Component {\n        constructor(name) {\n          super();\n          this.name = name;\n        }\n\n        Markup() {\n          return `\n            < a href="#" class="toggle active">Toggle ${this.name} < /a>\n          `;\n        }\n\n        Events() {\n          this.On(\'click\', (self, e) => {\n            e.preventDefault();\n            const thisSelf = self;\n            console.log(thisSelf);\n          });\n        }\n\n        AfterRenderDone() {\n          const thisSelf = this.GetThisComponent();\n        }\n      }\n    </code>\n    </pre>\n\n    <h3>Markup()</h3>\n    <p>Markup hosts HTML Markup for the component</p>\n\n    <h3>Events() and this.On()</h3>\n    <p>Events can be added by attaching them to this.On() and placing it inside Events()</p>\n\n    <h3>AfterRenderDone()</h3>\n    <p>as the name suggest delayed actions like loading ajax api can be done from here</p>\n\n    <h3>GetThisComponent()</h3>\n    <p>gets the Component (via querySelector) inside AfterRenderDone()</p>\n\n    <h3>Simplified Common Events</h3>\n    <p>\n      Some commonly used events has their separate shorthands which can replaced this.On().\n    </p>\n\n    <pre>\n    <code class="javascript">\n    ...\n\n    Events() {\n      this.Click((self, e) => {});\n\n      this.Mouseover((self, e) => {});\n\n      this.Mouseout((self, e) => {});\n\n      this.Input((self, e) => {});\n\n      this.Blur((self, e) => {});\n\n      this.Keydown((self, e) => {});\n\n      this.Keypress((self, e) => {});\n\n      this.Keyup((self, e) => {});\n    }\n\n    ...\n    </code>\n    <pre>\n  '}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return"\n    <h2>Render</h2>\n\n    <p>To process a Component it has to be rendered. The Component can be rendered inside another Component or a view.</p>\n    <pre>\n    <code class=\"javascript\">\n    // Example of a view\n    import HomePageComponent from '../containers/HomePageComponent';\n\n    export default function (data) {\n      const wrapper = document.getElementById('wrapper');\n      const home = new HomePageContainer();\n\n      wrapper.innerHTML = home.Render();\n    }\n    </code>\n    </pre>\n    \n    <h3>.Render()</h3>\n    <p>.Render() is a the simpliest method of outputting a Component. It simply returns the content inside Markup()\n      and fires Events() and AfterRenderDone() related to the Component.\n    </p>\n\n\n    <h3>Add Methods</h3>\n    <p>There are various add methods which takes the target (parent/sibling) container as parameter and renders the component.</p>\n    \n    <pre>\n    <code class=\"javascript\">\n    ...\n\n    // wrapper is parent container\n    const wrapper = document.getElementById('wrapper');\n    const home = new HomePageContainer();\n    \n    home.AddTo(wrapper)\n\n    ...\n    </code>\n    </pre>\n\n    <p>\n      List of Add Methods\n\n      <table>\n        <tbody>\n          <tr>\n            <th>Method</th>\n            <th>Target</th>\n            <th>Action</th>\n          </tr>\n          <tr>\n            <td>.AddTo()</td>\n            <td>Parent Container</td>\n            <td>Appends into the parent</td>\n          </tr>\n          <tr>\n            <td>.AddFromStartTo()</td>\n            <td>Parent Container</td>\n            <td>Appends from start (prepend) into the parent</td>\n          </tr>\n          <tr>\n            <td>.Before()</td>\n            <td>Sibling Container</td>\n            <td>Renders before the sibling container</td>\n          </tr>\n          <tr>\n            <td>.After()</td>\n            <td>Sibling Container</td>\n            <td>Renders after the sibling container</td>\n          </tr>\n          <tr>\n            <td>.Replace()</td>\n            <td>Sibling Container</td>\n            <td>Replaces the sibling container</td>\n          </tr>\n        </tbody>\n      </table>\n    </p>\n  "}},function(e,n){}]);