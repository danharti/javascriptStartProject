
var myObject = prompt("What is your object?")
var methodYou = prompt("What do you want me to do?");

var propertyAndObject = myObject + "'." + methodYou + "();";

var methodCallOnObject = myObject[methodYou]();
console.log(methodCallOnObject);
document.write("<h1>" + methodCallOnObject + "</h1>");

var message = "For now it is just some Methods such as toLowerCase, toUpperCase those without any arguments or parmeters being passed. I'll think of how I can passed the parameters next. hmmmm."
// var message = myObject.length;

document.write("<h2> '" + myObject + "' is your object. <br><br> If you want to call the method, " + methodYou +" in your object '" + myObject + "'. <br><br> TYPE: <br><br>'" + propertyAndObject + "<br><br> The RESULT would be <br><br>" + methodCallOnObject + "<br> <br> Future explanation on the method to be added here.<h2> <br>" + message);