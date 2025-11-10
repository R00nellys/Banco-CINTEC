
const firebaseConfig = {
  apiKey: "AIzaSyCIuz4S5EEE_R4Xw2OHXeaqcqJFuG5ATaU",
  authDomain: "banco-cintec.firebaseapp.com",
  databaseURL: "https://banco-cintec-default-rtdb.firebaseio.com",
  projectId: "banco-cintec",
  storageBucket: "banco-cintec.firebasestorage.app",
  messagingSenderId: "48060543391",
  appId: "1:48060543391:web:9210459a2cd5c96833cdaa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();