import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.js";

const initializeFirebase = () => {
    initializeApp(firebaseConfig)
} 

export default initializeFirebase;