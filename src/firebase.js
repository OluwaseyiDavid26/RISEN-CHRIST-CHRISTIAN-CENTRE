import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrmRlj1dA-BiNgKBqFziKK_Ej6mfFrd9Q",
  authDomain: "the-christ-empire.firebaseapp.com",
  databaseURL: "https://the-christ-empire-default-rtdb.firebaseio.com",
  projectId: "the-christ-empire",
  storageBucket: "the-christ-empire.firebasestorage.app",
  messagingSenderId: "921185060845",
  appId: "1:921185060845:web:cc572d3d5fd80c858149e4",
  measurementId: "G-WHS5CE2GB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
