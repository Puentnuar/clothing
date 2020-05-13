import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
 apiKey: 'AIzaSyDuyBAfq3v6m7ntBAa31cluya-3F0douvA',
 authDomain: 'crwn-00001.firebaseapp.com',
 databaseURL: 'https://crwn-00001.firebaseio.com',
 projectId: 'crwn-00001',
 storageBucket: 'crwn-00001.appspot.com',
 messagingSenderId: '987640575875',
 appId: '1:987640575875:web:8d2377ab4f92ad2a80a8b6',
 measurementId: 'G-9WR4QKR1CN',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
