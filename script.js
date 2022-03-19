var a_hour = window.prompt("Enter the Hour:");
var a_minute = window.prompt("Enter the Minutes:");
var a_second = window.prompt("Enter the Second:");

document.querySelector(".alarm").textContent =
  a_hour + ":" + a_minute + ":" + a_second;
