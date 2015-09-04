var html = '';
var red;
var green;
var blue;
var rgbColor;
var counter = 0;

function colorCreator(){
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

while (counter < 100){
	colorCreator();
	counter += 1;
}

document.write(html);
