import { fetchingData } from "../utils/fetch";
import { useState, useEffect, memo } from "react"
import Food from "./Food.jsx";



const Meals = memo(function Meals({addToCart, cart}){
  
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

  



  
  return(
    
    <>
    <ul id="meals">
      
      {mealLoading ? <div className="loader-div"><span className="loader"></span></div> : currentMeals.map((meal) =>   
        <Food cart={cart} editCart={addToCart} key={meal.id} id={meal.id} currentMeals={currentMeals} {...meal}/>
        )}


    

     
    </ul>

    </>
  )
}, (prevProps, nextProps) => {
  return prevProps.currentMeals === nextProps.currentMeals;
})

export default Meals;