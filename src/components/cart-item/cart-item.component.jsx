import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
 <div className='cart-item'>
  <img src={imageUrl} alt='item' />
  <div className='item-details'>
   <span clasName='name'>{name}</span>
   <span clasName='price'>
    {quantity} x ${price}
   </span>
  </div>
 </div>
)

export default CartItem
