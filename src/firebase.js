import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFtOcnnw6BjLAUJUHx6HDP8Nb-zv4ghhE",
  authDomain: "clone-8199c.firebaseapp.com",
  projectId: "clone-8199c",
  storageBucket: "clone-8199c.appspot.com",
  messagingSenderId: "467677238185",
  appId: "1:467677238185:web:68a5c24c365d36af4f6ab8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
