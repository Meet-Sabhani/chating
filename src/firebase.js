import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjruqRgfwQpLv3c2zZiWav0IRWT122zjg",
  authDomain: "chat-c3b3d.firebaseapp.com",
  projectId: "chat-c3b3d",
  storageBucket: "chat-c3b3d.appspot.com",
  messagingSenderId: "1066158328986",
  appId: "1:1066158328986:web:a07cb528128d42d7642323",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
