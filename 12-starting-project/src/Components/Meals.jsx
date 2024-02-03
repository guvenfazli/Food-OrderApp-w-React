import useHttp from "../hooks/useHttp.js";
import MealItem from "./MealItem";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, [])

  if(isLoading){
    return <p>blabla</p>
  }
 
  if (error) {
    return <Error  title={'Failed to fetch meals'} error={error}/>
  }

  

  
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  )
}