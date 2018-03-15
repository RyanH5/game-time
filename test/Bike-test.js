const chai = require('chai');
const assert = chai.assert;
const Bike = require('../lib/Bike.js');

describe('Bike', function () {
  it('Has an X Coorodinate', function () {
    let bike = new Bike(20, 6);
    let bikeTwo = new Bike(40, 20);
    
    assert.equal(bike.x, 20);
    assert.equal(bikeTwo.x, 40);

  });

  it('Has a Y Coorodinate', function () {
    let bike = new Bike(20, 6);
    let bikeTwo = new Bike(40, 20);

    assert.equal(bike.y, 6);
    assert.equal(bikeTwo.y, 20);

  });

  it('Has a Width', function () {
    let bike = new Bike(20, 6, 20);
    let bikeTwo = new Bike(40, 20, 10);

    assert.equal(bike.width, 20);
    assert.equal(bikeTwo.width, 10);

  });

  it('Has a Height', function () {
    let bike = new Bike(20, 6, 20, 30);
    let bikeTwo = new Bike(40, 20, 10, 5);

    assert.equal(bike.height, 30);
    assert.equal(bikeTwo.height, 5);

  });

  it('Has a Color', function () {
    let bike = new Bike(20, 6, 20, 30, 'red');
    let bikeTwo = new Bike(40, 20, 10, 5, 'green');

    assert.equal(bike.color, 'red');
    assert.equal(bikeTwo.color, 'green');

  });

  it('Has a X Direction', function () {
    let bike = new Bike(20, 6, 20, 30, 'red', 0);
    let bikeTwo = new Bike(40, 20, 10, 5, 'green', -2);

    assert.equal(bike.xDir, 0);
    assert.equal(bikeTwo.xDir, -2);

  });

  it('Has a Y Direction', function () {
    let bike = new Bike(20, 6, 20, 30, 'red', 0, 3);
    let bikeTwo = new Bike(40, 20, 10, 5, 'green', -2, 4);

    assert.equal(bike.yDir, 3);
    assert.equal(bikeTwo.yDir, 4);

  });

  it('the move function should reassign x to equal x plus xDir', function () {
    let bike = new Bike(20, 6, 20, 30, 'red', 0, 2);
    let bikeTwo = new Bike(40, 20, 10, 5, 'green', 10, 8);

    assert.equal(bike.x, 20);
    assert.equal(bikeTwo.x, 40);

    bike.move(0, 2);
    bikeTwo.move(10, 8);

    assert.equal(bike.x, 20);
    assert.equal(bikeTwo.x, 50)

  });

  it('the move function should reassign y to equal y plus yDir', function () {
    let bike = new Bike(20, 6, 20, 30, 'red', 0, 2);
    let bikeTwo = new Bike(40, 20, 10, 5, 'green', 10, 8);

    assert.equal(bike.y, 6);
    assert.equal(bikeTwo.y, 20);

    bike.move(0, 2);
    bikeTwo.move(10, 8);

    assert.equal(bike.y, 8);
    assert.equal(bikeTwo.y, 28)

  });

  it('able to reassign the xDir to a new direction value', function () {
    let bike = new Bike(20, 6, 20, 30, 'red', 0, 2);
    let bikeTwo = new Bike(40, 20, 10, 5, 'green', 10, 8);

    assert.equal(bike.xDir, 0);
    assert.equal(bikeTwo.xDir, 10);

    bike.changeDirection(1, -1);
    bikeTwo.changeDirection(3, 0);

    assert.equal(bike.xDir, 1);
    assert.equal(bikeTwo.xDir, 3)

  });

  it('able to reassign the yDir to a new direction value', function () {
    let bike = new Bike(20, 6, 20, 30, 'red', 0, 2);
    let bikeTwo = new Bike(40, 20, 10, 5, 'green', 10, 8);

    assert.equal(bike.yDir, 2);
    assert.equal(bikeTwo.yDir, 8);

    bike.changeDirection(1, -1);
    bikeTwo.changeDirection(3, 0);

    assert.equal(bike.yDir, -1);
    assert.equal(bikeTwo.yDir, 0)

  });
});


//has an X and Y Coorodinate

//has an X and Y Coorodinate

//has an X and Y Coorodinate