var shoppingList = [
	'milk',
	'egg',
	'bread'
];

function print(message){
	document.write(message + "<br><br>");
}

print(shoppingList);
print("Array's first value is " + shoppingList[0]);

//if there are no item in that position = undefined

//length property
print("Array's length = " + shoppingList.length + ". This count the number of values inside the array.");

//to add an item/value array
shoppingList[3] = 'fish';

print(shoppingList);

//method
//push method - let's you add one or more items at the end of the array
shoppingList.push("coke");

print(shoppingList);

//unshift method - adds an array at the beginning of the array
shoppingList.unshift("meat");

print(shoppingList);


//to remove
//pop method - last item is removed, it also returns the last item as well
shoppingList.pop();

print("pop method: " + shoppingList + ". Now it has " + shoppingList.length);
//shift method - remove the first item in the array

shoppingList.shift();

print("shift method: " + shoppingList + ". Now it has " + shoppingList.length);


//printList came from helper.js
printList(shoppingList);


//using for-loops in an array
//working with each item in an array or iterating through the array
print ("This is using the for Loop:")

for (var i = 0; i < shoppingList.length; i += 1){
	print(shoppingList[i]);
}

//join method - joins all the items in the array and separated by a supplied character, eg a comma
print(shoppingList.join(', '));

var shoppingList2 = ['salmon', 'soup'];

//concat method - adds one list to another
var newShoppingList = shoppingList.concat(shoppingList2);
var readableShoppingList = newShoppingList.join(', ');
print(readableShoppingList);

//indexOf method
var position = newShoppingList.indexOf('salmon');
print(position);

//if the item is not inside the list -- indexOf will return the value of -1


