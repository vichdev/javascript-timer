const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let seconds = 0;
let timer;

function getTimeBySeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(function () {
    seconds++;
    relogio.innerHTML = getTimeBySeconds(seconds);
  }, 1000);
  return timer;
}

const stopTimer = () => clearInterval(timer);

const resetTimer = () => {
  relogio.innerHTML = "00:00:00";
  seconds = 0;
  startTimer();
};

iniciar.addEventListener("click", function (e) {
  relogio.classList.remove("pausado");
  startTimer();
});

pausar.addEventListener("click", function (e) {
  stopTimer();
  relogio.classList.add("pausado");
});

zerar.addEventListener("click", function (e) {
  relogio.classList.remove("pausado");
  resetTimer();
});
