// things we need
// it's a quiz challenge
// need starts screen with start button
// when starts button is clicked we starts the timer and show the question
// add eventlistener to the start button
// need questions
// need choices for each question
// if question is right move to the next question
// if question is wrong substract from timer
// need a timer
// we also need highscores 
//when its done it prompts to user to put initials



// Things we need to built quiz
//

var currentQuestion = 0;
var score = 0;
var timer;


var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);function startQuiz() {
const startScreen = document.getElementById("start-screen");
startScreen.classList.add("hide");
  



var questions = document.getElementById("questions");
  questions.classList.remove("hide");

  timer = setInterval(countdown, 1000);
  displayQuestion();
  function countdown() {
    const time = document.getElementById("time");
    time.textContent--;
    if (time.textContent === "0") {
      endQuiz();
    }
  }
  
}

