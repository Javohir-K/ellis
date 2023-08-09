import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXuK2NsR_XxBWRk-lKciXNNRwCO5az0pY",
  authDomain: "telegram-alt.firebaseapp.com",
  projectId: "telegram-alt",
  storageBucket: "telegram-alt.appspot.com",
  messagingSenderId: "1024315381789",
  appId: "1:1024315381789:web:bdcb10a8ada1ed72cf8ef4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = app.firestore();

export { app, auth, db };
