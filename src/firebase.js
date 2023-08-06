import {initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/analytic';
import 'firebase/performance';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzXZtQOafCGLAAEcrzQx9BnL9SuuALmEc",
  authDomain: "recoded-facebook-d511b.firebaseapp.com",
  projectId: "recoded-facebook-d511b",
  storageBucket: "recoded-facebook-d511b.appspot.com",
  messagingSenderId: "917106966426",
  appId: "1:917106966426:web:a06a29269ff78caf040423",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
