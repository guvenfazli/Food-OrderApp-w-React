import { useContext } from "react"
import CartContext from "../Store/store.jsx"

export default function Food({id, name, editCart, cart, currentMeals, meal}){

  const cartCtx = useContext(CartContext)

  function handleAddMealToCart(){
    cartCtx.addItem(meal);
  }

  const deneme = cartCtx.items
  
  
  function selectFood(id){
    const selectedFood = currentMeals.find((food) => food.id === id)
    selectedFood.quantity = 1

    
    if(cart.some((foodId) => foodId.id === selectedFood.id)){
      editCart((prev) => {
        const updatedList = prev.map(food => 
          food.id === selectedFood.id ? {...food, quantity: food.quantity + 1} : food
        )

        return updatedList;
      })
    } else {
      editCart((prev) => {
        const updatedList = [...prev, {...selectedFood, quantity: 1}]
        return updatedList;
      })
    }
    
  }

  return (


    
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name} photo`} />
        <h3>{name}</h3>
        <h4 className="meal-item-price">${meal.price}</h4>
        <p className="meal-item-description">{meal.description}</p>
        <button className="button meal-item-actions" onClick={handleAddMealToCart}>Add to Cart</button>
      </article>
    </li>
  
  )
}