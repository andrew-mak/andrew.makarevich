(()=>{var e={192:function(e){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,function(e,t,n){(function(t){for(var r=n(11),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var l=0,p=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}).call(this,n(4))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(1),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",f="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",y="CHANGE_CURSOR",g="PASTE_STRING",w="HTML_TAG";function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){var E=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),N(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),N(this,"setupWrapperElement",(function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))})),N(this,"start",(function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E})),N(this,"pause",(function(){return E.state.eventLoopPaused=!0,E})),N(this,"stop",(function(){return E.state.eventLoop&&(Object(r.cancel)(E.state.eventLoop),E.state.eventLoop=null),E})),N(this,"pauseFor",(function(e){return E.addEventToQueue(d,{ms:e}),E})),N(this,"typeOutAllStrings",(function(){return"string"==typeof E.options.strings?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach((function(e){E.typeString(e).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)})),E)})),N(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return E.typeOutHTMLString(e,t);if(e){var n=(E.options||{}).stringSplitter,r="function"==typeof n?n(e):e.split("");E.typeCharacters(r,t)}return E})),N(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?E.typeOutHTMLString(e,t,!0):(e&&E.addEventToQueue(g,{character:e,node:t}),E)})),N(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",E.addEventToQueue(v,{node:a,parentNode:t}),n?E.pasteString(s,a):E.typeString(s,a)):a.textContent&&(n?E.pasteString(a.textContent,t):E.typeString(a.textContent,t))}return E})),N(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return E.addEventToQueue(l,{speed:e}),E})),N(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return E.addEventToQueue(h,{speed:e}),E})),N(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return E.addEventToQueue(m,{delay:e}),E})),N(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return E.addEventToQueue(y,{cursor:e}),E})),N(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)E.addEventToQueue(c);return E})),N(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return E.addEventToQueue(f,{cb:e,thisArg:t}),E})),N(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){E.addEventToQueue(u,{character:e,node:t})})),E})),N(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){E.addEventToQueue(c)})),E})),N(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E.addEventToStateProperty(e,t,n,"eventQueue")})),N(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E.options.loop?E.addEventToStateProperty(e,t,n,"reverseCalledEvents"):E})),N(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return E.state[r]=n?[o].concat(T(E.state[r])):[].concat(T(E.state[r]),[o]),E})),N(this,"runEventLoop",(function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var e=Date.now(),t=e-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=T(E.state.calledEvents),E.state.calledEvents=[],E.options=b({},E.state.initialOptions)}if(E.state.eventLoop=o()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(e<E.state.pauseUntil)return;E.state.pauseUntil=null}var n,r=T(E.state.eventQueue),a=r.shift();if(!(t<=(n=a.eventName===p||a.eventName===c?"natural"===E.options.deleteSpeed?s(40,80):E.options.deleteSpeed:"natural"===E.options.delay?s(120,160):E.options.delay))){var i=a.eventName,S=a.eventArgs;switch(E.logInDevMode({currentEvent:a,state:E.state,delay:n}),i){case g:case u:var A=S.character,N=S.node,O=document.createTextNode(A),_=O;E.options.onCreateTextNode&&"function"==typeof E.options.onCreateTextNode&&(_=E.options.onCreateTextNode(A,O)),_&&(N?N.appendChild(_):E.state.elements.wrapper.appendChild(_)),E.state.visibleNodes=[].concat(T(E.state.visibleNodes),[{type:"TEXT_NODE",character:A,node:_}]);break;case c:r.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case d:var C=a.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(C);break;case f:var L=a.eventArgs,M=L.cb,x=L.thisArg;M.call(x,{elements:E.state.elements});break;case v:var k=a.eventArgs,D=k.node,P=k.parentNode;P?P.appendChild(D):E.state.elements.wrapper.appendChild(D),E.state.visibleNodes=[].concat(T(E.state.visibleNodes),[{type:w,node:D,parentNode:P||E.state.elements.wrapper}]);break;case l:var j=E.state.visibleNodes,R=S.speed,F=[];R&&F.push({eventName:h,eventArgs:{speed:R,temp:!0}});for(var Q=0,H=j.length;Q<H;Q++)F.push({eventName:p,eventArgs:{removingCharacterNode:!1}});R&&F.push({eventName:h,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,F);break;case p:var I=a.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var q=E.state.visibleNodes.pop(),U=q.type,Y=q.node,G=q.character;E.options.onRemoveNode&&"function"==typeof E.options.onRemoveNode&&E.options.onRemoveNode({node:Y,character:G}),Y&&Y.parentNode.removeChild(Y),U===w&&I&&r.unshift({eventName:p,eventArgs:{}})}break;case h:E.options.deleteSpeed=a.eventArgs.speed;break;case m:E.options.delay=a.eventArgs.delay;break;case y:E.options.cursor=a.eventArgs.cursor,E.state.elements.cursor.innerHTML=a.eventArgs.cursor}E.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(E.state.calledEvents=[].concat(T(E.state.calledEvents),[a]))),E.state.eventQueue=r,E.state.lastFrameTime=e}}})),t)if("string"==typeof t){var S=document.querySelector(t);if(!S)throw new Error("Could not find container element");this.state.elements.container=S}else this.state.elements.container=t;n&&(this.options=b(b({},this.options),n)),this.state.initialOptions=b({},this.options),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(y,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&A(t.prototype,n),e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,function(e,t,n){(function(t){(function(){var n,r,o,a,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),i=a-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(12))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],l=!1,p=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||s(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]).default}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(192);new(n.n(e)())("#typeEffect",{loop:!0}).pauseFor(2300).typeString("I'm Andrew Makarevich").pauseFor(2500).deleteAll().typeString("I'm Frontend Developer").pauseFor(2e3).start();const t=document.getElementById("submitBtn");t&&t.addEventListener("click",(()=>{const e=document.querySelector(".contact-form");e?(e.submit(),e.reset()):alert("unfortunately failed to send the message :(")}));const r=document.querySelector(".navbar-toggler"),o=document.querySelector(".navbar-items");let a;document.querySelector(".navbar-ul").addEventListener("click",(()=>{o&&o.classList.contains("toggleNav")&&o.classList.toggle("toggleNav")})),r.addEventListener("click",(()=>{o.classList.toggle("toggleNav")})),window.addEventListener("resize",(()=>{document.body.classList.add("resize-transition-stopper"),clearTimeout(a),a=setTimeout((()=>{document.body.classList.remove("resize-transition-stopper")}),1e3)})),window.addEventListener("scroll",(()=>{let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;document.querySelector(".navbar").style.display=e>=800?"block":"none"}))})()})();