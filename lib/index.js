var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
canvas.focus();
document.addEventListener('keydown', gameStart);
var BikeOne = require('./Bike.js');

var firstBike = new Bike(40, 375, 10, 10, 'blue', 1, 0);
var secondBike = new Bike(960, 375, 10, 10, 'red', -1, 0);


function gameStart() {
  // if(e.keycode == 66) {
    console.log('gamestart');
    requestAnimationFrame(function gameLoop() {
      firstBike.move().draw(context);
      secondBike.move().draw(context);
      requestAnimationFrame(gameLoop);
      });

  }
// }

