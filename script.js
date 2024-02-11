// tic tac toe game with UI. gets a player choice from a button, then makes a pc choice and compares it. score updates with each round. based on result of after all rounds, the result element is updated with a message

//function to return rock/paper/scissors string as PC choice
let getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

//play one round and change result element text content
function playRound(playerSelection, computerSelection){
  //check if tie
  if ( computerSelection === playerSelection){
      resultElem.textContent = `It's a tie between ${computerSelection}!`;
      return;
  }
  //check if winner
  //when pc = rock
  if ( computerSelection === 'rock' ){
    if (playerSelection === 'scissors'){ 
      resultElem.textContent = `You Lose! computer's Rock beats Scissors`;
      return;
    }
    else if (playerSelection === 'paper') {
      playerScore++;
      resultElem.textContent = `You Win! Paper beats computer's Rock`;
      return;
    };
  }
  //when pc = paper
  if ( computerSelection === 'paper' ){
    if (playerSelection === 'scissors') {
      playerScore++;
      resultElem.textContent = `You Win! Scissors beats computer's Paper`;
      return;
    }
    else if (playerSelection === 'rock') {
      resultElem.textContent = `You Lose! computer's Paper beats Rock`;
      return;
    };
  }
  //when pc = scissors
  if ( computerSelection === 'scissors' ){
    if (playerSelection === 'rock') {
      playerScore++;
      resultElem.textContent = `You Win! Rock beats computer's Scissors`;
      return;
    }
    else if (playerSelection === 'paper') {
      resultElem.textContent = `You Lose! computer's Scissors beats Paper`;
      return;
    };
  }
};

//listen for player choice via bubbling. check state, play a round, check state, update state, output it.
document.querySelector('.buttonsHolder').addEventListener('click', event=> {
  // stop game with return since listener with anon function can't be removed
  if (round === 5 && gameOver) return;
  playRound( event.target.className, getComputerChoice() ); // className will be rock/paper/scissors
  //playRound is before game over so result elements keep displaying last round result.
  if (round === 5 && (playerScore/round) > 0.5){ 
    scoreElem.textContent = `You won the best of ${round} rounds!`;
    gameOver = true;
    return;
  } else if(round === 5 && (playerScore/round) < 0.5){
    scoreElem.textContent = `You did not win the best of ${round} rounds.`;
    gameOver = true;
    return;
  }
  scoreElem.innerHTML = `Your score: ${playerScore}&nbsp;&nbsp;&nbsp;Round: ${round}`; //.textContent collapsed the spaces
  round++;
});


// global game state variables
let computerSelection;
let playerSelection;
let playerScore = 0;
let round = 1;
let gameOver = false;
//reference nodes
const resultElem = document.querySelector('.result');
const scoreElem = document.querySelector('.score');

