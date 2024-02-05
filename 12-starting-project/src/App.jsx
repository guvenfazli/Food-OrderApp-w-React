import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";


const denemeList = [
  { name: 'Güven', age: 25, country: 'Spain' },
  { name: 'Leila', age: 21, country: 'Spain' },
  { name: 'Fevzi', age: 21, country: 'Poland' },
  { name: 'Onur', age: 25, country: 'Germany' }
]






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
