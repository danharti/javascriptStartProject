var html = "";

//the div here fits until 5 digits
for (var i = 100; i <= 2000; i += 100){
	html += "<div>" + i + "</div>";
}

document.write(html);

