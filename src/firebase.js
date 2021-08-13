import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDDgls7vhV3Q8Tq9AuGwxwI5PeHGj3ATqM",
    authDomain: "posts-artigos-linkedin.firebaseapp.com",
    projectId: "posts-artigos-linkedin",
    storageBucket: "posts-artigos-linkedin.appspot.com",
    messagingSenderId: "973345750640",
    appId: "1:973345750640:web:a05485302c33c4d0eabeb5"
};

firebase.initializeApp(firebaseConfig)

export default firebase