import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1Mi5rvjuxzcVk2pNWhRXy-Jf1P8vEVbA",
  authDomain: "project-x-c26c9.firebaseapp.com",
  projectId: "project-x-c26c9",
  storageBucket: "project-x-c26c9.appspot.com",
  messagingSenderId: "191608031912",
  appId: "1:191608031912:web:6a56ed0114758245a3909d",
  measurementId: "G-T2CPNPY5E5"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
