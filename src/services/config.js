import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcOVvBmo5sCTjH8kIi4m7S_tUnq1kNd0k",
  authDomain: "cmb-final.firebaseapp.com",
  projectId: "cmb-final",
  storageBucket: "cmb-final.firebasestorage.app",
  messagingSenderId: "1096753782990",
  appId: "1:1096753782990:web:0099c92eb3102b9dccb09f",
  measurementId: "G-4K3N2QNPCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);