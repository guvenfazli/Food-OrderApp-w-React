export async function fetchingData(){
  const response = await fetch('http://localhost:3000/meals');
  const data = await response.json();
  
  if(!response.ok){
    throw new Error('Could not fetch meals!')
  }

  console.log('selam')
  return data
} 

fetchingData();


