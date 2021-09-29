import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCjHTgoDym2NBrmZGkBunuTCi5W6EBZurc",
	authDomain: "twitter-clone-5240d.firebaseapp.com",
	projectId: "twitter-clone-5240d",
	storageBucket: "twitter-clone-5240d.appspot.com",
	messagingSenderId: "1065527134242",
	appId: "1:1065527134242:web:cdc996599b6bdfd14da27b",
};

// init firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// using db
const db = firebaseApp.firestore();

// export db
export default db;
