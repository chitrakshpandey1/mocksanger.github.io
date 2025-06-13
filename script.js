// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.getElementById('sidebar').classList.toggle('dark-mode');
}

// Calendar setup
window.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    selectable: true,
    dateClick: function (info) {
      const title = prompt('Enter session title:');
      if (title) {
        calendar.addEvent({
          title: title,
          start: info.dateStr,
          allDay: true
        });
      }
    }
  });

  calendar.render();
});
