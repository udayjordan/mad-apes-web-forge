const CACHE_NAME = 'mad-apes-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/lovable-uploads/3f216b3a-574a-4027-94ec-a29bc88ff1f1.png',
  // Add other important assets to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
