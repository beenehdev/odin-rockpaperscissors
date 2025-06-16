let humanScore = 0;
let computerScore = 0;

// Gets choice of rock, paper scissors by generating a random number. Used for computer's RPS "play"
function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue <= 0.33) {
        return "SCISSORS";
    } else if (randomValue > 0.33 && randomValue <= 0.67) {
        return "PAPER";
    } else (randomValue > 0.67); {
        return "ROCK";
    }
}
console.log(getComputerChoice());

// Gets choice of rock, paper, scissors by prompting user and returning string value. Used for player's RPS "play"
function getHumanChoice() {
    let inputText = prompt("What play would you like to make?");
    let playerChoice = inputText.toUpperCase();
    return playerChoice;
}
console.log(getHumanChoice());

