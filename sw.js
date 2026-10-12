const CACHE_NAME = 'tutorflow-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalacja SW
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Zwracanie plików - jeśli offline, ładuje z cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
