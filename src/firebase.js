import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
        apiKey: "AIzaSyDi3oTEAEmHSUuPKK8AVlbjzZmcWpGuUEQ",
        authDomain: "disneyplus-app-b0ade.firebaseapp.com",
        projectId: "disneyplus-app-b0ade",
        storageBucket: "disneyplus-app-b0ade.appspot.com",
        messagingSenderId: "329438521619",
        appId: "1:329438521619:web:e172a5e4aaefe0044b52e6",
        measurementId: "G-M3D8VMSVQV",      
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage  = firebase.storage();

export { auth, provider };
export default db;