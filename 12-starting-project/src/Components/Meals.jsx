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
      {currentMeals.map((meal) => <li className="meal-item" key={meal.id}>{meal.name}</li>)}
    </ul>
  
  
  )
}