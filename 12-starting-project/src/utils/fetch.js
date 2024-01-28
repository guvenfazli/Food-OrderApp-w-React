export function fetchingData(){
  const request = fetch('https:localhost:3000/data/available-meals.json')
  const data = request.json();
  
  if(!response.ok){
    throw new Error('Could not fetch meals!')
  }

  console.log('selam')
  return data
} 

fetchingData()

