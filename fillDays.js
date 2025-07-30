async function fillDays() {
  const allDays = document.querySelectorAll('.start_end_timerecord');
  const daysNotFilled = [];
  allDays.forEach((day => {
    if (day.innerHTML.trim().length > 8) {
      return true; // day is filled, skip it
    }

    if (day.parentElement.innerHTML.includes('Weekday') && !day.parentElement.innerHTML.includes('[Rqst.]')) {
      daysNotFilled.push(day);
    }
  }));  
  
  const firstDayNotFilled = daysNotFilled[0];
  const row = firstDayNotFilled.parentElement;
  const isWorkingDay = row.innerHTML.includes('Weekday');

  const option = row.querySelector('.htBlock-selectOther').children[1]
  const buttonId = option.getAttribute('value');
  const hiddenButton = document.querySelector(buttonId);
  hiddenButton.click();
}

fillDays();