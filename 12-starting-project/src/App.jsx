import logo from './assets/logo.jpg'
import Meals from './Components/Meals';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


function App() {
  return (
    <>
      <Cart />
      <Checkout />
      
      <div id="main-header">
        <div id='title'>
          <img src={logo} alt="app-logo" id='' /> <h1>REACTFOOD</h1>
        </div>

        <button>Cart</button>
      </div>

      <Meals />
      
    </>
  );
}

export default App;
