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
    const playerMove = selectionToNum(playerSelection.toLowerCase());
    const compMove = selectionToNum(getComputerChoice());

    if (playerMove === compMove) {
        return 'Tie!';
    } else if (playerMove > compMove) {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
}

function selectionToNum(selection) {
    if (selection === 'rock') {
        return 0;
    } else if (selection === 'paper') {
        return 1;
    } else {
        return 2;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));