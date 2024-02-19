// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBXFcfQ67HOdJUVlorAroAt7VtK0YTlW_0",
  authDomain: "to-do-6ad96.firebaseapp.com",
  projectId: "to-do-6ad96",
  storageBucket: "to-do-6ad96.appspot.com",
  messagingSenderId: "146026572887",
  appId: "1:146026572887:web:96fc837f8bb5081a1a4712",
  measurementId: "G-S2L59MD61P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
