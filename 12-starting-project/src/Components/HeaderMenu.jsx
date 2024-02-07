import { useState, useContext, useReducer } from "react"
import CartContext from "../store/CartContext"


const dropList = {
  Header: ['Home', 'About Us', 'Crew'],
  Store: ['Steam', 'Epic Games', 'Ubisoft'],
  Company: ['Country', 'Workers', 'Vision'],
  Facts: ['Packages', 'Softwares']
}


export default function HeaderMenu({ children }) {

  const [drop, setDrop] = useState(false)

  const cartCtx = useContext(CartContext)

  const styleList = cartCtx.testRed ? 'active-drop' : 'inactive-drop'

  function testFunctionNow(){
    cartCtx.testReducer();
  }

  console.log(cartCtx.testRed)
 
  

  return (
    <div onMouseOver={testFunctionNow} onMouseLeave={() => setDrop(false)} style={{display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid red', width: '180px'}}>
      <button>{children}</button>

      <div onMouseOver={() => setDrop(true)} onMouseLeave={() => setDrop(false)}  className={styleList}>
        {dropList[children].map((button) => <button key={button}>{button}</button>)}
        <button onClick={testFunctionNow}>Test</button>

      </div>

      
    </div>
  )
}