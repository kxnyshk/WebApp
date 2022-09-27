import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmnejm0_IuScpQa8KWHknF2XvdGUBzlMk",
  authDomain: "chatapp1172.firebaseapp.com",
  projectId: "chatapp1172",
  storageBucket: "chatapp1172.appspot.com",
  messagingSenderId: "750223527229",
  appId: "1:750223527229:web:9f2795ca32c6373ffb0954",
  measurementId: "G-0FFEG2VTGX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();