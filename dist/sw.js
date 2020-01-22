importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "images/logo.png",
    "revision": "b3d7c4eaefdd3d30e348a56d8048bf68"
  },
  {
    "url": "images/touch/icon-128x128.png",
    "revision": "c2c8e1400d6126ea32eaac29009733a9"
  },
  {
    "url": "images/touch/icon-192x192.png",
    "revision": "571f134f59f14a6d298ddd66c015b293"
  },
  {
    "url": "images/touch/icon-256x256.png",
    "revision": "848055c2f5d42b0c405cff37739261e9"
  },
  {
    "url": "images/touch/icon-384X384.png",
    "revision": "a1be08eac51e8ff734a337b90ddc1c16"
  },
  {
    "url": "images/touch/icon-512x512.png",
    "revision": "b3d7c4eaefdd3d30e348a56d8048bf68"
  },
  {
    "url": "index.html",
    "revision": "17ca9489ded5448c33568f3bea8e69ad"
  }
]);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https://hacker-news.firebaseio.com/v0/*'),
  new workbox.strategies.NetworkFirst({
    networkTimetoutSeconds: 5,
    cacheName: 'stories',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 300,
        maxAgeSeconds: 5 * 60, // 5 minutes
      })
    ]
})
);

workbox.routing.registerRoute(
  new RegExp('https://cdn.polyfill.io/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'polyfills'
  })
)

