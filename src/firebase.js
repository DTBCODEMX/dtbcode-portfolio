// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGWa6OhlzHjoQL-BNjopKshzY30XljZ_Q",
    authDomain: "eventplanner-76147.firebaseapp.com",
    projectId: "eventplanner-76147",
    storageBucket: "eventplanner-76147.appspot.com",
    messagingSenderId: "21504407999",
    appId: "1:21504407999:web:8594ecb250cf929b0a090a",
    measurementId: "G-S93529SQJP"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth y Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Exportar auth y googleProvider
export { auth, googleProvider };