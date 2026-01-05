// I didn't move playRound into playGame as I figure it'll be more logical once I refactor this for GUI incorporation. It seems neater this way.

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
const buttonContainer = document.querySelector("div");

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

// New method for obtaining player choice using DOM manipulation
const moveButtons = document.querySelectorAll("button");
moveButtons.forEach((button => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        playRound(humanChoice);
    });
}));


// Gets choice of rock, paper, scissors by prompting user and returning string value. Used for player's RPS "play"
// function getHumanChoice() {
//     let inputText = prompt("What play would you like to make?");
//      inputText = inputText.toUpperCase();
// }


// This function will determine a victor by assessing the inputs from player and computer and increment score accordingly. 
function playRound() {
    // let humanChoice = getHumanChoice();
    const div = document.createElement("div");
    buttonContainer.appendChild(div);
    let computerChoice = getComputerChoice();
    
// Objective is to write an if statement for three situations: ones where player wins, ones where player ties, ones where player loses
    if (
        humanChoice === "SCISSORS" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "ROCK" && computerChoice === "SCISSORS"
        ) {
            // console.log(`SCORE: Computer ${computerScore}. Human ${++humanScore}`);
            //  console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
            div.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
            ++humanScore;

    } else if (humanChoice == computerChoice) {
            div.textContent = `It's a tie! Nobody wins!`;

    } else {
            // console.log(`SCORE: Computer ${++computerScore}. Human ${humanScore}`);
            div.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
            ++computerScore;

    // } else {
    //         div.textContent = `Try typing the right string next time. You broke it.`;
    //         ;
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




// This function will call a play round function 5 times, evaluating incremented score upon conclusion and declaring a winner.
// function playGame() {
//     for (let i = 0; i <5; i++) {
//         playRound();
//     }

//     if (humanScore > computerScore) {
//          console.log(`You've beat the computer! The final score was ${humanScore}-${computerScore}`);
//     } else if (humanScore < computerScore) {
//          console.log(`You've been defeated by the computer! The final score was ${computerScore}-${humanScore}`);
//     } else {
//         console.log("You're both losers! Wow!");
//     }
// }

// playGame();