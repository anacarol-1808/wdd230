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

const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Taboão da Serra,br&units=imperial&appid=22766f88ec197be24284d775f68e916c';

async function apiFetch() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
  
apiFetch();

function displayResults(data) {
  dayOne.textContent = `${data.list[5].dt_txt}`;
  dayOneTemp.textContent = `${data.list[5].main.temp}`;
  const iconsrcForecastOne = `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`;
  let descForecastOne = data.list[5].weather[0].description;
  dayOneIcon.setAttribute('src', iconsrcForecastOne);
  dayOneIcon.setAttribute('alt', descForecastOne);
  dayOneFigcaption.textContent = `${data.list[5].weather[0].description}`;

  dayTwo.textContent = `${data.list[10].dt_txt}`;
  dayTwoTemp.textContent = `${data.list[10].main.temp}`;
  const iconsrcForecastTwo = `https://openweathermap.org/img/w/${data.list[10].weather[0].icon}.png`;
  let descForecastTwo = data.list[10].weather[0].description;
  dayTwoIcon.setAttribute('src', iconsrcForecastTwo);
  dayTwoIcon.setAttribute('alt', descForecastTwo);
  dayTwoFigcaption.textContent = `${data.list[10].weather[0].description}`;

  dayThree.textContent = `${data.list[20].dt_txt}`;
  dayThreeTemp.textContent = `${data.list[20].main.temp}`;
  const iconsrcForecastThree = `https://openweathermap.org/img/w/${data.list[20].weather[0].icon}.png`;
  let descForecastThree = data.list[20].weather[0].description;
  dayThreeIcon.setAttribute('src', iconsrcForecastTwo);
  dayThreeIcon.setAttribute('alt', descForecastTwo);
  dayThreeFigcaption.textContent = `${data.list[20].weather[0].description}`;

}


  
 