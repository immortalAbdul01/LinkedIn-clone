import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCIHFykwjnoiPz8VXWDjUCLJR8N9P-7pLM",
    authDomain: "linkedin-fe1d4.firebaseapp.com",
    projectId: "linkedin-fe1d4",
    storageBucket: "linkedin-fe1d4.appspot.com",
    messagingSenderId: "142724186012",
    appId: "1:142724186012:web:bca26326f3cb4fe8dad259"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }
