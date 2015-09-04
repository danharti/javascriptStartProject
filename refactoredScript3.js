var html = '';
var rgbColor;

function randomRGB(){
	return Math.floor(Math.random() * 256 );
}

function colorCreator(){
	var color = 'rgb(';
	color += randomRGB() + ',';
	color += randomRGB() + ',';
	color += randomRGB() + ')';
	return color;
} 

function print(message){
	document.write(message);
}

for (var i = 0; i < 200; i += 1){
	rgbColor = colorCreator();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
