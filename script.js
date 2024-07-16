document.addEventListener("DOMContentLoaded", function () {
  const calendarDays = document.getElementById("calendarDays");
  const monthYear = document.getElementById("monthYear");
  const prevMonthBtn = document.getElementById("prevMonthBtn");
  const nextMonthBtn = document.getElementById("nextMonthBtn");

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  function generateCalendar(month, year) {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDay = new Date(year, month, 1).getDay();

    calendarDays.innerHTML = "";
    monthYear.textContent = `${getMonthName(month)} ${year}`;

    // Generate empty cells for previous month days
    for (let i = 0; i < firstDay; i++) {
      let dayCell = document.createElement("div");
      dayCell.classList.add("col", "text-muted", "text-center", "py-3");
      dayCell.textContent = "";
      calendarDays.appendChild(dayCell);
    }

    // Generate cells for current month days
    for (let day = 1; day <= daysInMonth; day++) {
      let dayCell = document.createElement("div");
      dayCell.classList.add(
        "col",
        "day",
        "text-center",
        "py-3",
        "cursor-pointer",
        "border",
        "border-light"
      );
      dayCell.textContent = day;
      dayCell.addEventListener("click", function () {
        alert(`Clicked on ${day} ${getMonthName(month)} ${year}`);
      });
      calendarDays.appendChild(dayCell);
    }
  }

  function getMonthName(month) {
    const months = [
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
    return months[month];
  }

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

  generateCalendar(currentMonth, currentYear);
});
