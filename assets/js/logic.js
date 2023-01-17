
//  Set a variable to keep track of the current question
let currentQuestion = 0;
//  Set a variable to keep track of the time remaining
let time = questions.length * 15;
//  Set a variable to keep track of the score
let score = 0;

//  Add an event listener to the start button
document.getElementById("start").addEventListener("click", startQuiz);

//  Function to start the quiz
function startQuiz() {
  //  Hide the start screen
  document.getElementById("start-screen").style.display = "none";
  //  Show the questions
  document.getElementById("questions").style.display = "block";
  //  Start the timer
  setInterval(countdown, 1000);
  //  Show the first question
  showQuestion();
}

//  Function to show the current question
function showQuestion() {
  //  Retrieve the current question from the array
  let question = questions[currentQuestion];
  //  Update the question title
  document.getElementById("question-title").innerHTML = question.questionName;
  //  Clear any existing choices
  document.getElementById("choices").innerHTML = "";
  //  Loop through the choices array and create buttons for each choice
  for (let i = 0; i < question.choices.length; i++) {
    let choice = question.choices[i];
    //  Create a button
    let choiceButton = document.createElement("button");
    //  Set the button text
    choiceButton.innerHTML = choice;
    //  Add an event listener to the button
    choiceButton.addEventListener("click", checkAnswer);
    //  Add the button to the choices div
    document.getElementById("choices").appendChild(choiceButton);
  }
}

//  Function to check the answer
function checkAnswer(event) {
  //  Retrieve the current question
  let question = questions[currentQuestion];
  //  Check if the answer is correct
  if (event.target.innerHTML === question.correct) {
    //  Show correct feedback
    document.getElementById("feedback").innerHTML = "Correct!";
    //  Add to the score
    score++;
  } else {
    //  Show incorrect feedback
    document.getElementById("feedback").innerHTML = "Incorrect!";
    //  subtract time
    time -= 10;
  }
  //  Show the feedback
  document.getElementById("feedback").style.display = "block";
  //  Move to the next question
  currentQuestion++;
  //  Check if there are more questions
  if (currentQuestion === questions.length) {
    //  End the quiz
    endQuiz();
  } else {
    //  Show the next question
    showQuestion();
  }
}



//  Function to start the timer
function countdown() {
  //  Update the time remaining
  time--;
  //  Update the time on the page
  document.getElementById("time").innerHTML = time;
  //  Check if the time is up
  if (time <= 0) {
    //  End the quiz
    endQuiz();
  }
}

//  Function to end the quiz
function endQuiz() {
  //  Clear the interval
  clearInterval(countdown);
  //  Hide the questions
  document.getElementById("questions").style.display = "none";
  //  Show the end screen
  document.getElementById("end-screen").style.display = "block";
  //  Update the final score
  document.getElementById("final-score").innerHTML = score;
}

//  Function to save the score
document.getElementById("submit").addEventListener("click", saveScore);

function saveScore() {
  //  Get the initials
  let initials = document.getElementById("initials").value;
  //  Calculate the final score
  let finalScore = (score / questions.length) * time;
  //  Create an object with the initials and score
  let score = {
    initials: initials,
    score: finalScore
  };
  //  Get the existing scores from local storage
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  //  Add the new score
  scores.push(score);
  //  Sort the scores by score
  scores.sort((a, b) => b.score - a.score);
  //  Save the scores to local storage
  localStorage.setItem("scores", JSON.stringify(scores));
}


//  Function to retrieve the scores
function getScores() {
  //  Get the scores from local storage
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  //  Loop through the scores
  for (let i = 0; i < scores.length; i++) {
    //  Create a list item
    let li = document.createElement("li");
    //  Set the text of the list item
    li.innerHTML = scores[i].initials + ": " + scores[i].score;
    //  Add the list item to the highscores list
    document.getElementById("highscores").appendChild(li);
  }
}

//  Function to clear the scores
document.getElementById("clear").addEventListener("click", clearScores);

function clearScores() {
  localStorage.removeItem("scores");
  document.getElementById("highscores").innerHTML = "";
}
