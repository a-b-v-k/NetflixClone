import firebase from 'firebase/compat/app'
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB0ffPKJqac9L0fPmZhEA4WlrI-p5TH6oA",
    authDomain: "netflix-e1a36.firebaseapp.com",
    projectId: "netflix-e1a36",
    storageBucket: "netflix-e1a36.appspot.com",
    messagingSenderId: "478750858204",
    appId: "1:478750858204:web:b169fa73252a64c80b8d19",
    measurementId: "G-HVTWRVHV71"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();