import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import {UserProgressContextProvider} from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
