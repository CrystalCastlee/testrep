(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2285],{58988:function(e,t){"use strict";t.E=function(e,t){return e.split(",").map(function(e){var t=(e=e.trim()).match(n),o=t[1],s=t[2],i=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=s?s.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],c.expressions=i.map(function(e){var t=e.match(r),n=t[1].toLowerCase().match(a);return{modifier:n[1],feature:n[2],value:t[2]}}),c}).some(function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!(r||n))return!1;var a=e.expressions.every(function(e){var n=e.feature,r=e.modifier,a=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=u(a),o=u(o);break;case"resolution":a=c(a),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=i(a),o=i(o);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=a;case"max":return o<=a;default:return o===a}});return a&&!n||!a&&n})};var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function i(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},49180:function(e,t,n){"use strict";var r=n(58988).E,a="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o,s=this;function i(e){s.matches=e.matches,s.media=e.media}a&&!n&&(o=a.call(window,e)),o?(this.matches=o.matches,this.media=o.media,o.addListener(i)):(this.matches=r(e,t),this.media=e),this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(i)}}e.exports=function(e,t,n){return new o(e,t,n)}},528:function(e){e.exports={style:{fontFamily:"'__Inter_43502d', '__Inter_Fallback_43502d'",fontStyle:"normal"},className:"__className_43502d"}},75207:function(e){e.exports={style:{fontFamily:"'__DM_Mono_d17036', '__DM_Mono_Fallback_d17036'",fontWeight:500,fontStyle:"normal"},className:"__className_d17036"}},47:function(e,t,n){"use strict";n.d(t,{ac:function(){return M}});var r=n(67294),a=n(49180),o=n.n(a),s=/[A-Z]/g,i=/^ms-/,c={};function u(e){return"-"+e.toLowerCase()}var l=function(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(s,u);return c[e]=i.test(t)?"-"+t:t},d=n(45697),h=n.n(d);let m=h().oneOfType([h().string,h().number]),f={all:h().bool,grid:h().bool,aural:h().bool,braille:h().bool,handheld:h().bool,print:h().bool,projection:h().bool,screen:h().bool,tty:h().bool,tv:h().bool,embossed:h().bool},{type:p,...b}={orientation:h().oneOf(["portrait","landscape"]),scan:h().oneOf(["progressive","interlace"]),aspectRatio:h().string,deviceAspectRatio:h().string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:h().bool,colorIndex:h().bool,monochrome:h().bool,resolution:m,type:Object.keys(f)},g={minAspectRatio:h().string,maxAspectRatio:h().string,minDeviceAspectRatio:h().string,maxDeviceAspectRatio:h().string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:h().number,maxColor:h().number,minColorIndex:h().number,maxColorIndex:h().number,minMonochrome:h().number,maxMonochrome:h().number,minResolution:m,maxResolution:m,...b};var v={...f,...g};let w=e=>`not ${e}`,y=(e,t)=>{let n=l(e);return("number"==typeof t&&(t=`${t}px`),!0===t)?n:!1===t?w(n):`(${n}: ${t})`},C=e=>e.join(" and "),x=e=>{let t=[];return Object.keys(v).forEach(n=>{let r=e[n];null!=r&&t.push(y(n,r))}),C(t)},_=(0,r.createContext)(void 0),j=e=>e.query||x(e),E=e=>{if(e)return Object.keys(e).reduce((t,n)=>(t[l(n)]=e[n],t),{})},D=()=>{let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{e.current=!0},[]),e.current},P=e=>{let t=(0,r.useContext)(_),n=()=>E(e)||E(t),[a,o]=(0,r.useState)(n);return(0,r.useEffect)(()=>{let e=n();!function(e,t){if(e===t)return!0;if(!e||!t)return!1;let n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(let r=0;r<a;r++){let a=n[r];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}(a,e)&&o(e)},[e,t]),a},$=e=>{let t=()=>j(e),[n,a]=(0,r.useState)(t);return(0,r.useEffect)(()=>{let e=t();n!==e&&a(e)},[e]),n},O=(e,t)=>{let n=()=>o()(e,t||{},!!t),[a,s]=(0,r.useState)(n),i=D();return(0,r.useEffect)(()=>{if(i){let e=n();return s(e),()=>{e&&e.dispose()}}},[e,t]),a},I=e=>{let[t,n]=(0,r.useState)(e.matches);return(0,r.useEffect)(()=>{let t=e=>{n(e.matches)};return e.addListener(t),n(e.matches),()=>{e.removeListener(t)}},[e]),t},M=(e,t,n)=>{let a=P(t),o=$(e);if(!o)throw Error("Invalid or missing MediaQuery!");let s=O(o,a),i=I(s),c=D();return(0,r.useEffect)(()=>{c&&n&&n(i)},[i]),(0,r.useEffect)(()=>()=>{s&&s.dispose()},[]),i}},87831:function(e,t,n){"use strict";n.d(t,{e:function(){return c}});var r=n(94898),a=n(3980),o=n(14503),s=n(45775),i=n(87675);async function c(e,t={}){let n;if(t.connector){let{connector:r}=t;if("reconnecting"===e.state.status&&!r.getAccounts&&!r.getChainId)throw new i.$S({connector:r});let[a,o]=await Promise.all([r.getAccounts(),r.getChainId()]);n={accounts:a,chainId:o,connector:r}}else n=e.state.connections.get(e.state.current);if(!n)throw new i.aH;let c=t.chainId??n.chainId,u=await n.connector.getChainId();if(u!==n.chainId)throw new i.XZ({connectionChainId:n.chainId,connectorChainId:u});let l=n.connector;if(l.getClient)return l.getClient({chainId:c});let d=(0,o.T)(t.account??n.accounts[0]);if(d.address=(0,s.K)(d.address),t.account&&!n.accounts.some(e=>e.toLowerCase()===d.address.toLowerCase()))throw new i.JK({address:d.address,connector:l});let h=e.chains.find(e=>e.id===c),m=await n.connector.getProvider({chainId:c});return(0,r.e)({account:d,chain:h,name:"Connector Client",transport:e=>(0,a.P)(m)({...e,retryCount:0})})}},21548:function(e,t,n){"use strict";n.d(t,{l:function(){return s}});var r=n(22980),a=n(81946),o=n(87831);async function s(e,t){let n;let{account:s,connector:i,...c}=t;return n="object"==typeof s&&"local"===s.type?e.getClient():await (0,o.e)(e,{account:s,connector:i}),(0,a.s)(n,r.l,"signMessage")({...c,...s?{account:s}:{}})}},46968:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(87675),a=n(90867);class o extends a.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}async function s(e,t){let{addEthereumChainParameter:n,chainId:a}=t,s=e.state.connections.get(t.connector?.uid??e.state.current);if(s){let e=s.connector;if(!e.switchChain)throw new o({connector:e});return await e.switchChain({addEthereumChainParameter:n,chainId:a})}let i=e.chains.find(e=>e.id===a);if(!i)throw new r.X4;return e.setState(e=>({...e,chainId:a})),i}},90867:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});let r=()=>"@wagmi/core@2.14.5";var a,o,s=function(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class i extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return r()}constructor(e,t={}){super(),a.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let n=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,r=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...r?[`Docs: ${this.docsBaseUrl}${r}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=n,this.docsPath=r,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s(this,a,"m",o).call(this,this,e)}}a=new WeakSet,o=function e(t,n){return n?.(t)?t:t.cause?s(this,a,"m",e).call(this,t.cause,n):t}},87675:function(e,t,n){"use strict";n.d(t,{$S:function(){return c},JK:function(){return s},X4:function(){return a},XZ:function(){return i},aH:function(){return o}});var r=n(90867);class a extends r.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class o extends r.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class s extends r.G{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class i extends r.G{constructor({connectionChainId:e,connectorChainId:t}){super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}class c extends r.G{constructor({connector:e}){super(`Connector "${e.name}" unavailable while reconnecting.`,{details:"During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uuid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorUnavailableReconnectingError"})}}},20679:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(14503),a=n(8998),o=n(2705);async function s(e,t){let{account:n=e.account,domain:s,message:i,primaryType:c}=t;if(!n)throw new a.o({docsPath:"/docs/actions/wallet/signTypedData"});let u=(0,r.T)(n),l={EIP712Domain:(0,o.cj)({domain:s}),...t.types};if((0,o.iC)({domain:s,message:i,primaryType:c,types:l}),u.signTypedData)return u.signTypedData({domain:s,message:i,primaryType:c,types:l});let d=(0,o.H6)({domain:s,message:i,primaryType:c,types:l});return e.request({method:"eth_signTypedData_v4",params:[u.address,d]},{retryCount:0})}},82625:function(e,t,n){"use strict";n.d(t,{y:function(){return u}});var r=n(98029),a=n(20679),o=n(81848),s=n(28690);async function i(e,t){let n;let{account:r,connector:i,...c}=t;return n="object"==typeof r&&"local"===r.type?e.getClient():await (0,s.e)(e,{account:r,connector:i}),(0,o.s)(n,a.x,"signTypedData")({...c,...r?{account:r}:{}})}var c=n(37122);function u(e={}){var t;let{mutation:n}=e,a=(t=(0,c.Z)(e),{mutationFn:e=>i(t,e),mutationKey:["signTypedData"]}),{mutate:o,mutateAsync:s,...u}=(0,r.D)({...n,...a});return{...u,signTypedData:o,signTypedDataAsync:s}}}}]);