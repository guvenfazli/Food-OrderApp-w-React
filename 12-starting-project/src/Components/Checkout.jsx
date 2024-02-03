import { useState, useEffect } from "react";
import {postingData} from '../utils/fetch.js'
import CartContext from "../Store/store.jsx"
import { useContext } from "react";


export default function Checkout({open, modalOption}){
  
  const cartCtx = useContext(CartContext)

  const items = cartCtx.items

  const [order, setOrder] = useState({})
  const [orderingLoad, setOrderingLoad] = useState(false)

  let totalPrice = items.map((item) => +(item.price) * +(item.quantity))
  let total = totalPrice.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0)

  function giveOrder(event){
    event.preventDefault()
    const fd = new FormData(event.target);
    const customerOrder = Object.fromEntries(fd.entries());
    setOrder(() => {
      let updatedList = {customer: customerOrder, items: items, totalPrice: total}
      return updatedList;
    })
    modalOption(false)
  }

  useEffect(() => {

    async function addOrder(){
      if(order.items && order.customer){
        setOrderingLoad(true)
        await postingData(order)
        setOrderingLoad(false)
      }
    }

    addOrder()
   

  }, [order])


  return (
      
    <dialog className="modal" open={open}>
      
      <h2>Checkout</h2>
      
      <p>Total Amnount ${total.toFixed(2)}</p>

      <form onSubmit={giveOrder}>
        {
          orderingLoad ? <span className="loader"></span> : 
          <>
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
        </>
        }
       
      </form>
    </dialog>
  )
}