function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

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

function playRound(playerSelection, computerSelection) {
    console.log(`You played: ${playerSelection}`);
    console.log(`Computer played: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') { return 'Player'; }
        else { return 'Computer' };
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') { return 'Player'; }
        else { return 'Computer'; }
    } else {
        if (computerSelection === 'paper') { return 'Player'; }
        else { return 'Computer'; }
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
    let playerScore = 0;
    let compScore = 0;
    const content = document.querySelector('.container');

    const btnRock = document.createElement('button');
    btnRock.innerText = 'Rock';
    btnRock.value = 'rock';
    content.appendChild(btnRock);

    const btnPaper = document.createElement('button');
    btnPaper.innerText = 'Paper';
    btnPaper.value = 'paper';
    content.appendChild(btnPaper);

    const btnScissors = document.createElement('button');
    btnScissors.innerText = 'Scissors';
    btnScissors.value = 'scissors';
    content.appendChild(btnScissors);

    btnRock.addEventListener('click', () => { playRound(btnRock.value, getComputerChoice()) });
    btnPaper.addEventListener('click', () => { playRound(btnPaper.value, getComputerChoice()) });
    btnScissors.addEventListener('click', () => { playRound(btnScissors.value, getComputerChoice()) });

    // for (let i = 1; i < 6; i++) {
    //     let input = prompt("Rock, paper or scissors?");

    //     console.log(`***** Round ${i} *****`)
    //     let roundWinner = playRound(input, getComputerChoice());
    //     console.log(`Winner of R${i}: ${roundWinner}`);

    //     if (roundWinner === 'Player') {
    //         playerScore += 1;
    //     } else if (roundWinner === 'Computer') {
    //         compScore += 1;
    //     }

    //     console.log(`Player: ${playerScore}`);
    //     console.log(`Computer: ${compScore}`);
    // }

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