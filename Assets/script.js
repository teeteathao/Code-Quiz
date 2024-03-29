//Variables
var startButton = document.getElementById("startBtn");
var time = document.getElementById("time");
var currentQuestionIndex = 0;
var choicesEl = document.getElementById("choices");

var timerId;
var timerCountdown = 30;


// Quiz questions, choices, and correct answers
const questions = [{
    title: "What do object properties consists of?",
    choices: ["Key Value Pair", "List", "Variables", "Elements"],
    answer: "Key Value Pair",
},
{
    title: "What is === operator?",
    choices: ["Strict Equality", "Super Equal", "Triple Equal", "Sort of Equal"],
    answer: "Strict Equality",
},
{
    title: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["<javascript>", "<script>", "<js>", "<java>"],
    answer: "<script>",
},
{
    title: "What surrounds a string?",
    choices: ["Quotes", "Parentheses", "Curly Brackets", "Square Brackets"],
    answer: "Quotes",
},
{
    title: "The conditional statement, in Javascript, begins with the word _______.",
    choices: ["Else", "Then", "If", "Start"],
    answer: "If",
},
];
// const quizQuestion = questions[4];
// const questionTitle = questions.title;

// console.log(questionTitle)
// console.log(quizQuestion)
// console.log(questions)

// Add event listener to buttons
startButton.addEventListener("click", startQuiz);


// Start quiz
function startQuiz(){
    console.log("start")
    timerId = setInterval(timer, 1000);
    // startBtn.setAttribute("class", "hide");
    getQuestion();
    // console.log(getQuestion)
}

//timer starts when user pushes start
function timer(){
    timerCountdown--;
    time.textContent = timerCountdown;
    // console.log(timerCountdown)
    if (timerCountdown <= 0){
        endQuiz();
    }    
}

//end quiz when the timer reaches 0
function endQuiz(){
    clearInterval(timerId);
}

function getQuestion(){
    // declare index 0  
    var currentQuestion = questions[currentQuestionIndex];
    console.log("current question is: ",currentQuestion)
    // create var to title on the page
    var titleEl = document.getElementById("questions-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let buttons = document.createElement('button')
        buttons.textContent = currentQuestion.choices[i];
        choicesEl.append(buttons);
    }
        }

function checkAnswer(){
    // condition if answer is correct/incorrect
    var checkAnswer = document.getElementById("answer");
    if (checkAnswer.addEventListener) {
    button.addEventListener("click", checkAnswer);
    } else if (checkAnswer.attachEvent) {
     checkAnswer.attachEvent("onclick", myFunction);
     
     console.log(checkAnswer)
    }

}
//     // if incorrect subtract time
//     time-=10;
//     if(time<0){
//         time=0
//     }
//     // display new time on page
//     timer.textContent = time;
//     // move to next question


function saveHighScore(){
    // local storage
}