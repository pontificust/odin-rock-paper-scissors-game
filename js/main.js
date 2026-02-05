/*
1. Randomly get a number 0, 1, 2;
2. Map the random number to the corresponding game move (Rock, Paper, or Scissors);
3. Return the chosen game move in a console;
*/

const getComputerChoice = () => {
    const choiseIndex = Math.floor(Math.random() * 3);
    const computerChoices = ['Rock', 'Paper', 'Scissors'];

    return computerChoices[choiseIndex];
}

getComputerChoice();