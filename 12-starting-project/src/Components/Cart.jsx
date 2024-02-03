import { memo } from "react"
import { useContext } from "react"
import CartContext from "../Store/store.jsx"
import CartItem from "./CartItem.jsx"

const Cart = memo(function Cart({  open, modalOption, checkOutOption}){

  const cartCtx = useContext(CartContext)

  const items = cartCtx.items
  
  let totalPrice = items.map((item) => +(item.price) * +(item.quantity))
  let total = totalPrice.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0)


  function proceedToCheckOut(){
    modalOption(false)
    checkOutOption(true)
  }

  return (
    <dialog className="modal cart" open={open}>
      <h2>Your Cart</h2>
        <ul>
          {items.map((item, index) => 
            <CartItem index={index} key={item.id} item={item}/>
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