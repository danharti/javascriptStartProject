// function randomNumber(upper){
// 	//random number starting from 1
// 	return Math.floor(Math.random() * upper) + 1;
// }

// //i want to run the randomNumber 10 times

// var counter = 1;
// var numberOfRandomNumber = 8;
// var numberOfTimes = 10;

// //test condition inside the while loop
// //while loop repeats a block of JS code until a particular condition is no longer true
// while ( counter <= numberOfTimes){
// 	var randomNumero = randomNumber(numberOfRandomNumber);
// 	document.write (randomNumero + " ");
// 	counter += 1;
// }


//give a random number from 1 to 10000
//computer guesses the number
//if does get it show number of times the guess is and the random number
function randomNumberForGuessing(number){
	//random number starting from 1
	return Math.floor(Math.random() * number) + 1;
}

var theSecretNumber = randomNumberForGuessing(75);
var counterComputer = 0;
var computerGuess;
var message = " ";

while (computerGuess !== theSecretNumber){
	computerGuess = randomNumberForGuessing(75);
	message = document.write(computerGuess + "<br><br>");
	counterComputer += 1;
}

document.write ("<h1>" + theSecretNumber + " attempts: " + counterComputer + "</h1>");

