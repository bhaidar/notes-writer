import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init
const config = {
  apiKey: 'AIzaSyDp-bR4548vdmUdRiQoK-ztzr71xZQMYVU',
  authDomain: 'notes-writer-app.firebaseapp.com',
  databaseURL: 'https://notes-writer-app.firebaseio.com',
  projectId: 'notes-writer-app',
  storageBucket: 'notes-writer-app.appspot.com',
  messagingSenderId: '61384645071',
  appId: '1:61384645071:web:900b17a3b4e4a689fbdaba'
}

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

// firebase collections
const notesCollection = db.collection('notes')

export {
  firebase,
  db,
  notesCollection
}
