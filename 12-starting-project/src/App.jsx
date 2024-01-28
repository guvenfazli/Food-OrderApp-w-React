import logo from './assets/logo.jpg'
import Meals from './Components/Meals';


function App() {
  return (
    <>
      <div id="main-header">
        <div id='title'>
          <img src={logo} alt="app-logo" id='' /> <h1>REACTFOOD</h1>
        </div>

        <button>Cart</button>
      </div>

      <Meals />
    </>
  );
}

export default App;
