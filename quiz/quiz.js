var body = document.body;
// Question header
var divElQuestion = document.getElementById("question");
// variable for element questions
var divElOptions = document.getElementById("choices");
// variable for element answer options
var answerOpt = document.createElement("ol");

var questionsBoard = [
  {
    question: "Commonly used data types DO NOT Include:",
    mcq: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
    weight: 5,
  },
  {
    question: "Arrays in JavaScript can be used to store ____:",
    mcq: ["number and strings", "other arrays", "bolean", "all of the above"],
    correctAnswer: "all of the above",
    weight: 5,
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    mcq: ["comma", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
    weight: 5,
  },
];

// a function to get to the next question
var i = -1;
function getNextQuestion() {
  i = i + 1;
  if (questionsBoard.length > i) {
    return questionsBoard[i];
  } else {
    gameEnd()
  }
}

// function to show the question
function renderQuestion() {
  // Clean the before start
  divElOptions.innerHTML = "";
  divElQuestion.innerHTML = "";


  var question = getNextQuestion();




  var questionTitle = document.createElement("h1");
  questionTitle.textContent = question.question;
  divElQuestion.appendChild(questionTitle);
  for (var i = 0; i < question.mcq.length; i++) {
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(question.mcq[i], i));
    entry.addEventListener("click", (e) => {
      answerValidation(question, e.target.textContent);
    });
    divElOptions.appendChild(entry);
  }
}


function answerValidation(question, userInput) {
  if (question.correctAnswer === userInput) {
    window.localStorage.setItem(
      "curr_marks",
      Number(window.localStorage.getItem("curr_marks")) + 1
    );
    alert("Correct Answer")
  }
    else {
      timeOut = timeOut - question.weight;
      alert("Wrong Answer")
    }
  renderQuestion();
}
// Set initial time out using the weight
function setTimeOut() {
  var clock = 0;
  for (var i = 0; i < questionsBoard.length; i++) {
    clock += questionsBoard[i].weight;
  }
  return clock;
}
var timeOut = setTimeOut();

// Timer
var el = document.getElementById("timer");

function decrementSeconds() {
  timeOut = timeOut - 1;
  el.innerText = "Timer: " + timeOut + " seconds.";
  if (timeOut < 0) {
    gameEnd()
  }
}

function gameEnd(){
  window.location.href = "../result/result.html";
  return
}

var cancel = setInterval(decrementSeconds, 1000);

window.localStorage.setItem("curr_marks", 0);

renderQuestion();
