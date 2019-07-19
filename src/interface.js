$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);

  $("#temperature-up").click(function() {
    thermostat.up();
    $("#temperature").text(thermostat.temperature);
  });

  $("#temperature-down").click(function() {
    thermostat.down();
    $("#temperature").text(thermostat.temperature);
  });

  $("#temperature-reset").click(function() {
    thermostat.resetTemperature();
    $("#temperature").text(thermostat.temperature);
  });

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSavingModeOn();
    $("#power-saving-status").text("On");
    $("#temperature").text(thermostat.temperature);
  });

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSavingModeOff();
    $("#power-saving-status").text("Off");
    $("#temperature").text(thermostat.temperature);
  });

});
