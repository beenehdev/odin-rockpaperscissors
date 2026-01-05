
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
const buttonContainer = document.querySelector("div");

function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue <= 0.33) {
        return "SCISSORS";
    } else if (randomValue > 0.33 && randomValue <= 0.67) {
        return "PAPER";
    } else {
        return "ROCK";
    }
}

const moveButtons = document.querySelectorAll("button");
moveButtons.forEach((button => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        playRound(humanChoice);
    });
}));

function playRound() {
    const div = document.createElement("div");
    buttonContainer.appendChild(div);
    let computerChoice = getComputerChoice();
    if (
        humanChoice === "SCISSORS" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "ROCK" && computerChoice === "SCISSORS"
        ) {
            div.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
            ++humanScore;
    } else if (humanChoice == computerChoice) {
            div.textContent = `It's a tie! Nobody wins!`;
    } else {

            div.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
            ++computerScore;
    }
    if ( computerScore === 5 || humanScore === 5 ) {
        if (humanScore > computerScore) {
            console.log(`You've beat the computer! The final score was ${humanScore}-${computerScore}`);
            humanScore = computerScore = 0;
            return;
        } else {
            console.log(`You've been defeated by the computer! The final score was ${computerScore}-${humanScore}`);
            humanScore = computerScore = 0;
        }
    } else { 
        return; 
}};