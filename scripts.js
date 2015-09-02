var yourGuess = parseInt (prompt ("What is your guess?"));
var randomNumber = Math.floor ( Math.random() * 10 ) + 1;

if (yourGuess === randomNumber){
	document.write("<h2>You got it right! Nice Guess</h2>");
} else {
	document.write("<h2>Try again. The lucky number is " + randomNumber + ". </h2>");
}

