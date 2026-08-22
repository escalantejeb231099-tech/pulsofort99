importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AQUÍ_VA_TU_API_KEY_REAL",
    authDomain: "pulsofort99.firebaseapp.com",
    projectId: "pulsofort99",
    storageBucket: "pulsofort99.appspot.com",
    messagingSenderId: "189367484625",
    appId: "AQUÍ_VA_TU_APP_ID_REAL"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification.title || "PulsoFort99";
    const options = {
        body: payload.notification.body,
        icon: 'https://i.postimg.cc/pVsx2bBr/IMG-20250608-151525.jpg'
    };
    self.registration.showNotification(title, options);
});
