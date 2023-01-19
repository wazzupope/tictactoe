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

const gameBoard = () => {
  // Variables for each cell with event listeners
  const zero = document.querySelector('#zero');
  zero.addEventListener('click', makeMove);
  const one = document.querySelector('#one');
  one.addEventListener('click', makeMove);
  const two = document.querySelector('#two');
  two.addEventListener('click', makeMove);
  const three = document.querySelector('#three');
  three.addEventListener('click', makeMove);
  const four = document.querySelector('#four');
  four.addEventListener('click', makeMove);
  const five = document.querySelector('#five');
  five.addEventListener('click', makeMove);
  const six = document.querySelector('#six');
  six.addEventListener('click', makeMove);
  const seven = document.querySelector('#seven');
  seven.addEventListener('click', makeMove);
  const eight = document.querySelector('#eight');
  eight.addEventListener('click', makeMove);

  // Array from each cell
  const boardArray = [zero, one, two, three, four, five, six, seven, eight];
  return boardArray;
  // does makeMove need to be within this object to honor what the instructions say?
};

const playerFactory = () => {
  // creates a player with a name input from a form
  // gives that player attributes like name, game piece character, turn (first or second)
};

const currentBoard = () => {
  // takes boardArray and creates an updated version of it each time that makeMove is run
};

const makeMove = (cell) => {
 // take which cell was clicked and update currentBoard
 // write textContent of which player (x or o) clicked it
 // then disable the event listener on that cell
 // then change to the other player's move
 // then run function of checkWin
};

const checkWin = () => {
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
  // should probably loop through the currentBoard array to make this happen
};