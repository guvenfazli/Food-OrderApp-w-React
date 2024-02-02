import { useState, memo } from "react"
import { useContext } from "react"
import CartContext from "../Store/store.jsx"

const Cart = memo(function Cart({editCart,  open, modalOption, checkOutOption}){

  const cartCtx = useContext(CartContext)

  const items = cartCtx.items
  
  let totalPrice = items.map((item) => +(item.price) * +(item.quantity))
  let total = totalPrice.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0)

  function editQuantity(id, quantityOption, index){
    const sameFood = items.find((food) => food.id === id)

    if(quantityOption === ('+')){
        editCart((prev) => {
          const updatedList = prev.map(food =>
            food.id === sameFood.id ? { ...food, quantity: food.quantity + 1 } : food
          );
          return updatedList;
        })
      
    } else if(quantityOption === ('-')){
        editCart((prev) => {
          const updatedList = prev.map(food =>
            food.id === sameFood.id ? { ...food, quantity: food.quantity - 1 } : food
          );

          if(updatedList.some(food => food.quantity === 0)){
            updatedList.splice(index, 1)
          }
          return updatedList;
        })
    }

    
   
  } 

  function proceedToCheckOut(){
    modalOption(false)
    checkOutOption(true)
  }


  
  
  return (
    <dialog className="modal cart" open={open}>
      <h2>Your Cart</h2>
        <ul>
          {items.map((item, index) => 
            <li key={item.id} className="cart-item">
              <p>{item.name} - {item.quantity} x ${item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => editQuantity(item.id, '-', index)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => editQuantity(item.id, '+', index)}>+</button>
              </div>
            </li>
          )}

        </ul>
    

      <div className="cart-total">
        <h2>${total.toFixed(2)}</h2>
      </div>

      <div className="modal-actions">
        <button className="text-button" onClick={() => modalOption(open => !open)}>Close</button>
        <button className="button" onClick={proceedToCheckOut}>Go to Checkout</button>
      </div>
    </dialog>
  )
})

export default Cart;