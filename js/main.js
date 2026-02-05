let humanScore = 0;
let computerScore = 0;

/*
1. Randomly get a number 0, 1, 2;
2. Map the random number to the corresponding game move (Rock, Paper, or Scissors);
3. Return the chosen game move in a console;
*/

const getComputerChoice = () => {
    const choiseIndex = Math.floor(Math.random() * 3);
    const computerChoices = ['rock', 'paper', 'scissors'];

    return computerChoices[choiseIndex];
}

/*
1. Ask the user for a valid input;
2. Check whether his input is within the array ['Rock', 'Paper', 'Scissors'];
3. IF the input is valid return it;
4. ELSE return 'your input is invalid';
*/

const getHumanChoice = () => {
    const humanChoice = prompt('Please, input your next move...').toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];

    return choices.some((val) => val === humanChoice) ? humanChoice : 'your input is invalid';
}

/*
1. Get human and computer choices;
2. Check whose choice is a winning one;
3. Increment score of the round winner;
4. Log a string representing the round winner;
*/

const capitalizeFirstLetter = (str) => {
    return str.toUpperCase()[0] + str.slice(1);
}

const showWinner = (winnerMsg, winChoice, loserChoice) => {
    return `${winnerMsg} ${capitalizeFirstLetter(winChoice)} beats ${capitalizeFirstLetter(loserChoice)}.`;
}

const checkWinner = (computerChoice, humanChoice, choiceToCompare) => {
    let winnerIndex = 0;
    const roundMessages = ['You lose!', 'You win!'];
    winnerIndex = humanChoice === choiceToCompare ? 1 : 0;
    if(winnerIndex === 0) {
        computerScore += 1;
        return showWinner(roundMessages[winnerIndex], computerChoice, humanChoice);
    } else {
        humanScore += 1;
        return showWinner(roundMessages[winnerIndex], humanChoice, computerChoice);
    }
}

const playRound = (computerChoice, humanChoice) => {
    let roundMessage = '';
    if(computerChoice === humanChoice) {
        console.log('The round ended in draw');
        return;
    } else{
        switch(computerChoice) {
            case 'rock':
                roundMessage = checkWinner(computerChoice, humanChoice, 'paper');
                break;
            case 'paper':
                roundMessage = checkWinner(computerChoice, humanChoice, 'scissors');
                break;
            case 'scissors':
                roundMessage = checkWinner(computerChoice, humanChoice, 'rock');
                break;     
                
        }
        console.log(roundMessage);
    }
}

playRound(getComputerChoice(), getHumanChoice());