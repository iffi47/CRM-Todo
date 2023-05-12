import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBfMBVVcfaAcalCeNIOWGJiqhwSN1eh708',
  authDomain: 'todo-app-23f95.firebaseapp.com',
  projectId: 'todo-app-23f95',
  storageBucket: 'todo-app-23f95.appspot.com',
  messagingSenderId: '35911787113',
  appId: '1:35911787113:web:4672c05765700039d238f8'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
//initialize auth
const auth = getAuth(app)

export { auth }
