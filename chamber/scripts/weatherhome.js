// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon2 = document.querySelector('#weather-icon2');
//console.log(weatherIcon2);
const weatherIcon3 = document.querySelector('#weather-icon3');

const captionDesc = document.querySelector('figcaption');
//const futureTemp = document.querySelector('futureTemp')
const futureTempDayTwo = document.querySelector('#futureTempDayTwo');
const futureTempDayThree = document.querySelector ('#futureTempDayThree');
//console.log(futureTempDayTwo);
//console.log(futureTempDayThree);


function displayCurrentTemp(data) {
//  console.log(data)
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  //console.log(currentTemp);
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src',iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayFutureTemp(data) {
  
  futureTempDayTwo.innerHTML = `${data.list[0].main.temp}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
 // console.log(iconsrc);
  let desc = data.list[0].weather[0].description;
  //console.log(weatherIcon2);
  weatherIcon2.setAttribute('src',iconsrc);
  weatherIcon2.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
  
  //console.log(data.list[8].main.temp)
  //console.log(data.list[16].main.temp)

  //const icon = `https://openweathermap.org/img/w/${data.weather[0].main.icon}.png`;
  futureTempDayThree.innerHTML = `${data.list[8].main.temp}`;
 // console.log(data.list[0])
  const iconsrc3 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
 // console.log(iconsrc3);
  desc = data.list[8].weather[0].description;
 // console.log(weatherIcon3);
  weatherIcon3.setAttribute('src',iconsrc3);
  weatherIcon3.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;

}

async function apiFetch(query, displayCurrent) {
  try {
    const response = await fetch(query);
    if (response.ok) {
      const data = await response.json();
      //     console.log(data); // testing only
      //displayData(data); // uncomment when ready
      if (displayCurrent == true) {
        displayCurrentTemp(data);
      } else {
        displayFutureTemp(data);
      }
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
  
apiFetch('https://api.openweathermap.org/data/2.5/weather?q=Litchfield&APPID=c4ed49c5f1dd57178304a9ec676492d0&units=imperial', true);

apiFetch('https://api.openweathermap.org/data/2.5/forecast?lat=33.49&lon=-112.35&exclued=minutely,hourly&appid=c4ed49c5f1dd57178304a9ec676492d0&units=imperial', false);