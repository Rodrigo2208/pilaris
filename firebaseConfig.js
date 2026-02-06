// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhgpnRaPnTocDl4_LHJetdSQ-I_YKkO28",
  authDomain: "loja-comunitaria-2568b.firebaseapp.com",
  projectId: "loja-comunitaria-2568b",
  storageBucket: "loja-comunitaria-2568b.appspot.com", // ✅ CORRIGIDO
  messagingSenderId: "190744887053",
  appId: "1:190744887053:web:60eb0f376720a00b48ba44"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
