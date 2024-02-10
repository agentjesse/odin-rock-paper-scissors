// tic tac toe game: function to generate computer's choice. function to ask
// player to input rock/paper/scissors (case iNseNsitiVE)as a choice: name the
// parameters playerSelection and computerSelection. Then, compare the choices
// using a score counter. console log the result with choices that were
// compared. finally, restart game for 5 rounds.

//function to return rock/paper/scissors using a random number
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

//play one round and return result 
function playRound(playerSelection, computerSelection){
  // debugger
  //check if tie
  if ( computerSelection === playerSelection){
      return 'It\'s a tie!';
  }
  //check if winner
  //when pc = rock
  if ( computerSelection === 'rock' ){
    if (playerSelection === 'scissors'){ 
      return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection === 'paper') {
      playerScore++;
      return 'You Win! Paper beats Rock';
    };
  }
  //when pc = paper
  if ( computerSelection === 'paper' ){
    if (playerSelection === 'scissors') {
      playerScore++;
      return 'You Win! Scissors beats Paper';
    }
    else if (playerSelection === 'rock') {
      return 'You Lose! Paper beats Rock';
    };
  }
  //when pc = scissors
  if ( computerSelection === 'scissors' ){
    if (playerSelection === 'rock') {
      playerScore++;
      return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection === 'paper') {
      return 'You Lose! Scissors beats Paper';
    };
  }
  //catch possible bad inputs like 'rock34234rock', '', 'rocks'
  return 'there was an invalid choice';
};

// play some rounds
function playGame(rounds) {
  for (let i = 1; i < rounds+1 ; i++){
    // if user cancels prompt, random string allows strogn methods on the returned null
    playerSelection = ( prompt(`Let's play rock, paper, scissors! Type your
    choice for round ${i}:`, 'rock') ?? 'promptCancelled').trim().toLowerCase();
    computerSelection = getComputerChoice();
    console.log( `Round: ${i}, Result: ${ playRound( playerSelection, computerSelection ) }` );
  }
  console.log(`${ (playerScore/rounds > 0.5)
                    ? `You won as the best of ${rounds} rounds!`
                    : `You did not win as the best of ${rounds} rounds.`
  }`);
}

// choice & state variables
let computerSelection;
let playerSelection;
let playerScore = 0;

// start 5 game rounds
// playGame(5);
playGame(2);
