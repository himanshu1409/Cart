import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZvMZmvm40PTnOm6cGiYW23GJfAQaOnWc",
  authDomain: "cart-6bc4c.firebaseapp.com",
  projectId: "cart-6bc4c",
  storageBucket: "cart-6bc4c.appspot.com",
  messagingSenderId: "733398947409",
  appId: "1:733398947409:web:017bdf4a5a84ce129dca70",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
