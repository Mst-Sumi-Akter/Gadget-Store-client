

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAympKdeuSKVc20CtBbNKVRddAf9Vn3YNw",
  authDomain: "gaget-store.firebaseapp.com",
  projectId: "gaget-store",
  storageBucket: "gaget-store.firebasestorage.app",
  messagingSenderId: "758627061462",
  appId: "1:758627061462:web:1ec8fd89019f7d7a474377",
  measurementId: "G-L7S8VRNC5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();
