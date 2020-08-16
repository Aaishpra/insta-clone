import firebase from "firebase";
   
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDC0e1V2XAythQzV8Iz8bBH7UvboQ_x2_8",
    authDomain: "insta-clone-react-b74f1.firebaseapp.com",
    databaseURL: "https://insta-clone-react-b74f1.firebaseio.com",
    projectId: "insta-clone-react-b74f1",
    storageBucket: "insta-clone-react-b74f1.appspot.com",
    messagingSenderId: "319731203550",
    appId: "1:319731203550:web:f50014f411ddf6b193f14f",
    measurementId: "G-NVSRQNV56N"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
 
export { db, auth, storage };