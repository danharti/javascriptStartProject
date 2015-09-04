var html = '';
var red;
var green;
var blue;
var rgbColor;
var counter = 0;

function random(){
	return Math.floor(Math.random() * 256 );
}

function colorCreator(){
	red = random();
	green = random();
	blue = random();
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

while (counter < 100){
	colorCreator();
	counter += 1;
}

document.write(html);
