console.log("Hallo world")

function
getComputerChoice() {
    let result = "Rock";

    let randomReal = Math.random();
    if ((randomReal > 0.33) && (randomReal <= 0.66)) {
        result = "Paper";        
    } else if (randomReal > 0.66) {
        result = "Scissors";
    }

    return (result);
}

function
playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let resultMessage = null;

    if (playerSelection === computerSelection) {
        resultMessage = `Tied! ${playerSelection} is even with ${computerSelection}`;
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
            resultMessage = `You win! ${playerSelection} wins against ${computerSelection}`;
        } else {
            resultMessage = `You loose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    return (resultMessage);
}

function
game() {
    for (let i = 0; i < 5; ++i) {
        const playerSelection = prompt("Rock Papers Scissors: ");
        const computerSelection = getComputerChoice();
        console.log(`You: ${playerSelection}, Computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

function
debugTestComputerChoice() {
    for (let i = 0; i < 10000; ++i) {
        console.log(getComputerChoice());
    }
}

game();