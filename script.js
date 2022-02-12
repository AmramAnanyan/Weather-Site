window.onload = function () {
  let timer = document.querySelector("#timer");
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
};
