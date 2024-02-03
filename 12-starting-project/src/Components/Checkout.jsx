import { useContext } from "react"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../utils/formatting"
import Input from "./UI/Input"
import Button from "./UI/Button"
import UserProgressContext from "../store/UserProgressContext"
import Modal from "./UI/Modal"


export default function Checkout() {

  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })


  }

  return (
    <Modal onClose={handleClose} open={userProgressCtx.progress === 'checkout'}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amnount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="zip-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>

  )
}