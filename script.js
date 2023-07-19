function getComputerChoice() {
	let i = Math.floor((Math.random() * (4 - 1) + 1));
	switch (i) {
		case 1: 
			return "Rock";
		case 2:
			return "Paper";
		case 3:
			return "Scissors";
	}
}

function playRound(playerSelection,computerSelection) {
	//turning the playerSelection into Rock || Paper || Scissors
	let player = playerSelection.toLowerCase();
	player = player.charAt(0).toUpperCase() + player.slice(1);
	let game = false;
	
	if (player=="Rock") {
		if (computerSelection == "Scissors"){
			game = true;
		}
	}
	else if (player == "Paper") {
		if (computerSelection == "Rock"){
			game = true
		}
	}
	else if (player == "Scissors") {
		if (computerSelection == "Paper") {
			game = true;
		}
	}
	
	if (player == computerSelection){
		return "Nobody Won! " + player + " doesn't beat " + computerSelection;
	}
	
	if (game) {
		return "You Win! " + player + " beats " + computerSelection; 
	}
	else {
		return "You Lose! " + computerSelection + " beats " + player;
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt("Choose Rock, Paper, Scissors");
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
	}
}

game();

// console.log(getComputerChoice());
