if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const r=e=>i(e,c),d={module:{uri:c},exports:o,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),o)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1A6mBas4hO4Ln84BdcPV4/_buildManifest.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/1A6mBas4hO4Ln84BdcPV4/_middlewareManifest.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/1A6mBas4hO4Ln84BdcPV4/_ssgManifest.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/614-ac9f291c335ba278.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/framework-6e4ba497ae0c8a3f.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/main-227e205eee84911a.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/pages/_app-50c83e9074835b1a.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/pages/index-c4e9f593e3fb92c7.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/_next/static/css/17ae2f63fb3dcd4b.css",revision:"1A6mBas4hO4Ln84BdcPV4"},{url:"/favicon.ico",revision:"beb061bdc5fc94d991fa1cf281f33fd4"},{url:"/favicon.png",revision:"42c283601b241a82166e82b2bb50f34e"},{url:"/favicon.svg",revision:"5b9e544777b62dc14bc1713ffb910a5e"},{url:"/hero.png",revision:"bad2e43dda96e93708d7444c124a81ba"},{url:"/icons/icon-128x128.png",revision:"5d08f1b6081015cc64cf49de407ddaed"},{url:"/icons/icon-144x144.png",revision:"b9db08d0d9030ccc909729740ce1f899"},{url:"/icons/icon-152x152.png",revision:"07292aebe537350300a0b399f323ee93"},{url:"/icons/icon-192x192.png",revision:"3bf05c2f980cc9d4b5c86999820705f1"},{url:"/icons/icon-384x384.png",revision:"30d067ddc20fc593ac6df611de2ef76c"},{url:"/icons/icon-512x512.png",revision:"46e85dd6f0b5d14859f75eb80da442a5"},{url:"/icons/icon-72x72.png",revision:"8170097eefcaff2f8440cc551f207ca7"},{url:"/icons/icon-96x96.png",revision:"bf2f1bf882cb18b5f6e56b69687d4530"},{url:"/images/projects/asuka.png",revision:"d34fd4bf8907562f2f6576794fb7392c"},{url:"/images/projects/bayspace.png",revision:"72af5a1847797734bd6fec18b02c7d55"},{url:"/images/projects/bomberman.png",revision:"1399573f9bded1680d39a10e8ac01d09"},{url:"/images/projects/hextech.png",revision:"b0ee834840c9783f75fcd6decf902937"},{url:"/images/projects/infection.png",revision:"737b2615636da33f4844a0bd9efe6f68"},{url:"/images/projects/jrpg-turnbased.jpg",revision:"ee86ccef3c592eec883f570dd5b1d7a5"},{url:"/images/projects/mecha.png",revision:"2b8e44b76ee6e029b3dde24bb3fe1dd8"},{url:"/images/projects/picar.png",revision:"f707761a59666a57ebc49c7270c54d00"},{url:"/images/projects/rpg.png",revision:"2610c5555746b07c1f68b6bd982aa81d"},{url:"/images/projects/tankgame.png",revision:"5de542d411317d450f2528d68a5522cf"},{url:"/images/projects/textmorph.png",revision:"0d9a5535ab05d8792d3bd97115b70d2f"},{url:"/logos/Blazor.png",revision:"a6ccc7282f44ea227ccabfd011a03b9b"},{url:"/logos/angular.svg",revision:"98f263ca91c042c61d9b4c7125de2222"},{url:"/logos/aws-dark.svg",revision:"1c4732c5d3931cbf5de467a4b4e2bdee"},{url:"/logos/aws.svg",revision:"5df8b7b3015450fe16de5d76e9d0d2a5"},{url:"/logos/blender.png",revision:"0029805abcaa02a80dec1affdb7856f5"},{url:"/logos/bootstrap-logo.svg",revision:"2d6645f277f6bd055eb0b3e108441b4e"},{url:"/logos/c-original.svg",revision:"a94d7883024a1e955b8ad22e335fa9d8"},{url:"/logos/cplusplus-original.svg",revision:"a203335c09a753f80cdbaaa80f8918dd"},{url:"/logos/csharp-original.svg",revision:"6a90a433bea9eaa24d917ee86ff345ad"},{url:"/logos/css3-original.svg",revision:"a70a7e3e545f3ddc5707d4c4da8cfa17"},{url:"/logos/docker.png",revision:"f5bf5a50d1c539f00bd26af30f89bd89"},{url:"/logos/dotnet.svg",revision:"aa9710309bf26b0ae2f6bf6aa2166d2b"},{url:"/logos/figma.svg",revision:"eef7e2ebf860deedc3d9d313d0b9a6fe"},{url:"/logos/git-original.svg",revision:"c02b7da93fea7f472b89583e23f12759"},{url:"/logos/google-cloud.svg",revision:"d87afdbbe428325cf72483d9eaeda8f6"},{url:"/logos/html5-original.svg",revision:"7997c4244e7a8cf2b160803e1c741502"},{url:"/logos/java-icon.svg",revision:"249fe040428adedb1d5b3bb6811ef492"},{url:"/logos/javascript-original.svg",revision:"de79c8f14c2b0d692ae215d7e6eccd54"},{url:"/logos/mysql.png",revision:"50b9d212cdff4a835591da4d96aeba62"},{url:"/logos/nextjs-original-wordmark-dark.svg",revision:"44fa999d6764e792fb367fe6f1d7f40c"},{url:"/logos/nextjs-original-wordmark.svg",revision:"cf94dbc19fd2df0241310c4116b3bfaa"},{url:"/logos/nodejs-original.svg",revision:"ccb43d3400fb05951c89ad3ba6acd9d5"},{url:"/logos/python-icon.svg",revision:"ffc01dcc015f573d0f1d831fb7b6cbca"},{url:"/logos/react-original.svg",revision:"e9f3d01c242e086f895bde131803b451"},{url:"/logos/sketch.png",revision:"1cfad9750fe485fcb7ca4c3ffc89d825"},{url:"/logos/sqlite-icon.svg",revision:"332417a7f4156fbd6f81615a48286092"},{url:"/logos/tailwindcss.svg",revision:"bb72238ae606c6a04c140445b6f54b25"},{url:"/logos/typescript-original.svg",revision:"56652d3446ec0691d241356d7764802e"},{url:"/logos/unity-black.png",revision:"776903afd009486e6cc6761833baf28a"},{url:"/logos/unity-white.png",revision:"64738901c2794d4789f123cc6d675aab"},{url:"/manifest.json",revision:"05434c9e200086342d401376bc641844"},{url:"/robots.txt",revision:"81098a92f517c8befae783daa1ac8960"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
