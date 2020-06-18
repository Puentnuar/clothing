import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
 CartDropdownContainer,
 CartDropdownButton,
 EmptyMessageContainer,
 CartItemsContainer,
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
 <CartDropdownContainer>
  <CartItemsContainer>
   {cartItems.length ? (
    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
   ) : (
    <EmptyMessageContainer> Your cart is empty </EmptyMessageContainer>
   )}
  </CartItemsContainer>
  <CartDropdownButton
   onClick={() => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
   }}
  >
   GO TO CHECKOUT
  </CartDropdownButton>
 </CartDropdownContainer>
)

const mapStateToProprs = (state) => ({
 cartItems: selectCartItems(state),
})

export default withRouter(connect(mapStateToProprs)(CartDropdown))
