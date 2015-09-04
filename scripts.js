var randomNumber = randomNumberCreator(10);
var guess;
var guessCount = 0;
var correctGuess = false;
//FLAG - a variable that holds a true or false value

function randomNumberCreator(upper){
	//random number starting from 1
	return Math.floor(Math.random() * upper) + 1;
}


while ( guessCount < 10) {
	guess = parseInt(prompt("What is your guess?"));
	guessCount += 1;
	if (guess === randomNumber){
		correctGuess = true;
		break;
		//adding break statement stops the loop
	}
}

if (correctGuess) {
	document.write (randomNumber + " is the randomNumber. You have guessed it " + guessCount + " times.");
} else {
	document.write ("You didn't guess the secret number which is " + randomNumber);
}

//if true do while loop... if false it stops



