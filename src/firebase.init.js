// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd9CnMmOP5wT6jp_JAIeE_SU83h2kLm6g",
    authDomain: "doctors-portal-16850.firebaseapp.com",
    projectId: "doctors-portal-16850",
    storageBucket: "doctors-portal-16850.appspot.com",
    messagingSenderId: "817547217200",
    appId: "1:817547217200:web:181a8a245b3ab54d6420f5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
