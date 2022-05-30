


const beginButton = document.getElementById('begin-btn')
const rulesContainerElement = document.getElementById('rules-box')
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-box')

beginButton.addEventListener('click', startGame)
startButton.addEventListener('click', firstQuestion)

function startGame() {
    beginButton.classList.add('hide');
    rulesContainerElement.classList.remove('hide');
}

function firstQuestion() {
    rulesContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}

function setNextQuestion() {

}

function selectAnswer() {

}

// returns user to main page on click of 'exit'
document.getElementById("exit-btn").onclick = function () {
    location.href = "index.html";
};