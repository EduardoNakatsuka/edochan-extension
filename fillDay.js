const startHour = '09';
const endHour = '18';
// const startMinute = padToTwoDigits(Math.floor(Math.random() * 26)); // 0 to 25
// const endMinute = padToTwoDigits(Math.floor(Math.random() * 22)); // 0 to 21
// for now keep consistent start and end minutes
const startMinute = '00';
const endMinute = '00';

// ensure startMinute is always two digits
function padToTwoDigits(num) {
  return num < 10 ? '0' + num : num;
}

function fillDay() {
  document.getElementsByName('recording_type_code_1')[0].value = 1;
  document.getElementsByName('recording_type_code_2')[0].value = 2;

  document.getElementById('recording_timestamp_time_1').value = startHour + ':' + startMinute;
  document.getElementById("recording_timestamp_time_1").setAttribute("value", startHour + ':' + startMinute);
  document.getElementById("recording_timestamp_hour_1").setAttribute("value", startHour);
  document.getElementById("recording_timestamp_minute_1").setAttribute("value", startMinute);
  document.getElementById('recording_timestamp_time_1').blur();
  document.getElementById('recording_timestamp_time_1').click();
  document.getElementById('recording_timestamp_time_2').value = endHour + ':' + endMinute;
  document.getElementById("recording_timestamp_time_2").setAttribute("value", endHour + ':' + endMinute);
  document.getElementById("recording_timestamp_hour_2").setAttribute("value", endHour);
  document.getElementById("recording_timestamp_minute_2").setAttribute("value", endMinute);
  document.getElementById('recording_timestamp_time_2').blur();
  document.getElementById('recording_timestamp_time_2').click();

  document.getElementsByName('request_remark_1')[0].value = 'in';
  document.getElementsByName('request_remark_2')[0].value = 'out';

  const submitButton = document.getElementById('button_01');
  submitButton.click();
}

fillDay();