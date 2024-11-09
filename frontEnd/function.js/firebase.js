// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGaU4MncSoFjnLNFeIk1qV03cgshY-MiY",
  authDomain: "studentplatform-3f413.firebaseapp.com",
  projectId: "studentplatform-3f413",
  storageBucket: "studentplatform-3f413.firebasestorage.app",
  messagingSenderId: "821611163102",
  appId: "1:821611163102:web:66b7f9e2010b5b444fc14f",
  measurementId: "G-BEM7L9CN30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);