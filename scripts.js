var student = {
	name: "Alicia",
	age: '35',
	talent: ['singing', 'dancing', 'watermelon catapaulting']
};

//to access it, you can use the bracket notation or the dot notation
//objectName['key'] or objectName.key
student['name'];
student.age;

//assign a new value to it, just access the key then assign the value
student.name = "Robert";

//to add a new property
//objectName.newProperty = "property";

student.country = "New Zealand";

student.talent.length;
student.talent.join(", ");
student.talent[2];
document.write(student.talent.length + " " + student.talent.join(", ") + " " + student.talent[2] );

//For Objects we use for-in loop
for (var key in student) {
	//access the key name
	console.log(key + ": " + student[key]);
	//access the value inside the key
	//it has to be in bracket notation
	console.log(student[key]);
	//dot notation will literally think it's the key name, a variable can't be that only bracket notation can accept variable name
}
