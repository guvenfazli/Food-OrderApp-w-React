import { useContext } from "react"
import CartContext from "../Store/store.jsx"

export default function CartItem({item, index}){
  
  const cartCtx = useContext(CartContext)

  function addMore(){
    cartCtx.addMore(item)
  }

  function removeMore(){
    cartCtx.removeItem(item, index)
  }
  
  
  return (
    <li key={item.id} className="cart-item">
      <p>{item.name} - {item.quantity} x ${item.price}</p>
      <div className="cart-item-actions">
        <button onClick={removeMore}>-</button>
        <p>{item.quantity}</p>
        <button onClick={addMore}>+</button>
      </div>
  </li>
  )
}