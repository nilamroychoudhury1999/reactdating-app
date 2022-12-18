import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSjVHU6fsx9_M411NuqA_bcePYcriEwWA",
  authDomain: "chat-815e9.firebaseapp.com",
  databaseURL: "https://chat-815e9-default-rtdb.firebaseio.com",
  projectId: "chat-815e9",
  storageBucket: "chat-815e9.appspot.com",
  messagingSenderId: "947436858101",
  appId: "1:947436858101:web:17191e422f21d8bd6ab3bc",
  measurementId: "G-MV8Y55FTJE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
