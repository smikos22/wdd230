

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json');
    console.log(response);


const data = await response.json(); // Extracting data as a JSON Object from the response



}
const displayProphets = (prophets) => {
    //HTML card building loop
    prophets.forEach((prophet) => {
        let card = document.createElement('section'); 
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('h1');
        let death = document.createElement('h1');
        let length = document.createElement('h1');
        let order = document.createElement('h1');
        let birthplace = document.createElement('h1');
        let numofchildren = document.createElement('h1');


    //populate the heading element with the prophet's full name using a template string to build the full name    
        fullName.textContent = `${prophet.name} ${prophet.lastname} `;
        birthdate.textContent = `${prophet.birthdate}`;
        death.textContent = `${prophet.death}`;
        length.textContent = `${prophet.length}`;
        order.textContent = `${prophet.order} `;
        birthplace.textContent = `${prophet.birthplace} `;
        numofchildren.textContent = `${prophet.numofchildren}`;

        console.log(fullName.textContent);

                // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(portrait);       
        card.appendChild(birthdate);
        card.appendChild(death);
        card.appendChild(length);
        card.appendChild(order);
        card.appendChild(birthplace);
        card.appendChild(numofchildren);

        cards.appendChild(card);
  }); // end of arrow function and forEach loop
}

  
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
   //console.table(data.prophets);
   displayProphets(data.prophets);
  }
  
  getProphetData();

  
