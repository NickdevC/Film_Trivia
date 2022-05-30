const quizQuestions = [
    {
      question: "In which film did Ellen Ripley first appear?",
      answers: ["Casino Royale", "Alien", "Titanic", "Forest Gump"],
      correct: "Alien"
    },
  
    {
      question: 'Finish the famous movie line: "We\'re going to need. bigger ______"',
      answers: ["car", "loan", "hammer", "boat"],
      correct: "boat"
    },
    
    {
      question: "What is the name of the skyscraper in Die Hard?",
      answers: ["Noki Plaza", "Niagra Plaza", "Nakatomi Plaza", "Nakamati Plaza"],
      correct: "Nakatomi Plaza"
    },
]

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
    setNextQuestion();
}

function setNextQuestion() {

}

function selectAnswer() {

}

// returns user to main page on click of 'exit'
document.getElementById("exit-btn").onclick = function () {
    location.href = "index.html";
};