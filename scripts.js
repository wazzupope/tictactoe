/*
x gameboard is an array inside of gameboard object
players will also be objects (just player A and player B to start, both to be controlled by human, later can add functionality for CPU)
object to store the flow of the game itself
try to have everything inside a module or factory
if you need one of something, put it in a module
if you need more than one, put it in a factory

x create html table for game board
write js function that will fill the gameboard on the page with the contents of the gameboard array
write functions that allow players to click a part of the gameboard and place an x or o in the DOM
make sure they are unable to put a mark in a box that already has a mark (remove eventListener)
each piece of functionality should be able to fit in the gameboard, player, or game objects

build logic that checks if the game is over - either 3 in a row or a tie (full board without a winner)
allow players to input their names
include a button to start/restart the game
display element that congratulates the winner
optional - create AI opponent
*/

const makeMove = (event) => {
  event.target.textContent = "o";
 // take which cell was clicked and update currentBoard
 // write textContent of which player (x or o) clicked it
 // then disable the event listener on that cell
 // then change to the other player's move
 // then run function of checkWin
};

const gameBoard = (() => {
  // Variables for each cell with event listeners
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('click', makeMove));

  // Array from each cell
  const boardArray = [zero, one, two, three, four, five, six, seven, eight];
  return boardArray;
  // does makeMove need to be within this object to honor what the instructions say?
  // display a form on page load to take in player a and player b names, who will be x and who will be o, and who goes first
  // on submit (create button with eventlistener) run playerFactory with (name, indicator, turn) as arguments, taken from form
})();

const playerFactory = (name, indicator, turn) => {
  const getName = () => name;
  const getIndicator = () => indicator;
  const getTurn = () => {
    if (turn === "1st") {
      return "1st";
    }
      return "2nd";
  };
};

const currentBoard = () => {
  // takes boardArray and creates an updated version of it each time that makeMove is run
};

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