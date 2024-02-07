import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (meal) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  testRed: false,
  testReducer: () => {},

});

function cartReducer(state,action) {
  if(action.type === 'ADD_ITEM'){
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const updatedItems = [...state.items]

    if(existingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + 1
      }
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {  
      updatedItems.push({...action.item, quantity: 1})
    }


    return {...state, items: updatedItems};
  }

  if(action.type === 'REMOVE_ITEM'){
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    if(existingCartItem.quantity === 1){
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity - 1}
      updatedItems[existingCartItemIndex] = updatedItem;

    };

    if(action.type === 'CLEAR_CART'){
      return {...state, items: []};
    }

    return {...state, items: updatedItems};
  }

  if(action.type === 'TEST_REDUCER'){
    state = !state
  }



  return state

}

export function CartContextProvider({children}){
  
  const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

  const [testReduce, dispatchTestReduce] = useReducer(cartReducer, false)

  function addItem(item) {
    dispatchCartAction({type: 'ADD_ITEM', item})
  }

  function removeItem(id) {
    dispatchCartAction({type: 'REMOVE_ITEM', id})
  }

  function clearCart(){
    dispatchCartAction({type: 'CLEAR_CART'})
  }

  function testReducer(){
    dispatchTestReduce({type: 'TEST_REDUCER'})
  }



  const cartContext = {
    items: cart.items,
    testRed: testReduce,
    testReducer,
    addItem,
    removeItem,
    clearCart,
  }
  
  
  
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}









export default CartContext;