import React from 'react'

const CartItem = ({item, onUpdatecart, onRomove}) => {
  return (
    <div className='cart-item'>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <div className="cart-buttom">
        <input type="text" value={item.quantity} onChange={(e) => onUpdatecart(item, parseInt(e.target.value))}/>
        <button onClick={() => onRomove(item)}>Remover</button>
      </div>
    </div>
  )
}

export default CartItem
