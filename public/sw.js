if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6-cDypK2pZj4S0npJxvFm/_buildManifest.js",revision:"7f2fda4e80d1ca58104498a9ddbb5c48"},{url:"/_next/static/6-cDypK2pZj4S0npJxvFm/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/0c428ae2.f716a2572054199296bc.js",revision:"c15f23fe38e1bcb40dd49f273cd1b00c"},{url:"/_next/static/chunks/17007de1.72169ade325609faa0db.js",revision:"f16672c238669f62199614013c504f2e"},{url:"/_next/static/chunks/1a48c3c1.2ecb0fb9e2bc9955b80f.js",revision:"b90c767d45313883c304e4c44c7ae719"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.6bee60bba924006fdd1d.js",revision:"812e403126f23c46aa467fc19ae69a17"},{url:"/_next/static/chunks/7f0c75c1.1af9f62e7fad0e7a894d.js",revision:"aef8af2543c228c0a86658a55ecd7b24"},{url:"/_next/static/chunks/d7eeaac4.3626038f4f728e32ffa7.js",revision:"5a127c2c3ebb232d127b79376f183aa9"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.d4121ab42e11724490d5.js",revision:"0dc66aeeaa17205d830b291a98a16d29"},{url:"/_next/static/chunks/framework.b11cd6ab3c62dae3dfb8.js",revision:"eb43b99838b43eb618bfe5a78ab7985a"},{url:"/_next/static/chunks/main-2677fe1a11f9014a3342.js",revision:"d2d432fea705881b64c491e833d8608e"},{url:"/_next/static/chunks/pages/_app-cffa0a854ac096630e1f.js",revision:"ec4ebc772c6c5052b6da113e1201657b"},{url:"/_next/static/chunks/pages/_error-9555a62fff10f50476f0.js",revision:"83ea5b3a418319cb2c78f1b3774a969a"},{url:"/_next/static/chunks/pages/index-46fa38c434e75df42b12.js",revision:"796c9352debe1a5073962305d466402e"},{url:"/_next/static/chunks/polyfills-83732ebf2ed7f8a1b2c7.js",revision:"1e875a6bcb0993effb274df712fd9a46"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/a81fa44e86bcbfacd421.css",revision:"431b5661ecb7ed8999355b98cd2cbf4f"},{url:"/_next/static/css/dd59260df5aef5fa4cfd.css",revision:"3c11b465b9824275023e415fe99d1f2d"},{url:"/images/find-abith-hussain.png",revision:"6e0b5601936d88e03ee05c222df95378"},{url:"/images/find-abith-hussain.svg",revision:"547312fbfab740dea25e4dbf6a5c742c"},{url:"/mainifest.json",revision:"8362289f6f7913a672cf43be5e770c33"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
