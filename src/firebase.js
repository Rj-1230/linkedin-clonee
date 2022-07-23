import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyARTTL55yah0M1B4Jb4yoatzUdQwSgNKrw",
    authDomain: "linkedin-clone-444c5.firebaseapp.com",
    projectId: "linkedin-clone-444c5",
    storageBucket: "linkedin-clone-444c5.appspot.com",
    messagingSenderId: "136800801688",
    appId: "1:136800801688:web:85d3d286eb84d27f0d11ed",
    measurementId: "G-J0WXW9V0C2"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};

  export default db;
