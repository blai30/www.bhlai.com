if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-0fa786a5"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/M48UU1gEkyMURmQfImYPO/_buildManifest.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/M48UU1gEkyMURmQfImYPO/_ssgManifest.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/chunks/80-d4a2294984bf8cee7d43.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/chunks/main-1bf15395e52f7ee027b4.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/chunks/pages/_app-c6b39e66116a62eeb2bc.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/chunks/pages/_error-427550e7fd13948f32d1.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/chunks/pages/index-81dbee58c81f14de5dad.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/chunks/polyfills-0091d5e6717fc86a95d0.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/chunks/webpack-672781b4256b347cef75.js",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/_next/static/css/3ba76c7b3590ab9cc2bb.css",revision:"M48UU1gEkyMURmQfImYPO"},{url:"/favicon.ico",revision:"beb061bdc5fc94d991fa1cf281f33fd4"},{url:"/favicon.png",revision:"44044b5ffd6045ab958692326a85f729"},{url:"/favicon.svg",revision:"cfb582f1174d2b107440fc1547831ab6"},{url:"/hero.png",revision:"44044b5ffd6045ab958692326a85f729"},{url:"/icons/icon-128x128.png",revision:"44044b5ffd6045ab958692326a85f729"},{url:"/icons/icon-144x144.png",revision:"b68df3635b6b5f8c845b79328f35d376"},{url:"/icons/icon-152x152.png",revision:"cc6ab063c13ae042b3ee0daba2a4f503"},{url:"/icons/icon-192x192.png",revision:"741512b46f1bd7a6db0c9270d5ff2abf"},{url:"/icons/icon-384x384.png",revision:"d10567a6f797465c2bb71fad69e01701"},{url:"/icons/icon-512x512.png",revision:"163ba17f3c65683829f791fca8c227d5"},{url:"/icons/icon-72x72.png",revision:"31490543d50a9af88769f0595e1f0968"},{url:"/icons/icon-96x96.png",revision:"10633a3ef136107b3f6b653cdc005e60"},{url:"/images/projects/asuka.png",revision:"3469be020ef8b2bacac916da3010fe7e"},{url:"/images/projects/bayspace.png",revision:"a615407f3e7238100b64d1889607a1ec"},{url:"/images/projects/bomberman.png",revision:"dd4048e44812879eef666334656f778f"},{url:"/images/projects/infection.png",revision:"5d750c960123434867f1cb502b011fe7"},{url:"/images/projects/jrpg-turnbased.jpg",revision:"ba243d03575e6cb4f05c3f9ee1a7801e"},{url:"/images/projects/mecha.png",revision:"8aee7cad0af9965ea546a440c4be11a7"},{url:"/images/projects/picar.png",revision:"a3f50bb404cc3db25f672377f2e699c5"},{url:"/images/projects/rpg.png",revision:"cf13cda1abceb53c69c051131abe0bf0"},{url:"/images/projects/tankgame.png",revision:"5de542d411317d450f2528d68a5522cf"},{url:"/images/projects/textmorph.png",revision:"a4394714b7b54a5d036dd1e0cb04fc75"},{url:"/logos/Blazor.png",revision:"3846f5db2fd3d065804b3bfa4735444b"},{url:"/logos/angular.svg",revision:"5c69e565f1ae6d7717fb3ecd2be004ad"},{url:"/logos/aws-dark.svg",revision:"fa79a7ca20adcdcebb4018b300ecea14"},{url:"/logos/aws.svg",revision:"259e1339a21cf9a16881f722296cb704"},{url:"/logos/blender.png",revision:"536189d7bcecb2518657a1e97f63ddbc"},{url:"/logos/bootstrap-logo.svg",revision:"88eef7f3c2bcf988457a0e6d123c3f1d"},{url:"/logos/c-original.svg",revision:"3505d536922da9f20d0ce457cfb7775a"},{url:"/logos/cplusplus-original.svg",revision:"a5d9bc3d587f95ced9864a8481979bcd"},{url:"/logos/csharp-original.svg",revision:"c6961b79062b431cb39106d60635832d"},{url:"/logos/css3-original.svg",revision:"a70a7e3e545f3ddc5707d4c4da8cfa17"},{url:"/logos/docker.png",revision:"da489ef8465c7d8b4a8be117d3692bd1"},{url:"/logos/dotnet.svg",revision:"afe88915b28caa9b114736d3ef5603fe"},{url:"/logos/figma.svg",revision:"8ce4b2ae77e64456653418da389d22b2"},{url:"/logos/git-original.svg",revision:"c02b7da93fea7f472b89583e23f12759"},{url:"/logos/google-cloud.svg",revision:"d87afdbbe428325cf72483d9eaeda8f6"},{url:"/logos/html5-original.svg",revision:"7997c4244e7a8cf2b160803e1c741502"},{url:"/logos/java-icon.svg",revision:"249fe040428adedb1d5b3bb6811ef492"},{url:"/logos/javascript-original.svg",revision:"de79c8f14c2b0d692ae215d7e6eccd54"},{url:"/logos/mysql.png",revision:"d76ff1872d0f758b4739fdd4d27d0cac"},{url:"/logos/nextjs-original-wordmark-dark.svg",revision:"56644e231eb7c4955de828fd4a52576a"},{url:"/logos/nextjs-original-wordmark.svg",revision:"2479156dd1740cd3451dabc0c0f9284c"},{url:"/logos/nodejs-original.svg",revision:"ccb43d3400fb05951c89ad3ba6acd9d5"},{url:"/logos/python-icon.svg",revision:"ffc01dcc015f573d0f1d831fb7b6cbca"},{url:"/logos/react-original.svg",revision:"e9f3d01c242e086f895bde131803b451"},{url:"/logos/sketch.png",revision:"1243a97529297d9449451ec9ec1aa021"},{url:"/logos/sqlite-icon.svg",revision:"332417a7f4156fbd6f81615a48286092"},{url:"/logos/tailwindcss.svg",revision:"bb72238ae606c6a04c140445b6f54b25"},{url:"/logos/typescript-original.svg",revision:"56652d3446ec0691d241356d7764802e"},{url:"/logos/unity-black.png",revision:"237d5d3fa67a57e77da547884f28acca"},{url:"/logos/unity-white.png",revision:"9ff4b3690edc33fdfa3b705c7686e5b6"},{url:"/manifest.json",revision:"c5eaa11153148dccf6041cf4a4a09147"},{url:"/robots.txt",revision:"81098a92f517c8befae783daa1ac8960"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));