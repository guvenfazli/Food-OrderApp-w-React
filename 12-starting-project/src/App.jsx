import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";
import NewHeader from "./Components/NewHeader";


function App() {

  
  
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <NewHeader />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
