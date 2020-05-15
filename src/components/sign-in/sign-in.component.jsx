import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
 constructor(props) {
  super(props)

  this.state = {
   email: '',
   password: '',
  }
 }

 handleSubmit = async (event) => {
  event.preventDefault()

  const { email, password } = this.state

  try {
   await auth.signInWithEmailAndPassword(email, password)
   this.state({ email: '', password: '' })
  } catch (error) {
   console.log('error in sign-in.component', error.message)
  }
 }

 handleChange = (event) => {
  const { name, value } = event.target

  this.setState({ [name]: value })
 }

 render() {
  return (
   <div className='sign-in'>
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={this.handleSubmit}>
     <FormInput
      name='email'
      type='email'
      label='email'
      handChange={this.handleChange}
      value={this.state.email}
      required
     ></FormInput>

     <FormInput
      name='password'
      type='password'
      label='password'
      value={this.state.password}
      handChange={this.handleChange}
      required
     ></FormInput>

     <div className='buttons'>
      <CustomButton type='submit'>SIGN IN</CustomButton>
      <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
       {' '}
       SIGN IN WITH GOOGLE
      </CustomButton>
     </div>
    </form>
   </div>
  )
 }
}

export default SignIn
