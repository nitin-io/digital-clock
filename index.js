const time = document.getElementById("digital-clock");
const date = document.getElementById("digital-calender");

setInterval(() => {
  let currentTime = new Date();

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  time.innerHTML = currentTime.toLocaleTimeString("en-US", optionsTime);

  const options = {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  date.innerHTML = currentTime.toLocaleDateString("en-US", options);
}, 1000);

setInterval(() => {}, 1000);

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(() => {
  const dateTime = new Date();

  const second = dateTime.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minute = dateTime.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hour = dateTime.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  console.log(hourDegree, minuteDegree, secondDegree);
}, 1000);
