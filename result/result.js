var submitBtn = document.querySelector("#submit-button");
var initialInput = document.querySelector("#initial-input");
var finalScore = document.querySelector("#final-score");
var finalScoreDisplay = document.querySelector("#showScore");
var divScore = document.querySelector("#div-score");
var score = window.localStorage.getItem("curr_marks");

finalScore.textContent = `YOUR FINAL SCORE: ${score}`;

var scoreBoard = JSON.stringify(window.localStorage)
scoreBoard = scoreBoard.replace("{", "");
scoreBoard = scoreBoard.replace("}", "");
scoreBoard = scoreBoard.replace(/:/g, "   👉   ");
scoreBoard = scoreBoard.replace(/"/g, "");
scoreBoard = scoreBoard.split(",")
console.log(scoreBoard)

submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    var initial = document.querySelector("#initial-input").value;
    window.localStorage.setItem(initial, score);
        
    });


function renderScoreBoard(){
    console.log(scoreBoard)
    for (var i = 0; i < scoreBoard.length; i++){
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(scoreBoard[i]));
    divScore.appendChild(entry);
    }
}
renderScoreBoard();

// renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     alert("Error");
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }