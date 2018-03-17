const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

class Game {
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.firstBike = new Bike(40, 375, 10, 10, 'blue', 1, 0);
    this.secondBike = new Bike(960, 375, 10, 10, 'red', -1, 0);
    this.gameLoop = this.gameLoop.bind(this);
  }

  gameStart() {
    requestAnimationFrame(this.gameLoop);
  } 

  gameLoop() {  
    this.firstBike.move().draw(context);
    this.secondBike.move().draw(context);

    requestAnimationFrame(this.gameLoop);
    this.firstBike.sideCollision();
    this.firstBike.verticalCollision();
    this.secondBike.sideCollision();
    this.secondBike.verticalCollision();
    
    this.secondBike.collisionDetection(this.firstBike);
    this.firstBike.collisionDetection(this.secondBike);
    this.secondBike.collisionDetection(this.secondBike);
    this.firstBike.collisionDetection(this.firstBike);

  }; 
}


module.exports = Game;



