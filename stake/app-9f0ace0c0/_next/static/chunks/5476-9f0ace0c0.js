(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5476],{75132:function(e,t){"use strict";var n,r,a,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return l},ACTION_REFRESH:function(){return i},ACTION_RESTORE:function(){return c},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return s},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let i="refresh",u="navigate",c="restore",s="server-patch",l="prefetch",f="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(a=n||(n={})).AUTO="auto",a.FULL="full",a.TEMPORARY="temporary",(o=r||(r={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92842:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(68796),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},63500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let r=n(38754),a=n(85893),o=r._(n(67294)),i=n(64813),u=n(65853),c=n(5058),s=n(45782),l=n(28878),f=n(37171),d=n(3068),p=n(91487),h=n(92842),y=n(41412),m=n(75132),w=new Set;function v(e,t,n,r,a,o){if(o||(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let a=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(w.has(a))return;w.add(a)}(async()=>o?e.prefetch(t,a):e.prefetch(t,n,r))().catch(e=>{})}}function C(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:c,as:w,children:g,prefetch:b=null,passHref:_,replace:T,shallow:I,scroll:P,locale:E,onClick:O,onMouseEnter:R,onTouchStart:M,legacyBehavior:j=!1,...q}=e;n=g,j&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let A=o.default.useContext(f.RouterContext),k=o.default.useContext(d.AppRouterContext),N=null!=A?A:k,x=!A,S=!1!==b,L=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:$,as:U}=o.default.useMemo(()=>{if(!A){let e=C(c);return{href:e,as:w?C(w):e}}let[e,t]=(0,i.resolveHref)(A,c,!0);return{href:e,as:w?(0,i.resolveHref)(A,w):t||e}},[A,c,w]),F=o.default.useRef($),K=o.default.useRef(U);j&&(r=o.default.Children.only(n));let z=j?r&&"object"==typeof r&&r.ref:t,[D,B,H]=(0,p.useIntersection)({rootMargin:"200px"}),Y=o.default.useCallback(e=>{(K.current!==U||F.current!==$)&&(H(),K.current=U,F.current=$),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[U,z,$,H,D]);o.default.useEffect(()=>{N&&B&&S&&v(N,$,U,{locale:E},{kind:L},x)},[U,$,B,E,S,null==A?void 0:A.locale,N,x,L]);let G={ref:Y,onClick(e){j||"function"!=typeof O||O(e),j&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,a,i,c,s,l){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==c||c;"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:e}):t[a?"replace":"push"](r||n,{scroll:e})};l?o.default.startTransition(d):d()}(e,N,$,U,T,I,P,E,x)},onMouseEnter(e){j||"function"!=typeof R||R(e),j&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(S||!x)&&v(N,$,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},x)},onTouchStart:function(e){j||"function"!=typeof M||M(e),j&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(S||!x)&&v(N,$,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},x)}};if((0,s.isAbsoluteUrl)(U))G.href=U;else if(!j||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);G.href=t||(0,y.addBasePath)((0,l.addLocale)(U,e,null==A?void 0:A.defaultLocale))}return j?o.default.cloneElement(r,G):(0,a.jsx)("a",{...q,...G,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},91487:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(67294),a=n(66078),o="function"==typeof IntersectionObserver,i=new Map,u=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,s=c||!o,[l,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(s||l)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let a=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:a},u.push(n),i.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!l){let e=(0,a.requestIdleCallback)(()=>f(!0));return()=>(0,a.cancelIdleCallback)(e)}},[s,n,t,l,d.current]),[p,l,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,n){e.exports=n(63500)},96128:function(e,t,n){"use strict";n.d(t,{T:function(){return g}});var r=n(14503),a=n(8998),o=n(36117),i=n(91213),u=n(33840),c=n(26445),s=n(33639),l=n(87469),f=n(61163),d=n(74688),p=n(93714),h=n(79773),y=n(35721),m=n(79524),w=n(76404),v=n(99238);let C=new h.k(128);async function g(e,t){let{account:n=e.account,chain:h=e.chain,accessList:g,authorizationList:b,blobs:_,data:T,gas:I,gasPrice:P,maxFeePerBlobGas:E,maxFeePerGas:O,maxPriorityFeePerGas:R,nonce:M,value:j,...q}=t;if(void 0===n)throw new a.o({docsPath:"/docs/actions/wallet/sendTransaction"});let A=n?(0,r.T)(n):null;try{(0,y.F)(t);let n=await (async()=>t.to?t.to:b&&b.length>0?await (0,i.z)({authorization:b[0]}).catch(()=>{throw new o.G("`to` is required. Could not infer from `authorizationList`.")}):void 0)();if(A?.type==="json-rpc"||null===A){let t;null!==h&&(t=await (0,p.s)(e,m.L,"getChainId")({}),(0,u.q)({currentChainId:t,chain:h}));let r=e.chain?.formatters?.transactionRequest?.format,a=(r||d.tG)({...(0,f.K)(q,{format:r}),accessList:g,authorizationList:b,blobs:_,chainId:t,data:T,from:A?.address,gas:I,gasPrice:P,maxFeePerBlobGas:E,maxFeePerGas:O,maxPriorityFeePerGas:R,nonce:M,to:n,value:j}),o=C.get(e.uid)?"wallet_sendTransaction":"eth_sendTransaction";try{return await e.request({method:o,params:[a]},{retryCount:0})}catch(t){if("InvalidInputRpcError"===t.name||"InvalidParamsRpcError"===t.name||"MethodNotFoundRpcError"===t.name||"MethodNotSupportedRpcError"===t.name)return await e.request({method:"wallet_sendTransaction",params:[a]},{retryCount:0}).then(t=>(C.set(e.uid,!0),t));throw t}}if(A?.type==="local"){let t=await (0,p.s)(e,w.Z,"prepareTransactionRequest")({account:A,accessList:g,authorizationList:b,blobs:_,chain:h,data:T,gas:I,gasPrice:P,maxFeePerBlobGas:E,maxFeePerGas:O,maxPriorityFeePerGas:R,nonce:M,nonceManager:A.nonceManager,parameters:[...w.Q,"sidecars"],value:j,...q,to:n}),r=h?.serializers?.transaction,a=await A.signTransaction(t,{serializer:r});return await (0,p.s)(e,v.p,"sendRawTransaction")({serializedTransaction:a})}if(A?.type==="smart")throw new a.Y({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:"/docs/actions/bundler/sendUserOperation",type:"smart"});throw new a.Y({docsPath:"/docs/actions/wallet/sendTransaction",type:A?.type})}catch(e){if(e instanceof a.Y)throw e;throw function(e,{docsPath:t,...n}){let r=(()=>{let t=(0,l.k)(e,n);return t instanceof c.cj?e:t})();return new s.mk(r,{docsPath:t,...n})}(e,{...t,account:A,chain:t.chain||void 0})}}},61877:function(e,t,n){"use strict";n.d(t,{n:function(){return s}});var r=n(14503),a=n(8998),o=n(55629),i=n(72365),u=n(93714),c=n(96128);async function s(e,t){let{abi:n,account:s=e.account,address:l,args:f,dataSuffix:d,functionName:p,...h}=t;if(void 0===s)throw new a.o({docsPath:"/docs/contract/writeContract"});let y=s?(0,r.T)(s):null,m=(0,o.R)({abi:n,args:f,functionName:p});try{return await (0,u.s)(e,c.T,"sendTransaction")({data:`${m}${d?d.replace("0x",""):""}`,to:l,account:y,...h})}catch(e){throw(0,i.S)(e,{abi:n,address:l,args:f,docsPath:"/docs/contract/writeContract",functionName:p,sender:y?.address})}}},33840:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(80377);function a({chain:e,currentChainId:t}){if(!e)throw new r.Bk;if(t!==e.id)throw new r.Yl({chain:e,currentChainId:t})}},33305:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var r=n(84192),a=n(48120);function o(e,t="wei"){return(0,a.v)(e,r.ez[t])}},48120:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r=n(36117);class a extends r.G{constructor({value:e}){super(`Number \`${e}\` is not a valid decimal number.`,{name:"InvalidDecimalNumberError"})}}function o(e,t){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new a({value:e});let[n,r="0"]=e.split("."),o=n.startsWith("-");if(o&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${r}`))&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>t){let[e,a,o]=[r.slice(0,t-1),r.slice(t-1,t),r.slice(t)],i=Math.round(Number(`${a}.${o}`));(r=i>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${i}`).length>t&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,t)}else r=r.padEnd(t,"0");return BigInt(`${o?"-":""}${n}${r}`)}},63679:function(e,t,n){"use strict";n.d(t,{p:function(){return L}});var r=n(30202),a=n(79524),o=n(92106);async function i(e,{chain:t}){let{id:n,name:r,nativeCurrency:a,rpcUrls:i,blockExplorers:u}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,o.eC)(n),chainName:r,nativeCurrency:a,rpcUrls:i.default.http,blockExplorerUrls:u?Object.values(u).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}var u=n(30286),c=n(96128),s=n(45775);async function l(e){return e.account?.type==="local"?[e.account.address]:(await e.request({method:"eth_accounts"},{dedupe:!0})).map(e=>(0,s.x)(e))}async function f(e){return await e.request({method:"wallet_getPermissions"},{dedupe:!0})}var d=n(76404);async function p(e){return(await e.request({method:"eth_requestAccounts"},{dedupe:!0,retryCount:0})).map(e=>(0,s.K)(e))}async function h(e,t){return e.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}var y=n(99238),m=n(22980),w=n(14503),v=n(8998),C=n(33840),g=n(74688),b=n(93714),_=n(35721);async function T(e,t){let{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new v.o({docsPath:"/docs/actions/wallet/signTransaction"});let u=(0,w.T)(n);(0,_.F)({account:u,...t});let c=await (0,b.s)(e,a.L,"getChainId")({});null!==r&&(0,C.q)({currentChainId:c,chain:r});let s=r?.formatters||e.chain?.formatters,l=s?.transactionRequest?.format||g.tG;return u.signTransaction?u.signTransaction({...i,chainId:c},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...l(i),chainId:(0,o.eC)(c),from:u.address}]},{retryCount:0})}var I=n(20679);async function P(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.eC)(t)}]},{retryCount:0})}async function E(e,t){return await e.request({method:"wallet_watchAsset",params:t},{retryCount:0})}var O=n(61877);function R(e){return{addChain:t=>i(e,t),deployContract:t=>(function(e,t){let{abi:n,args:r,bytecode:a,...o}=t,i=(0,u.w)({abi:n,args:r,bytecode:a});return(0,c.T)(e,{...o,data:i})})(e,t),getAddresses:()=>l(e),getChainId:()=>(0,a.L)(e),getPermissions:()=>f(e),prepareTransactionRequest:t=>(0,d.Z)(e,t),requestAddresses:()=>p(e),requestPermissions:t=>h(e,t),sendRawTransaction:t=>(0,y.p)(e,t),sendTransaction:t=>(0,c.T)(e,t),signMessage:t=>(0,m.l)(e,t),signTransaction:t=>T(e,t),signTypedData:t=>(0,I.x)(e,t),switchChain:t=>P(e,t),watchAsset:t=>E(e,t),writeContract:t=>(0,O.n)(e,t)}}var M=n(28690);async function j(e,t={}){return(await (0,M.e)(e,t)).extend(R)}var q=n(75745),A=n(67294),k=n(82451),N=n(92321),x=n(4368),S=n(37122);function L(e={}){let{query:t={},...n}=e,a=(0,S.Z)(n),o=(0,r.NL)(),{address:i,connector:u,status:c}=(0,N.m)({config:a}),s=(0,x.x)({config:a}),l=e.connector??u,{queryKey:f,...d}=function(e,t={}){return{gcTime:0,async queryFn({queryKey:n}){let{connector:r}=t,{connectorUid:a,scopeKey:o,...i}=n[1];return j(e,{...i,connector:r})},queryKey:function(e={}){let{connector:t,...n}=e;return["walletClient",{...(0,q.OP)(n),connectorUid:t?.uid}]}(t)}}(a,{...e,chainId:e.chainId??s,connector:e.connector??u}),p=!!(("connected"===c||"reconnecting"===c&&l?.getProvider)&&(t.enabled??!0)),h=(0,A.useRef)(i);return(0,A.useEffect)(()=>{let e=h.current;!i&&e?(o.removeQueries({queryKey:f}),h.current=void 0):i!==e&&(o.invalidateQueries({queryKey:f}),h.current=i)},[i,o]),(0,k.aM)({...t,...d,queryKey:f,enabled:p,staleTime:Number.POSITIVE_INFINITY})}},46329:function(e,t,n){"use strict";n.d(t,{S:function(){return d}});var r=n(98029),a=n(61877),o=n(81848),i=n(50296),u=n(28690),c=n(66432);async function s(e,t){let n;let{abi:r,chainId:a,connector:i,...s}=t;n=t.account?t.account:(await (0,u.e)(e,{chainId:a,connector:i})).account;let l=e.getClient({chainId:a}),f=(0,o.s)(l,c.a,"simulateContract"),{result:d,request:p}=await f({...s,abi:r,account:n});return{chainId:l.chain.id,result:d,request:{__mode:"prepared",...p,chainId:a}}}async function l(e,t){let n,r;let{account:c,chainId:l,connector:f,__mode:d,...p}=t;n="object"==typeof c&&c?.type==="local"?e.getClient({chainId:l}):await (0,u.e)(e,{account:c??void 0,chainId:l,connector:f});let{connector:h}=(0,i.D)(e);if("prepared"===d||h?.supportsSimulation)r=p;else{let{request:t}=await s(e,{...p,account:c,chainId:l});r=t}let y=(0,o.s)(n,a.n,"writeContract");return await y({...r,...c?{account:c}:{},chain:l?{id:l}:null})}var f=n(37122);function d(e={}){var t;let{mutation:n}=e,a=(t=(0,f.Z)(e),{mutationFn:e=>l(t,e),mutationKey:["writeContract"]}),{mutate:o,mutateAsync:i,...u}=(0,r.D)({...n,...a});return{...u,writeContract:o,writeContractAsync:i}}}}]);