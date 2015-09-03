var correctGuess = false;
//this was set to false since the person hasn't guess any number yet

var yourGuess = parseInt (prompt ("I'm thinking of a number from 0-10. What is your guess?"));
var randomNumber = Math.floor ( Math.random() * 10 ) + 1;

if (yourGuess === randomNumber){
	correctGuess = true;
} else if (yourGuess < randomNumber){
	var yourGuess = parseInt(prompt("Guess More!?"));
	if (guessMore === randomNumber){
		correctGuess = true;
	} 
} else if (yourGuess > randomNumber){
	var guessLess = parseInt(prompt("Guess Less!!!"));
	if (guessLess === randomNumber){
		correctGuess = true;
	}
}

if (correctGuess){
	document.write("<h2>You got it right! Nice Guess</h2>");
} else {
	document.write("<h2>Try again. The lucky number is " + randomNumber + ". </h2>");
}


// && (and) - true true, if one condition is false, the entire condition is false
// || (or) - one condition is true, then it's still true 

// //Booleans true or false

// //a-1, b-2, c-3, d-4, e-5, f-6, g-7, h-8, i-9, j-10
// var a = 1, 
// 	b = 2,
// 	c = 3,
// 	d = 4,
// 	e = 5;

// //randomNumber 1-5
// var randomLetterNumber = Math.floor ( Math.random() * 5 ) + 1;

// if (randomLetterNumber === 1){
// 	document.write("Seems like someone that starts with Letter A thinks about you, do you want me to search your fb friends and do a random guess from them?");
// } else if (randomLetterNumber === 2){
// 	document.write("Seems like someone that starts with Letter B thinks about you, do you want me to search your fb friends and do a random guess from them?");
// } else if (randomLetterNumber === 3){
// 	document.write("Seems like someone that starts with Letter C thinks about you, do you want me to search your fb friends and do a random guess from them?");
// } else {
// 	document.write("No one is thinking about you, it's just your imagination!");
// }


