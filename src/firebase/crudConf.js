import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTO7cHYdRTElT-oKD8Nqu5vmADL4S9Djg",
    authDomain: "restoran-33701.firebaseapp.com",
    projectId: "restoran-33701",
    storageBucket: "restoran-33701.appspot.com",
    messagingSenderId: "226026720648",
    appId: "1:226026720648:web:884da77b51836e90e27e3d",
    measurementId: "G-JZWWH69Y1W"
};

export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);