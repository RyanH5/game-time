const Game = require('./Game.js');
class Actions {
  constructor() {
  console.log('hey')

  }
  pTwoDirection(e) {
    //left
    if (e.keyCode == 37) {
      console.log('left');
      secondBike.changeDirection(-1, 0);
    }

    //up
    if (e.keyCode == 38) {
      console.log('up');
      secondBike.changeDirection(0, -1);
    }

    //right
    if (e.keyCode == 39) {
      console.log('right');
      secondBike.changeDirection(1, 0);
    }

    //down
    if (e.keyCode == 40) {
      console.log('down');
      secondBike.changeDirection(0, 1);
    }
  }

  pOneDirection(e) {
    //left
    if (e.keyCode == 65) {
      console.log('left');
      firstBike.changeDirection(-1, 0);
    }

    //up
    if (e.keyCode == 87) {
      console.log('up');
      firstBike.changeDirection(0, -1);
    }

    //right
    if (e.keyCode == 68) {
      console.log('right');
      firstBike.changeDirection(1, 0);
    }

    //down
    if (e.keyCode == 83) {
      console.log('down');
      firstBike.changeDirection(0, 1);
    }
  }
}
module.exports = Actions;