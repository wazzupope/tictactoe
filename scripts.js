/*
x gameboard is an array inside of gameboard object
players will also be objects (just player A and player B to start, both to be controlled by human, later can add functionality for CPU)
object to store the flow of the game itself
try to have everything inside a module or factory
if you need one of something, put it in a module
if you need more than one, put it in a factory

create html table for game board
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
  const zero = document.querySelector('#zero');
  const one = document.querySelector('#one');
  const two = document.querySelector('#two');
  const three = document.querySelector('#three');
  const four = document.querySelector('#four');
  const five = document.querySelector('#five');
  const six = document.querySelector('#six');
  const seven = document.querySelector('#seven');
  const eight = document.querySelector('#eight');
  const boardArray = [zero, one, two, three, four, five, six, seven, eight];
  return boardArray;
};

const playerFactory = () => {
  
}