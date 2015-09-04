var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//to return only the student being asked
//passed the student Object
function returnStudent(student){
	var report = '<h2>Student: ' + student.name + '</h2>';
	report += '<p>Track: ' + student.track + '</p>';
	report += '<p>Points: ' + student.points + '</p>';
	report += '<p>Achievements: ' + student.achievements + '</p>';
	return report;
}

while (true){
	search = prompt("Who is the student you are looking for? Type <b>quit</b> if you want to exit.")
	
	//to exit
	//null is not a string and you cannot do the toLowerCase() method
	if (search === null || search.toLowerCase() === 'quit'){
		break;
	} 

	for (var i = 0; i < students.length; i += 1) {
	  //we passed the an object inside students depending on the index position and pass it to the variable student.
	  student = students[i];
	  
	  if (student.name === search){

	  	message = returnStudent(student);
	  	print(message);

	  	/* If I add it here, it will print the report accumulative instead of getting specific
		  message += '<h2>Student: ' + student.name + '</h2>';
		  message += '<p>Track: ' + student.track + '</p>';
		  message += '<p>Points: ' + student.points + '</p>';
		  message += '<p>Achievements: ' + student.achievements + '</p>';
	  	  print (message);
	  	*/

	  }
	}
}


