export async function fetchingData(){
  const response = await fetch('http://localhost:3000/meals');
  const data = await response.json();
  
  if(!response.ok){
    throw new Error('Could not fetch meals!')
  }

  
  return data
} 



export async function postingData(orderData, items){
  const response = fetch('http://localhost:3000/orders', {
    method: 'POST',
    body: JSON.stringify({
      order: orderData,
      items: items
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));