(this.csbJsonP=this.csbJsonP||[]).push([["default~sandbox~sandbox-startup"],{"../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts":function(e,t){e.exports=function(){return new Worker("/babel-transpiler.0f21281d.worker.js")}},"../codesandbox-api/dist/codesandbox.es5.js":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Protocol",(function(){return d})),n.d(t,"transformError",(function(){return o})),n.d(t,"clearErrorTransformers",(function(){return i})),n.d(t,"registerErrorTransformer",(function(){return s})),n.d(t,"actions",(function(){return b})),n.d(t,"isStandalone",(function(){return U})),n.d(t,"iframeHandshake",(function(){return S})),n.d(t,"resetState",(function(){return $})),n.d(t,"dispatch",(function(){return P})),n.d(t,"listen",(function(){return L})),n.d(t,"notifyListeners",(function(){return A})),n.d(t,"registerFrame",(function(){return D})),n.d(t,"reattach",(function(){return j}));var r=[];function o(e,t,n){return r.map((function(r){return r(e,t,n)})).filter((function(e){return null!=e}))[0]}function i(){r.length=0}function s(e){r.push(e)}var a=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},l=function(){return Math.floor(1e6*Math.random()+1e6*Math.random())},d=function(){function e(e,t,n){var r=this;this.type=e,this.handleMessage=t,this.target=n,this.outgoingMessages=new Set,this._messageListener=function(e){return a(r,void 0,void 0,(function(){var t,n,r;return c(this,(function(o){switch(o.label){case 0:return(t=e.data).$type!==this.getTypeId()||this.outgoingMessages.has(t.$id)?[2]:[4,this.handleMessage(t.$data)];case 1:return n=o.sent(),r={$originId:this.internalId,$type:this.getTypeId(),$data:n,$id:t.$id},e.source?e.source.postMessage(r,"*"):this._postMessage(r),[2]}}))}))},this.createConnection(),this.internalId=l(),this.isWorker="Worker"===function(e){try{return e.constructor.name}catch(e){return""}}(n)}return e.prototype.getTypeId=function(){return"p-".concat(this.type)},e.prototype.createConnection=function(){self.addEventListener("message",this._messageListener)},e.prototype.dispose=function(){self.removeEventListener("message",this._messageListener)},e.prototype.sendMessage=function(e){var t=this;return new Promise((function(n){var r=l(),o={$originId:t.internalId,$type:t.getTypeId(),$data:e,$id:r};t.outgoingMessages.add(r);var i=function(e){var o=e.data;o.$type===t.getTypeId()&&o.$id===r&&o.$originId!==t.internalId&&(n(o.$data),self.removeEventListener("message",i))};self.addEventListener("message",i),t._postMessage(o)}))},e.prototype._postMessage=function(e){this.isWorker||"undefined"!=typeof DedicatedWorkerGlobalScope&&this.target instanceof DedicatedWorkerGlobalScope?this.target.postMessage(e):this.target.postMessage(e,"*")},e}();var u=Object.freeze({show:function(e,t,n){return void 0===t&&(t="notice"),void 0===n&&(n=2),{type:"action",action:"notification",title:e,notificationType:t,timeAlive:n}}});var p=Object.freeze({openModule:function(e,t,n){return{type:"action",action:"editor.open-module",path:e,lineNumber:t,column:n}}});var f=Object.freeze({add:function(e){return{type:"action",action:"source.dependencies.add",dependency:e}}}),h=Object.freeze({rename:function(e,t){return{type:"action",action:"source.module.rename",path:e,title:t}}});var b={notifications:u,editor:p,source:Object.freeze({dependencies:f,modules:h}),error:Object.freeze({show:function(e,t,n){var r=n.line,o=n.column,i=n.lineEnd,s=n.columnEnd;return{title:e,message:t,line:r,column:o,path:n.path,payload:n.payload,lineEnd:i,columnEnd:s,severity:"error",type:"action",action:"show-error",source:n.source||"browser"}},clear:function(e,t){return{type:"action",action:"clear-errors",path:e,source:t}}}),correction:Object.freeze({show:function(e,t){var n=void 0===t?{path:"",severity:"warning",source:""}:t,r=n.line,o=n.column,i=n.lineEnd,s=n.columnEnd,a=n.path,c=n.payload,l=n.severity,d=void 0===l?"warning":l,u=n.source;return{message:e,line:r,column:o,lineEnd:i,columnEnd:s,path:a,payload:c,severity:d,source:void 0===u?"":u,type:"action",action:"show-correction"}},clear:function(e,t){return{type:"action",action:"clear-corrections",path:e,source:t}}}),glyph:Object.freeze({show:function(e){return{line:e.line,path:e.path,className:e.className,type:"action",action:"show-glyph"}}})},m=void 0!==e&&""||"https://codesandbox.io",g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},w=new Map;var v,U="undefined"==typeof window||!!(window.location&&window.location.href.indexOf("?standalone")>-1)||!window.opener&&window.parent===window||!!(window.location&&window.location.href.indexOf(m)>-1),y=!1,S=new Promise((function(e){v=e})),x=null,R=null,_=function(e){var t;"register-frame"!==e.data.type||R||(x=e.data.origin,R=null!==(t=e.data.id)&&void 0!==t?t:null,y||(v(),y=!0),self.removeEventListener("message",_))};function $(){x=null,w.clear()}function P(e){if(e){var t=g(g({},e),{codesandbox:!0});null!==R&&(t.$id=R),A(t),function(e){var t=JSON.parse(JSON.stringify(e));w.forEach((function(e,n){n&&n.postMessage&&n.postMessage(g(g({},t),{codesandbox:!0}),e)}))}(t),U||null===x&&"initialized"!==e.type||(window.opener?window.opener.postMessage(t,null===x?"*":x):window.parent.postMessage(t,null===x?"*":x))}}"undefined"!=typeof window&&self.addEventListener("message",_);var E={},O=0;function L(e){var t=++O;return E[t]=e,function(){delete E[t]}}function A(e,t){Object.keys(E).forEach((function(n){if(E[n])try{E[n](e,t)}catch(e){}}))}function I(e){if(("initialized"===e.data.type||U)&&(y=!0),y){var t=e.data;!t||!t.codesandbox||null!==x&&e.origin!==x||null!=t.$id&&null!==R&&R!==t.$id||A(t,e.source)}}function D(e,t,n){w.set(e,t),e.postMessage({type:"register-frame",origin:document.location.origin,id:n},t)}function j(){window.addEventListener("message",I)}"undefined"!=typeof window&&window.addEventListener("message",I)}.call(this,n("../../node_modules/process/browser.js"))},"../common/lib/templates/helpers/is-server.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isServer=void 0;const r=["adonis","apollo","docusaurus","ember","gatsby","gridsome","marko","mdx-deck","nest","next","node","nuxt","quasar","remix","sapper","styleguidist","unibit","vuepress"];t.isServer=e=>-1!==r.indexOf(e)},"../common/lib/utils/url-generator.js":function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.v2DefaultBranchUrl=t.v2BranchUrl=t.dashboard=t.teamInviteLink=t.docsUrl=t.getSandboxId=t.privacyUrl=t.tosUrl=t.curatorUrl=t.searchUrl=t.gitHubToProjectsUrl=t.gitHubToSandboxUrl=t.optionsToParameterizedUrl=t.githubRepoUrl=t.profileLikesUrl=t.profileSandboxesUrl=t.teamOverviewUrl=t.exploreUrl=t.dashboardUrl=t.profileUrl=t.signInVercelUrl=t.signInUrl=t.signInPageUrl=t.forkSandboxUrl=t.frameUrl=t.embedUrl=t.sandboxUrl=t.v2EditorUrl=t.editorUrl=t.uploadFromCliUrl=t.newCxJSSandboxUrl=t.newAngularSandboxUrl=t.newSvelteSandboxUrl=t.importFromGitHubUrl=t.newVueSandboxUrl=t.newPreactSandboxUrl=t.newDojoSandboxUrl=t.newReactTypeScriptSandboxUrl=t.parcelSandboxUrl=t.newSandboxUrl=t.newSandboxWizard=t.protocolAndHost=t.host=t.CSBProjectGitHubRepository=t.gitHubRepoPattern=void 0;const s=n("../common/lib/templates/helpers/is-server.js"),a=i(n("../common/lib/utils/url-generator/dashboard.js"));t.dashboard=a,t.gitHubRepoPattern=/(https?:\/\/)?((www.)?)github.com(\/[\w-]+){2,}/;const c=/(https?:\/\/)?((www.)?)github.com/,l=/(\.git)$/,d={"https://codesandbox.io":"https://csb.app","https://codesandbox.stream":"https://codesandbox.dev"};t.CSBProjectGitHubRepository=({owner:e,repo:t,welcome:n})=>`https://codesandbox.io/p/github/${e}/${t}?create=true${n?"&welcome=true":""}`;const u=(e,...t)=>e[0]+t.map((t,n)=>`${encodeURIComponent(t)}${e[n+1]}`).join("");t.host=()=>"".split("//")[1];t.protocolAndHost=()=>`${location.protocol}//${t.host()}`;t.newSandboxWizard=()=>"/s";t.newSandboxUrl=()=>"/s/new";t.parcelSandboxUrl=()=>"/s/vanilla";t.newReactTypeScriptSandboxUrl=()=>"/s/react-ts";t.newDojoSandboxUrl=()=>"/s/github/dojo/dojo-codesandbox-template";t.newPreactSandboxUrl=()=>"/s/preact";t.newVueSandboxUrl=()=>"/s/vue";t.importFromGitHubUrl=()=>"/s/github";t.newSvelteSandboxUrl=()=>"/s/svelte";t.newAngularSandboxUrl=()=>"/s/angular";t.newCxJSSandboxUrl=()=>"/s/github/codaxy/cxjs-codesandbox-template";t.uploadFromCliUrl=()=>"/s/cli";const p=e=>u`github/${e.username}/${e.repo}/tree/${e.branch}/`+e.path;t.editorUrl=()=>"/s/";t.v2EditorUrl=()=>"/p/";t.sandboxUrl=e=>{if(e.git){const{git:n}=e;return`${t.editorUrl()}${p(n)}`}const n=e.isV2?t.v2EditorUrl()+"sandbox/":t.editorUrl();let r="";return e.query&&(r="?"+new URLSearchParams(e.query).toString()),e.alias?`${n}${e.alias}${r}`:`${n}${e.id}${r}`};t.embedUrl=e=>{if(e.git){const{git:t}=e;return"/embed/"+p(t)}return e.alias?"/embed/"+e.alias:"/embed/"+e.id};t.frameUrl=(e,n="",{useFallbackDomain:r=!1,port:o}={})=>{const i=0===n.indexOf("/")?n.substr(1):n,a=s.isServer(e.template);let c=t.host();return!("https://"+c in d)||r||a||(c=d["https://"+c].split("//")[1]),`${location.protocol}//${e.id}${o?"-"+o:""}.${a?"sse.":""}${c}/${i}`};t.forkSandboxUrl=e=>t.sandboxUrl(e)+"/fork";t.signInPageUrl=e=>{let t="/signin";return e&&(t+="?continue="+e),t};t.signInUrl=(e=!1)=>"/auth/github"+(e?"?scope=user:email,public_repo,workflow":"");t.signInVercelUrl=()=>"/auth/vercel";t.profileUrl=e=>"/u/"+e;t.dashboardUrl=()=>"/dashboard";t.exploreUrl=()=>"/explore";t.teamOverviewUrl=e=>"/dashboard/teams/"+e;t.profileSandboxesUrl=(e,n)=>`${t.profileUrl(e)}/sandboxes${n?"/"+n:""}`;t.profileLikesUrl=(e,n)=>`${t.profileUrl(e)}/likes${n?"/"+n:""}`;t.githubRepoUrl=({repo:e,branch:t,username:n,path:r})=>u`https://github.com/${n}/${e}/tree/${t}/`+r;t.optionsToParameterizedUrl=e=>{const t=Object.keys(e).sort().filter(t=>e[t]).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");return t?"?"+t:""};t.gitHubToSandboxUrl=e=>e.replace(c,"/s/github").replace(l,"");t.gitHubToProjectsUrl=e=>e.replace(c,"/p/github").replace(l,"");t.searchUrl=e=>"/search"+(e?"?query="+e:"");t.curatorUrl=()=>"/curator";t.tosUrl=()=>"/legal/terms";t.privacyUrl=()=>"/legal/privacy",t.getSandboxId=function(){const e="";let t;if([e,d[e]].filter(Boolean).forEach(e=>{const n=e.replace(/https?:\/\//,"").replace(/\./g,"\\."),r=new RegExp("(.*)\\."+n),o=document.location.host.match(r);o&&(t=o[1])}),!t)throw new Error("Can't detect sandbox ID from the current URL");return t};t.docsUrl=(e="")=>"https://codesandbox.io/docs"+e;t.teamInviteLink=e=>`${t.protocolAndHost()}/invite/${e}`;const f=({owner:e,repoName:n,branchName:r,workspaceId:o,createDraftBranch:i,importFlag:s,source:a})=>{const c=new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign({},o?{workspaceId:o}:{}),i?{create:"true"}:{}),s?{import:"true"}:{}),a?{utm_source:a}:{})).toString();return`${t.v2EditorUrl()}github/${e}/${n}${r?"/"+r:""}${c?"?"+c:""}`};t.v2BranchUrl=e=>f(e);t.v2DefaultBranchUrl=e=>f(e)},"../common/lib/utils/url-generator/dashboard.js":function(e,t,n){"use strict";function r(e,t){return t?`${e}?workspace=${t}`:e}Object.defineProperty(t,"__esModule",{value:!0}),t.discoverSearch=t.discover=t.search=t.permissionSettings=t.registrySettings=t.settings=t.liked=t.shared=t.deleted=t.recent=t.templates=t.syncedSandboxes=t.repository=t.repositories=t.myContributions=t.drafts=t.sandboxes=t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX=void 0,t.DASHBOARD_URL_PREFIX="/dashboard",t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX+"/sandboxes";t.sandboxes=(e,n)=>r(`${t.ALL_SANDBOXES_URL_PREFIX}${function(e){return e.split("/").map(e=>e.split(" ").map(encodeURIComponent).join(" ")).join("/")}(e)}`,n);t.drafts=e=>r(t.DASHBOARD_URL_PREFIX+"/drafts",e);t.myContributions=e=>r(t.DASHBOARD_URL_PREFIX+"/my-contributions",e);t.repositories=e=>r(t.DASHBOARD_URL_PREFIX+"/repositories",e);t.repository=({owner:e,name:n,teamId:o})=>r(`${t.DASHBOARD_URL_PREFIX}/repositories/github/${e}/${n}`,o);t.syncedSandboxes=e=>r(t.DASHBOARD_URL_PREFIX+"/synced-sandboxes",e);t.templates=e=>r(t.DASHBOARD_URL_PREFIX+"/templates",e);t.recent=(e,n)=>{let o=r(t.DASHBOARD_URL_PREFIX+"/recent",e);if(n&&Object.keys(n).length>0){const e=new URLSearchParams(n);o.includes("?")?o+="&":o+="?",o+=e.toString()}return o};t.deleted=e=>r(t.DASHBOARD_URL_PREFIX+"/deleted",e);t.shared=e=>r(t.DASHBOARD_URL_PREFIX+"/shared",e);t.liked=e=>r(t.DASHBOARD_URL_PREFIX+"/liked",e);t.settings=e=>r(t.DASHBOARD_URL_PREFIX+"/settings",e);t.registrySettings=e=>r(t.DASHBOARD_URL_PREFIX+"/settings/npm-registry",e);t.permissionSettings=e=>r(t.DASHBOARD_URL_PREFIX+"/settings/permissions",e);t.search=(e,n)=>{let o=r(t.DASHBOARD_URL_PREFIX+"/search",n);return o.includes("?")?o+="&":o+="?",o+="query="+e,o};t.discover=(e,n)=>r(n?`${t.DASHBOARD_URL_PREFIX}/discover/${n}`:t.DASHBOARD_URL_PREFIX+"/discover",e);t.discoverSearch=(e,n)=>{let o=r(t.DASHBOARD_URL_PREFIX+"/discover/search",n);return o.includes("?")?o+="&":o+="?",o+="query="+e,o}},"../sandbox-hooks/preview-secret.js":function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n("../common/lib/utils/url-generator.js")],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.requestPreviewSecretFromApp=e.listenForPreviewSecret=e.setPreviewSecret=e.getPreviewSecret=void 0;var n=function(){return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat("csb_sandbox_secret","\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1")};e.getPreviewSecret=n;var r=function(e){if(null!==e){var t=n();(t&&!e||e&&!t||t!==e)&&(e?(document.cookie="".concat("csb_sandbox_secret","=").concat(e,";samesite=none;secure;"),setTimeout((function(){location.reload()}),1e3)):document.cookie="".concat("csb_sandbox_secret","=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"))}};function o(){var e={width:1020,height:618},t=e.width,n=e.height,r=function(e){var t=e.width,n=e.height,r=window.screenLeft?window.screenLeft:window.screenX,o=window.screenTop?window.screenTop:window.screenY,i=r+window.innerWidth/2-t/2;return{top:o+window.innerHeight/2-n/2,left:i}}({width:t,height:n}),o=r.top,i=r.left;return"width=".concat(t,",height=").concat(n,",top=").concat(o,",left=").concat(i)}e.setPreviewSecret=r,e.listenForPreviewSecret=function(){var e=function(e){if(e.data&&"preview-secret"===e.data.$type){var t=e.data.previewSecret;r(t)}};return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}},e.requestPreviewSecretFromApp=function(e){var t=document.location.host.endsWith(".stream")?"https://codesandbox.stream":"https://codesandbox.io",n=window.open(t+"/auth/sandbox/"+e,name,"scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no, ".concat(o()));setInterval((function(){n.postMessage({$type:"request-preview-secret"},t)}),500),window.addEventListener("message",(function e(t){t.data&&"preview-secret"===t.data.$type&&(r(t.data.previewSecret),window.removeEventListener("message",e),n.close())}))}})?r.apply(t,o):r)||(e.exports=i)}}]);
//# sourceMappingURL=default~sandbox~sandbox-startup.daf4d873a.chunk.js.map