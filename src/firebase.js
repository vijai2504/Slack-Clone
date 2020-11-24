import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe5rYez1rF8s9rDqlmnL4hK3kJeC0KSIM",
    authDomain: "slack-clone-17c77.firebaseapp.com",
    databaseURL: "https://slack-clone-17c77.firebaseio.com",
    projectId: "slack-clone-17c77",
    storageBucket: "slack-clone-17c77.appspot.com",
    messagingSenderId: "1036211157236",
    appId: "1:1036211157236:web:8b6d2910f1d643a9ac46a1",
    measurementId: "G-MNLSJSSGVV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider };
  export default db;
