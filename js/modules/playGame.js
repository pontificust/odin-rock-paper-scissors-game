export const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let currentChoicesIds = [];
    const buttonContainer = document.querySelector('.footer__controls');
    const humanScoreElem = document.querySelector('.battle-area__player-score');
    const computerScoreElem = document.querySelector('.battle-area__player-score.computer');
    const humanArena = document.querySelector('.battle-area__arena-human');
    const computerArena = document.querySelector('.battle-area__arena-computer');

    const showChoice = (choiceImgId) => {
        const choiceImg = document.querySelector(choiceImgId);

        choiceImg.classList.add('show');
    }

    const clearChoice = () => {
        const humanChoiceImg = document.querySelector(currentChoicesIds[0]);
        const computerChoiceImg = document.querySelector(currentChoicesIds[1]);
        humanChoiceImg.classList.remove('show');
        computerChoiceImg.classList.remove('show');
    }

    const updateScores = () => {
        computerScoreElem.textContent = `${computerScore}`;
        humanScoreElem.textContent = `${humanScore}`;
    }

    /*
    1. Randomly get a number 0, 1, 2;
    2. Map the random number to the corresponding game move (Rock, Paper, or Scissors);
    3. Return the chosen game move in a console;
    */

    const getComputerChoice = () => {
        const choiseIndex = Math.floor(Math.random() * 3);
        const computerChoices = ['rock', 'paper', 'scissors'];
        currentChoicesIds[1] = `#computer-${computerChoices[choiseIndex]}`;

        showChoice(currentChoicesIds[1]);

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
        const humanChoices = ['rock', 'paper', 'scissors'];

        if (choiceId) {

            if (currentChoicesIds[0]) clearChoice();
            currentChoicesIds[0] = `#human-${humanChoices[choiceId]}`;
            showChoice(currentChoicesIds[0]);
            playRound(getComputerChoice(), humanChoices[choiceId]);
        }
    }

    const showWinner = (e) => {
        clearChoice();
        let humanArenaMsg = document.createElement('p');
        let computerArenaMsg = document.createElement('p');
        humanArenaMsg.textContent = humanScore === computerScore ? `It's a` : 'You';
        computerArenaMsg.textContent = humanScore === computerScore ? 'draw!' : 
        humanScore > computerScore ? 'win!' : 'lose!';
        humanArena.appendChild(humanArenaMsg);
        computerArena.appendChild(computerArenaMsg);
        humanScore = 0;
        computerScore = 0;
        buttonContainer.removeEventListener('click', getHumanChoice);
        setTimeout(() => {
            updateScores();
            buttonContainer.addEventListener('click', getHumanChoice);
            humanArena.removeChild(humanArenaMsg);
            computerArena.removeChild(computerArenaMsg);
        }, 5000);
    }

    const playRound = (computerChoice, humanChoice) => {
        let event = new CustomEvent('win');

        const checkWinner = (computerChoice, humanChoice) => {
            const roundChoices = {
                rock: 'scissors',
                paper: 'rock',
                scissors: 'paper',
            }
            if (roundChoices[humanChoice] !== computerChoice) {
                computerScore += 100;
            } else {
                humanScore += 100;
            }
            updateScores();

            if (computerScore === 500 || humanScore === 500) {
                document.dispatchEvent(event);
            }
        }

        if (computerChoice === humanChoice) {
            console.log('The round ended in draw');
            return;
        } else {
            checkWinner(computerChoice, humanChoice);
        }
    }


buttonContainer.addEventListener('click', getHumanChoice);
document.addEventListener('win', showWinner);
}