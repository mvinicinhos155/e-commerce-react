import React, { useState } from 'react'

const Product = ({product, onAddtoCart}) => {

  const [quantity, setQuantity] = useState(1);
  return (
    <div className='product'>
      
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <div className="cart-button">
      <select onChange={(e) => setQuantity(parseInt(e.target.value))}>
        {[...Array(10).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>{x + 1}</option>
        ))}
      </select>
      <button onClick={() => onAddtoCart(product, quantity)}>Adicionar ao Carrinho</button>
      </div>

    </div>
  )
}

export default Product
