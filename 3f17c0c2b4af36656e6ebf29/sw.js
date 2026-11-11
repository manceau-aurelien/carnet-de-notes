// Le site github.io est partagé avec d'autres jeux : on ne touche qu'aux caches qui portent ce préfixe.
const CACHE_PREFIX = 'bricks-test-';
const CACHE_NAME = CACHE_PREFIX + 'v2';
const PRECACHE_URLS = [
  './',
  './index.html',
  './css/style.css',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './js/i18n.js',
  './js/data-en.js',
  './js/data-fr.js',
  './js/online.js',
  './js/changelog.js',
  './js/testmode.js',
  './js/install.js',
  './js/boss.js',
  './js/game.js',
];
// Bibliothèque du compte en ligne, chargée depuis un CDN : gardée en cache pour que le jeu démarre hors ligne.
const SUPABASE_LIB = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all([
        cache.addAll(PRECACHE_URLS),
        cache.add(SUPABASE_LIB).catch(() => {}), // pas bloquant : le jeu marche aussi sans le compte
      ])
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => (k.startsWith(CACHE_PREFIX) || k === 'bricks-v1') && k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Réseau d'abord pour recevoir les mises à jour, cache si hors ligne.
   Seuls les fichiers du jeu et la bibliothèque du compte sont gérés ici :
   les appels au serveur (connexion, amis, messages) passent sans intermédiaire. */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const sameSite = url.origin === self.location.origin;
  const isLib = event.request.url === SUPABASE_LIB;
  if (!sameSite && !isLib) return;
  event.respondWith(
    fetch(event.request.url, { cache: 'no-cache', credentials: sameSite ? 'same-origin' : 'omit' })
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
