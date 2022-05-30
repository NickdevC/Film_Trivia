
const startButton = document.getElementById('begin-btn')
const rulesContainerElement = document.getElementById('rules-box')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    rulesContainerElement.classList.remove('hide');
}

function setNextQuestion() {

}

function selectAnswer() {

}

// returns user to main page on click of 'exit'
document.getElementById("exit-btn").onclick = function () {
    location.href = "index.html";
};