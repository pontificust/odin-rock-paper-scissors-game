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

console.log(getHumanChoice());