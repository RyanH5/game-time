var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

const Bike = require('./Bike.js');
const Player = require('./Player.js');

const firstBike = new Bike(40, 375, 10, 10, 'blue', 1, 0);
const secondBike = new Bike(960, 375, 10, 10, 'red', -1, 0);
document.addEventListener('keydown', firstBike.pOneDirection);
document.addEventListener('keydown', secondBike.pTwoDirection);

function gameStart() {
  console.log('gamestart');
  requestAnimationFrame(function gameLoop() {
  
    firstBike.move().draw(context);
    secondBike.move().draw(context);
    requestAnimationFrame(gameLoop);
  });
  
} 

document.addEventListener('click', gameStart);
module.exports = { firstBike, secondBike };



