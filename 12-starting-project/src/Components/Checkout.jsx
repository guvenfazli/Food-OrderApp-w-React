import { useState } from "react";

export default function Checkout({open, modalOption, items, editCart}){
  
  const [order, setOrder] = useState({})

  let totalPrice = items.map((item) => +(item.price) * +(item.quantity))
  let total = totalPrice.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0)

  function giveOrder(event){
    event.preventDefault()
    const fd = new FormData(event.target);
    const order = Object.fromEntries(fd.entries());
    setOrder(() => {
      let updatedList = {customer: order, items: items, total: `$${total.toFixed(2)}`}
      return updatedList;
    })
    modalOption(false)
  }

  console.log(order)


  return (
      
    <dialog className="modal" open={open}>
      
      <h2>Checkout</h2>
      
      <p>Total Amnount ${total.toFixed(2)}</p>

      <form onSubmit={giveOrder}>
        <div className="control">


          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />

          <label htmlFor="street">Street</label>
          <input type="text" name="street"/>
          
        </div>
        
        <div className="control-row">
         
            <div className="control">
              <label htmlFor="zip-code">Postal Code</label>
              <input type="text" name="zip-code" id="zip-code"/>
            </div>
       

            <div className="control">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city"/>
            </div>
       

        </div>
        
      


        <div className="modal-actions">
          <button className="text-button" onClick={() => modalOption(false)}>Close</button>
          <button className="button" onSubmit={giveOrder}>Submit Order</button>
        </div>
      </form>
    </dialog>
  )
}