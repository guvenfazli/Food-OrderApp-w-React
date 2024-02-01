import logo from '../assets/logo.jpg'
import { denemeContext } from '../Store/store.jsx'


export default function Header({cart, openCart}){
  return (
    <div id="main-header">
    <div id='title'>
      <img src={logo} alt="app-logo"/> <h1>REACTFOOD</h1>
    </div>

    <button onClick={() => openCart(prev => !prev)}>Cart({cart.length})</button>
  </div>
  )
}