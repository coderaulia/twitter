import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCjHTgoDym2NBrmZGkBunuTCi5W6EBZurc",
	authDomain: "twitter-clone-5240d.firebaseapp.com",
	projectId: "twitter-clone-5240d",
	storageBucket: "twitter-clone-5240d.appspot.com",
	messagingSenderId: "1065527134242",
	appId: "1:1065527134242:web:cdc996599b6bdfd14da27b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;
