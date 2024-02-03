import { useContext } from "react"
import CartContext from "../Store/store.jsx"

export default function Food({meal}){

  const cartCtx = useContext(CartContext)

  function handleAddMealToCart(){
    cartCtx.addItem(meal);
  }

  return (


    
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name} photo`} />
        <h3>{meal.name}</h3>
        <h4 className="meal-item-price">${meal.price}</h4>
        <p className="meal-item-description">{meal.description}</p>
        <button className="button meal-item-actions" onClick={handleAddMealToCart}>Add to Cart</button>
      </article>
    </li>
  
  )
}