import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEuGPjo61-idoEZGboCH7RrSzUrkZyZCw",
    authDomain: "mvp-app-333622.firebaseapp.com",
    databaseURL: "https://mvp-app-333622-default-rtdb.firebaseio.com",
    projectId: "mvp-app-333622",
    storageBucket: "mvp-app-333622.appspot.com",
    messagingSenderId: "184078052646",
    appId: "1:184078052646:web:d02486255ddd8162bbe5e7",
    measurementId: "G-ZDSG6WZ2MZ"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore()

export { firestore }


