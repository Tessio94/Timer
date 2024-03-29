const display = document.querySelector(".display");

const buttonStart = document.querySelector("#startBtn");
const buttonStop = document.querySelector("#stopBtn");
const buttonReset = document.querySelector("#resetBtn");

let timer = null;
let startTime = 0;
let passedTime = 0;
let isRunning = false;

const start = function () {
  if (!isRunning) {
    startTime = Date.now() - passedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
};

function stop() {
  if (isRunning) {
    clearInterval(timer);
    passedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  passedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();

  passedTime = currentTime - startTime;

  let hours = Math.floor(passedTime / (1000 * 60 * 60));
  let min = Math.floor((passedTime / (1000 * 60)) % 60);
  let sec = Math.floor((passedTime / 1000) % 60);
  let miliSec = Math.floor((passedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  miliSec = String(miliSec).padStart(2, "0");

  display.textContent = `${hours}:${min}:${sec}:${miliSec}`;
}

buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop);
buttonReset.addEventListener("click", reset);
