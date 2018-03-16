const Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(context, canvas.width, canvas.height)

document.addEventListener('keydown', game.firstBike.pOneDirection);
// document.addEventListener('keydown', game.secondBike.pTwoDirection);
document.addEventListener('click', game.gameStart());

// game.gameStart()