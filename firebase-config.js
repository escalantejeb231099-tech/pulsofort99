// Configuración Oficial de Firebase - PulsoFort99
const firebaseConfig = {
  apiKey: "AIzaSyCo1I8axr3ZeCPpkfSo4AVh4Wf_DTsPcJY",
  authDomain: "pulsofort99-43aab.firebaseapp.com",
  projectId: "pulsofort99-43aab",
  storageBucket: "pulsofort99-43aab.firebasestorage.app",
  messagingSenderId: "189367484625",
  appId: "1:189367484625:web:d4c068ef2fb92a42af45f0",
  measurementId: "G-95CS87HN5E"
};

// Inicializar Firebase Compat y Firestore
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
