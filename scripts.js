/*

***RESUME WORK AT currentBoard FUNCTION AROUND LINE 100***

x gameboard is an array inside of gameboard object
x players will also be objects (just player A and player B to start, both to be controlled by human, later can add functionality for CPU)
object to store the flow of the game itself
try to have everything inside a module or factory
if you need one of something, put it in a module
if you need more than one, put it in a factory

x create html table for game board
write js function that will fill the gameboard on the page with the contents of the gameboard array
x write functions that allow players to click a part of the gameboard and place an x or o in the DOM
make sure they are unable to put a mark in a box that already has a mark (remove eventListener)
each piece of functionality should be able to fit in the gameboard, player, or game objects

build logic that checks if the game is over - either 3 in a row or a tie (full board without a winner)
x allow players to input their names
include a button to start/restart the game
display element that congratulates the winner
optional - create AI opponent
*/

const playerFactory = (name, indicator, turn) => {
  const playerName = name;
  const playerIndicator = indicator;
  const playerTurn = turn;
  const changeTurn = (player) => {
    const thisPlayer = player;
    if (thisPlayer.playerTurn === "yes") {
      thisPlayer.playerTurn = "no";
    }
    else {
      thisPlayer.playerTurn = "yes";
    };
  };
  return {playerName, playerIndicator, playerTurn, changeTurn}
};

// Declare player name variables
let player1Name = "Player 1";
let player2Name = "Player 2";

// Get player names from form
function updatePlayerName() {
  player1Name = document.querySelector('#player1').value;
  player2Name = document.querySelector('#player2').value;
}

// Create players
const player1 = playerFactory(player1Name, "x", "yes");
const player2 = playerFactory(player2Name, "o", "no");

const playerHandler = (event) => {
  event.preventDefault();
  // Add player names alongside game board
  const leftPlayerNameDisplay = document.querySelector('#left-player-name');
  const rightPlayerNameDisplay = document.querySelector('#right-player-name');
  function playerNameDisplay() {
    leftPlayerNameDisplay.textContent = player1Name;
    rightPlayerNameDisplay.textContent = player2Name;
  };
  updatePlayerName();
  playerNameDisplay();
};

const makeMove = (event) => {
  const selectedCell = event;
  function markThenChangeTurns() {
    if (player1.playerTurn === "yes") {
      selectedCell.target.textContent = "x";
      player1.changeTurn(player1);
      player2.changeTurn(player2);
    }
    else {
      selectedCell.target.textContent = "o";
      player1.changeTurn(player1);
      player2.changeTurn(player2);
    };
  };
  markThenChangeTurns();
  selectedCell.target.removeEventListener('click', makeMove);
  return {selectedCell, markThenChangeTurns}
 // take which cell was clicked and update currentBoard
 // then run function of checkWin
};

const gameBoard = (() => {
  // Variables for each cell with event listeners
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('click', makeMove));

  // Array from each cell
  const boardArray = Array.from(cells);

  // Player form submit handler
  const submitForm = document.querySelector('#play-button');
  submitForm.addEventListener('click', playerHandler);

  return {boardArray};
})();

const currentBoard = () => {
  const newBoard = gameBoard.boardArray;
  console.log(newBoard[0]);
  // takes boardArray and creates an updated version of it each time that makeMove is run
};
currentBoard();

const checkWin = () => {
  const winningScenarios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // check all winning scenarios (need to write out what these are, each an array within an array containing all the scenarios)
  // if won, run gameWon
  // if not, check if all cells full
  // if full, run gameTied
};

const gameWon = () => {
  // display who won game and highlight the cells with the winning 3 in a row
  // make sure the display has a reset button (can put one in the gameWon display or put it somewhere visible/clickable outside gameWon display)
  // reset button runs reset
};

const gameTied = () => {
  // display that game was tied and refer to gameWon comments for reset
};

const reset = () => {
  // clears all cells
  // re-enables all eventListeners that were disabled
  // displays initial form for name input, etc.
  // should probably loop through the currentBoard array to make this happen - or does gameBoard do all of this?
};