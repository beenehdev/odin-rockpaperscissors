let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


// Gets choice of rock, paper scissors by generating a random number. Used for computer's RPS "play"
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
// console.log(getComputerChoice());


// Gets choice of rock, paper, scissors by prompting user and returning string value. Used for player's RPS "play"
function getHumanChoice() {
    let inputText = prompt("What play would you like to make?");
    return inputText = inputText.toUpperCase();
}
// console.log(getHumanChoice());


// This function will determine a victor by assessing the inputs from player and computer and increment score accordingly. 
function playRound(humanChoice, computerChoice) {
// Objective is to write an if statement for three situations: ones where player wins, ones where player ties, ones where player loses
    if (
        humanChoice === "SCISSORS" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "ROCK" && computerChoice === "SCISSORS"
        ) {
            console.log(`SCORE: Computer ${computerScore}. Human ${++humanScore}`);
            return console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);

    } else if (
        humanChoice === "SCISSORS" && computerChoice === "SCISSORS" ||
        humanChoice === "PAPER" && computerChoice === "PAPER" ||
        humanChoice === "ROCK" && computerChoice === "ROCK"
        ) {
            console.log(`SCORE: Computer ${computerScore}. Human ${humanScore}`);
            return console.log(`It's a tie! Nobody wins!`);

    } else if (
        humanChoice === "SCISSORS" && computerChoice === "ROCK" || 
        humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
        humanChoice === "ROCK" && computerChoice === "PAPER"
        ) {
            console.log(`SCORE: Computer ${++computerScore}. Human ${humanScore}`);
            return console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);

    } else {
            return `Try typing the right string next time. You broke it.`;
    }
}


// This function will call a play round function 5 times, evaluating incremented score upon conclusion and declaring a winner.
function playGame() {
    for (let i = 0; i <5; i++) {
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        return console.log(`You've beat the computer! The final score was ${humanScore}-${computerScore}`);
    } else if (humanScore < computerScore) {
        return console.log(`You've been defeated by the computer! The final score was ${computerScore}-${humanScore}`);
    } else {
        console.log("You're both losers! Wow!");
    }
}

playGame();