import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD_AON9faP1shRlYSysfBQeOzlQtEnA004",
  authDomain: "book-santa-4bf01.firebaseapp.com",
  projectId: "book-santa-4bf01",
  storageBucket: "book-santa-4bf01.appspot.com",
  messagingSenderId: "806339403769",
  appId: "1:806339403769:web:74a92e89d5ef9417386728"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
