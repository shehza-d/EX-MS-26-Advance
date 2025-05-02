import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAemShN-igBNv_4Ybv6DWSolgBozz_pu28",
  authDomain: "expertizo-1.firebaseapp.com",
  projectId: "expertizo-1",
  storageBucket: "expertizo-1.firebasestorage.app",
  messagingSenderId: "275526068487",
  appId: "1:275526068487:web:8cdd8c6d28564097853da2",
};

// front end per env variables secure ho hi nhi sagty

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
