import firebase from 'firebase' ;
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBhjlVF6jkv8uXoTm-1NmH424V5f_5sctE",
    authDomain: "bed-time-stories-20cff.firebaseapp.com",
    databaseURL: "https://bed-time-stories-20cff-default-rtdb.firebaseio.com",
    projectId: "bed-time-stories-20cff",
    storageBucket: "bed-time-stories-20cff.appspot.com",
    messagingSenderId: "354418703511",
    appId: "1:354418703511:web:00249a465f7d0350743dd2"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();