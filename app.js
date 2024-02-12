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
    console.log(`You played: ${playerSelection}`);
    console.log(`Computer played: ${computerSelection}`);

    const playerMove = playerSelection.toLowerCase();
    const compMove = computerSelection;

    if (playerMove === compMove) {
        return 'Tie!';
    } else if (playerMove > compMove) {
        return 'Player';
    } else if (playerMove < compMove) {
        return 'Computer';
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
        let input = prompt("Rock, paper or scissors?");
        //call playRound
        let roundWinner = playRound(input, getComputerChoice());
        //print result of round
        console.log(`Winner of R${i}: ${roundWinner}`);
        // update score of winner
        if (roundWinner === 'Player') {
            playerScore += 1;
        } else if (roundWinner === 'Computer') {
            compScore += 1;
        }

        //display updated scores
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${compScore}`);
    }
    // determine winner and display in console
    console.log(`Final results: Player: ${playerScore} vs Computer: ${compScore}`);
    if (playerScore > compScore) {
        console.log('Player wins!');
    } else if (compScore > playerScore) {
        console.log('Computer wins!');
    } else {
        console.log('Tie!');
    }

}

playGame();