var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&i(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&i(e,s,t[s]);return e},c=(e,a)=>t(e,s(a));try{self["workbox:core:6.1.5"]&&_()}catch(F){}const l=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class h extends Error{constructor(e,t){super(l(e,t)),this.name=e,this.details=t}}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},p=e=>[u.prefix,e,u.suffix].filter((e=>e&&e.length>0)).join("-"),d=e=>e||p(u.precache),f=e=>e||p(u.runtime);function g(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(F){}function y(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),n=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:n.href}}class m{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class w{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let v;async function b(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new h("cross-origin-copy-response",{origin:s});const a=e.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(n):n,i=function(){if(void 0===v){const t=new Response("");if("body"in t)try{new Response(t.body),v=!0}catch(e){v=!1}v=!1}return v}()?a.body:await a.blob();return new Response(i,r)}function R(e,t){const s=new URL(e);for(const a of t)s.searchParams.delete(a);return s.href}class C{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const j=new Set;try{self["workbox:strategies:6.1.5"]&&_()}catch(F){}function L(e){return"string"==typeof e?new Request(e):e}class U{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new C,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=L(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(r){throw new h("plugin-error-request-will-fetch",{thrownError:r})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:n.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=L(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=o(o({},n),{cacheName:a});s=await caches.match(r,i);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await o({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=L(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const n=await this.getCacheKey(s,"write");if(!t)throw new h("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:l,matchOptions:u}=this._strategy,p=await self.caches.open(l),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,a){const n=R(t.url,s);if(t.url===n)return e.match(t,a);const r=c(o({},a),{ignoreSearch:!0}),i=await e.keys(t,r);for(const o of i)if(n===R(o.url,s))return e.match(o,a)}(p,n.clone(),["__WB_REVISION__"],u):null;try{await p.put(n,d?i.clone():i)}catch(g){throw"QuotaExceededError"===g.name&&await async function(){for(const e of j)await e()}(),g}for(const o of this.iterateCallbacks("cacheDidUpdate"))await o({cacheName:l,oldResponse:f,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=L(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=c(o({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class q{constructor(e={}){this.cacheName=f(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new U(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new h("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(o){r=o}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class k extends q{constructor(e={}){e.cacheName=d(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(k.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!(await t.cachePut(e,s.clone())))throw new h("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==k.copyRedirectedCacheableResponsesPlugin&&(a===k.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(k.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}k.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},k.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await b(e):e};class I{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new k({cacheName:d(e),plugins:[...t,new w({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=y(s),n="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,n),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return g(e,(async()=>{const t=new m;this.strategy.plugins.push(t);for(const[n,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(n),a=new Request(n,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return g(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=o({cacheKey:t},s.params),this.strategy.handle(s))}}let P;const K=()=>(P||(P=new I),P);try{self["workbox:routing:6.1.5"]&&_()}catch(F){}const T=e=>e&&"object"==typeof e?e:{handle:e};class x{constructor(e,t,s="GET"){this.handler=T(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=T(e)}}class S extends x{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class N{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:s,request:e,event:t,params:n})}catch(h){c=Promise.reject(h)}const l=r&&r.catchHandler;return c instanceof Promise&&(this._catchHandler||l)&&(c=c.catch((async a=>{if(l)try{return await l.handle({url:s,request:e,event:t,params:n})}catch(r){a=r}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,T(e))}setCatchHandler(e){this._catchHandler=T(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new h("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let O;function E(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);a=new x((({url:e})=>e.href===n.href),t,s)}else if(e instanceof RegExp)a=new S(e,t,s);else if("function"==typeof e)a=new x(e,t,s);else{if(!(e instanceof x))throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return(O||(O=new N,O.addFetchListener(),O.addCacheListener()),O).registerRoute(a),a}class M extends x{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function W(e){K().precache(e)}const A={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};var D;self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),W([...["/_app/start-bbeace96.js","/_app/assets/start-a8cd1609.css","/_app/pages/__layout.svelte-b7d78403.js","/_app/assets/pages/__layout.svelte-ad86439f.css","/_app/error.svelte-e254b435.js","/_app/pages/index.svelte-05f1da87.js","/_app/assets/pages/index.svelte-b170537a.css","/_app/pages/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md-d2da79a1.js","/_app/pages/scuola/Italiano/Età-del-realismo-e-del-positivismo.md-5617caa1.js","/_app/pages/scuola/Italiano/L-architettura-del-Novecento.md-9ed9b34d.js","/_app/pages/scuola/Italiano/Il-romanzo-del-Novecento.md-25ba411e.js","/_app/pages/scuola/Italiano/L-evoluzione-del-romanzo.md-94428b89.js","/_app/pages/scuola/Italiano/Età-del-decadentismo.md-91382210.js","/_app/pages/scuola/Italiano/Gabriele-DAnnunzio.md-7379ed72.js","/_app/pages/scuola/Italiano/Giuseppe-Ungaretti.md-fba7e0c4.js","/_app/pages/scuola/Italiano/Giovanni-Pascoli.md-717c8dff.js","/_app/pages/scuola/Italiano/I-promessi-sposi.md-8f796381.js","/_app/pages/scuola/Italiano/Luigi-Pirandello.md-5e72ae55.js","/_app/pages/scuola/Italiano/Giovanni-Verga.md-71d868b7.js","/_app/pages/scuola/Italiano/Il-naturalismo.md-d9661ed9.js","/_app/pages/scuola/Italiano/Il-Novecento.md-6b757c42.js","/_app/pages/scuola/Italiano/Italo-Svevo.md-c675f120.js","/_app/pages/scuola/Italiano/Il-verismo.md-f209959b.js","/_app/pages/scuola/Italiano.svelte-84da65ab.js","/_app/pages/scuola/Storia/Il-mondo-del-dopoguerra.md-5096fd1c.js","/_app/pages/scuola/Storia/Seconda-guerra-mondiale.md-51688882.js","/_app/pages/scuola/Storia/Genocidio-degli-Armeni.md-df4d637b.js","/_app/pages/scuola/Storia/Preparativi-di-guerra.md-15dd24c0.js","/_app/pages/scuola/Storia/Prima-guerra-mondiale.md-37eb3cb4.js","/_app/pages/scuola/Storia/Italia-repubblicana.md-3e7e7ccb.js","/_app/pages/scuola/Storia/La-decolonizzazione.md-d6988784.js","/_app/pages/scuola/Storia/L-età-di-Giolitti.md-c44993da.js","/_app/pages/scuola/Storia/Rivoluzione-Russa.md-90cde78c.js","/_app/pages/scuola/Storia/Sistemi-economici.md-ca0ff459.js","/_app/pages/scuola/Storia/Venti-di-guerra.md-35cd1236.js","/_app/pages/scuola/Storia/Crisi-del-29.md-9f084544.js","/_app/pages/scuola/Storia/Il-Novecento.md-25d19c81.js","/_app/pages/scuola/Storia/Il-Fascismo.md-c9debda6.js","/_app/pages/scuola/Storia/Il-nazismo.md-624a7e3d.js","/_app/pages/scuola/Storia.svelte-875a53c0.js","/_app/pages/scuola.svelte-ffe5f3af.js","/_app/pages/About.svelte-a12afb4f.js","/_app/assets/pages/About.svelte-9b1330ce.css","/_app/chunks/vendor-ce374a0d.js","/_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js","/_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css","/_app/chunks/index-b4e920e1.js","/_app/chunks/jason-7c8ff622.js"].map((e=>({url:e,revision:null}))),...["/favicon.png","/manifest.webmanifest","/pencil-512x512.png","/robots.txt"].map((e=>({url:e,revision:"1656061102027"})))]),function(e){const t=K();E(new M(t,e))}(D);const H=["/","/scuola"];W(H.map((e=>({url:e,revision:"1656061102027"}))));E((({url:e,request:t,event:s})=>H.some((t=>e.pathname===t))),new class extends q{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(A)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));let a,n=await t.cacheMatch(e);if(n);else try{n=await s}catch(r){a=r}if(!n)throw new h("no-response",{url:e.url,error:a});return n}}({}));
