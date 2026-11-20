// Service worker ringkas: cukup untuk "Add to Home Screen".
// API & video tak di-cache langsung (data live sentiasa dari server).
const C = 'fs-shell-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.add('/')).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return; // biar browser urus biasa
  e.respondWith(fetch(e.request).catch(() => caches.match('/')));
});
