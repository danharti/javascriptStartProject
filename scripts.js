var question1 = "What is the greenbox in my room?";
var question2 = "Why is the water dripping in my room?";
var question3 = "What is at the end of the rainbow?";
var question4 = "What is the greenbox in my room?";
var question5 = "What is the greenbox in my room?";

var answer1 = prompt(question1);
var answer2 = prompt(question2);
var answer3 = prompt(question3);
var answer4 = prompt(question4);
var answer5 = prompt(question5);

var correctAnswer1 = "creeper";
var correctAnswer2 = "cause it's raining";
var correctAnswer3 = "w";
var correctAnswer4 = "creeper";
var correctAnswer5 = "creeper";

var points = 0;
var message = "<br>";
var ranking = " ";

//no semicolons on the end of if statement
//=== equality operator
if (answer1.toLowerCase() === correctAnswer1 ) {
	points += 1;
	message += "#1 " + answer1 + " is correct <br>";
} else {
	message += "#1 " + answer1 + " is wrong, it should be " + correctAnswer1 + " <br>";
}

if (answer2.toLowerCase() === correctAnswer2 ) {
	points += 1;
	message += "#2 " + answer2 + " is correct <br>";
} else {
	message += "#2 " + answer2 + " is wrong, it should be " + correctAnswer2 + " <br>";
}
 

if (answer3.toLowerCase() === correctAnswer3 ) {
	points += 1;
	message += "#3 " + answer3 + " is correct <br>";
} else {
	message += "#3 " + answer3 + " is wrong, it should be " + correctAnswer3 + " <br>";
}

if (answer4.toLowerCase() === correctAnswer4 ) {
	points += 1;
	message += "#4 " + answer4 + " is correct <br>";
} else {
	message += "#4 " + answer4 + " is wrong, it should be " + correctAnswer4 + " <br>";
}

if (answer5.toLowerCase() === correctAnswer5 ) {
	points += 1;
	message += "#4 " + answer5 + " is correct <br>";
} else {
	message += "#4 " + answer5 + " is wrong, it should be " + correctAnswer5 + " <br>";
}

if (points === 5){
	ranking = "You got a GOLD CROWN";
} 
//i'm using the && method here just to test it. We can also do points >= 3
else if (points < 5 && points > 2){
	ranking = "You got a SILVER CROWN";
} else {
	ranking = "You must study harder - You got no crown.";
}

document.write("<h2>" + points + "<br>" + message + "<br><br>" + ranking + "</h2>");


// if (answer1.toLowerCase() === correctAnswer1 ) {
// 	document.write("<p> Your correct! </p>");
// } else {
// 	document.write("<p> Your wrong! It's a creeper </p>");
// }

//conditional statements lets you control the flow of a program (which code runs and when.)
//else - if not true

//computer thinks - true or false

