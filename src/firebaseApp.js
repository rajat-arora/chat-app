import * as firebase from 'firebase'

// Initialize Firebase
 const config = {
    apiKey: "AIzaSyDsevEcaVceobQbUm9reVjhyOu4H56272U",
    authDomain: "chat-app-f1a64.firebaseapp.com",
    databaseURL: "https://chat-app-f1a64.firebaseio.com",
    projectId: "chat-app-f1a64",
    storageBucket: "",
    messagingSenderId: "412778616021"
  };



export const firebaseApp =  firebase.initializeApp(config);
//will listen to any databse changes and update in realtime
export const eventsRef = firebaseApp.database().ref().child('events');
