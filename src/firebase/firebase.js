import * as firebase from 'firebase';
  
const baseconfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(baseconfig)

const db = firebase.database()

export {firebase, googleProvider, db as default}