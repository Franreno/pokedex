(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),a=n(4651),s=n(7426);var l={};function c(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=a.useRouter(),f=i.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?u.resolveHref(o,e.as):a||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var m=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),O=r(w,2),L=O[0],S=O[1],E=i.default.useCallback((function(e){L(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,L]);i.default.useEffect((function(){var e=S&&n&&u.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&c(o,d,p,{locale:t})}),[p,d,S,b,n,o]);var P={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:a}))}(e,o,d,p,v,y,g,b)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:o&&o.locale,k=o&&o.isLocaleDomain&&u.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);P.href=k||u.addBasePath(u.addLocale(p,C,o&&o.defaultLocale))}return i.default.cloneElement(t,P)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,s=o.useRef(),l=o.useState(!1),c=r(l,2),f=c[0],d=c[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,u=r.elements;return u.set(e,t),i.observe(e),function(){u.delete(e),i.unobserve(e),0===u.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!u&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),i=n(3447),u="undefined"!==typeof IntersectionObserver;var a=new Map},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},7761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7294),i=a(o),u=a(n(5697));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.scrollListener=n.scrollListener.bind(n),n.eventListenerOptions=n.eventListenerOptions.bind(n),n.mousewheelListener=n.mousewheelListener.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(n){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,n=this.getParentElement(e),r=void 0;if(this.props.useWindow){var o=document.documentElement||document.body.parentNode||document.body,i=void 0!==t.pageYOffset?t.pageYOffset:o.scrollTop;r=this.props.isReverse?i:this.calculateOffset(e,i)}else r=this.props.isReverse?n.scrollTop:e.scrollHeight-n.scrollTop-n.clientHeight;r<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=n.scrollHeight,this.beforeScrollTop=n.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),n=t.children,r=t.element,o=t.hasMore,u=(t.initialLoad,t.isReverse),a=t.loader,s=(t.loadMore,t.pageStart,t.ref),l=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));l.ref=function(t){e.scrollComponent=t,s&&s(t)};var c=[n];return o&&(a?u?c.unshift(a):c.push(a):this.defaultLoader&&(u?c.unshift(this.defaultLoader):c.push(this.defaultLoader))),i.default.createElement(r,l,c)}}]),t}(o.Component);s.propTypes={children:u.default.node.isRequired,element:u.default.node,hasMore:u.default.bool,initialLoad:u.default.bool,isReverse:u.default.bool,loader:u.default.node,loadMore:u.default.func.isRequired,pageStart:u.default.number,ref:u.default.func,getScrollParent:u.default.func,threshold:u.default.number,useCapture:u.default.bool,useWindow:u.default.bool},s.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=s,e.exports=t.default},246:function(e,t,n){e.exports=n(7761)},8575:function(e,t,n){"use strict";n.d(t,{ZP:function(){return W},g_:function(){return V}});var r=n(7294),o=Object.prototype.hasOwnProperty;var i=new WeakMap,u=0;var a=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):i.has(e[n])?r=i.get(e[n]):(r=u,i.set(e[n],u++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),s=!0,l={isOnline:function(){return s},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){s=!0,e()}),!1),window.addEventListener("offline",(function(){return s=!1}),!1))}},c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=new a;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),p=c({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,o){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&o.retryCount>n.errorRetryCount)){var i=Math.min(o.retryCount,8),u=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,u,o)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(o.call(t,r)&&++i&&!o.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},l),h="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),v=h?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},y=h?r.useEffect:r.useLayoutEffect,g=(0,r.createContext)({});g.displayName="SWRConfigContext";var b=g,m=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(t){i(t)}}function a(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},O={},L={},S={},E={},P={},C={},k={},R=function(){var e=0;return function(){return++e}}();if(!h){var M=function(e){if(p.isDocumentVisible()&&p.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof p.registerOnFocus&&p.registerOnFocus((function(){return M(S)})),"function"===typeof p.registerOnReconnect&&p.registerOnReconnect((function(){return M(E)}))}var T=function(e,t){void 0===t&&(t=!0);var n=f.serializeKey(e),r=n[0],o=n[2],i=n[3];if(!r)return Promise.resolve();var u=P[r];if(r&&u){for(var a=f.get(r),s=f.get(o),l=f.get(i),c=[],d=0;d<u.length;++d)c.push(u[d](t,a,s,l,d>0));return Promise.all(c).then((function(){return f.get(r)}))}return Promise.resolve(f.get(r))},j=function(e,t,n,r){var o=P[e];if(e&&o)for(var i=0;i<o.length;++i)o[i](!1,t,n,r)},x=function(e,t,n){return void 0===n&&(n=!0),m(void 0,void 0,void 0,(function(){var r,o,i,u,a,s,l,c,d,p,h,v,y;return w(this,(function(g){switch(g.label){case 0:if(r=f.serializeKey(e),o=r[0],i=r[2],!o)return[2];if("undefined"===typeof t)return[2,T(e,n)];if(C[o]=R()-1,k[o]=0,u=C[o],a=L[o],c=!1,t&&"function"===typeof t)try{t=t(f.get(o))}catch(b){t=void 0,l=b}if(!t||"function"!==typeof t.then)return[3,5];c=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return s=g.sent(),[3,4];case 3:return d=g.sent(),l=d,[3,4];case 4:return[3,6];case 5:s=t,g.label=6;case 6:if((p=function(){if(u!==C[o]||a!==L[o]){if(l)throw l;return!0}})())return[2,s];if("undefined"!==typeof s&&f.set(o,s),f.set(i,l),k[o]=R()-1,!c&&p())return[2,s];if(h=P[o]){for(v=[],y=0;y<h.length;++y)v.push(h[y](!!n,s,l,void 0,y>0));return[2,Promise.all(v).then((function(){if(l)throw l;return f.get(o)}))]}if(l)throw l;return[2,s]}}))}))};Object.defineProperty(b.Provider,"default",{value:p});b.Provider;var I=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=t[0],i=Object.assign({},p,(0,r.useContext)(b),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:i.fetcher,a=f.serializeKey(o),s=a[0],l=a[1],c=a[2],d=a[3],g=(0,r.useRef)(i);y((function(){g.current=i}));var M=function(){return i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount},T=function(){var e=f.get(s);return"undefined"===typeof e?i.initialData:e},I=function(){return!!f.get(d)||s&&M()},_=T(),z=f.get(c),D=I(),V=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),W=(0,r.useRef)({data:_,error:z,isValidating:D});(0,r.useDebugValue)(W.current.data);var A,H,K=(0,r.useState)({})[1],N=(0,r.useCallback)((function(e){var t=!1;for(var n in e)W.current[n]!==e[n]&&(W.current[n]=e[n],V.current[n]&&(t=!0));if(t){if(F.current||!q.current)return;K({})}}),[]),F=(0,r.useRef)(!1),U=(0,r.useRef)(s),q=(0,r.useRef)(!1),Y=(0,r.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];F.current||q.current&&s===U.current&&(t=g.current)[e].apply(t,n)}),[s]),G=(0,r.useCallback)((function(e,t){return x(U.current,e,t)}),[]),Z=function(e,t){return e[s]?e[s].push(t):e[s]=[t],function(){var n=e[s],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},B=(0,r.useCallback)((function(t){return void 0===t&&(t={}),m(e,void 0,void 0,(function(){var e,n,r,o,a,p,h,v,y,b;return w(this,(function(m){switch(m.label){case 0:if(!s||!u)return[2,!1];if(F.current)return[2,!1];if(g.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,o=void 0!==r&&r,a=!0,p="undefined"!==typeof O[s]&&o,m.label=1;case 1:return m.trys.push([1,6,,7]),N({isValidating:!0}),f.set(d,!0),p||j(s,W.current.data,W.current.error,!0),h=void 0,v=void 0,p?(v=L[s],[4,O[s]]):[3,3];case 2:return h=m.sent(),[3,5];case 3:return i.loadingTimeout&&!f.get(s)&&setTimeout((function(){a&&Y("onLoadingSlow",s,i)}),i.loadingTimeout),O[s]=null!==l?u.apply(void 0,l):u(s),L[s]=v=R(),[4,O[s]];case 4:h=m.sent(),setTimeout((function(){delete O[s],delete L[s]}),i.dedupingInterval),Y("onSuccess",h,s,i),m.label=5;case 5:return L[s]>v?[2,!1]:C[s]&&(v<=C[s]||v<=k[s]||0===k[s])?(N({isValidating:!1}),[2,!1]):(f.set(c,void 0),f.set(d,!1),y={isValidating:!1},"undefined"!==typeof W.current.error&&(y.error=void 0),i.compare(W.current.data,h)||(y.data=h),i.compare(f.get(s),h)||f.set(s,h),N(y),p||j(s,h,y.error,!1),[3,7]);case 6:return b=m.sent(),delete O[s],delete L[s],g.current.isPaused()?(N({isValidating:!1}),[2,!1]):(f.set(c,b),W.current.error!==b&&(N({isValidating:!1,error:b}),p||j(s,void 0,b,!1)),Y("onError",b,s,i),i.shouldRetryOnError&&Y("onErrorRetry",b,s,i,B,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[s]);if(y((function(){if(s){F.current=!1;var e=q.current;q.current=!0;var t=W.current.data,n=T();U.current=s,i.compare(t,n)||N({data:n});var r=function(){return B({dedupe:!0})};(e||M())&&("undefined"===typeof n||h?r():v(r));var o=!1,u=Z(S,(function(){!o&&g.current.revalidateOnFocus&&(o=!0,r(),setTimeout((function(){return o=!1}),g.current.focusThrottleInterval))})),a=Z(E,(function(){g.current.revalidateOnReconnect&&r()})),l=Z(P,(function(e,t,n,o,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},s=!1;return"undefined"===typeof t||i.compare(W.current.data,t)||(a.data=t,s=!0),W.current.error!==n&&(a.error=n,s=!0),"undefined"!==typeof o&&W.current.isValidating!==o&&(a.isValidating=o,s=!0),s&&N(a),!!e&&(u?r():B())}));return function(){N=function(){return null},F.current=!0,u(),a(),l()}}}),[s,B]),y((function(){var t=null,n=function(){return m(e,void 0,void 0,(function(){return w(this,(function(e){switch(e.label){case 0:return W.current.error||!g.current.refreshWhenHidden&&!g.current.isDocumentVisible()||!g.current.refreshWhenOffline&&!g.current.isOnline()?[3,2]:[4,B({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return g.current.refreshInterval&&t&&(t=setTimeout(n,g.current.refreshInterval)),[2]}}))}))};return g.current.refreshInterval&&(t=setTimeout(n,g.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,B]),i.suspense){if(A=f.get(s),H=f.get(c),"undefined"===typeof A&&(A=_),"undefined"===typeof H&&(H=z),"undefined"===typeof A&&"undefined"===typeof H){if(O[s]||B(),O[s]&&"function"===typeof O[s].then)throw O[s];A=O[s]}if("undefined"===typeof A&&H)throw H}var $=(0,r.useMemo)((function(){var e={revalidate:B,mutate:G};return Object.defineProperties(e,{error:{get:function(){return V.current.error=!0,i.suspense?H:U.current===s?W.current.error:z},enumerable:!0},data:{get:function(){return V.current.data=!0,i.suspense?A:U.current===s?W.current.data:_},enumerable:!0},isValidating:{get:function(){return V.current.isValidating=!0,!!s&&W.current.isValidating},enumerable:!0}}),e}),[B,_,z,G,s,i.suspense,H,A]);return $},_=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(t){i(t)}}function a(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},z=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function V(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=t[0],i=Object.assign({},p,(0,r.useContext)(b),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]?t[1]:i.fetcher,a=i.initialSize,s=void 0===a?1:a,l=i.revalidateAll,c=void 0!==l&&l,d=i.persistSize,h=void 0!==d&&d,v=D(i,["initialSize","revalidateAll","persistSize"]),g=null;try{g=f.serializeKey(o(0,null))[0]}catch(T){}var m=(0,r.useState)({})[1],w=null;g&&(w="ctx@"+g);var O=null;g&&(O="len@"+g);var L=(0,r.useRef)(!1),S=(0,r.useCallback)((function(){var e=f.get(O);return"undefined"!==typeof e?e:s}),[O,s]),E=(0,r.useRef)(S());y((function(){L.current?f.set(O,h?E.current:s):L.current=!0}),[g]);var P=(0,r.useRef)(),C=I(g?["inf",g]:null,(function(){return _(e,void 0,void 0,(function(){var e,t,n,r,a,s,l,d,p,h,v;return z(this,(function(y){switch(y.label){case 0:e=f.get(w)||{},t=e.data,n=e.force,r=[],a=S(),s=null,l=0,y.label=1;case 1:return l<a?(d=f.serializeKey(o(l,s)),p=d[0],h=d[1],p?(v=f.get(p),c||n||"undefined"===typeof v||"undefined"===typeof n&&0===l&&"undefined"!==typeof P.current||t&&!i.compare(t[l],v)?null===h?[3,3]:[4,u.apply(void 0,h)]:[3,6]):[3,8]):[3,8];case 2:return v=y.sent(),[3,5];case 3:return[4,u(p)];case 4:v=y.sent(),y.label=5;case 5:f.set(p,v),y.label=6;case 6:r.push(v),s=v,y.label=7;case 7:return++l,[3,1];case 8:return f.delete(w),[2,r]}}))}))}),v);y((function(){P.current=C.data}),[C.data]);var k=(0,r.useCallback)((function(e,t){if(void 0===t&&(t=!0),t&&"undefined"!==typeof e){var n=P.current;f.set(w,{data:n,force:!1})}else t&&f.set(w,{force:!0});return C.mutate(e,t)}),[w]),R=(0,r.useCallback)((function(e){var t;return"function"===typeof e?t=e(S()):"number"===typeof e&&(t=e),"number"===typeof t&&(f.set(O,t),E.current=t),m({}),k((function(e){return e}))}),[O,S,k,m]),M={size:S(),setSize:R,mutate:k};return Object.defineProperties(M,{error:{get:function(){return C.error},enumerable:!0},data:{get:function(){return C.data},enumerable:!0},revalidate:{get:function(){return C.revalidate},enumerable:!0},isValidating:{get:function(){return C.isValidating},enumerable:!0}}),M}var W=I},5785:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);