import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC-OMDFTc4B66LPUluEDGYn3pxOi3C-NQU",
    authDomain: "fir-tut-88f58.firebaseapp.com",
    projectId: "fir-tut-88f58",
    storageBucket: "fir-tut-88f58.firebasestorage.app",
    messagingSenderId: "57315523285",
    appId: "1:57315523285:web:a22afef1e5df9f3da4405c",
    measurementId: "G-7HMEL3SLDC"
  };

  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);