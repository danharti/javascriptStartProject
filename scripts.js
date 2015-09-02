var lowerNumber = parseInt(prompt("What is your lower number?"));
var higherNumber = parseInt(prompt("What is your higher number?"));

//script timer
var minutes = 0.1;
var interval = minutes * 60 * 1000;

setInterval(function() {

	var yourRandomNumber = Math.floor (Math.random() * (higherNumber - lowerNumber + 1)) + lowerNumber ;
	//0 to 6
	var message = "<p>" + yourRandomNumber + " is a number between your lower number " + lowerNumber + " and higher number " + higherNumber + ".</p>";

document.write(message);
}, interval);

//Math.Floor() - rounds the number DOWN
//Math.Ceil() - rounds the number UP

//BLABS 

// var randomNumber = Math.random();

// var roundDown = Math.floor (randomNumber);
// var roundUp = Math.ceil (randomNumber);

// var randomNumber1to6 = Math.floor ( Math.random() * 6) + 1;

// document.write("<h1>" + randomNumber + " if it is round down to an integer " + roundDown + ". If round up, it is " + roundUp +". </h1>");
// document.write("<h2> This can be any number from 0-6 ---->  " + randomNumber1to6 + "</h2>");
