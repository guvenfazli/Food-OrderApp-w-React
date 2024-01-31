import { useState } from "react";

export async function fetchingData(){
  const response = await fetch('http://localhost:3000/meals');
  const data = await response.json();
  
  if(!response.ok){
    throw new Error('Could not fetch meals!')
  }

  
  return data
} 



export async function postingData(orderData){
  const response = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    body: JSON.stringify({
      order: {
        items: orderData.items,
        customer: orderData.customer
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const createdOrder = await response.json()


  if(!response.ok){
    throw new Error('Could not send data to the server!')
  }

  
  return createdOrder.message;
}

