import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: 0,
  addItem: () => {},
  removeItem: (id) => {}
});

function cartReducer(state, action){
  if(action.type === 'ADD_ITEM'){
    console.log(state)
  }

  

 


}

export function CartContextProvider({ children }) {
  const [test, dispatchTest] = useReducer(cartReducer, 0);

  function addItem(){
    dispatchTest({ type: 'ADD_ITEM' })
  }

  const cartContext = {
    items: test,
    addItem
  }





  return <CartContext.Provider value={cartContext}>{ children }</CartContext.Provider>;
}

export default CartContext;