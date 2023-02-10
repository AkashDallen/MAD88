// Check if service worker is supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('Service Worker: Registered', reg);
        })
        .catch((err) => console.log(`Service Worker: Error: ${err}`));
    });
  }