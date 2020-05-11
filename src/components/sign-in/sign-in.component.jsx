import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

class SignIn extends React.Component {
 constructor(props) {
  super(props)

  this.state = {
   email: '',
   password: '',
  }
 }

 handleSubmit = (event) => {
  event.preventDefault()

  this.state({ email: '', password: '' })
 }

 handleChange = (event) => {
  const { name, value } = event.target

  this.state({ [name]: value })
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
      handleChange={this.handleChange}
      value={this.state.email}
      required
     ></FormInput>

     <FormInput
      name='password'
      type='password'
      label='password'
      value={this.state.password}
      handleChange={this.handleChange}
      required
     ></FormInput>

     <CustomButton type='submit'> SIGN IN</CustomButton>
    </form>
   </div>
  )
 }
}

export default SignIn
