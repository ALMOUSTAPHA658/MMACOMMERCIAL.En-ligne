const CACHE_NAME = 'mon-site-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/site.css',
  '/site.js',
  '/https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css',
  // Ajoute ici toutes les ressources nécessaires
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});