export default function Cart({items, open, modalOption}){
  return (
    <dialog className="modal cart" open={open}>
      <h2>Your Cart</h2>
        <ul>
          {items.map((item) => 
            <li key={item.id} className="cart-item">
              <p>{item.name} - {item.quantity} x ${item.price}</p>
              <div className="cart-item-actions">
                <button>-</button>
                <p>{item.quantity}</p>
                <button>+</button>
              </div>
            </li>
          )}

        </ul>
    

      <div className="cart-total">
        <h2>TOTAL</h2>
      </div>

      <div className="modal-actions">
        <button className="text-button" onClick={() => modalOption(open => !open)}>Close</button>
        <button className="button" onClick={() => modalOption(open => !open)}>Go to Checkout</button>
      </div>
    </dialog>
  )
}