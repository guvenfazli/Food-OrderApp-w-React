import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import {UserProgressContextProvider} from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";

const denemeObj = {students: ['Leila', 'Onur', 'Eren'], workers: ['Güven', 'Hüseyin', 'Dilek']}
const updatedStudens = ['Leila', 'Onur', 'Eren', 'Fevzi']
const newObj = {...denemeObj, students: updatedStudens}
console.log(newObj);

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
