// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-v2-37387.firebaseapp.com",
  projectId: "insta-next-v2-37387",
  storageBucket: "insta-next-v2-37387.appspot.com",
  messagingSenderId: "681172123915",
  appId: "1:681172123915:web:6f2d8b511863f61d20e20e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);