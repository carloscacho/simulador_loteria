// instalar o sw
self.addEventListener('install', evt => {
  console.log('service worker está instalado');
})

// ativar o sw
self.addEventListener('activate', evt => {
  console.log('sw está ativado');
})
