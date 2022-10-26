// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_pAGwhk9qPignHo-II_oNIJ8qZ5EJXZk",
  authDomain: "la-university.firebaseapp.com",
  projectId: "la-university",
  storageBucket: "la-university.appspot.com",
  messagingSenderId: "218110464167",
  appId: "1:218110464167:web:97be0eb267c2d4d6ba8b82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app