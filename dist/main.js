(()=>{"use strict";var e={159:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(601),i=n.n(r),s=n(314),o=n.n(s)()(i());o.push([e.id,".section{\n    color: blue;\n}\n\n.project{\n color: orange\n}\n\n.task{\n color: rgb(0, 0, 0)\n}\n\n.no-hierarchy{\n color: red\n}\n\n.complete{\n    opacity: 50%;\n}\n\nbody{\n    background-color: white;\n}",""]);const a=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=s[l]||0,p="".concat(l," ").concat(d);s[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=i(h,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=n(s[o]);t[a].references--}for(var c=r(e,i),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t,n={},r=""){this.element="",this.type=e,this.parent=t,this.properties=n,this.content=r,this.add()}add(){let e=document.createElement(this.type);JSON.stringify("{}"!==this.properties)&&this.addProperties(e,this.properties),""!==this.content&&(e.textContent=this.content),this.parent&&this.parent.appendChild(e),this.element=e}addProperties(e,t){for(let n in t)e.setAttribute(`${n}`,t[n])}}class t{constructor(e,t="",n={},r=""){this.element="",this.type="button",this.parent=e,this.properties=n,this.content=r,this.clickfunction=t,this.add()}add(){let e=document.createElement(this.type);""!==this.clickfunction&&e.addEventListener("click",this.clickfunction),JSON.stringify("{}"!==this.properties)&&this.addProperties(e,this.properties),""!==this.content&&(e.textContent=this.content),this.parent&&this.parent.appendChild(e),this.element=e}addProperties(e,t){for(let n in t)e.setAttribute(`${n}`,t[n])}}function r(e){document.createElement("div"),e.forEach((e=>{i(e)}))}function i(t){let n=new e("div",document.querySelector("body")),r=(new e("div",n.element,{},t.title),[t.hierarchy,t.iscomplete]);!function(e,t){for(let n=0;n<t.length;n++)t[n]&&e.classList.add(t[n])}(n.element,r)}class s{constructor(e,t="no-parent"){this.title=e,this.hierarchy="no-hierarchy",this.parent=t}editTitle(e){this.title=e}editIsComplete(){switch(this.isComplete){case"incomplete":this.isComplete="complete";break;case"complete":this.isComplete="incomplete";break;default:console.log("something is wrong. . .")}}changeParent(e){this.parent=e}delete(){console.log("warning, deleting this will delete all nested bullets")}display(){console.table(this),i(this)}}class o extends s{constructor(e,t){super(e,t),this.hierarchy="task",this.isComplete="incomplete"}}var a=n(72),c=n.n(a),l=n(825),d=n.n(l),p=n(659),u=n.n(p),h=n(56),f=n.n(h),m=n(540),y=n.n(m),v=n(113),g=n.n(v),b=n(159),w={};w.styleTagTransform=g(),w.setAttributes=f(),w.insert=u().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=y(),c()(b.A,w),b.A&&b.A.locals&&b.A.locals,function(n){let r=new e("div",n,{class:"wrapper"}),i=new e("fieldset",r.element),s=new e("div",i.element),a=(new e("input",s.element,{type:"radio",name:"select-task-or-section",id:"radio-task",value:"task"}),new e("label",s.element,{for:"task"},"Task"),new e("div",i.element)),c=(new e("input",a.element,{type:"radio",name:"select-task-or-section",id:"radio-section",value:"section"}),new e("label",a.element,{for:"section"},"Section"),new e("input",r.element,{type:"text",placeholder:"Name"}));new e("textarea",r.element,{placeholder:"details"}),new t(r.element,(function(){new o(c.element.value).display(),c.element.value=""}),{},"add new")}(document.querySelector("body")),console.log("hello");let k=new class extends s{constructor(e,t){super(e,t),this.hierarchy="project",this.taskArray=[],this.sectionArray=[]}addExistingTask(e){e.changeParent(this.title),this.taskArray.includes(e)||this.taskArray.push(e)}addExistingSection(e){e.changeParent(this.title),this.sectionArray.includes(e)||this.sectionArray.push(e)}displayArray(){console.table(this.sectionArray),r(this.taskArray),console.table(this.taskArray),r(this.sectionArray)}}("my tasks"),A=new class extends s{constructor(e,t){super(e,t),this.hierarchy="section",this.taskArray=[]}addExistingTask(e){e.changeParent(this.title),this.taskArray.push(e)}displayArray(){console.table(this.taskArray),r(this.taskArray)}}("things to do today"),x=new o("wipe ass");x.editIsComplete();let C=new o("wash hands");k.addExistingTask(x),A.addExistingTask(C),k.addExistingSection(A),k.display(),k.displayArray(),A.displayArray()})()})();