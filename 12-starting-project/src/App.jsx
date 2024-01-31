import Meals from './Components/Meals';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import { useState } from 'react';

const denemeList = [
  {name: 'Güven', country: 'Spain', age: 25},
  {name: 'Leila', country: 'Spain', age: 21},
  {name: 'Onur', country: 'Germany', age: 25}
]



function App() {

  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [orderSection, setOrderSection] = useState(false)





  return (
    <>
      <Cart items={cart} open={cartOpen} modalOption={setCartOpen} editCart={setCart} checkOut={orderSection} checkOutOption={setOrderSection}/>
      <Checkout open={orderSection} modalOption={setOrderSection} items={cart} editCart={setCart}/>
      <Header openCart={setCartOpen}  cart={cart}/>
   

   


      <Meals cart={cart} addToCart={setCart}/>
      

    </>
  );
}

export default App;
