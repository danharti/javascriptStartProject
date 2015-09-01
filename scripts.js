//activates the prompt box - add your text inside
//by adding it in a variable, we are capturing the data that was inputed by the user
var address = prompt("Where are you right now?");
alert("Are you sure you are at " + address + "?");

var message = "<h1>Welcome to " + address + "</h1>";
message = message + "I'm glad you drop by. ";
message += "Good to see you."
document.write(message);

//variable becomes a string when you concatenate it to a string
 //+= (adding the variable or value beside the equal once)
//concatenation

//check MDN
//length property
var lengthyString = "this is not a lengthy string"
var lengthOfLengthystring = lengthyString.length;
document.write("<h1>" + lengthOfLengthystring + "</h1>");

//object and property
//lengthyString.length
//lengthyString is the object
//length is the property
//we use the dot notation of access the property of the object