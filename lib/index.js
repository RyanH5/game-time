var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
canvas.focus();
document.addEventListener('click', gameStart);
var Bike = require('./Bike.js');

var firstBike = new Bike(40, 375, 10, 10, 'blue', 1, 0);
var secondBike = new Bike(960, 375, 10, 10, 'red', -1, 0);


function gameStart() {
    console.log('gamestart');
    requestAnimationFrame(function gameLoop() {
      firstBike.move().draw(context);
      secondBike.move().draw(context);
      requestAnimationFrame(gameLoop);
      });

  }

document.addEventListener('keydown', pOneDirection);

  function pOneDirection(e) {
    //left
    if (e.keyCode == 37) {
      console.log('left');
      firstBike.changeDirection(-1, 0);
    }
    
    //up
    if (e.keyCode == 38) {
      console.log('up');
      firstBike.changeDirection(0, -1);
    }
    
    //right
    if (e.keyCode == 39) {
      console.log('right');
      firstBike.changeDirection( 1, 0);
    }
    
    //down
    if (e.keyCode == 40) {
      console.log('down');
      firstBike.changeDirection(0, 1);
    }
  }

