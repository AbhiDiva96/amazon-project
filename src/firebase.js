// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to us// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyABagjddEP2KGsuT4tg4MvGizMVnrUrWKA",
  authDomain: "clone-amaz9.firebaseapp.com",
  projectId: "clone-amaz9",
  storageBucket: "clone-amaz9.appspot.com",
  messagingSenderId: "261718044954",
  appId: "1:261718044954:web:e5f16a71ef019ffcc33ca3",
  measurementId: "G-JW8HMJ506N"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};