// import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
// import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Nw1fT3TaJsrt26gI4wy303YYhOQFmCM",
  authDomain: "news-e8334.firebaseapp.com",
  databaseURL:
    "https://news-e8334-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "news-e8334",
  storageBucket: "news-e8334.appspot.com",
  messagingSenderId: "462896905525",
  appId: "1:462896905525:web:f1b65ab4f806eaafdd607c",
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      role: "user",
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
