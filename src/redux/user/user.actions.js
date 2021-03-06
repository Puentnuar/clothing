import UserActionTypes from './user.types'

//Start Actions
export const googleSignInStart = () => ({
 type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = (emailAndPassword) => ({
 type: UserActionTypes.EMAIL_SIGN_IN_START,
 payload: emailAndPassword,
})

export const signOutStart = () => ({
 type: UserActionTypes.SIGN_OUT_START,
})

export const signUpStart = (userCredentials) => ({
 type: UserActionTypes.SIGN_UP_START,
 payload: userCredentials,
})
//END Start Actions

//Success Actions
export const signInSuccess = (user) => ({
 type: UserActionTypes.SIGN_IN_SUCCESS,
 payload: user,
})

export const signOutSuccess = () => ({
 type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signUpSuccess = ({ user, additionalData }) => ({
 type: UserActionTypes.SIGN_UP_SUCCESS,
 payload: { user, additionalData },
})

//END Success Actions

//Failure Actions
export const signInFailure = (error) => ({
 type: UserActionTypes.SIGN_IN_FAILURE,
 payload: error,
})

export const signOutFailure = (error) => ({
 type: UserActionTypes.SIGN_OUT_FAILURE,
 payload: error,
})

export const signUpFailure = (error) => ({
 type: UserActionTypes.SIGN_UP_FAILURE,
 payload: error,
})

//END Failure Actions

export const checkUserSession = () => ({
 type: UserActionTypes.CHECK_USER_SESSION,
})
