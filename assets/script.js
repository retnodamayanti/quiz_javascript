var body = document.body;
// variable for element header highscore and timer
var highScore = document.createElement("h1");
var timerEl = document.createElement("h2");
// variable for element questions
var divEL = document.getElementById("choices");
// variable for element answer options
var answerOpt = document.createElement("ol")
var answerList = [];
answerList[0]= document.createElement("li");
answerList[1]= document.createElement("li");
answerList[2]= document.createElement("li");
answerList[3]= document.createElement("li");
// var answerList1 = document.createElement("li");
// var answerList2 = document.createElement("li");
// var answerList3 = document.createElement("li");
// var answerList4 = document.createElement("li");

var questionNumber = 0;
var questionsEl = [
    {
      question: "Commonly used data types DO NOT Include:",
      mcq: ["strings", "booleans", "alerts", "numbers"],
      correctAnswer: "alerts",
    },
    {
      question: "Arrays in JavaScript can be used to store ____.:",
      mcq: ["number and strings", "other arrays", "bolean", "all of the above"],
      correctAnswer: "all of the above",
    },
    {
      question:
        "String values must be enclosed within _____ when being assigned to variables.",
      mcq: ["comma", "curly brackets", "quotes", "parentheses"],
      correctAnswer: "quotes",
    },
  ];

// add text to the created element 
highScore.textContent = "View Highscores";
timerEl.textContent = "Time: ";
// divEL.textContent = questionsEl[0].question;
answerList[0].textContent = questionsEl[0].mcq[0]
answerList[1].textContent = questionsEl[0].mcq[1]
answerList[2].textContent = questionsEl[0].mcq[2]
answerList[3].textContent = questionsEl[0].mcq[3]

// answerList1.textContent = questionsEl[0].mcq[0]
// answerList2.textContent = questionsEl[0].mcq[1]
// answerList3.textContent = questionsEl[0].mcq[2]
// answerList4.textContent = questionsEl[0].mcq[3]

// add text content into page



function getQuestion(index){
    return questionsEl[index].question;
}
function getOption(index,option){
    return questionsEl[index].mcq[option]
}

var qIndex = 0;

// next question function
function renderQuestion(index) {
    

    divEL.textContent =  getQuestion(index)
    answerList[0].textContent = questionsEl[index].mcq[0]
    answerList[1].textContent = questionsEl[index].mcq[1]
    answerList[2].textContent = questionsEl[index].mcq[2]
    answerList[3].textContent = questionsEl[index].mcq[3]

    answerOpt.appendChild(answerList[0]);
    answerOpt.appendChild(answerList[1]);
    answerOpt.appendChild(answerList[2]);
    answerOpt.appendChild(answerList[3]);


    body.appendChild(highScore);
    body.appendChild(timerEl);
    body.appendChild(divEL);
    divEL.appendChild(answerOpt);

   
    
   
}

                renderQuestion(0);
                // addEventListeners();
                divEL.addEventListener("click", function() {
                   
                    index = 1;
                    divEL.textContent =  getQuestion(index)
                        answerList[0].textContent = questionsEl[index].mcq[0]
                        answerList[1].textContent = questionsEl[index].mcq[1]
                        answerList[2].textContent = questionsEl[index].mcq[2]
                        answerList[3].textContent = questionsEl[index].mcq[3]

                        answerOpt.appendChild(answerList[0]);
                        answerOpt.appendChild(answerList[1]);
                        answerOpt.appendChild(answerList[2]);
                        answerOpt.appendChild(answerList[3]);


                        body.appendChild(highScore);
                        body.appendChild(timerEl);
                        body.appendChild(divEL);
                        divEL.appendChild(answerOpt);
                
                        divEL.addEventListener("click", function(){
                            index = 2;
                            divEL.textContent =  getQuestion(index)
                        answerList[0].textContent = questionsEl[index].mcq[0]
                        answerList[1].textContent = questionsEl[index].mcq[1]
                        answerList[2].textContent = questionsEl[index].mcq[2]
                        answerList[3].textContent = questionsEl[index].mcq[3]

                        answerOpt.appendChild(answerList[0]);
                        answerOpt.appendChild(answerList[1]);
                        answerOpt.appendChild(answerList[2]);
                        answerOpt.appendChild(answerList[3]);


                        body.appendChild(highScore);
                        body.appendChild(timerEl);
                        body.appendChild(divEL);
                        divEL.appendChild(answerOpt);

                });

                });
