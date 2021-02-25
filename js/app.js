/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/


  let main = document.querySelector('main');
  let html = '';
  
  for ( let i = 0; i < cars.length; i++) {
    let car = cars[i];
    html += `
       <h2>${car.name}</h2>
       <h3>${car.type} | ${car.Made}</h3>
       <p>${car.model}</p>
       <img src="${car.image}" alt="${car.Made}">
    `;
  };
  
  
  main.insertAdjacentHTML("beforeend", html);