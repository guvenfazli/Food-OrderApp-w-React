import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (meal) => {},
  removeItem: () => {}
});

function cartReducer(state, action){
  if(action.type === 'ADD_ITEM'){
    
    const existedItemIndex = state.items.findIndex((item) => item.id === action.meal.id)

    const updatedList = [...state.items]

    if (existedItemIndex > -1) {
      const currentItem = updatedList[existedItemIndex]
      const updateItem = {
        ...currentItem,
        quantity: currentItem.quantity + 1
      }
      updatedList[existedItemIndex] = updateItem;
    } else {
      updatedList.push({...action.meal, quantity: 1})
    }
    


    return {...state,items: updatedList}
  }

  
  return state
}



export function CartContextProvider({ children }) {
  const [test, dispatchTest] = useReducer(cartReducer, {items: []});

  function addItem(meal){
    dispatchTest({ type: 'ADD_ITEM', meal })
  }

  function removeItem(){
    dispatchTest({ type: 'REMOVE_ITEM' })
  }

  const cartContext = {
    items: test.items,
    addItem,
    removeItem
  }


  console.log(test)


  return (<CartContext.Provider value={cartContext}>{ children }</CartContext.Provider>);
}

export default CartContext;