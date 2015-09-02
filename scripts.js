var correctGuess = false;
//this was set to false since the person hasn't guess any number yet

var yourGuess = parseInt (prompt ("What is your guess?"));
var randomNumber = Math.floor ( Math.random() * 10 ) + 1;

if (yourGuess === randomNumber){
	correctGuess = true;
}

if (correctGuess){
	document.write("<h2>You got it right! Nice Guess</h2>");
} else {
	document.write("<h2>Try again. The lucky number is " + randomNumber + ". </h2>");
}

//Booleans true or false
