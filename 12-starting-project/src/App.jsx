import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import {UserProgressContextProvider} from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";


const denemeList = [1,5,2,7,4,9,6,7]

const bigNumbers = denemeList.reduce((initial, newValue) => {
  return initial + newValue
}, 0)

console.log(bigNumbers)





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
