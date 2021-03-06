
// date picker

var chosen_date = document.querySelector('.book-session .chosen-date');
var month_element = document.querySelector('.book-session .dates .month .mth');
var next_month_element = document.querySelector('.book-session .dates .month .next-month');
var prev_month_element = document.querySelector('.book-session .dates .month .previous-month');
var days_element = document.querySelector('.book-session .dates .days');
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

month_element.textContent = months[month] + ' ' + year;

chosen_date.textContent = formatDate(date);
chosen_date.dataset.value = selectedDate;

populateDates();

next_month_element.addEventListener('click', goToNextMonth);
prev_month_element.addEventListener('click', goToPrevMonth);



// if month is greater than month 11 (dec) the next month will start from month 0 and add year
function goToNextMonth () {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	month_element.textContent = months[month] + ' ' + year;
	populateDates();
}


// if month is lower than first month go to highest month and minus a year
function goToPrevMonth () {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	month_element.textContent = months[month] + ' ' + year;
	populateDates();
}


// amend calendar to correct number of days per month 
function populateDates () {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	}

    if (month == 3) {
        amount_days = 30;
    }

    if (month == 5) {
        amount_days = 30;
    }

    if (month == 8) {
        amount_days = 30;
    }

    if (month == 10) {
        amount_days = 30;
    }

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			chosen_date.textContent = formatDate(selectedDate);
			chosen_date.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}

function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}


