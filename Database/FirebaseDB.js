// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlHgM0DbDuZ7-67i0hN5dbXS_gaeXpK5o",
    authDomain: "rent-app-2d4fe.firebaseapp.com",
    projectId: "rent-app-2d4fe",
    storageBucket: "rent-app-2d4fe.appspot.com",
    messagingSenderId: "267748910164",
    appId: "1:267748910164:web:b147555a43836832a5f9c1",
    measurementId: "G-J7ZTETD05R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{auth};