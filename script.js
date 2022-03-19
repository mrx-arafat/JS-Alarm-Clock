var a_hour = window.prompt("Enter the Hour:");
var a_minute = window.prompt("Enter the Minutes:");
var a_second = window.prompt("Enter the Second:");

document.querySelector(".alarm_time").textContent =
  "Alarm time:" + a_hour + ":" + a_minute + ":" + a_second;

function current_date() {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  document.querySelector(".current_time").textContent =
    "Current time:" + hours + ":" + minutes + ":" + seconds;

  if (a_hour == hours && a_minute == minutes && a_second == seconds) {
    document.querySelector(".alarm").textContent = "time is over";
  }
  setTimeout(current_date, 100);
}
current_date();
