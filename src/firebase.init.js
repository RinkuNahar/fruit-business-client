// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqDb-ookN1NiuyCOYscnJjK78zWlHw_0E",
  authDomain: "fruits-warehouse-40010.firebaseapp.com",
  projectId: "fruits-warehouse-40010",
  storageBucket: "fruits-warehouse-40010.appspot.com",
  messagingSenderId: "750487178111",
  appId: "1:750487178111:web:a6eb8aa28a69274fdce84a",
  measurementId: "G-G0G5TPG2Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;