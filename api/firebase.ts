import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Firebase project config here...
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth();
const db = app.firestore();

export { db };
