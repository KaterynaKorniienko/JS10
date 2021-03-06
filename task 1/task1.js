// Задание 1. Переключатель цветов
// Есть массив цветов в hex-формате и кнопки Start и Stop.
// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   'red',
//   'green',
//   'violet',
//   'gray',
//   'blue',
//   'yellow',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль.
//  При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

//  Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

const colors = ["red", "green", "violet", "gray", "blue", "yellow"];
const buttons = document.querySelector(".buttons");

const delay = 1000;
let intervalId = null;

const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-action = "start"]'),
  btnStop: document.querySelector('button[data-action = "stop"]'),
};
refs.btnStart.addEventListener("click", changeColor);
refs.btnStop.addEventListener("click", onBtnStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function changeColor() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, delay);
  refs.btnStart.disabled = true;
}

function onBtnStop() {
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
}
