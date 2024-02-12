function getComputerChoice() {
    //generate random number from 0-2 (inclusive)
    const num = Math.floor(Math.random() * 3);
    //using generated number:
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else if (num === 2) {
        return 'Scissors';
    } else {
        return 'No valid number';
    }
}

console.log(getComputerChoice());