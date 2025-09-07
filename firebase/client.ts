// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA_befA2KX2X2Q-vcnEa8lSJiNnuKvh_4",
    authDomain: "prepwise-f7281.firebaseapp.com",
    projectId: "prepwise-f7281",
    storageBucket: "prepwise-f7281.firebasestorage.app",
    messagingSenderId: "480233996535",
    appId: "1:480233996535:web:9ef0c501b563a3818e53f2",
    measurementId: "G-6LPK69D6SR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);