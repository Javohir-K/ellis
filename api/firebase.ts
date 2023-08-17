import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH2ERieoEKC64xM_hiBn9rkoyYDcq7JLc",
  authDomain: "ielts-mate.firebaseapp.com",
  projectId: "ielts-mate",
  storageBucket: "ielts-mate.appspot.com",
  messagingSenderId: "749422146569",
  appId: "1:749422146569:web:25bc353848adfc03ab74d8",
  measurementId: "G-NCD8P89K2K",

  // apiKey: "AIzaSyCXuK2NsR_XxBWRk-lKciXNNRwCO5az0pY",
  // authDomain: "telegram-alt.firebaseapp.com",
  // projectId: "telegram-alt",
  // storageBucket: "telegram-alt.appspot.com",
  // messagingSenderId: "1024315381789",
  // appId: "1:1024315381789:web:bdcb10a8ada1ed72cf8ef4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth();
const db = app.firestore();

export { db };
