// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apikey = process.env.REACT_APP_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: apikey,
  authDomain: "fir-firebase-221e9.firebaseapp.com",
  projectId: "fir-firebase-221e9",
  storageBucket: "fir-firebase-221e9.appspot.com",
  messagingSenderId: "951476803629",
  appId: "1:951476803629:web:d20e0f36ff1cb70fa080a4",
  measurementId: "G-R2CJ5G0HSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, firebaseConfig as default };
