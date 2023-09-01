// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJMGn7YzteTvuqMwLxnWLk3tRUn8Jl7yY",
  authDomain: "cinequery-platform.firebaseapp.com",
  projectId: "cinequery-platform",
  storageBucket: "cinequery-platform.appspot.com",
  messagingSenderId: "224714862966",
  appId: "1:224714862966:web:6b1d17dac4709739260a57",
  measurementId: "G-4GRYCE9GV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
