import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwUi9-dZ3UKdh7AACKK_flJLqdv1jaUsU",
  authDomain: "cmb2-1a856.firebaseapp.com",
  projectId: "cmb2-1a856",
  storageBucket: "cmb2-1a856.firebasestorage.app",
  messagingSenderId: "219530490373",
  appId: "1:219530490373:web:fd6eac81f4c85825cfa26c",
  measurementId: "G-FE616CZFCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);