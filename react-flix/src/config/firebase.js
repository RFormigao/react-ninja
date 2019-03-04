"use strict";

import firebase from "firebase";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAzf8iFVonpO4umIXrlxRTI9IHeBxWlf20",
  authDomain: "reactflix-9a5bc.firebaseapp.com",
  databaseURL: "https://reactflix-9a5bc.firebaseio.com",
  projectId: "reactflix-9a5bc",
  storageBucket: "reactflix-9a5bc.appspot.com",
  messagingSenderId: "468197492655"
});

const db = firebase.database();

export { db };
