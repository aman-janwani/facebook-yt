import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-0doTme_8slOJUYxvKlDjqnv18y_nR-I",
    authDomain: "facebook-yt-789f1.firebaseapp.com",
    projectId: "facebook-yt-789f1",
    storageBucket: "facebook-yt-789f1.appspot.com",
    messagingSenderId: "796971581039",
    appId: "1:796971581039:web:147ca3b765bfbd3edf579a",
    measurementId: "G-9JLB5HB1PG"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage}