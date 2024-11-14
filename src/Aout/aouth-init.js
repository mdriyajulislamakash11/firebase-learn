// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzUsWCbULSuYz5noqJtGLVIYmDazFUVpg",
  authDomain: "email-password-aouth.firebaseapp.com",
  projectId: "email-password-aouth",
  storageBucket: "email-password-aouth.firebasestorage.app",
  messagingSenderId: "247982307303",
  appId: "1:247982307303:web:d72d3727f974f2a5596f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);