function functionName(){
	//code here
}

var functionPassingAnAnonymousFunction = function () {
	//code here 
	//take note it has semicolons
};

//function that returns a value....
//return value from a function - use return
//return statement exits the function immediately

function randomNumber(){
	var randomNumero = Math.floor (Math.random() * 10) + 1;
	return randomNumero;
}

//very useful when returning a value and using it in different scenarios
alert(randomNumber());
document.write(randomNumber());
var randomNumero10 = randomNumber();

//Example of two possible return values - but in the end it just returns one.
//To test if email field has content

function isEmailFieldEmpty() {
	var field = document.getElementById('email');
	if (field.value === ''){
		return true;
	} else {
		return false;
	}
}

var fieldTest = isEmailFieldEmpty();
if (fieldTest === true) {
	alert("Please provide your email. Thanks.");
}

//passing values to a parameter
//parameters and arguments
//parameter is like variable except it's inside the function
//argument is the value being pass to the parameter

function greetings (name){
	return name;
}

greetings("doggie");