import { useState, useEffect } from "react"

export default function Food({id, image, name, description, price}){





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