function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    //generate random number from 0-2 (inclusive)
    //using generated number:
    // if 0, rock
    // if 1, return paper
    // if 2, return scissors
}

console.log(getComputerChoice());