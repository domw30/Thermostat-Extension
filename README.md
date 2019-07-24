# Thermostat

<img width="1439" alt="Screenshot 2019-07-24 at 13 31 18" src="https://user-images.githubusercontent.com/39112648/61793596-65fbea80-ae17-11e9-93a3-ca10875f6994.png">

The aim of the Thermostat project was to test drive a simple front-end web app using Javascript, with the specification below. It uses a weather API to check the weather of various cities around the United Kingdom, so that the user is able to compare the difference of temperatures across the country.

## Specification

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

## Using this program

Clone this repo:
```
git clone git@github.com:domw30/Thermostat-Extension.git
```

From the command line type:
```
open index.html
```
You can view various cities by scrolling down the page. Adjust your thermostat accordingly using the '+' and '-' buttons.
If power-saving mode is on, you won't be able to increase the temperature higher than 25 degrees. If you turn it off, you can increase up to 32. By selecting the 'RESET' button the temperature will be set back to 20 degrees.

## Learning Objectives

1. How to test drive a simple front-end web app with Javascript
2. How to follow an effective process for learning a new language
3. Reading and writing Javascript syntax
4. Introduced to Ajax and Jquery
5. How to encapsulate behaviour in Javascript
6. How to test and debug in multiple languages
7. Following the flow of control over the whole web app cycle.

## Testing this program

Feature Test
1. Copy the code in the 'thermostat.js' file and paste this into your console on Chrome Dev Tools.
2. Create a new thermostat object by typing thermostat = new Thermostat();
3. You can increase the temperature by typing thermostat.up(); and decrease it by typing thermostat.down();
4. To toggle the power saving mode on or off, type thermostat.switchPowerSavingModeOff(); or thermostat.switchPowerSavingModeOn();.
5. To check your energy usage, type thermostat.energyUsage();
6. To check the current temperature, type thermostat.temperature();
7. To reset the temperature, type thermostat.resetTemperature();

Unit Test
1. Clone this repo
2. From the command line, type 'open SpecRunner.html'
3. The unit tests all pass:

<img width="1435" alt="Screenshot 2019-07-24 at 13 54 58" src="https://user-images.githubusercontent.com/39112648/61795151-a90b8d00-ae1a-11e9-88af-ac498bafec6c.png">





