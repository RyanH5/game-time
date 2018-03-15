
class Controls {
  constructor(e, bike) {
  this.e = e;
  this.bike = bike; 
  }
  pTwoDirection(e, bike) {
    //left
    if (e.keyCode == 37) {
      console.log('left');
      debugger;
      this.bike(-1, 0);
    }

    //up
    if (e.keyCode == 38) {
      console.log('up');
      this.bike(0, -1);
    }

    //right
    if (e.keyCode == 39) {
      console.log('right');
      this.bike(1, 0);
    }

    //down
    if (e.keyCode == 40) {
      console.log('down');
      this.bike(0, 1);
    }
  }

  pOneDirection(e, bike) {
    //left
    if (e.keyCode == 65) {
      console.log('left');
      this.bike(-1, 0);
    }

    //up
    if (e.keyCode == 87) {
      console.log('up');
      this.bike(0, -1);
    }

    //right
    if (e.keyCode == 68) {
      console.log('right');
      this.bike(1, 0);
    }

    //down
    if (e.keyCode == 83) {
      console.log('down');
      this.bike(0, 1);
    }
  }
}

module.exports = Controls;