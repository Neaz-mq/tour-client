// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTjWzuU18gOwr64SuYqbP_8eijmtp6B-o",
  authDomain: "tour-client-94c4d.firebaseapp.com",
  projectId: "tour-client-94c4d",
  storageBucket: "tour-client-94c4d.appspot.com",
  messagingSenderId: "994689418922",
  appId: "1:994689418922:web:4a5b45ee488738df08f2d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;