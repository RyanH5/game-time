const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

class Game {
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.firstBike = new Bike(20, 380, 10, 10, 'cyan', 1, 0);
    this.secondBike = new Bike(820, 380, 10, 10, 'magenta', -1, 0);
    this.gameLoop = this.gameLoop.bind(this);
    this.gameStart = this.gameStart.bind(this);
  }

  gameStart() {
    requestAnimationFrame(this.gameLoop);
  } 

  gameLoop() {  
    this.firstBike.move().draw(context).clearTail(context);
    this.secondBike.move().draw(context).clearTail(context);

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



