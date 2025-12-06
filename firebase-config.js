// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2tdSM2wvibgVztT34daOBE0FYKTTIBF4",
  authDomain: "tabungan-702cd.firebaseapp.com",
  databaseURL: "https://tabungan-702cd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tabungan-702cd",
  storageBucket: "tabungan-702cd.firebasestorage.app",
  messagingSenderId: "1089401460941",
  appId: "1:1089401460941:web:5dcef23cd37963bef0b184"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);