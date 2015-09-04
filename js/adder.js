var emptyArray = [ ];
var itemsIn;

//add items to an array inputed by the user using the prompt method
var numbersOfItem = parseInt(prompt("How many items do you need?"));

for (var i = 0; i < numbersOfItem; i += 1){
  itemsIn = prompt("What do you want to add?");
  emptyArray.push(itemsIn);
}

document.write(emptyArray);