// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjZs2hE1UCKty3MThw-RB_qs76ffbRyOI",
  authDomain: "parametric-solutions.firebaseapp.com",
  projectId: "parametric-solutions",
  storageBucket: "parametric-solutions.firebasestorage.app",
  messagingSenderId: "242297285629",
  appId: "1:242297285629:web:300d6c46448223596f0794",
  measurementId: "G-6SKE2J1W65"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
