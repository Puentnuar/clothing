import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handChange, label, ...otherProps }) => (
 <div className='group'>
  <input className='form-input' onChange={handChange} {...otherProps}></input>
  {label ? (
   <label
    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
   >
    {label}
   </label>
  ) : null}
 </div>
)

export default FormInput
