importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

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

