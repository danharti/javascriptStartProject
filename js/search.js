var inStock = [
	'milk',
	'apple',
	'mango',
	'egg',
	'coke',
	'rice',
	'bread',
	'fish',
	'meat',
	'vegetable'	
];

//empty variable
var search;

function print(message){
	document.write('<p>' + message + '</p>');
}

while (true) {
	search = prompt("Search for a product in our store. Type 'list' to show all of the products and 'quit' to exit");
	if (search.toLowerCase() === 'quit'){
		break;
	} else if (search.toLowerCase() === 'list'){
		print (inStock.join(', '));
	} else {
		if (inStock.indexOf(search) > -1){
			print('Yes, we have ' + search + " in the store.");
		} else {
			print(search + ' is not in the stock');
		}
	}

}