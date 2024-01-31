import { fetchingData } from "../utils/fetch";
import { useState, useEffect, memo } from "react"
import Food from "./Food.jsx";



const Meals = memo(function Meals({addToCart, cart, checkOut}){
  
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

  console.log('selam')
  
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

  function testFunction(){
    setTestState(prev => prev += 1)
  }
  
  return(
    
    <>
    <ul id="meals">
      
      {mealLoading ? <div className="loader-div"><span className="loader"></span></div> : currentMeals.map((meal) =>   
        <Food key={meal.id} {...meal}/>
        )}


    

     
    </ul>

    <button onClick={testFunction}>Test Me Right now!</button>
    </>
  )
}, (prevProps, nextProps) => {
  return prevProps.cart === nextProps.cart;
})

export default Meals;