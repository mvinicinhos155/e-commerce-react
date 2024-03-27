import React from 'react'
import CartItem from '../pages/CartItem'
import ChekoutButton from '../pages/ChekoutButton'

const CartPage = ({cartItems, onUpdatecart, onRomove, setCartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  )
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (<p>Não há item no Carrinho</p>) : (
        <>
          {cartItems.map((item) =>(
            <CartItem key={item.id} onRomove={onRomove} item={item} onUpdatecart={onUpdatecart}/>
          ))}
          <div className='total'>
            <p>Total: {totalPrice}</p>
            <ChekoutButton cartItems={cartItems} setCartItems={setCartItems}/>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
