function updateCountdown() {
  
  // Определяем текущую дату
  var currentDate = new Date();

  // Определяем дату нового года
  var newYear = new Date("January 01, 2023 00:00:00");

  if (currentDate >= newYear) {
    newYear.setFullYear(newYear.getFullYear() + 1);
  }

  // Вычисляем разницу в миллисекундах
  var timeDifference = newYear - currentDate;

  // Переводим разницу в месяцы, недели, дни, часы, минуты и секунды
  var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  var weeks = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  var days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  if (months % 10 == 1 && months % 100 != 11) {
    var monthString = " месяц ";
  } else if (months % 10 >= 2 && months % 10 <= 4 && (months % 100 < 10 || months % 100 > 20)) {
    var monthString = " месяца ";
  } else {
    var monthString = " месяцев ";
  }

  if (weeks % 10 == 1 && weeks % 100 != 11) {
    var weekString = " неделя ";
  } else if (weeks % 10 >= 2 && weeks % 10 <= 4 && (weeks % 100 < 10 || weeks % 100 > 20)) {
    var weekString = " недели ";
  } else {
    var weekString = " недель ";
  }

  if (days % 10 == 1 && days % 100 != 11) {
    var dayString = " день ";
  } else if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 > 20)) {
    var dayString = " дня ";
  } else {
    var dayString = " дней ";
  }

  if (hours % 10 == 1 && hours % 100 != 11) {
    var hourString = " час ";
  } else if (hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 > 20)) {
    var hourString = " часа ";
  } else {
    var hourString = " часов ";
  }

  if (minutes % 10 == 1 && minutes % 100 != 11) {
    var minuteString = " минута ";
  } else if (minutes % 10 >= 2 && minutes % 10 <= 4 && (minutes % 100 < 10 || minutes % 100 > 20)) {
    var minuteString = " минуты ";
  } else {
    var minuteString = " минут ";
  }

  if (seconds % 10 == 1 && seconds % 100 != 11) {
    var secondString = " секунда";
  } else if (seconds % 10 >= 2 && seconds % 10 <= 4 && (seconds % 100 < 10 || seconds % 100 > 20)) {
    var secondString = " секунды";
  } else {
    var secondString = " секунд";
  }

  document.getElementById("countdown").innerHTML = months + monthString + weeks + weekString + days + dayString + hours + hourString + minutes + minuteString + seconds + secondString;
}

setInterval(updateCountdown, 1000);