let questions = [
    {
        question: "How many swords are there in The Legend of Zelda (1986)?",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
        ]
    },

    {
        question: "How many dungeons are there in Ocarina of Time (1998)?",
        answers: [
            { text: "7", correct: false},
            { text: "11", correct: false},
            { text: "12", correct: true},
            { text: "14", correct: false},
        ]
    },

    {
        question: "What was Majora's Mask used for in Majora's Mask (2000)?",
        answers: [
            { text: "Hexing Rituals", correct: true},
            { text: "To call upon the gods", correct: false},
            { text: "Fashion", correct: false},
            { text: "Witchcraft", correct: false},
        ]
    },
    {
        question: "How many divine beasts are there in Breath of the Wild (2017)?",
        answers: [
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
            { text: "7", correct: false},
        ]
    },
    {
        question: "When does Princess Zelda appear in Tears of the Kingdom (2023)?",
        answers: [
            { text: "End of Game", correct: false},
            { text: "Middle of Game", correct: false},
            { text: "Start of Game", correct: true},
            { text: "Princess Who?", correct: false},
        ]
    }
]; 

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons"); 
let continueButton = document.getElementById("continue-btn"); 

let currentQuestionIndex = 0; 
let score = 0; 

function checkScore(score) {

switch (score) {
    case 5:
        return "Congrats! You were able to bring Link to the present.";
        break;
    case 4:
        return "Travel in Time Matrix Error - It seems you got stuck at some *weird/random* dimension.";
        break;
        case 3:
        return "Travel in Time Matrix Error - It seems you got stuck at some *weird/random* dimension.";
        break;
        case 2:
       return "Travel in Time Matrix Error - It seems you got stuck at some *weird/random* dimension.";
        break;
        case 1:
        return "Travel in Time Matrix Error - It seems you got stuck at some *weird/random* dimension.";
        break;
        case 0:
        return "Travel in Time Matrix Error - It seems you got stuck at some *weird/random* dimension.";
        break;
    default:
        return ("");
}

}

function startGame() {
let scoreReport = document.getElementById("scoreReport");

if (scoreReport) {
    scoreReport.innerHTML = "";
}

currentQuestionIndex = 0;
score = 0;
continueButton.innerHTML = "CONTINUE";
showQuestion();
}

function showQuestion() {
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.
question;


currentQuestion.answers.forEach(answer => {
let button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if (answer.correct) {
    button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer);
});
}

function resetState() {
    continueButton.style.display = "none";
    while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
let selectedBtn = e.target;
let isCorrect = selectedBtn.dataset.correct === "true";
if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
} else {
    selectedBtn.classList.add("incorrect");
}

Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct"); 
    }
    button.disabled = true; 
});
continueButton.style.display = "block";
}

 function showScore() {
    resetState();
    let scoreReport = document.querySelector("#scoreReport"); 
    scoreReport.innerHTML = this.checkScore(score);
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    continueButton.innerHTML = "TRAVEL AGAIN";
    continueButton.style.display = "block";
 }
function updateProgressBar () {
        let progressBar = document.querySelector("#progress-bar");
        progressBar.setAttribute("value", currentQuestionIndex);
        progressBar.setAttribute("max", questions.length);
}


function handleContinueButton() {
    currentQuestionIndex++;
    updateProgressBar();
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

continueButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
   handleContinueButton();  
} else {
    startGame();
}
});

startGame(); 

