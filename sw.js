// Minimal service worker to make PWA installable
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Do nothing – just required to register
});
