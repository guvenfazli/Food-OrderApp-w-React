import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (meal) => {},
  removeItem: () => {},
  addMore: () => {},
  removeItem: () => {},
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

  if(action.type === 'ADD_MORE'){
    const existedItemIndex = state.items.findIndex((item) => item.id === action.meal.id)

    const updatedList = [...state.items]

    if (existedItemIndex > -1) {
      const currentItem = updatedList[existedItemIndex]
      const updateItem = {
        ...currentItem,
        quantity: currentItem.quantity + 1
      }
      updatedList[existedItemIndex] = updateItem;
    }

    return {...state,items: updatedList}

  }

  if(action.type === 'REMOVE_MORE'){
    const existedItemIndex = state.items.findIndex((item) => item.id === action.meal.id)

    const updatedList = [...state.items]

    if (existedItemIndex > -1) {
      const currentItem = updatedList[existedItemIndex]
      const updateItem = {
        ...currentItem,
        quantity: currentItem.quantity - 1
      }
      updatedList[existedItemIndex] = updateItem;
    }

    if(updatedList[existedItemIndex].quantity === 0){
      updatedList.splice(existedItemIndex, 1)
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

  function addMore(meal){
    dispatchTest({ type: 'ADD_MORE', meal })
  }

  function removeItem(meal, index){
    dispatchTest({ type: 'REMOVE_MORE', meal, index })
  }

  const cartContext = {
    items: test.items,
    addItem,
    removeItem,
    addMore,
    removeItem
  }


  console.log(test)


  return (<CartContext.Provider value={cartContext}>{ children }</CartContext.Provider>);
}

export default CartContext;