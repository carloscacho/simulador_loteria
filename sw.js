const cacheName = 'loteria'
const files = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',

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
  console.log('sw está ativado');
})

// fetch events
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
})
