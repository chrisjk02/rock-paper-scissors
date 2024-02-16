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

let playerScore = 0;
let compScore = 0;

function updateScoreboard(player, computer) {
    const pscore = document.querySelector('#pscore');
    const cscore = document.querySelectorO('#cscore');
    pscore.innerText = playerScore;
    cscore.innerText = compScore;

    const userMove = document.querySelector('.user-move span');
    const compMove = document.querySelector('.comp-move span');
    userMove.innerText = player;
    compMove.innerText = computer;
}

function playRound(playerSelection, computerSelection) {
    console.log(`You played: ${playerSelection}`);
    console.log(`Computer played: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return 'Tie!'
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore += 1;
            return 'Player';
        }
        else {
            compScore += 1;
            return 'Computer'
        };
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1;
            return 'Player';
        }
        else {
            compScore += 1;
            return 'Computer';
        }
    } else {
        if (computerSelection === 'paper') {
            playerScore += 1;
            return 'Player';
        }
        else {
            compScore += 1;
            return 'Computer';
        }
    }
}


function playGame() {
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

}

playGame();