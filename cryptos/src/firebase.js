// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4ap5adjoa06DwNhR3rscybXtTYECOT4",
  authDomain: "crypto-part1.firebaseapp.com",
  projectId: "crypto-part1",
  storageBucket: "crypto-part1.appspot.com",
  messagingSenderId: "860592685621",
  appId: "1:860592685621:web:b51aa2774822f9e38ce77c",
  measurementId: "G-MB9FRXMHXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);