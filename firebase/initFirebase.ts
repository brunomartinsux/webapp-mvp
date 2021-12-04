import { getApps, initializeApp } from 'firebase/app'


import 'firebase/auth'
import 'firebase/firestore'


const clientCredentials = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

export default function initFirebase(): void {

    if (!getApps().length) {
        initializeApp(clientCredentials)
    }

    console.log('teste de logg')
    
}