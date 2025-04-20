import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAemShN-igBNv_4Ybv6DWSolgBozz_pu28",
  authDomain: "expertizo-1.firebaseapp.com",
  projectId: "expertizo-1",
  storageBucket: "expertizo-1.firebasestorage.app",
  messagingSenderId: "275526068487",
  appId: "1:275526068487:web:8cdd8c6d28564097853da2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
