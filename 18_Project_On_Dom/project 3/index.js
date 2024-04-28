const clock = document.getElementById('clock');

setInterval(() => {
  let time = new Date();
  time = time.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
