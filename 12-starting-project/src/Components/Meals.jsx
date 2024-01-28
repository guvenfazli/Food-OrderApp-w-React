import { fetchingData } from "../utils/fetch";
import { useState, useEffect } from "react"



export default function Meals(){
  
  const [currentMeals, setCurrentMeals] = useState([]);
  
  useEffect(() => {
   
    async function getData(){
    
      const data = await fetchingData();
      setCurrentMeals(data)
    
    }

    getData();
  
  }, [])
  
  
  
  return(
    
    
    <ul id="meals">
    
      {currentMeals.map((meal) => 
        
        <li className="meal-item" key={meal.id}>
            <article>
              <img src="" alt="" />
              <h3>{meal.name}</h3>
              <h4 className="meal-item-price">${meal.price}</h4>
              <p className="meal-item-description">{meal.description}</p>
              <button className="button meal-item-actions">Add to Cart</button>
            </article>
        </li>
        )
        
      }
    
    </ul>
  
  
  )
}