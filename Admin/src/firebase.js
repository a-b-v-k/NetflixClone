import firebase from 'firebase/compat/app'
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxx"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
