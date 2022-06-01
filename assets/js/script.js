const questions = [
    {
      question: "In which film did Ellen Ripley first appear?",
      answers: [
          {text: "Casino Royale", correct: false}, 
          { text: "Alien", correct: true}, 
          { text: "Titanic", correct: false},
          { text: "Forest Gump", correct: false}
        ] 
    },

    {
        question: "Finish the famous movie line: 'We\'re gonna need a bigger _____'!",
        answers: [
            {text: "boat", correct: true}, 
            { text: "mortgage", correct: false}, 
            { text: "car", correct: false},
            { text: "gun", correct: false}
          ] 
      },

      {
        question: "In Toy Story, what is the name of Andy's twisted neighbour?",
        answers: [
            {text: "Jim", correct: false}, 
            { text: "Mark", correct: false}, 
            { text: "Sid", correct: true},
            { text: "Zac", correct: false}
          ] 
      },

      {
        question: "'No luck catching them swans then?' is a quote from what film?",
        answers: [
            {text: "Bridget Jones' Diary", correct: false}, 
            { text: "Hot Fuzz", correct: true}, 
            { text: "Austin Powers", correct: false},
            { text: "American Pie", correct: false}
          ] 
      },
]

const beginButton = document.getElementById('begin-btn');
const rulesContainerElement = document.getElementById('rules-box');
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-box');
let randomQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('choices');
const nextButton = document.getElementById('next-btn');

beginButton.addEventListener('click', showRules)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function showRules() {
    beginButton.classList.add('hide');
    rulesContainerElement.classList.remove('hide');
}

function startGame() {
    rulesContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while(answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct;
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (randomQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// returns user to main page on click of 'exit'
document.getElementById("exit-btn").onclick = function () {
    location.href = "index.html";
};