import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";
import NewHeader from "./Components/NewHeader";
import { useRef, useState } from "react";




function App() {

  const [playerMark, setPlayerMark] = useState('X')

  const [gameBoard, setGameBoard] = useState([
    ['Güven', 'Leila', 'Rüya'],
    ['Onur', 'Melis', 'Betül'],
    ['Furkan', 'Zeynep', 'Canan']
  ]
  )

  function denemeFunc(rowIndex, columnIndex){
    setPlayerMark((prev) => {
      if(prev === 'X'){
        return 'O'
      } else if(prev === 'O'){
        return 'X'
      }
    })

    setGameBoard((prev) => {
      const updatedBoard = [...prev]
      updatedBoard[rowIndex][columnIndex] = playerMark
      return updatedBoard
    })
  }
  
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <NewHeader />
        <div className="deneme-div">{gameBoard.map((row, rowIndex) => row.map((person, columnIndex) => <div className="deneme-div"><button onClick={() => denemeFunc(rowIndex, columnIndex)} disabled={gameBoard[rowIndex][columnIndex] === 'X' || gameBoard[rowIndex][columnIndex] === 'O' }>{person}</button></div>))}</div>

        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
