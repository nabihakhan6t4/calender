document.addEventListener('DOMContentLoaded', function () {
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  const calendarDiv = document.getElementById('calendar');
  const prevMonthBtn = document.getElementById('prevMonth');
  const nextMonthBtn = document.getElementById('nextMonth');
  const currentMonthYear = document.getElementById('currentMonthYear');

  function generateCalendar(month, year) {
      // Clear previous calendar content
      calendarDiv.innerHTML = '';

      // Set current month and year text
      currentMonthYear.textContent = `${getMonthName(month)} ${year}`;

      // Get the first day of the month
      const firstDay = new Date(year, month, 1);
      const startingDay = firstDay.getDay(); // 0 for Sunday, 1 for Monday, etc.

      // Get number of days in the month
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Create calendar table
      let table = '<table class="table table-bordered">';
      table += '<thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>';
      table += '<tbody>';

      // Initialize day counters
      let day = 1;

      // Create rows for the calendar
      for (let i = 0; i < 6; i++) { // 6 weeks maximum
          table += '<tr>';
          for (let j = 0; j < 7; j++) {
              if (i === 0 && j < startingDay) {
                  table += '<td></td>';
              } else if (day > daysInMonth) {
                  break;
              } else {
                  const isCurrentDay = (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear());
                  table += `<td class="${isCurrentDay ? 'bg-primary text-light' : ''}">${day}</td>`;
                  day++;
              }
          }
          table += '</tr>';
      }

      table += '</tbody></table>';

      // Append the generated calendar to the calendarDiv
      calendarDiv.innerHTML = table;
  }

  // Initial calendar generation
  generateCalendar(currentMonth, currentYear);

  // Event listeners for previous and next month buttons
  prevMonthBtn.addEventListener('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      generateCalendar(currentMonth, currentYear);
  });

  nextMonthBtn.addEventListener('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      generateCalendar(currentMonth, currentYear);
  });

  // Function to get month name from index
  function getMonthName(monthIndex) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];
      return monthNames[monthIndex];
  }
});