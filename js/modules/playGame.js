export const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let roundsCount = 5;
    const buttonContainer = document.querySelector('.footer__controls');
    const buttons = document.querySelectorAll('.footer__control-button');

    const showChoice = () => {

    }

    /*
    1. Randomly get a number 0, 1, 2;
    2. Map the random number to the corresponding game move (Rock, Paper, or Scissors);
    3. Return the chosen game move in a console;
    */

    const getComputerChoice = () => {
        const choiseIndex = Math.floor(Math.random() * 3);
        const computerChoices = ['rock', 'paper', 'scissors'];

        showChoice(computerChoices[choiseIndex]);

        return computerChoices[choiseIndex];
    }

    /*
    1. Ask the user for a valid input;
    2. Check whether his input is within the array ['Rock', 'Paper', 'Scissors'];
    3. IF the input is valid return it;
    4. ELSE return 'your input is invalid';
    */

    const getHumanChoice = (e) => {
        const choiceId = e.target.id;
        const choices = ['rock', 'paper', 'scissors'];

        if (choiceId) {
            showChoice(choices[choiceId]);
            playRound(getComputerChoice(), choices[choiceId]);
            console.log(choiceId)
        }
    }

    const showWinner = (winnerMsg, winChoice, loserChoice) => {
        const capitalizeFirstLetter = (str) => {
            return str.toUpperCase()[0] + str.slice(1);
        }

        return `${winnerMsg} ${capitalizeFirstLetter(winChoice)} 
        beats ${capitalizeFirstLetter(loserChoice)}.`;
    }

    const playRound = (computerChoice, humanChoice) => {
        let roundMessage = '';

        let event = new CustomEvent('win');

        const checkWinner = (computerChoice, humanChoice, choiceToCompare) => {
            let winnerIndex = 0;
            const roundMessages = ['You lose!', 'You win!'];
            winnerIndex = humanChoice === choiceToCompare ? 1 : 0;
            if (winnerIndex === 0) {
                computerScore += 1;
            } else {
                humanScore += 1;
            }

            if (computerScore === 5 || humanScore === 5) {
                document.dispatchEvent(event);
            }
            return showWinner(roundMessages[winnerIndex],
                humanChoice, computerChoice);
        }

        if (computerChoice === humanChoice) {
            console.log('The round ended in draw');
            return;
        } else {
            switch (computerChoice) {
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

    while (roundsCount) {
        roundsCount -= 1;

    }

    let winnerMsg = humanScore === computerScore ? `The game ended in draw. Scores: ${humanScore} = ${computerScore}` :
        humanScore > computerScore ? `You win! Your score is ${humanScore}.` : `You lose! Your score is ${humanScore}`;

    buttonContainer.addEventListener('click', getHumanChoice);
    document.addEventListener('win', showWinner);
}