// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwmctf4IBImgX5lD1I2Dw6erHTNltonJQ",
  authDomain: "zapmail-f50b1.firebaseapp.com",
  projectId: "zapmail-f50b1",
  storageBucket: "zapmail-f50b1.appspot.com",
  messagingSenderId: "1046613775958",
  appId: "1:1046613775958:web:2c4ab8b376602b94820df7",
  measurementId: "G-W5Z142NPCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
