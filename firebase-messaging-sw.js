importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCo1I8axr3ZeCPpkfSo4AVh4Wf_DTsPcJY",
  authDomain: "pulsofort99-43aab.firebaseapp.com",
  projectId: "pulsofort99-43aab",
  storageBucket: "pulsofort99-43aab.firebasestorage.app",
  messagingSenderId: "189367484625",
  appId: "1:189367484625:web:d4c068ef2fb92a42af45f0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || payload.data?.title || "PulsoFort99";
    const body = payload.notification?.body || payload.data?.body || "Nueva alerta deportiva disponible.";
    
    const options = {
        body: body,
        icon: 'https://i.postimg.cc/pVsx2bBr/IMG-20250608-151525.jpg',
        badge: 'https://i.postimg.cc/pVsx2bBr/IMG-20250608-151525.jpg',
        vibrate: [200, 100, 200, 100, 400],
        tag: 'pulsofort-notif',
        renotify: true
    };

    self.registration.showNotification(title, options);
});
