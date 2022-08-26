import {
    luxon
} from './luxon.js';

const DateTime = luxon.DateTime;

// PAGE ELEMENTS
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const date_display = document.querySelector('#date-display');

// SECTION ONE
const section1 = document.querySelector('#section-1');
const inpStartDate = document.querySelector('#inp-startdate');
const inpEndDate = document.querySelector('#inp-enddate');
const btnDateDiff = document.querySelector('#btn-date-diff');

btnDateDiff.addEventListener('click', () => {
    date_display.innerHTML = '';
    const sDate = inpStartDate.value;
    const eDate = inpEndDate.value;
    if (!sDate || !eDate) {
        alert('START AND END DATES REQUIRED');
    } else {
        getDTDiff(sDate, eDate);
    }
});

// SECTION TWO
const section2 = document.querySelector('#section-2');
const inpStartTime = document.querySelector('#inp-starttime');
const inpEndTime = document.querySelector('#inp-endtime');
const btnTimeDiff = document.querySelector('#btn-time-diff');

btnTimeDiff.addEventListener('click', () => {
    date_display.innerHTML = '';
    const sDateTime = DateTime.fromISO(inpStartTime.value);
    const eDateTime = DateTime.fromISO(inpEndTime.value);
    if (!sDateTime || !eDateTime) {
        alert('START AND END DATES REQUIRED');
    } else {
        getDTDiff(sDateTime, eDateTime);
    }
});


function DiffIn(unit, info) {
    const msgBase = `<p>Difference in ${unit}: ${info}</p>`;
    return msgBase;
}

function getDTDiff(sDT, eDT) {
    const sDateTime = DateTime.fromISO(sDT);
    const eDateTime = DateTime.fromISO(eDT);
    const diff = eDateTime.diff(sDateTime);


    const asSeconds = diff.as('seconds').toFixed(0);
    const asMinutes = diff.as('minutes').toFixed(0);
    const asDays = diff.as('days').toFixed(2);
    const asHours = diff.as('hours').toFixed(2);
    const asWeeks = diff.as('weeks').toFixed(3);
    const asMonths = diff.as('months').toFixed(3);
    const asYears = diff.as('years').toFixed(4);

    const dispSeconds = DiffIn('Seconds', asSeconds);
    const dispMinutes = DiffIn('Minutes', asMinutes);
    const dispHours = DiffIn('Hours', asHours);
    const dispDays = DiffIn('Days', asDays);
    const dispWeeks = DiffIn('Weeks', asWeeks);
    const dispMonths = DiffIn('Months', asMonths);
    const dispYears = DiffIn('Years', asYears);
    const display_output = dispSeconds + dispMinutes + dispHours + dispDays + dispWeeks + dispMonths + dispYears;
    date_display.innerHTML = display_output;
}