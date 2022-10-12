// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEvWla0t3KVNbzg165DL9OYqtbOOehS4U",
  authDomain: "ignition-valo.firebaseapp.com",
  projectId: "ignition-valo",
  storageBucket: "ignition-valo.appspot.com",
  messagingSenderId: "847769990627",
  appId: "1:847769990627:web:ab8f469300bdc3d0e7dcd6",
  measurementId: "G-R25NRP4YME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);
const db = getDatabase(app);
const storage = getStorage(app);
// const storageLogo = getStorage(app, "gs://ignition-valo.appspot.com/logos");
// const storagePayment = getStorage(
//   app,
//   "gs://ignition-valo.appspot.com/payments"
// );, storageLogo, storagePayment
const analytics = getAnalytics(app);

//
// const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, fs, db, auth, storage };

export default firebaseConfig;
