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

const test = denemeList.map((row) => {return row})
console.log(test);

function App() {

  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [orderSection, setOrderSection] = useState(false)





  return (
    <>

      <Header openCart={setCartOpen}  cart={cart}/>
   
      <Cart items={cart} open={cartOpen} modalOption={setCartOpen} editCart={setCart} checkOut={orderSection} checkOutOption={setOrderSection}/>
      <Checkout open={orderSection} modalOption={setOrderSection} items={cart} editCart={setCart}/>
   


      <Meals cart={cart} addToCart={setCart}/>
      

    </>
  );
}

export default App;
