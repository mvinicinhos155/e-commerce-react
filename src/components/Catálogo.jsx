import { useState, useEffect } from 'react'
import productsData from '../data/products_mock.json'
import Product from '../pages/Product'

const Catálogo = ({onAddtoCart}) => {


  return (
    <div>
      <h1>Catálogo do Produto</h1>

      <div className='product-container'>
        {productsData.map((product) => (
          <Product key={product.id} product={product} onAddtoCart={onAddtoCart}/>
        ))}
      </div>
    </div>
  )
}

export default Catálogo
