//test changes
var askAge = parseInt(prompt("What is your age?"));

//variables to count time 
var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var agePerSecond = askAge * secondsPerMinute * minutesPerHour * hoursPerDay * daysPerWeek * weeksPerYear;

document.write("<h1>WOAH! " + agePerSecond + " seconds alive!!! </h1>");