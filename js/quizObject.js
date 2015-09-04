//using objects

var quizData = [
  {question: "What is the pig's name?", answer: "Piggy"},
  {question: "Who is the pig's best friend?", answer: "Froggy"},
  {question: "What is my favorite color?", answer: "Green"},
  {question: "What am I thinking now?", answer: "Nothing"}
];

var question;
var answer;
var response;
var counterCorrect = 0;
var counterIncorrect = 0;
var correctAnswer = [ ];
var incorrectAnswer = [ ];
var html = '';

function print(message){
  document.write(message);
}

function olList(array){
	var listHTML = '<ol>';
		for (var i = 0; i < array.length; i += 1){
			listHTML += '<li>' + array[i] + '</li>';
		}
		listHTML += '</ol>';
		return listHTML;
}

for (var i = 0; i < quizData.length; i +=1){
  question = quizData[i].question;
  answer = quizData[i].answer;

  response = prompt(question);
  if (response === answer){
    counterCorrect += 1;
    correctAnswer.push(response);
    // print(counterCorrect + answers);
  } else {
    counterIncorrect += 1;
   	incorrectAnswer.push(response);
  }
}

html += 'Correct Answers: ' + counterCorrect + "<br>";
html += 'Incorrect Answers: ' + counterIncorrect + "<br>";
html += '<br> Your correct answers are: <br>';
html += olList(correctAnswer);
html += '<br> Your incorrect answers are: <br>';
html += olList(incorrectAnswer);

print(html);

