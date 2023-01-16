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

// Need start button 
var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);function startQuiz() {
const startScreen = document.getElementById("start-screen");
startScreen.classList.add("hide");
  

// Show questions

var questions = document.getElementById("questions");
  questions.classList.remove("hide");

  // Start timer
  timer = setInterval(countdown, 1000);

  displayQuestion();
}
  function countdown() {
    const time = document.getElementById("time");
    time.textContent--;
    if (time.textContent === "0") {
      endQuiz();
    }
  }

  function displayQuestion() {



    var question = questions[currentQuestion];
    var questionTitle =document.getElementById("question-title");
    questionTitle.textContent = question.title;
    var choices = document.getElementById("choices");
    choices.innerHTML = "";

    for (let i = 0; i < question.choices.length; i++) {
        var choice = question.choices[i];
    
        var button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", selectAnswer);
        choices.appendChild(button);
      }
    }

 function selectAnswer(event) {
    var answer = event.target.textContent;
    // check if answer is correct
    if (answer ===questions[currentQuestion].answer) {
     var feedback = document.getElementById("feedback");
     feedback.textContent = "Correct!";
     feedback.classList.remove("hide", "incorrect");
     feedback.classList.add("correct");
     
     score++;

    } else {
        var feedback = document.getElementById("feedback");
        feedback.textContent = "Incorrect!";
        feedback.classList.remove("hide", "correct");
        feedback.classList.add("incorrect");
        
    }
 }  
  


