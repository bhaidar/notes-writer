import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init
const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_KEY_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_KEY_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID
}

firebase.initializeApp(config)

// firebase db
const db = firebase.firestore()

// firebase auth
const auth = firebase.auth()

// firebase collections
const notesCollection = db.collection('notes')

export {
  auth,
  db,
  firebase,
  notesCollection
}
