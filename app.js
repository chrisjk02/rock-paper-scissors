function getComputerChoice() {
    //generate random number from 0-2 (inclusive)
    const num = Math.floor(Math.random() * 3);
    //using generated number:
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else if (num === 2) {
        return 'scissors';
    } else {
        return 'No valid number';
    }
}

// console.log(getComputerChoice());

function rockPaperScissors(playerSelection, computerSelection) {
    const playerMove = playerSelection.toLowerCase();
    const compMove = getComputerChoice();
}