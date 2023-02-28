// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcyMOZyaRRbLRJi32QYwFgX5ZklwA_5bQ",
  authDomain: "auth-1-a6a5a.firebaseapp.com",
  projectId: "auth-1-a6a5a",
  storageBucket: "auth-1-a6a5a.appspot.com",
  messagingSenderId: "802972717148",
  appId: "1:802972717148:web:863553f0df3e304204d699",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailProvider = new EmailAuthProvider();
export { auth, emailProvider };
