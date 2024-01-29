export default function Cart(){
  return (
    <dialog className="modal cart" open>
      <h2>Your Cart</h2>
        <ul>

          <li className="cart-item">

            <p>selam</p>

            <div className="cart-item-actions">
              <button>-</button>
              <p>Quantity</p>
              <button>+</button>
            </div>
          </li>

        </ul>
    

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