
// function fillDay() {
//   document.getElementsByName('recording_type_code_1')[0].value = 1;
//   document.getElementsByName('recording_type_code_2')[0].value = 2;

//   document.getElementById('recording_timestamp_time_1').value = '09:00';
//   document.getElementById("recording_timestamp_time_1").setAttribute("value", '09:00');
//   document.getElementById("recording_timestamp_hour_1").setAttribute("value", '09');
//   document.getElementById("recording_timestamp_minute_1").setAttribute("value", '00');
//   document.getElementById('recording_timestamp_time_1').blur();
//   document.getElementById('recording_timestamp_time_1').click();
//   document.getElementById('recording_timestamp_time_2').value = '18:00';
//   document.getElementById("recording_timestamp_time_2").setAttribute("value", '18:00');
//   document.getElementById("recording_timestamp_hour_2").setAttribute("value", '18');
//   document.getElementById("recording_timestamp_minute_2").setAttribute("value", '00');
//   document.getElementById('recording_timestamp_time_2').blur();
//   document.getElementById('recording_timestamp_time_2').click();

//   document.getElementsByName('request_remark_1')[0].value = 'in';
//   document.getElementsByName('request_remark_2')[0].value = 'out';
// }

// const today = new Date();
// const todayDay = today.getDate();
// // inner html date is like this... if this or bigger stop!	07/30(Wed)
// const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}/${String(todayDay).padStart(2, '0')}(${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][today.getDay()]})`;

async function fillDays() {
  const allDays = document.querySelectorAll('.start_end_timerecord');
  const daysNotFilled = [];
  allDays.forEach((day => {
    if (day.innerHTML.trim().length > 8) {
      return true; // day is filled, skip it
    }

    // it can't include Rqst as well
    if (day.parentElement.innerHTML.includes('Weekday') && !day.parentElement.innerHTML.includes('[Rqst.]')) {
      daysNotFilled.push(day);
      // return true; // day is a working day, skip it
    }
    // daysNotFilled.push(day);
  }));  
  
  const firstDayNotFilled = daysNotFilled[0];
  const row = firstDayNotFilled.parentElement;
  const isWorkingDay = row.innerHTML.includes('Weekday');

  const option = row.querySelector('.htBlock-selectOther').children[1]
  const buttonId = option.getAttribute('value');
  const hiddenButton = document.querySelector(buttonId);
  hiddenButton.click();

  //   // if inner html is empty, it means the day is not filled
  //   return day.innerHTML.trim() === '';
  // });
  // const firstDayNotFilled = daysNotFilled[0];
  // if day is not weekend / holiday, click it



  // const today = new Date();
  // const todayDay = today.getDay();

  // while (todayDay < day) {
  //   const id = `button_05901758232${day}`
  
  //   const requestButton = document.getElementById(id);
  //   const row = requestButton.parentElement.parentElement.parentElement.parentElement;
  //   const isWorkingDay = row.getElementsByClassName('schedule specific-timecard_schedule')[0].innerHTML.includes('裁量労働');

  //   console.log({ day, isWorkingDay });

  //   if (!isWorkingDay) {
  //     day++;
  //     continue;
  //   }

  //   requestButton.click();
  //   // const buttonFunction = requestButton.getAttribute('onclick');
  //   // console.log({ buttonFunction });
  //   // eval(buttonFunction);
  
  //   await new Promise(r => setTimeout(r, 2000));
  
  
  //   fillDay();
  
  //   const submitButton = document.getElementById('button_01');
  //   // const submitButtonFunction = requestButton.getAttribute('onclick');
  //   // eval(submitButtonFunction);
  //   submitButton.click();
  
  //   await new Promise(r => setTimeout(r, 2000));
  
  //   day++;
  // }
}

fillDays();