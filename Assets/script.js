//Variables
var startButton = document.getElementById("startBtn");
var submitButton = document.getElementById("submitBtn");
var time = document.getElementById("time")

var timerId;
var timerCountdown = 60;

const questions = [{
    title: "What do object properties consists of?",
    choices: ["key value pair", "list", "var", "food"],
    answer: "key value pair",
},
{
    title: "What do object properties consists of?",
    choices: ["key value pair", "list", "var", "food"],
    answer: "key value pair",
},
{
    title: "What do object properties consists of?",
    choices: ["key value pair", "list", "var", "food"],
    answer: "key value pair",
},
{
    title: "What do object properties consists of?",
    choices: ["key value pair", "list", "var", "food"],
    answer: "key value pair",
},
{
    title: "What do object properties consists of?",
    choices: ["key value pair", "list", "var", "food"],
    answer: "key value pair",
},
]
// Add event listener to buttons
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitAnswer);


// Start quiz
function startQuiz(){
    // console.log("start")
    timerId = setInterval(timer, 1000);
}

function timer(){
    timerCountdown--;
    time.textContent = timerCountdown;
    // console.log(timerCountdown)
    if (timerCountdown <= 0){
        endQuiz();
    }
}

function endQuiz(){
    clearInterval(timerId);
}



function getQuestion(){
    // declare index 0 
    // create var to title on the page
    // loop (for each) over choices, create dynamic button using js
    // creat onclick event question click
    // display to page
}

function questionClick(){
    // condition if answer is correct/incorrect
    // if incorrect subtract time
    // display new time on page
    // move to next question
}

function saveHighScore(){
    // local storage
}