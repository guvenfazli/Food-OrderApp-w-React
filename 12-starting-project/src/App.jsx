import logo from './assets/logo.jpg'
import Meals from './Components/Meals';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { useState } from 'react';


function App() {

  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)


  return (
    <>
      <Cart items={cart} open={cartOpen} modalOption={setCartOpen} editCart={setCart}/>
      <Checkout />
      
      <div id="main-header">
        <div id='title'>
          <img src={logo} alt="app-logo" id='' /> <h1>REACTFOOD</h1>
        </div>

        <button onClick={() => setCartOpen(prev => !prev)}>Cart({cart.length})</button>
      </div>

      <Meals cart={cart} addToCart={setCart}/>
      {cart.map((row) => <p>{row.name}</p>)}
    </>
  );
}

export default App;
