function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let daysNumber = decemberDaysList[index];
        const dayListItemNumber = document.createElement('li');
        dayListItemNumber.innerHTML = daysNumber;
        dayListItemNumber.className = 'day';
        if (daysNumber == 24 || daysNumber == 31) {
            dayListItemNumber.className = 'day ' + 'holiday';
        } else if (daysNumber == 4 || daysNumber == 11 || daysNumber == 18) {
            dayListItemNumber.className = 'day ' + 'friday';
        } else if (daysNumber == 25) {
            dayListItemNumber.className = 'day ' + 'holiday ' + 'friday';
        }

        weekDaysList.appendChild(dayListItemNumber);
    }
};

function showHolidays() {
    let holidayButton = document.createElement('button');
    let divButton = document.getElementsByClassName('buttons-container')[0];
    holidayButton.innerHTML = 'Feriados';
    holidayButton.setAttribute('id', 'btn-holiday');
    divButton.appendChild(holidayButton);
}

function changeColorHoliday() {
    let holidayButton = document.createElement('button');
    holidayButton.addEventListener('click', function() {
        document.querySelectorAll('holiday').style.color = rgb(238,238,238);
    })
}


createDaysOfTheWeek();
showHolidays();
changeColorHoliday();
