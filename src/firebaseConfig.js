// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBheGXnUupT3WbtMcEqTk7WkEqN735QENg",
  authDomain: "react-firebase-auth-822cd.firebaseapp.com",
  projectId: "react-firebase-auth-822cd",
  storageBucket: "react-firebase-auth-822cd.appspot.com",
  messagingSenderId: "885031927121",
  appId: "1:885031927121:web:66e957725766d26bdd6770"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app