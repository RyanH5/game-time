const Bike = require('./Bike.js');
const Actions = require('./Actions.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

class Game {
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.firstBike = new Bike(40, 375, 10, 10, 'blue', 1, 0);
    this.secondBike = new Bike(960, 375, 10, 10, 'red', -1, 0);
  }

  gameStart() {
    requestAnimationFrame(function gameLoop() {  
      this.firstBike.move(1, 0).draw(context);
      this.secondBike.move(1, 0).draw(context);
      requestAnimationFrame(gameLoop);
    }.bind(this)); 
  } 
}


module.exports = Game;



