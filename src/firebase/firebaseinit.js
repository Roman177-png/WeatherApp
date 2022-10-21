// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "api_Key",
  authDomain: "weatherapp-41de0.firebaseapp.com",
  projectId: "weatherapp-41de0",
  storageBucket: "weatherapp-41de0.appspot.com",
  messagingSenderId: "messagingSenderId",
  appId: "appId"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();