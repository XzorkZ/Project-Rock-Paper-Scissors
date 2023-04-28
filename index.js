// list of strings
const strings = ['rock', 'paper', 'scissors'];

// computer will choose random string from the list above.
function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * strings.length);
	const randomString = strings[randomIndex];
	return randomString;
}

// Game mode: function will compare 2 selections (in lower case) and return result
function playRound(playerSelection, computerSelection) {
	const playerSelectionLowerCase = playerSelection.toLowerCase();

    if (playerSelectionLowerCase === computerSelection){
        return "It's Draw!";
    }
    else if ((playerSelectionLowerCase === "rock" && computerSelection === "paper") || 
             (playerSelectionLowerCase === "paper" && computerSelection === "scissors") || 
             (playerSelectionLowerCase === "scissors" && computerSelection === "rock")) {
        return `You lost! ${computerSelection} beats ${playerSelectionLowerCase}.`;
    }
    else {
        return "You Win!"
    }
    
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));