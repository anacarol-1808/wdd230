
// select HTML elements in the document
const divForecast = document.querySelector('.forecast');

const dayOne = document.querySelector('#day1');
const dayOneTemp = document.querySelector('#day1-temp');
const dayOneIcon = document.querySelector('#day1-icon');
const dayOneFigcaption = document.querySelector('#day1-figcaption');

const dayTwo = document.querySelector('#day2');
const dayTwoTemp = document.querySelector('#day2-temp');
const dayTwoIcon = document.querySelector('#day2-icon');
const dayTwoFigcaption = document.querySelector('#day2-figcaption');

const dayThree = document.querySelector('#day3');
const dayThreeTemp = document.querySelector('#day3-temp');
const dayThreeIcon = document.querySelector('#day3-icon');
const dayThreeFigcaption = document.querySelector('#day3-figcaption');


const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Taboão da Serra,br&appid=399df7f14208ad03f961dd06fd29878a';

async function apiFetch() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
  
apiFetch();

function displayResults(data) {
  console.log(data.list[0].dt_txt);
  

}

  // let date = "data.list[i].dt_txt";
  // let temperature = "data.list[i].main.temp";
  // let description = "data.list[i].weather[0].description";
  // let icon = "data.list[i].weather[0].icon";



  
 