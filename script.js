document.addEventListener("DOMContentLoaded", function () {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

  var calendarDiv = document.getElementById("calendar");
  var prevMonthBtn = document.getElementById("prevMonth");
  var nextMonthBtn = document.getElementById("nextMonth");
  var currentMonthYear = document.getElementById("currentMonthYear");
  var calendarBody = document.getElementById("calendar-body");

  function generateCalendar(month, year) {
    calendarBody.innerHTML = "";

    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();
    var table =
      "<thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead><tbody>";

    var day = 1;
    for (var i = 0; i < 6; i++) {
      table += "<tr>";
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          table += "<td></td>";
        } else if (day > daysInMonth) {
          break;
        } else {
          var isCurrentDay =
            day === currentDate.getDate() &&
            month === currentDate.getMonth() &&
            year === currentDate.getFullYear();
          table +=
            "<td" +
            (isCurrentDay ? ' class="current-day"' : "") +
            ">" +
            day +
            "</td>";
          day++;
        }
      }
      table += "</tr>";
    }

    table += "</tbody>";
    calendarBody.innerHTML = table;
    currentMonthYear.textContent = getMonthName(month) + " " + year;
  }

  generateCalendar(currentMonth, currentYear);

  prevMonthBtn.addEventListener("click", function () {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
  });

  nextMonthBtn.addEventListener("click", function () {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  });

  function getMonthName(monthIndex) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthIndex];
  }
});
