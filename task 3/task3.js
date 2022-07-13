// Задание 3. Таймер обратного отсчета
// Оформить красиво, сделать в класе (ООП) и это можно прикладывать в резюме.
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
// Количество дней может состоять из более чем двух цифр.

class Timer {
  constructor(promotion, values) {
    this.promotion = promotion;
    this.values = values;
  }
  setText = (days, hours, minutes, seconds) => {
    this.values.forEach((value) => {
      const data = value.dataset.value;
      if (data === "days") value.textContent = days;
      if (data === "hours") value.textContent = hours;
      if (data === "mins") value.textContent = minutes;
      if (data === "secs") value.textContent = seconds;
    });
  };
  setTimer = () => {
    let promitionTimerId = setInterval(() => {
      let dist = this.promotion - Date.now();
      let days = Math.floor(dist / 1000 / 60 / 60 / 24);
      let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dist % (1000 * 60)) / 1000);
      this.setText(days, hours, minutes, seconds);
      if (dist < 0) {
        clearInterval(promitionTimerId);
      }
    }, 1000);
  };
}

let date = new Date(" 07 February, 2023 00:00:00");
const values = document.querySelectorAll(".value");

let birthday = new Timer(date, values);
birthday.setTimer();
