document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar');

    const events = {
        1: ['5K Charity Run'],
        2: ['Running Workshop'],
        5: ['Special Sports Event'],
        12: ['Marathon'],
        15: ['Weight Lifting Competition'],
        19: ['Sprint Training'],
        26: ['Swimming Pool Sessions'],
    };

    const monthDays = new Date(2024, 7, 0).getDate(); // Get number of days in August 2024

    for (let day = 1; day <= monthDays; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';

        const header = document.createElement('header');
        header.textContent = day;
        dayElement.appendChild(header);

        if (events[day]) {
            events[day].forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'event';
                eventElement.textContent = event;
                dayElement.appendChild(eventElement);
            });
        }

        calendarContainer.appendChild(dayElement);
    }
});