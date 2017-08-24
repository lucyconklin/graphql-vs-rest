
document.addEventListener('DOMContentLoaded', function(){ 
  console.log('Document Loaded');
  
  const url = `http://localhost:3000/graphql`;
  const query = `
    {
      dinosaur { 
        name
      } 
    }
   `

  return fetch(url, { 
    method: 'POST',
    Accept: 'application/json',
    'Content-Type': 'application/graphql',
    body: JSON.stringify({ query })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Here is the data: ', data);
  });  

}, false);