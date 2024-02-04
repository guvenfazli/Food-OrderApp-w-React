import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import {UserProgressContextProvider} from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";


const denemeList = [1,5,2,7,4,9,6,7]

console.log(denemeList.reduce(function(prevNumber, newNumber){
  return prevNumber + newNumber
}, 0))
 



function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
