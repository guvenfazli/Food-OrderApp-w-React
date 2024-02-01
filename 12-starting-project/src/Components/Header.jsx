import logo from '../assets/logo.jpg'


export default function Header({cart, openCart}){

  console.log('slm')



  return (
    <div id="main-header">
    <div id='title'>
      <img src={logo} alt="app-logo"/> <h1>REACTFOOD</h1>
    </div>

    <button onClick={() => openCart(prev => !prev)}>Cart({cart.length})</button>
  </div>
  )
}