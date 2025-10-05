const CACHE_NAME = 'qrshare-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './js/qrcode.min.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    if (r) return r;
    try {
      const res = await fetch(e.request);
      const cache = await caches.open(CACHE_NAME);
      cache.put(e.request, res.clone());
      return res;
    } catch (err) {
      return r || Response.error();
    }
  })());
});