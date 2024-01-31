import { fetchingData } from "../utils/fetch";
import { useState, useEffect } from "react"



export default function Meals({addToCart, cart}){
  
  const [currentMeals, setCurrentMeals] = useState([]);
  const [mealLoading, setMealLoading] = useState(false)
  
  useEffect(() => {
   
    async function getData(){
      setMealLoading(true)
      const data = await fetchingData();
      setCurrentMeals(data)
      setMealLoading(false)

      
    }

    getData();
  
  }, [])
  
  function selectFood(id){
    const selectedFood = currentMeals.find((food) => food.id === id)
    selectedFood.quantity = 1
    if (cart.some(food => food.id === selectedFood.id)) {
      addToCart(prev => {
        const updatedList = prev.map(food =>
          food.id === selectedFood.id ? { ...food, quantity: food.quantity + 1 } : food
        );
        return updatedList;
      });
    } else {
      addToCart(prev => {
        const updatedList = [...prev, { ...selectedFood, quantity: 1 }];
        return updatedList;
      });
    }
  
  }
  
  return(
    
    
    <ul id="meals">
      
      {mealLoading ? <p>Meals are loading...</p> : currentMeals.map((meal) =>   
        <li className="meal-item" key={meal.id}>
            <article>
              <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name} photo`} />
              <h3>{meal.name}</h3>
              <h4 className="meal-item-price">${meal.price}</h4>
              <p className="meal-item-description">{meal.description}</p>
              <button className="button meal-item-actions" onClick={() => selectFood(meal.id)}>Add to Cart</button>
            </article>
        </li>
        )}


    

     
    </ul>
  
    
  )
}