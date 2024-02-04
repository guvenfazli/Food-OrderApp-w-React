import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import {UserProgressContextProvider} from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";


const denemeList = ["Güven", "Ahmet", "Mehmet", "Batuhan", "Kemal", "Leila"]

const sortedList = denemeList.sort()

console.log(sortedList)





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
