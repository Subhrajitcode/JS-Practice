const clocks = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clocks.innerHTML = date.toLocaleString();
}, 1000);
const clock = document.getElementById('clock');