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

function playRound(playerSelection, computerSelection) {
    const playerMove = selectionToNum(playerSelection.toLowerCase());
    const compMove = selectionToNum(computerSelection);

    if (playerMove === compMove) {
        return 'Tie!';
    } else if (playerMove > compMove) {
        return 'Player wins!';
    } else if (playerMove < compMove) {
        return 'Computer wins!';
    }
}

function selectionToNum(selection) {
    if (selection === 'rock') {
        return 0;
    } else if (selection === 'paper') {
        return 1;
    } else if (selection === 'scissors') {
        return 2;
    }
}

function playGame() {

    // keep score
    let playerScore = 0;
    let compScore = 0;

    // loop playRound five times
    for (let i = 1; i < 6; i++) {
        // get user input

        //call playRound
        //print result of round
        // update score of winner
    }
    //display results of each game
    // determine winner and display in console

}