
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvR0QKmuGJk0ncqz_D-ibabFrsLyI5gPQ",
  authDomain: "markhosts-fe550.firebaseapp.com",
  projectId: "markhosts-fe550",
  storageBucket: "markhosts-fe550.appspot.com",
  messagingSenderId: "915904831323",
  appId: "1:915904831323:web:0b5733c608cb4e6336847e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
