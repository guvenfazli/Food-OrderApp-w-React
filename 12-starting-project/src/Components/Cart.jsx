export default function Cart(){
  return (
    <dialog className="modal cart" open>
      <h2>Your Cart</h2>
      <div className="cart-item cart-item-actions">
        <ul className="cart-item-actions">
          <p>selam</p>
          <button>-</button>
          <p>Quantity</p>
          <button>+</button>
        </ul>
      </div>

      <div className="cart-total">
        <h2>$53.97</h2>
      </div>

      <div className="modal-actions">
        <button className="text-button">Close</button>
        <button className="button">Go to Checkout</button>
      </div>
    </dialog>
  )
}