import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCyBY05c1hAOPHpMla8bT7cseOTELT2_bk",
  authDomain: "eventbrite-4934a.firebaseapp.com",
  databaseURL: "https://eventbrite-4934a-default-rtdb.firebaseio.com",
  projectId: "eventbrite-4934a",
  storageBucket: "eventbrite-4934a.appspot.com",
  messagingSenderId: "6066830353",
  appId: "1:6066830353:web:0ddd34466bd8d7eaaf85b0"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const database = getDatabase();
export const provider = new GoogleAuthProvider();
export const facebookAuthProvider = new GoogleAuthProvider();
