import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBF71T1t05h78YuTT8uWs2FkpJUV7Aj_2U",
  authDomain: "auth-demo-b021b.firebaseapp.com",
  projectId: "auth-demo-b021b",
  storageBucket: "auth-demo-b021b.appspot.com",
  messagingSenderId: "710127633993",
  appId: "1:710127633993:web:11b0f9f49926fb8c2ae198"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;

export const db = getFirestore(app)
