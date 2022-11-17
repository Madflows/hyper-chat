import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDefJ7Rtcj_x8-28Xzv7_2fMX7uKD_uJE8",
  authDomain: "hyper-9334a.firebaseapp.com",
  projectId: "hyper-9334a",
  storageBucket: "hyper-9334a.appspot.com",
  messagingSenderId: "322445462413",
  appId: "1:322445462413:web:4cd2791e2c004c1c454bc4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
};
