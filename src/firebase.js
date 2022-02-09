import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC7p2EMDf745M5vjsUZV4vqnSBA4Zf8Syg",
    authDomain: "flipkart-project-319f6.firebaseapp.com",
    projectId: "flipkart-project-319f6",
    storageBucket: "flipkart-project-319f6.appspot.com",
    messagingSenderId: "823628231402",
    appId: "1:823628231402:web:88afdcc9d2238bed891d93"
  };


 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 const auth = firebase.auth();

 export { db , auth};