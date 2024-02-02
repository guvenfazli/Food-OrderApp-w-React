import Meals from './Components/Meals';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import { useState } from 'react';
import { CartContextProvider } from './Store/store.jsx';


function App() {

  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [orderSection, setOrderSection] = useState(false)

  




  return (
    <CartContextProvider>
      <Header openCart={setCartOpen}  cart={cart}/>
      <Cart items={cart} open={cartOpen} modalOption={setCartOpen} editCart={setCart} checkOut={orderSection} checkOutOption={setOrderSection}/>
      <Checkout open={orderSection} modalOption={setOrderSection} items={cart} editCart={setCart}/>
      <Meals cart={cart} addToCart={setCart}/>
    </CartContextProvider>
  );
}

export default App;
