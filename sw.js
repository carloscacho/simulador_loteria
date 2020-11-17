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

export const pwaTrackingListeners = () => {
  const fireAddToHomeScreenImpression = event => {
    fireTracking("Add to homescreen shown");
    //will not work for chrome, untill fixed
    event.userChoice.then(choiceResult => {
      fireTracking(`User clicked ${choiceResult}`);
    });
    //This is to prevent `beforeinstallprompt` event that triggers again on `Add` or `Cancel` click
    window.removeEventListener(
      "beforeinstallprompt",
      fireAddToHomeScreenImpression
    );
  };
  window.addEventListener("beforeinstallprompt", fireAddToHomeScreenImpression);

  //Track web app install by user
  window.addEventListener("appinstalled", event => {
    fireTracking("PWA app installed by user!!! Hurray");
  });

  //Track from where your web app has been opened/browsed
  window.addEventListener("load", () => {
    let trackText;
    if (navigator && navigator.standalone) {
      trackText = "Launched: Installed (iOS)";
    } else if (matchMedia("(display-mode: standalone)").matches) {
      trackText = "Launched: Installed";
    } else {
      trackText = "Launched: Browser Tab";
    }
    fireTracking(track);
  });
};
