document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar');

    // Load events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    const events = storedEvents.map(event => ({
        title: event.description,
        start: new Date(event.date),
    }));

    const calendar = new FullCalendar.Calendar(calendarContainer, {
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day'
        },
        dateClick: function (info) {
            const date = info.date;
            const description = prompt('Enter event description:');
            if (description) {
                const newEvent = { date, description };
                events.push({ title: description, start: date });
                saveEventsToLocalStorage(events);
                calendar.addEvent({ title: description, start: date });
            }
        },
        events: events,
    });

    calendar.render();

    // Function to save events to localStorage
    function saveEventsToLocalStorage(events) {
        const serializedEvents = JSON.stringify(events.map(event => ({
            date: event.start.toISOString(),
            description: event.title,
        })));
        localStorage.setItem('calendarEvents', serializedEvents);
    }
});
