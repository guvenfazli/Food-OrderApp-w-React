export default function Checkout(){
  
  return (
      
    <dialog className="modal">
      
      <h2>Checkout</h2>
      
      <p>Total Amnount</p>

      <form>
        <div className="control">


          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />

          <label htmlFor="street">Street</label>
          <input type="text" />
          
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
          <button className="text-button">Close</button>
          <button className="button">Go to Checkout</button>
        </div>
      </form>
    </dialog>
  )
}