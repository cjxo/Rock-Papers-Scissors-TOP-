let roundOver = false;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector(".reset");
const scoreDiv = document.querySelector(".score");
const resultRoundMessageDiv = document.querySelector(".round-result");
let playerScoreState = 0;
let computerScoreState = 0;

function
getComputerChoice() {
    let result = "rock";

    let randomReal = Math.random();
    if ((randomReal > 0.33) && (randomReal <= 0.66)) {
        result = "paper";        
    } else if (randomReal > 0.66) {
        result = "rcissors";
    }

    return (result);
}

function
debugTestComputerChoice() {
    for (let i = 0; i < 10000; ++i) {
        console.log(getComputerChoice());
    }
}

function processRound(playerSelection, computerSelection) {
    if (roundOver) return;

    if (playerSelection === computerSelection) { 
        resultRoundMessageDiv.textContent = `Tied! ${playerSelection} is even with ${computerSelection}`;
    } else {
        let win = true;
        switch (playerSelection.charAt(0)) {
            case 'r': {
                win = computerSelection.charAt(0) === 's';
            } break;

            case 'p': {
                win = computerSelection.charAt(0) === 'r';
            } break;

            case 's': {
                win = computerSelection.charAt(0) === 'p';
            } break;
        }

        if (win) {
            resultRoundMessageDiv.textContent = `You win! ${playerSelection} wins against ${computerSelection}`;
            ++playerScoreState;
        } else {
            ++computerScoreState;
            resultRoundMessageDiv.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
        }

        if (playerScoreState === 5) {
            scoreDiv.textContent = "Game over! You won!";
            roundOver = true;
        } else if (computerScoreState === 5) {
            scoreDiv.textContent = "Game over! You loose!";
            roundOver = true;
        } else {
            scoreDiv.textContent = `Player: ${playerScoreState}, Comuter: ${computerScoreState}`;
        }
    }
}

rockButton.addEventListener("click", () => {
    processRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    processRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    processRound("scissors", getComputerChoice());
});

resetButton.addEventListener("click", () => {
    roundOver = false;
    playerScoreState = computerScoreState = 0;
    scoreDiv.textContent = "Player: 0, Comuter: 0";
    resultRoundMessageDiv.textContent = "";
})

resetButton.click();