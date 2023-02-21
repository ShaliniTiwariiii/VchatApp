
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDUiCr90C_BqO8ncMWNO4tme3EVR3ZjV0k",
  authDomain: "chat-b9355.firebaseapp.com",
  projectId: "chat-b9355",
  storageBucket: "chat-b9355.appspot.com",
  messagingSenderId: "79414478739",
  appId: "1:79414478739:web:205eadc6874f28f4654a66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage()
export const db = getFirestore()