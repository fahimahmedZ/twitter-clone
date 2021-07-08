import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDojNzW3DWe6Cf3Y1YKgVpVmby1k-Hiq0I",
    authDomain: "twitter-clone-b1893.firebaseapp.com",
    projectId: "twitter-clone-b1893",
    storageBucket: "twitter-clone-b1893.appspot.com",
    messagingSenderId: "738717094511",
    appId: "1:738717094511:web:e53b81f8db872792fe739a",
    measurementId: "G-4NJ1N4LZGG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;