import { useState, useEffect } from "react"

export default function Food({id, image, name, description, price, editCart, cart, currentMeals}){


  <h2>Veysele soru, bu component'ı customHook ile mi kullanmak lazım? Veya useContext ile, veya Reducer</h2>
  
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
  
  
  /*
  function selectFood(id){
    const selectedFood = currentMeals.find((food) => food.id === id)
    selectedFood.quantity = 1
    if (cart.some(food => food.id === selectedFood.id)) {
      editCart(prev => {
        const updatedList = prev.map(food =>
          food.id === selectedFood.id ? { ...food, quantity: food.quantity + 1 } : food
        );
        return updatedList;
      });
    } else {
      editCart(prev => {
        const updatedList = [...prev, { ...selectedFood, quantity: 1 }];

        return updatedList;
      });
    }

  }
  */
  

 
  console.log(cart)

  return (


    
    <li className="meal-item" key={id}>
      <article>
        <img src={`http://localhost:3000/${image}`} alt={`${name} photo`} />
        <h3>{name}</h3>
        <h4 className="meal-item-price">${price}</h4>
        <p className="meal-item-description">{description}</p>
        <button className="button meal-item-actions" onClick={() => selectFood(id)}>Add to Cart</button>
      </article>
    </li>
  
  )
}