var startBtn = document.querySelector(".startBtn");
var questionDisplay = document.querySelector(".questionField");
var scoreEl = document.querySelector("INSERT SCORE CLASS HERE");
// var userAnswer = 
var AnswerA = document.querySelector("#answerA");
var AnswerA = document.querySelector("#answerA");
var AnswerA = document.querySelector("#answerA");
var AnswerA = document.querySelector("#answerA");
var score = 0



// event listener for startBtn-- starts function.question1() and timer function

function setScoreText() {
    // scoreVariable.textContent = score;
}

function question1();
if (userAnswer === correctAnswer1){
    if (correntAnswer1 = answerA) {
        score++;

    }
    // var correctAnswer1 === AnswerA

}




// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  
// timer function
// start button
// if timer starts, first question is asked
// If answer is submitted, new question starts
// When the question is answered wrong, time gets subtracted from the full time + new question
// If time left=0 or last question is answered, then the whole thing ends and your time is over
// displays your score and past attempts with the data permanence thing