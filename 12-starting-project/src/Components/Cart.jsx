import { useState } from "react"

export default function Cart({editCart, items, open, modalOption}){

  
  let totalPrice = items.map((item) => +(item.price) * +(item.quantity))
  let total = totalPrice.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0)

  function editQuantity(id, quantityOption){
    const sameFood = items.find((food) => food.id === id)

    if(quantityOption === ('+')){
      if(items.some((foodId) => foodId.id === sameFood.id)){
        editCart((prev) => {
          const updatedList = prev.map(food =>
            food.id === sameFood.id ? { ...food, quantity: food.quantity + 1 } : food
          );
          return updatedList;
        })
      }
    } else if(quantityOption === ('-')){
      if(items.some((foodId) => foodId.id === sameFood.id)){
        editCart((prev) => {
          const updatedList = prev.map(food =>
            food.id === sameFood.id ? { ...food, quantity: food.quantity - 1 } : food
          );
          return updatedList;
        })
      }
    }

    
 
  }


  
  
  return (
    <dialog className="modal cart" open={open}>
      <h2>Your Cart</h2>
        <ul>
          {items.map((item) => 
            <li key={item.id} className="cart-item">
              <p>{item.name} - {item.quantity} x ${item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => editQuantity(item.id, '-')}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => editQuantity(item.id, '+')}>+</button>
              </div>
            </li>
          )}

        </ul>
    

      <div className="cart-total">
        <h2>${total.toFixed(2)}</h2>
      </div>

      <div className="modal-actions">
        <button className="text-button" onClick={() => modalOption(open => !open)}>Close</button>
        <button className="button" onClick={() => modalOption(open => !open)}>Go to Checkout</button>
      </div>
    </dialog>
  )
}