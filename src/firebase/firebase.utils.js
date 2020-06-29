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

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if (!userAuth) return

 const userRef = firestore.doc(`users/${userAuth.uid}`)

 const userSnapShot = await userRef.get()

 if (!userSnapShot.exists) {
  const { displayName, email } = userAuth
  const createdAt = new Date()

  try {
   await userRef.set({ displayName, email, createdAt, ...additionalData })
  } catch (error) {
   console.log('error creating user', error.message)
  }
 }

 return userRef
}

export const addCollectionAndDocuments = async (
 collectionKey,
 objectsToAdd
) => {
 const collectionRef = firestore.collection(collectionKey)

 const batch = firestore.batch()
 objectsToAdd.forEach((obj) => {
  const newDocRef = collectionRef.doc()
  batch.set(newDocRef, obj)
 })

 return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
 const transformedCollection = collections.docs.map((doc) => {
  const { title, items } = doc.data()

  return {
   routeName: encodeURI(title.toLowerCase()),
   id: doc.id,
   title,
   items,
  }
 })

 return transformedCollection.reduce((accumulator, collection) => {
  accumulator[collection.title.toLowerCase()] = collection
  return accumulator
 }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
