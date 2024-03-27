import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Catálogo from './components/Catálogo';

import CartPage from './components/CartPage';
import Thankyou from './components/Thank-you';
import { useState } from 'react';
import Product from './pages/Product';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IoHome } from "react-icons/io5";
import { AiFillCarryOut } from "react-icons/ai";


function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddcart = (product, quantity) => {
    setCartItems((prevItems) => {
      //se não tiver nada, adiciono o item
      //se existir algo, incremento a quantidade

      const itemExists = prevItems.find((item) => item.id === product.id);

      if(itemExists) {
        toast.info(`Quantidade do item${product.name} atualizada.`)
        return prevItems.map((item) => item.id === product.id ? {...item, quantity:item.quantity + quantity} : item
        
        )
      }else {
        toast.success(`${product.name} adicionado com sucesso!!!`)
        return [...prevItems, {...product, quantity}];
      }
    });
  };

  const hendleUpdatecard = (product, quantity) => {
    toast.info(`Quantidade do item${product.name} atualizada.`)
  setCartItems((prevItems) => {
    return prevItems.map((item) => 
    item.id === product.id ? {...item, quantity: +quantity} : item
    )
  })
  }

  const handlRemove = (product) => {
    toast.error(`${product.name} foi removido com sucesso!`)
    setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== product.id) 
    );
  };
  return (
   <BrowserRouter>
   <nav>
    <Link to="/"><IoHome/></Link>
    <Link to="/Cart"><AiFillCarryOut/></Link>
   </nav>
   <div className='container'>
   <Routes>
    <Route path='/' element={<Catálogo onAddtoCart={handleAddcart}/>}/>
    <Route path='/Cart' element={<CartPage onUpdatecart={hendleUpdatecard} setCartItems={setCartItems}
     onCheckout={() => {
      if (cartItems.length > 0) {
        toast.success("Compra finalizada com sucesso")
        setCartItems([]);
      } else {
        toast.error("Seu carrinho está vazio")
      }
    }} onRomove={handlRemove} cartItems={cartItems}/>}/>
    <Route path='/Thank-you' element={<Thankyou/>}/>
   </Routes>
   </div>
   <ToastContainer 
   position='top-center'
   autoClose={3000}
   hideProgressBar={false}
   closeOnClick
   pauseOnFocusLoss
   pauseOnHover
   />
   </BrowserRouter>
  )
}

export default App
