!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r,o,_,l,u,i={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n){var r,o,_,l=arguments,u={};for(_ in t)"key"==_?r=t[_]:"ref"==_?o=t[_]:u[_]=t[_];if(arguments.length>3)for(n=[n],_=3;_<arguments.length;_++)n.push(l[_]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===u[_]&&(u[_]=e.defaultProps[_]);return d(e,u,r,o,null)}function d(e,t,n,o,_){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_};return null==_&&(l.__v=l),null!=r.vnode&&r.vnode(l),l}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function b(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!g.__r++||l!==r.debounceRendering)&&((l=r.debounceRendering)||_)(g)}function g(){for(var e;g.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,o,_,l,u;e.__d&&(l=(_=(t=e).__v).__e,(u=t.__P)&&(n=[],(r=f({},_)).__v=r,o=C(u,_,r,t.__n,void 0!==u.ownerSVGElement,null,n,null==l?y(_):l),j(n,_),o!=l&&m(_)))}))}function k(e,t,n,r,o,_,l,u,a,f){var p,v,m,b,g,k,S,x=r&&r.__k||c,P=x.length;for(a==i&&(a=null!=l?l[0]:P?y(r,0):null),n.__k=[],p=0;p<t.length;p++)if(null!=(b=n.__k[p]=null==(b=t[p])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?d(null,b,null,null,b):Array.isArray(b)?d(h,{children:b},null,null,null):null!=b.__e||null!=b.__c?d(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=x[p])||m&&b.key==m.key&&b.type===m.type)x[p]=void 0;else for(v=0;v<P;v++){if((m=x[v])&&b.key==m.key&&b.type===m.type){x[v]=void 0;break}m=null}g=C(e,b,m=m||i,o,_,l,u,a,f),(v=b.ref)&&m.ref!=v&&(S||(S=[]),m.ref&&S.push(m.ref,null,b),S.push(v,b.__c||g,b)),null!=g?(null==k&&(k=g),a=w(e,b,m,x,l,g,a),f||"option"!=n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&m.__e==a&&a.parentNode!=e&&(a=y(m))}if(n.__e=k,null!=l&&"function"!=typeof n.type)for(p=l.length;p--;)null!=l[p]&&s(l[p]);for(p=P;p--;)null!=x[p]&&H(x[p],x[p]);if(S)for(p=0;p<S.length;p++)E(S[p],S[++p],S[++p])}function w(e,t,n,r,o,_,l){var u,i,c;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(o==n||_!=l||null==_.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(_),u=null;else{for(i=l,c=0;(i=i.nextSibling)&&c<r.length;c+=2)if(i==_)break e;e.insertBefore(_,l),u=l}return void 0!==u?u:_.nextSibling}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function x(e,t,n,r,o){var _,l;if(o&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style=n;else{if("string"==typeof r&&(e.style=r=""),r)for(t in r)n&&t in n||S(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||S(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(_=t!==(t=t.replace(/Capture$/,"")),(l=t.toLowerCase())in e&&(t=l),t=t.slice(2),e.l||(e.l={}),e.l[t]=n,n?r||e.addEventListener(t,P,_):e.removeEventListener(t,P,_)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function P(e){this.l[e.type](r.event?r.event(e):e)}function A(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&A(o,t,n),t=w(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function C(e,t,n,o,_,l,u,i,c){var a,s,p,d,y,m,b,g,w,S,x,P=t.type;if(void 0!==t.constructor)return null;(a=r.__b)&&a(t);try{e:if("function"==typeof P){if(g=t.props,w=(a=P.contextType)&&o[a.__c],S=a?w?w.props.value:a.__:o,n.__c?b=(s=t.__c=n.__c).__=s.__E:("prototype"in P&&P.prototype.render?t.__c=s=new P(g,S):(t.__c=s=new v(g,S),s.constructor=P,s.render=N),w&&w.sub(s),s.props=g,s.state||(s.state={}),s.context=S,s.__n=o,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=P.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=f({},s.__s)),f(s.__s,P.getDerivedStateFromProps(g,s.__s))),d=s.props,y=s.state,p)null==P.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(g,S),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(g,s.__s,S)||t.__v===n.__v){s.props=g,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,s.__h.length&&u.push(s),A(t,i,e);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(g,s.__s,S),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,y,m)}))}s.context=S,s.props=g,s.state=s.__s,(a=r.__r)&&a(t),s.__d=!1,s.__v=t,s.__P=e,a=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(o=f(f({},o),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(m=s.getSnapshotBeforeUpdate(d,y)),x=null!=a&&a.type==h&&null==a.key?a.props.children:a,k(e,Array.isArray(x)?x:[x],t,n,o,_,l,u,i,c),s.base=t.__e,s.__h.length&&u.push(s),b&&(s.__E=s.__=null),s.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,_,l,u,c);(a=r.diffed)&&a(t)}catch(e){t.__v=null,r.__e(e,t,n)}return t.__e}function j(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function O(e,t,n,r,o,_,l,u){var a,f,s,p,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=_)for(a=0;a<_.length;a++)if(null!=(f=_[a])&&((null===t.type?3===f.nodeType:f.localName===t.type)||e==f)){e=f,_[a]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),_=null,u=!1}if(null===t.type)h!==v&&e.data!==v&&(e.data=v);else{if(null!=_&&(_=c.slice.call(e.childNodes)),s=(h=n.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=_)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in t||x(e,_,null,n[_],r);for(_ in t)o&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||x(e,_,t[_],n[_],r)})(e,v,h,o,u),p?t.__k=[]:(a=t.props.children,k(e,Array.isArray(a)?a:[a],t,n,r,"foreignObject"!==t.type&&o,_,l,i,u)),u||("value"in v&&void 0!==(a=v.value)&&a!==e.value&&x(e,"value",a,h.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==e.checked&&x(e,"checked",a,h.checked,!1))}return e}function E(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function H(e,t,n){var o,_,l;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,t)),n||"function"==typeof e.type||(n=null!=(_=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&H(o[l],t,n);null!=_&&s(_)}function N(e,t,n){return this.constructor(e,n)}function T(e,t,n){var o,_,l;r.__&&r.__(e,t),_=(o=n===u)?null:n&&n.__k||t.__k,e=p(h,null,[e]),l=[],C(t,(o?t:n||t).__k=e,_||i,i,void 0!==t.ownerSVGElement,n&&!o?[n]:_?null:t.childNodes.length?c.slice.call(t.childNodes):null,l,n||i,o),j(l,e)}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return b(n.__E=n)}catch(t){e=t}throw e}},v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=h,o=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,u=i;let M={data:""},L=e=>{try{let t=e?e.querySelector("#_goober"):self._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}catch(e){}return e||M},D=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,U=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,F=(e,t,n)=>{let r,o="",_="",l="";for(let u in e){let i=e[u];"object"==typeof i?(r=t.replace(/([^,])+/g,"$& "+u)||u,/&/g.test(u)&&(r=u.replace(/&/g,t)),_+="@"==u[0]?"f"==u[1]?F(i,u):u+"{"+F(i,"k"==u[1]?"":t)+"}":F(i,r,n)):"@"==u[0]&&"i"==u[1]?o=u+" "+i+";":l+=F.p?F.p(u.replace(/[A-Z]/g,"-$&").toLowerCase(),i):u.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+i+";"}return l[0]?(r=t+"{"+l+"}",n?_+n+"{"+("@"==n[0]?r:t+l)+"}":o+r+_):o+_},z={},W=e=>{let t="";for(let n in e)t+=n+("object"==typeof e[n]?W(e[n]):e[n]);return t},I=(e,t,n,r)=>{let o=e.toLowerCase?e:W(e),_=z[o]||(z[o]="go"+o.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));return((e,t,n)=>{t.data.indexOf(e)<0&&(t.data=n?e+t.data:t.data+e)})(z[_]||(z[_]=F(e[0]?(e=>{let t,n=[{}];for(;t=D.exec(e.replace(U,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]})(e):e,n?"":"."+_)),t,r),_},$=(e,t,n)=>e.reduce((e,r,o)=>{let _=t[o];if(_&&_.call){let e=_(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;_=t?"."+t:e&&e.props?"":e}return e+r+(null==_?"":_)},"");function q(e){let t=this||{},n=e.call?e(t.p):e;return I(n.map?$(n,[].slice.call(arguments,1),t.p):n,L(t.target),t.g,t.o)}var B="#b3e5fc",R="#29b6f6",G="#0288d1";function V(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n\tbody {\n\t\tmargin: 0;\n\t\tbackground: ",";\n\t}\n"]);return V=function(){return e},e}q.bind({g:1})(V(),B);var Z,J,K,Q=0,X=[],Y=r.__r,ee=r.diffed,te=r.__c,ne=r.unmount;function re(e,t){r.__h&&r.__h(J,e,Q||t),Q=0;var n=J.__H||(J.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function oe(e){return Q=1,function(e,t,n){var r=re(Z++,2);return r.t=e,r.__c||(r.__c=J,r.__=[n?n(t):ce(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}]),r.__}(ce,e)}function _e(){X.some((function(e){if(e.__P)try{e.__H.__h.forEach(ue),e.__H.__h.forEach(ie),e.__H.__h=[]}catch(t){return e.__H.__h=[],r.__e(t,e.__v),!0}})),X=[]}r.__r=function(e){Y&&Y(e),Z=0;var t=(J=e.__c).__H;t&&(t.__h.forEach(ue),t.__h.forEach(ie),t.__h=[])},r.diffed=function(e){ee&&ee(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==X.push(t)&&K===r.requestAnimationFrame||((K=r.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),le&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);le&&(t=requestAnimationFrame(n))})(_e))},r.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ue),e.__h=e.__h.filter((function(e){return!e.__||ie(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],r.__e(n,e.__v)}})),te&&te(e,t)},r.unmount=function(e){ne&&ne(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ue)}catch(e){r.__e(e,t.__v)}};var le="function"==typeof requestAnimationFrame;function ue(e){"function"==typeof e.u&&e.u()}function ie(e){e.u=e.__()}function ce(e,t){return"function"==typeof t?t(e):t}function ae(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n\tcolor: #fff;\n\tcursor: pointer;\n\tborder: 0;\n\tborder-radius: 3px;\n\tbackground: ",";\n\n\t&::before {\n\t\tcontent: '🐶';\n\t}\n"]);return ae=function(){return e},e}var fe=q(ae(),G);function se(e){var t=e.label,n=e.onClick;return p("button",{type:"button",class:fe,onClick:n},t)}function pe(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n\t","\n\tbackground: ",";\n\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"]);return pe=function(){return e},e}var de=q(pe(),"\n\tmax-width: 900px;\n\tmargin: 0 auto;\n\tpadding: 20px;\n\n\t@media( max-width: 600px ) {\n\t\tpadding: 10px;\n\t}\n",R,G);function he(){return p("div",{class:de},"block")}function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,_=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,_=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw _}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function me(){var e=ve(oe(!1),2),t=e[0],n=e[1];return p("div",null,p(se,{label:"ぼたｎ",onClick:function(){return n(!t)}}),t&&p(he,null))}T(p((function(){return p("div",null,p(me,null))}),null),document.getElementById("app"))}]);