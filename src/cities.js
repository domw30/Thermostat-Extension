$(document).ready(function() {

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-london').text(data.main.temp);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Cardiff&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-cardiff').text(data.main.temp);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Edinburgh&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-edinburgh').text(data.main.temp);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-dublin').text(data.main.temp);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Bristol&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-bristol').text(data.main.temp);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Glasgow&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-glasgow').text(data.main.temp);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-liverpool').text(data.main.temp);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Newcastle&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature-newcastle').text(data.main.temp);
  });
});
