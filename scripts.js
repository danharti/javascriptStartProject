var randomNumber = randomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;
//FLAG - a variable that holds a true or false value

function randomNumber(upper){
	//random number starting from 1
	return Math.floor(Math.random() * upper) + 1;
}

// do {
// 	guess = parseInt(prompt("What is your guess?"));
// 	guessCount += 1;
// } while (guess != randomNumber)

do {
	guess = parseInt(prompt("What is your guess?"));
	guessCount += 1;
	if (guess === randomNumber){
		correctGuess = true;
	}
} while (!correctGuess)

//if true do while loop... if false it stops

document.write (randomNumber + " is the randomNumber. You have guessed it " + guessCount + " times.")


