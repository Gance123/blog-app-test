 /*eslint-disable*/

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmT4KM6WBJpCVokp8Z3C2HKrcUPbEeNnk",
  authDomain: "blog-f9d6d.firebaseapp.com",
  projectId: "blog-f9d6d",
  storageBucket: "blog-f9d6d.appspot.com",
  messagingSenderId: "554286731249",
  appId: "1:554286731249:web:1aeb9c1165d0cf7e1dfe50",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

//reactとfirebaseをくっつける、接着剤のようなファイル（+初期化）
