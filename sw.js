const cacheName = 'loteria-v1'
const files = [
  '/simulador_loteria/',
  '/simulador_loteria/index.html',
  '/simulador_loteria/style.css',
  '/simulador_loteria/script.js',
  '/simulador_loteria/imagens/icons/favicon.ico',
  'https://cdn.jsdelivr.net/npm/sweetalert2@10'
]

// instalar o sw
self.addEventListener('install', evt => {
  //inciar o cache
  evt.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("colocando arquivos no cache");
      cache.addAll(files)
    })
  );
});

// ativar o sw
self.addEventListener('activate', evt => {
  //console.log('sw está ativado');
  evt.waitUntil(caches.keys().then(keys => {
    return Promise.all(keys
      .filter(key => key !== cacheName)
      .map(key => caches.delete(key))
    )
  }))
})

// fetch events
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
})
