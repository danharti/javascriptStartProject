//prompt to ask what property do you need
//it adds itself to the dot notation
//it shows in the console what that property does

var myObject = prompt("What is your string?")
var property = prompt("What property do you need? eg. length");


// var myObject = "This is the String";

var propertyAndObject = myObject + "'." + property;


// var propertyCombinedWithObject = myObject[property];
// console.log(propertyCombinedWithObject);

var propertyCombinedWithObject = myObject[property];
// console.log(propertyCombinedWithObject);

var message = "For now it is just length. This is the only property it can access. I'm think about accessing it's methods next."
// var message = myObject.length;

document.write("<h2> '" + myObject + "' is your object. <br><br> You want to access it's " + property + " property. <br><br> TYPE: <br><br>'" + propertyAndObject + "<br><br> The RESULT would be <br><br>" + propertyCombinedWithObject + "<br> <br> because when you count the string '" + myObject + "', it has " + propertyCombinedWithObject + " characters. <h2> <br>" + message);
