// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZc21pCQXT0HqxYqoKpViYQCfcG1906C8",
  authDomain: "ph-12-as.firebaseapp.com",
  projectId: "ph-12-as",
  storageBucket: "ph-12-as.appspot.com",
  messagingSenderId: "277156987892",
  appId: "1:277156987892:web:a695f97becc1b14d2fefa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth