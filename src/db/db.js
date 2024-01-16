
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ0xzNO-inciNdugPiqrvhY-JjNA8FIsw",
  authDomain: "preentregablanco.firebaseapp.com",
  projectId: "preentregablanco",
  storageBucket: "preentregablanco.appspot.com",
  messagingSenderId: "276133286346",
  appId: "1:276133286346:web:c2a5d483243c681d267f33"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db