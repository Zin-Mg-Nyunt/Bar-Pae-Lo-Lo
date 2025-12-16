import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAQewBtBWxhefLzrJaGCIAUE9xRjC3qlOI',
  authDomain: 'bar-pae-lo-lo.firebaseapp.com',
  projectId: 'bar-pae-lo-lo',
  storageBucket: 'bar-pae-lo-lo.firebasestorage.app',
  messagingSenderId: '619979797714',
  appId: '1:619979797714:web:1a672f1ce5f65dc18e290b',
}

// app init
const app = initializeApp(firebaseConfig)
// database/firestore init
let db = getFirestore(app)

export { db }
