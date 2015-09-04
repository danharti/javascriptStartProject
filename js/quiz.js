//question and answer in an array
//ask user for the prompt
//correct answer will be shown in a list, separate the wrong answer
//total number of correct answers

var quizData = [
  ["What is the pig's name?", "Piggy"],
  ["Who is the pig's best friend?", "Froggy"],
  ["What is my favorite color?", "Green"],
  ["What am I thinking now?", "Nothing"]
];
var question;
var answer;
var response;
var counterCorrect = 0;
var counterIncorrect = 0;
var correctAnswer ='';
var incorrectAnswer = '';
var html = '';

function print(message){
  document.write(message);
}

for (var i = 0; i < quizData.length; i +=1){
  question = quizData[i][0];
  answer = quizData[i][1];

  response = prompt(question);
  if (response === answer){
    counterCorrect += 1;
    correctAnswer += '<ol>' + counterCorrect + ". " + response + '</ol>';
    // print(counterCorrect + answers);
  } else {
    counterIncorrect += 1;
    incorrectAnswer += '<ol>' + counterIncorrect + ". " + response + '</ol>';
  }
}

html += 'Correct Answers: ' + counterCorrect + "<br>";
html += 'Incorrect Answers: ' + counterIncorrect + "<br>";
html += '<br> Your correct answers are: <br>';
html += correctAnswer;
html += '<br> Your incorrect answers are: <br>';
html += incorrectAnswer;

print(html);

