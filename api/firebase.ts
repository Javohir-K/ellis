import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCH2ERieoEKC64xM_hiBn9rkoyYDcq7JLc",
  authDomain: "ielts-mate.firebaseapp.com",
  projectId: "ielts-mate",
  storageBucket: "ielts-mate.appspot.com",
  messagingSenderId: "749422146569",
  appId: "1:749422146569:web:25bc353848adfc03ab74d8",
  measurementId: "G-NCD8P89K2K",


};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };
