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
let roundWinner = '';

function updateScoreboard(player, computer) {
    const pscore = document.querySelector('#pscore');
    const cscore = document.querySelector('#cscore');
    pscore.innerText = playerScore;
    cscore.innerText = compScore;

    const userMove = document.querySelector('.user-move span');
    const compMove = document.querySelector('.comp-move span');
    userMove.innerText = player;
    compMove.innerText = computer;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore += 1;
        }
        else {
            compScore += 1;
        };
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1;
        }
        else {
            compScore += 1;
        }
    } else {
        if (computerSelection === 'paper') {
            playerScore += 1;
        }
        else {
            compScore += 1;
        }
    }

    updateScoreboard(playerSelection, computerSelection);
}


function playGame(input) {
    playRound(input, getComputerChoice());
}

const rockbutton = document.querySelector('#rock');
rockbutton.addEventListener('click', e => {
    let input = rockbutton.value = 'rock';
    playGame(input);
});
const paperbutton = document.querySelector('#paper');
paperbutton.addEventListener('click', e => {
    let input = paperbutton.value = 'paper';
    playGame(input);
});
const scissorsbutton = document.querySelector('#scissors');
scissorsbutton.addEventListener('click', e => {
    let input = scissorsbutton.value = 'rock';
    playGame(input);
});