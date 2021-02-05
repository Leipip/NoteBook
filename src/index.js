import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import firebase from "firebase";

const firebase = require('firebase/app');
require('firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgkQ2K9TrUgcToqmd_y-mt-7kXas51ABI",
  authDomain: "notebook-12807.firebaseapp.com",
  projectId: "notebook-12807",
  storageBucket: "notebook-12807.appspot.com",
  messagingSenderId: "967120550211",
  appId: "1:967120550211:web:8bea95a5e273f8b6fed7f6",
  measurementId: "G-86SKPJ296Q"
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig); 
//firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
