import { takeLatest, put, all, call } from 'redux-saga/effects'

import {
 googleSignInSuccess,
 googleSignInFailure,
 emailSignInSuccess,
 emailSignInFailure,
} from './user.actions'

import {
 googleProvider,
 auth,
 createUserProfileDocument,
} from '../../firebase/firebase.utils'

import UserActionTypes from './user.types'

//googleSignIn
export function* signInWithGoogle() {
 try {
  const { user } = yield auth.signInWithPopup(googleProvider)
  const userRef = yield call(createUserProfileDocument, user)
  const userSnapShot = yield userRef.get()
  yield put(
   googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
  )
 } catch (error) {
  yield put(googleSignInFailure(error))
 }
}

export function* onGoogleSignInStart() {
 yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// emailSignIn
export function* signInWithEmail({ payload: { email, password } }) {
 try {
  const { user } = yield auth.signInWithEmailAndPassword(email, password)
  const userRef = yield call(createUserProfileDocument, user)
  const userSnapShot = yield userRef.get()
  yield put(emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
 } catch (error) {
  yield put(emailSignInFailure(error))
 }
}

export function* onEmailSignInStart() {
 yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

//All userSagas
export function* userSagas() {
 yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}
