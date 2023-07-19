let computerScoreHTML = document.getElementsByClassName("score-computer");
let computerScore = 0;

let playerScoreHTML = document.getElementsByClassName("score-player");
let playerScore = 0;

let scoreFooterHTML = document.getElementsByClassName("score-footer");
let scoreFotter = "";
/**
 * 
 * @returns Rock || Paper || Scissors
 */
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
}

/**
 * This Method is checking if either Player || Computer has 5 Points
 * 
 * @return 0 if Player && Computer < 6;
 * @return 1 if Player == 5;
 * @return 2 if Computer == 5;
 */
function checkScore(playerScore, computerScore){
	if (playerScore == 5) 
		return 1
	 else if (computerScore == 5) 
		return 2
	 else 
		return 0;
}

/**
 * This Method checks which one of both has won
 * 
 * @return 0 if Neither won;
 * @return 1 if Player won;
 * @return 2 if Computer won; 
 */
function checkWin(player,computer){
	let game = false;
	
	if (player=="Rock") {
		if (computer == "Scissors")
			game = true;
	}
	else if (player == "Paper") {
		if (computer == "Rock")
			game = true
	}
	else if (player == "Scissors") {
		if (computer == "Paper") 
			game = true;
	}
	
	if (player == computer)
		return 0;
	if (game) 
		return 1; 
	else 
		return 2;
}

function playerInc(){
	playerScore++;
	playerScoreHTML[0].innerHTML= playerScore.toString();
}

function computerInc(){
	computerScore++;
	computerScoreHTML[0].innerHTML = computerScore.toString();
}

function game(playerSelection) {
	const computerSelection = getComputerChoice();
	let win = checkWin(playerSelection,computerSelection);

	switch (win) {
		case 1:
			playerInc();
			scoreFooterHTML[0].innerHTML = playerSelection + " beats " + computerSelection;
			break;
		case 2:
			computerInc();
			scoreFooterHTML[0].innerHTML = computerSelection + " beats " + playerSelection;
			break;
		default:
			scoreFooterHTML[0].innerHTML = " Its a TIE!"
			break;
	}
	let score = checkScore(playerScore,computerScore);
	switch (score) {
		case 1:
			scoreFooterHTML[0].innerHTML = "You Won! Congratulation";
			break;
		case 2:
			scoreFooterHTML[0].innerHTML = "You Lost! Loser";
			break;
		default:
			break;
	}
}

if (checkScore(playerScore,computerScore) == 0){
	document.getElementById("Rock").onclick = function() {
		game("Rock");
	}

	document.getElementById("Paper").onclick = function() {
		game("Paper");
	}

	document.getElementById("Scissors").onclick = function() {
		game("Scissors");
	}
}

/**
 * (1) Player picking Rock || Paper || Scissors by Button
 * 	(1.1) Function ->  Game(player)
 * 				   -> checkWin()
 * 				   
 * (2) getScore + Update -> .innerHTML
 * (3) checkScore() at the End of Game(player)
 * 	(3.1) if score == 5 -> Player || Computer -> lose
 * 
 * 
 */

// console.log(getComputerChoice());
