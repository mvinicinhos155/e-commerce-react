import React from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const ChekoutButton = ({setCartItems, cartItems}) => {


    const navigate = useNavigate();
    
    const hendleCheckout = () => {

        

        if (cartItems.length > 0) {
            toast.success("Compra finalizada com sucesso")

            navigate("/thank-you", {state: { cartItems }})


            setCartItems([]);

          } else {
            toast.error("Seu carrinho está vazio")
          }
    }
  return (
   <button onClick={hendleCheckout}>Finalizar a Compra</button>
  )
}

export default ChekoutButton
