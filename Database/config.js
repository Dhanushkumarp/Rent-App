import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig={
    apiKey: "AIzaSyAlHgM0DbDuZ7-67i0hN5dbXS_gaeXpK5o",
    authDomain: "rent-app-2d4fe.firebaseapp.com",
    projectId: "rent-app-2d4fe",
    storageBucket: "rent-app-2d4fe.appspot.com",
    messagingSenderId: "267748910164",
    appId: "1:267748910164:web:b147555a43836832a5f9c1",
    measurementId: "G-J7ZTETD05R"
};

// const app = firebase.initializeApp(firebaseConfig);

// // export const auth = app.auth();
// export const db = app.firestore();
// // export const storage = app.storage();

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};