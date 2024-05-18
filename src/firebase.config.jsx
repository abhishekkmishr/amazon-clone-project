// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV-Fwq0RESeNU7OvboPtxoRjfMSDYyVHo",
  authDomain: "e-clone-b9a7d.firebaseapp.com",
  projectId: "e-clone-b9a7d",
  storageBucket: "e-clone-b9a7d.appspot.com",
  messagingSenderId: "966914410205",
  appId: "1:966914410205:web:36849f2cffd5ce9df73d34",
  measurementId: "G-M82W2S1VWH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
