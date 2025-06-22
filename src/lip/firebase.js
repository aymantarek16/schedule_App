// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAyHpMVN-n4R9jBwz4VpmW4RaZjcTuk1IE",
  authDomain: "schedule-app-4b4bf.firebaseapp.com",
  projectId: "schedule-app-4b4bf",
  storageBucket: "schedule-app-4b4bf.firebasestorage.app",
  messagingSenderId: "764864454506",
  appId: "1:764864454506:web:db101a5e9c1c4509c68f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
