// instalar o sw
self.addEventListener('install', evt => {
  console.log('service worker está instalado');
})

// ativar o sw
self.addEventListener('activate', evt => {
  console.log('sw está ativado');
})

// fetch events
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
})

let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  //btnAdd.style.display = 'block'
});
