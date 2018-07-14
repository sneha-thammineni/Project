import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC7wiKAmoV-jr9TIzB_2f2k0ZEo90ONtBM",
    authDomain: "blog-project-cms.firebaseapp.com",
    databaseURL: "https://blog-project-cms.firebaseio.com",
    projectId: "blog-project-cms",
    storageBucket: "blog-project-cms.appspot.com",
    messagingSenderId: "974693051517"
}

const firebaseRef = firebase.initializeApp(firebaseConfig)
const FirebaseBaseRef = firebaseRef.database()

export { FirebaseBaseRef, firebaseRef }

