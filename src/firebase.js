import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUfYLV1DrRBzXE4Un2z-RDMIF09I42fWE",
    authDomain: "chat-app-9eff3.firebaseapp.com",
    projectId: "chat-app-9eff3",
    storageBucket: "chat-app-9eff3.appspot.com",
    messagingSenderId: "804985105521",
    appId: "1:804985105521:web:2e5d330ca6b53feef8ffd0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()