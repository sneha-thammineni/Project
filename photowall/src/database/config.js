import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyBR23qT_moQEwcFoWNjCnE-hogIJjFaYQY",
    authDomain: "photogallery-63a07.firebaseapp.com",
    databaseURL: "https://photogallery-63a07.firebaseio.com",
    projectId: "photogallery-63a07",
    storageBucket: "photogallery-63a07.appspot.com",
    messagingSenderId: "905895891998"
  };
  // Method which takes arguments
  firebase.initializeApp(config)

  const database = firebase.database()
  export {database}