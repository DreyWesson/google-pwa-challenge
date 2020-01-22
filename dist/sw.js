importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "17ca9489ded5448c33568f3bea8e69ad"
  },
  {
    "url": "images/logo.png",
    "revision": "b3d7c4eaefdd3d30e348a56d8048bf68"
  },
  {
    "url": "images/touch/icon-128x128.png",
    "revision": "c2c8e1400d6126ea32eaac29009733a9"
  },
  {
    "url": "images/touch/icon-144x144.png",
    "revision": "04a7ee95ae73a1f79de7d07c6aa3650b"
  },
  {
    "url": "images/touch/icon-152x152.png",
    "revision": "9b90dc6940c458dab220857588999cf4"
  },
  {
    "url": "images/touch/icon-192x192.png",
    "revision": "571f134f59f14a6d298ddd66c015b293"
  },
  {
    "url": "images/touch/icon-256x256.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/touch/icon-384x384.png",
    "revision": "bf5a6af439e1352483f676aafdc11da2"
  },
  {
    "url": "images/touch/icon-512x512.png",
    "revision": "dfa6b9189c7380731c21166a155ecad5"
  },
  {
    "url": "images/touch/icon-72x72.png",
    "revision": "da910a15a3bbc9a7aecc35168fc6a315"
  },
  {
    "url": "images/touch/icon-96x96.png",
    "revision": "c49a37be52fbb3f47778993c6a478d0d"
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

