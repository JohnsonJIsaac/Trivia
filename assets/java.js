const questions = [
    {
        question: "What is Garmonbozia?",
        choices: ["Pain and Suffering", "Creamed Corn", "A country in South America", "A species of fish"],
        answer: "Pain and Suffering",
    },
    {
        question: "Which is not a denizen of the black lodge?",
        choices: ["The Arm", "Laura", "Bob", "Mike"],
        answer: "Bob",
    },
    {
        question: "Are the Owls what they seem?",
        choices: ["Yes", "No", "Maybe", "SCREEEEEE!"],
        answer: "No",
    },
]

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let timer = 10;
let intervalId;

const startButton = document.getElementById("start-button");
const container = document.getElementById("container");
const container2 = document.getElementById("container2");

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;

    document.getElementById("timer").innerHTML = "Time left:" + timer;

    if (timer === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
    container.innerHTML = "";
    container2.innerHTML = "";
    container2.innerHTML = '<h1>' + "Times up!" + "</h1>";
}

startButton.addEventListener("click", function () {
    run();
    event.preventDefault();
  
    container.innerHTML = "";

    container.innerHTML = '<h1>' + "Totally Trivial Trivia!" + "</h1>";

    const question1 = document.getElementById("questions");
    question1.innerHTML = questions[0].question;

    for (let i = 0; i < questions[0].choices.length; i++) {
        
        const questionOneButtons = document.createElement("button");
        questionOneButtons.classList.add("choices");
        questionOneButtons.setAttribute("data-name", questions[0].choices[i]);
        questionOneButtons.innerHTML = questions[0].choices[i];
        document.getElementById("buttons").append(questionOneButtons);
    }

    const question2 = document.getElementById("question2")
    question2.innerHTML = questions[1].question;

    for (let i = 0; i < questions[1].choices.length; i++) {

        const questionTwoButtons = document.createElement("button");
        questionTwoButtons.classList.add("choices2");
        questionTwoButtons.setAttribute("data-name", questions[1].choices[i]);
        questionTwoButtons.innerHTML = questions[1].choices[i];
        document.getElementById("question2-buttons").append(questionTwoButtons);
    }

    const question3 = document.getElementById("question3")
    question3.innerHTML = questions[2].question;

    for (let i = 0; i < questions[2].choices.length; i++) {
        const questionThreeButtons = document.createElement("button");
        questionThreeButtons.classList.add("choices3");
        questionThreeButtons.setAttribute("data-name", questions[2].choices[i]);
        questionThreeButtons.innerHTML = questions[2].choices[i];
        document.getElementById("question3-buttons").append(questionThreeButtons);
    }
});