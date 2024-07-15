// Example JavaScript to generate calendar days dynamically
const daysContainer = document.querySelector('.days');

function generateCalendar() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  
  daysContainer.innerHTML = '';
  
  // Fill previous month's days if necessary
  for (let i = 0; i < firstDay; i++) {
    const dayItem = document.createElement('div');
    dayItem.classList.add('day-item', 'disabled');
    dayItem.textContent = '';
    daysContainer.appendChild(dayItem);
  }
  
  // Fill current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayItem = document.createElement('div');
    dayItem.classList.add('day-item');
    dayItem.textContent = day;
    if (new Date(year, month, day).toDateString() === new Date().toDateString()) {
      dayItem.classList.add('today');
    }
    daysContainer.appendChild(dayItem);
  }
}

generateCalendar();
