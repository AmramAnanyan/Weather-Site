window.onload = function () {
  let timer = document.querySelector("#timer");
  let todayDiv = document.querySelector(".today");
  let todayH4 = document.querySelector(".today > h4");
  let todayP = document.querySelector(".today > p");
  let sunny = document.querySelector(".sunny");
  let defCelsius = document.querySelector(".default-celsius");
  let img_weather = document.querySelectorAll(".img-weather");
  let allDiv = document.querySelectorAll(".week-day");
  let time_celsius = document.querySelectorAll(".time-celsius");
  Array.from(allDiv);
  let timeAll = document.querySelectorAll(".time-all");
  console.log(timeAll);

  function updateTime() {
    let id = setInterval(function () {
      let day = new Date();
      let hours = day.toTimeString();
      let numberHours = hours.substring(0, 8);
      timer.innerText = numberHours;
      console.log(id);
    }, 1000);
  }
  function onloadTime(callBack) {
    setTimeout(function () {
      let day = new Date();
      let hours = day.toTimeString();
      let numberHours = hours.substring(0, 8);
      timer.innerText = numberHours;
      callBack();
    }, 000);
  }
  onloadTime(updateTime);

  // //// weather API

  // variables
  const search_city = document.getElementById("searchCity");

  // function

  function searchCity(value) {
    let input = value.value.trim();
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=9f1352e94deb0a9aa0ec72213590e484`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("bad url");
        }
      })
      .then((data) => {
        print(data);
        printAll1(data);
        printAll2(data);
        printAll3(data);
      });
  }

  function print(obj) {
    let city = obj.city.name;
    todayH4.textContent = city;
    let celsius = obj.list[0].main.temp;
    let imgWeather = obj.list[0].weather[0].icon;
    img_weather[0].src = `http://openweathermap.org/img/wn/${imgWeather}@2x.png`;
    defCelsius.innerHTML = Math.round(celsius - 273.15) + "&#8451";
    let main = obj.list[0].weather[0].description;
    sunny.textContent = main;
    let hours = obj.list[0].dt_txt;
    todayP.textContent = hours.slice(10, 16);
  }

  function printAll1(obj) {
    let Wrapper = document.createElement("div");
    let hours = obj.list[1].dt_txt;
    timeAll[0].textContent = hours.slice(10, 16);
    let timeCelsuis = obj.list[1].main.temp;
    time_celsius[0].innerHTML = Math.round(timeCelsuis - 273.15) + "&#8451";
    let imgWeather = obj.list[1].weather[0].icon;
    img_weather[1].src = `http://openweathermap.org/img/wn/${imgWeather}@2x.png`;
    Wrapper.append(timeAll[0], time_celsius[0], img_weather[1]);
    allDiv[0].append(Wrapper);
  }

  function printAll2(obj) {
    let Wrapper = document.createElement("div");
    let hours = obj.list[2].dt_txt;
    timeAll[1].textContent = hours.slice(10, 16);
    let timeCelsuis = obj.list[2].main.temp;
    time_celsius[1].innerHTML = Math.round(timeCelsuis - 273.15) + "&#8451";
    let imgWeather = obj.list[2].weather[0].icon;
    img_weather[2].src = `http://openweathermap.org/img/wn/${imgWeather}@2x.png`;
    Wrapper.append(timeAll[1], time_celsius[1], img_weather[2]);
    console.log(allDiv);
    allDiv[1].append(Wrapper);
  }
  function printAll3(obj) {
    let Wrapper = document.createElement("div");
    let hours = obj.list[3].dt_txt;
    timeAll[2].textContent = hours.slice(10, 16);
    let timeCelsuis = obj.list[3].main.temp;
    time_celsius[2].innerHTML = Math.round(timeCelsuis - 273.15) + "&#8451";
    let imgWeather = obj.list[2].weather[0].icon;
    console.log(img_weather);
    img_weather[3].src = `http://openweathermap.org/img/wn/${imgWeather}@2x.png`;
  }
  search_city.addEventListener("blur", todayWeather);
  function todayWeather() {
    searchCity(search_city);
  }
};
