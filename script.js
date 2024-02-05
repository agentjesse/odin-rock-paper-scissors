// console.log('test')
// ---------TIC TAC TOE --------------
//note: pseudocode below was first made in standalone lines and then bunched up since odin started changing how much it wanted me to follow or do myself.

// goal is to make a tic tac toe game with input from a prompt to the user of a choice(rock/paper/scissors).
//generate a computer choice function 'getComputerChoice' and initialize a score counting variable.
//make a function asking the player to input rock/paper/scissors (case iNseNsitiVE)as their choice, assigning the value to a mutable variable. name the two function's parameters playerSelection and computerSelection . Then, compare the player vs computer's choices. alert the result with choices that were compared. finally, restart game for 5 rounds.

//return rock/pap/scis via 0-2 random switch statement
let getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      num = 'rock';
      break;
    case 1:
      num = 'paper';
      break;
    case 2:
      num = 'scissors';
      break;
  }
  return num;
};

//return string similar to: "You Lose! Paper beats Rock" 
function playRound(playerSelection, computerSelection){
  // debugger
  //check if player did not submit a valid answer, or a tie
  if ( playerSelection.startsWith('rock') && playerSelection.endsWith('rock')
      || playerSelection.startsWith('paper') && playerSelection.endsWith('paper')
      || playerSelection.startsWith('scissors') && playerSelection.endsWith('scissors') ){
    //check for ties
    if (computerSelection === playerSelection){
      return 'It\'s a tie!';
    }
  }
  else {
    return 'invalid choice, refresh page';
  }

  //check for winner
  //when pc = rock
  if ( computerSelection === 'rock' ){
    if (playerSelection === 'scissors'){ return 'You Lose! Rock beats Scissors' }
    else if (playerSelection === 'paper') { return 'You Win! Paper beats Rock' };
  }
  //when pc = paper
  if ( computerSelection === 'paper' ){
    if (playerSelection === 'scissors'){ return 'You Win! Scissors beats Paper' }
    else if (playerSelection === 'rock') { return 'You Lose! Paper beats Rock' };
  }
  //when pc = scissors
  if ( computerSelection === 'scissors' ){
    if (playerSelection === 'rock'){ return 'You Win! Rock beats Scissors' }
    else if (playerSelection === 'paper') { return 'You Lose! Scissors beats Paper' };
  }
  //bad choice
  return 'invalid choice, refresh page';
};

let computerSelection = getComputerChoice();
// let computerSelection = 'rock';
let playerSelection = prompt('Let\'s play rock, paper, scissors! Type your choice:', 'rock').trim().toLowerCase();
console.log( playRound( playerSelection, computerSelection ) );