import logo from './assets/logo.jpg'
import Meals from './Components/Meals';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { useState } from 'react';


function App() {

  const [cart, setCart] = useState([])


  return (
    <>
      <Cart items={cart}/>
      <Checkout />
      
      <div id="main-header">
        <div id='title'>
          <img src={logo} alt="app-logo" id='' /> <h1>REACTFOOD</h1>
        </div>

        <button>Cart({cart.length})</button>
      </div>

      <Meals cart={cart} addToCart={setCart}/>
      {console.log(cart)}
    </>
  );
}

export default App;
