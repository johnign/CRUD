// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCmh45syBm4-S4uVEPPrEzRSU3fYzViFI",
  authDomain: "crud-988cb.firebaseapp.com",
  projectId: "crud-988cb",
  storageBucket: "crud-988cb.appspot.com",
  messagingSenderId: "72300201609",
  appId: "1:72300201609:web:999d73a7b83a41fc2fe858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);