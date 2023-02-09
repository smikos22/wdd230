///const url = 'https://api.openweathermap.org/data/2.5/weather?q=Litchfield&APPID=c4ed49c5f1dd57178304a9ec676492d0&units=imperial';



// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  console.log(currentTemp);
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src',iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
async function apiFetch() {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Litchfield&APPID=c4ed49c5f1dd57178304a9ec676492d0&units=imperial');
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        //displayData(data); // uncomment when ready
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
