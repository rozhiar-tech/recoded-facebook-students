import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzXZtQOafCGLAAEcrzQx9BnL9SuuALmEc",
  authDomain: "recoded-facebook-d511b.firebaseapp.com",
  projectId: "recoded-facebook-d511b",
  storageBucket: "recoded-facebook-d511b.appspot.com",
  messagingSenderId: "917106966426",
  appId: "1:917106966426:web:a06a29269ff78caf040423",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
