// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-KLIhPzF-cmKWT9INtyLsGXaMZPae68I",
  authDomain: "myecom-ce253.firebaseapp.com",
  projectId: "myecom-ce253",
  storageBucket: "myecom-ce253.firebasestorage.app",
  messagingSenderId: "720243452317",
  appId: "1:720243452317:web:6709e13d675e8ed20b6774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }