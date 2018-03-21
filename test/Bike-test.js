const chai = require('chai');
const assert = chai.assert;
const Bike = require('../lib/Bike.js');

describe('Bike', function () {
  it('has an X Coorodinate', function () {
    let bike = new Bike(20, 6);
    let bikeTwo = new Bike(40, 20);

    assert.equal(bike.x, 20);
    assert.equal(bikeTwo.x, 40);

  });

  it('has a Y Coorodinate', function () {
    let bike = new Bike(20, 6);
    let bikeTwo = new Bike(40, 20);

    assert.equal(bike.y, 6);
    assert.equal(bikeTwo.y, 20);

  });

  it('has a radius', function () {
    let bike = new Bike(20, 6, 5);
    let bikeTwo = new Bike(40, 20, 7);

    assert.equal(bike.radius, 5);
    assert.equal(bikeTwo.radius, 7);

  });

  it('has an arc start', function () {
    let bike = new Bike(20, 6, 20, 0);
    let bikeTwo = new Bike(40, 20, 10, 5);

    assert.equal(bike.arcStart, 0);
    assert.equal(bikeTwo.arcStart, 5);

  });

  it('has an X Direction', function () {
    let bike = new Bike(20, 6, 10, 30, 3);
    let bikeTwo = new Bike(40, 30, 10, 0, -5);
    let bikeThree = new Bike(40, 30, 10, 0, 0);

    assert.equal(bike.xDir, 3);
    assert.equal(bikeTwo.xDir, -5);

  });

  it('has a Y Direction', function () {
    let bike = new Bike(20, 6, 20, 0, 3, 0);
    let bikeTwo = new Bike(40, 20, 0, 5, 0, 4);

    assert.equal(bike.yDir, 0);
    assert.equal(bikeTwo.yDir, 4);

  });

  it('has a Color', function () {
    let bike = new Bike(20, 6, 10, 0, 3, 0, 'red');
    let bikeTwo = new Bike(40, 10, 0, 5, -3, 0, 'green');

    assert.equal(bike.color, 'red');
    assert.equal(bikeTwo.color, 'green');

  });

  it('the move function should reassign x to equal x plus xDir', function () {
    let bike = new Bike(20, 6, 10, 0, 3, 0, 'red');
    let bikeTwo = new Bike(40, 10, 10, 0, 0, 3, 'green');
    let bikeThree = new Bike(30, 15, 10, 0, -3, 0, 'green');
    let bikeFour = new Bike(100, 15, 10, 0, 0, -3, 'green');

    assert.equal(bike.x, 20);
    assert.equal(bikeTwo.x, 40);

    bike.move(0, 2);
    bikeTwo.move(10, 8);

    assert.equal(bike.x, 23);
    assert.equal(bikeTwo.x, 40);
    assert.equal(bikeThree.x, 30);
    assert.equal(bikeFour.x, 100);

  });

  it('the move function should reassign y to equal y plus yDir', function () {
    let bike = new Bike(20, 6, 10, 0, 3, 0, 'red');
    let bikeTwo = new Bike(40, 20, 0, 5, 0, 4, 'green');

    assert.equal(bike.y, 6);
    assert.equal(bikeTwo.y, 20);

    bike.move(0, 2);
    bikeTwo.move(10, 8);

    assert.equal(bike.y, 6);
    assert.equal(bikeTwo.y, 24)

  });

  it('able to reassign the xDir to a new direction value', function () {
    let bike = new Bike(20, 6, 10, 0, 3, 0, 'red');
    let bikeTwo = new Bike(40, 10, 10, 0, 0, 3, 'green');
    let bikeThree = new Bike(30, 15, 10, 0, -3, 0, 'yellow');
    let bikeFour = new Bike(70, 100, 10, 0, 0, -3, 'purple');

    assert.equal(bike.xDir, 3);
    assert.equal(bikeTwo.xDir, 0);
    assert.equal(bikeThree.xDir, -3);
    assert.equal(bikeFour.xDir, 0)

    bike.changeDirection(0, 3);
    bikeTwo.changeDirection(3, 0);
    bikeThree.changeDirection(0, -3);
    bikeFour.changeDirection(-3, 0);

    assert.equal(bike.xDir, 0);
    assert.equal(bikeTwo.xDir, 3);
    assert.equal(bikeThree.xDir, 0);
    assert.equal(bikeFour.xDir, -3)

  });

  it('able to reassign the yDir to a new direction value', function () {
    let bike = new Bike(20, 6, 10, 0, 3, 0, 'red');
    let bikeTwo = new Bike(40, 10, 10, 0, 0, 3, 'green');
    let bikeThree = new Bike(30, 15, 10, 0, -3, 0, 'yellow');
    let bikeFour = new Bike(70, 100, 10, 0, 0, -3, 'purple');

    assert.equal(bike.yDir, 0);
    assert.equal(bikeTwo.yDir, 3);
    assert.equal(bikeThree.yDir, 0);
    assert.equal(bikeFour.yDir, -3);

    bike.changeDirection(0, 3);
    bikeTwo.changeDirection(3, 0);
    bikeThree.changeDirection(0, -3);
    bikeFour.changeDirection(-3, 0);

    assert.equal(bike.yDir, 3);
    assert.equal(bikeTwo.yDir, 0);
    assert.equal(bikeThree.yDir, -3);
    assert.equal(bikeFour.yDir, 0);

  });

  it('moves left if left-arrow key is pressed', function () {
    let bikeTwo = new Bike(20, 6, 10, 0, 0, -3, 'red');

    bikeTwo.changeDirection(-3, 0);
    bikeTwo.move();

    assert.equal(bikeTwo.x, 17)
    assert.equal(bikeTwo.y, 6);

  });

  it('moves left if A key is pressed', function () {
    let bikeTwo = new Bike(20, 6, 10, 0, 0, 3, 'blue');

    bikeTwo.changeDirection(-3, 0);
    bikeTwo.move();

    assert.equal(bikeTwo.x, 17)
    assert.equal(bikeTwo.y, 6);

  });

  it('moves up if up-arrow key is pressed', function () {
    let bike = new Bike(20, 6, 10, 0, 3, 0, 'red');

    bike.changeDirection(0, 3);
    bike.move();

    assert.equal(bike.x, 20);
    assert.equal(bike.y, 9);

  });

  it('moves up if W key is pressed', function () {
    let bike = new Bike(30, 6, 10, 0, -3, 0, 'yellow');

    bike.changeDirection(0, 3);
    bike.move();

    assert.equal(bike.y, 9);
    assert.equal(bike.x, 30);

  });

  it('moves right if right-arrow key is pressed', function () {
    let bike = new Bike(20, 6, 10, 0, 0, -3, 'red');

    bike.changeDirection(3, 0);
    bike.move()

    assert.equal(bike.y, 6);
    assert.equal(bike.x, 23);

  });

  it('moves right if D key is pressed', function () {
    let bike = new Bike(40, 20, 10, 5, 0, -3, 'green');

    bike.changeDirection(3, 0);
    bike.move();

    assert.equal(bike.x, 43)
    assert.equal(bike.y, 20);

  });

  it('moves down if down-arrow key is pressed', function () {
    let bike = new Bike(40, 20, 10, 5, 0, -3, 'orange');

    bike.changeDirection(0, 3);
    bike.move();

    assert.equal(bike.x, 40)
    assert.equal(bike.y, 17);

  });

  it('moves down if S key is pressed', function () {
    let bike = new Bike(90, 50, 10, 0, 0, -3, 'yellow');

    bike.changeDirection(0, 3);
    bike.move();

    assert.equal(bike.x, 90)
    assert.equal(bike.y, 47);

  });

  it('stores decreased Y values in tail while yDir is negative', function () {
    let bike = new Bike(90, 50, 10, 5, 0, -3, 'turquoise');
    bike.tail = [{ x: 90, y: 50 }]
    bike.move();


    assert.deepEqual(bike.tail, [{ x: 90, y: 50 }, { x: 90, y: 47 }, { x: 90, y: 46 }, { x: 90, y: 45 }]);

  });

  it('stores increased Y values in tail while yDir is positive', function () {
    let bike = new Bike(90, 50, 10, 5, 0, 3, 'turquoise');
    bike.tail = [{ x: 90, y: 50 }]
    bike.move();

    assert.deepEqual(bike.tail, [{ x: 90, y: 50 }, { x: 90, y: 53 }, { x: 90, y: 54 }, { x: 90, y: 55 }]);

  });

  it('stores increased X values in tail while xDir is positive', function () {
    let bike = new Bike(90, 50, 10, 5, 3, 0, 'turquoise');
    bike.tail = [{ x: 90, y: 50 }]
    bike.move();

    assert.deepEqual(bike.tail, [{ x: 90, y: 50 }, { x: 93, y: 50 }, { x: 94, y: 50 }, { x: 95, y: 50 }]);

  });

  it('stores decreased X values in tail while xDir is negative', function () {
    let bike = new Bike(90, 50, 10, 5, -3, 0, 'turquoise');
    bike.tail = [{ x: 90, y: 50 }]
    bike.move();

    assert.deepEqual(bike.tail, [{ x: 90, y: 50 }, { x: 87, y: 50 }, { x: 86, y: 50 }, { x: 85, y: 50 }]);

  });

  it('bike crashes when it hits left wall', function () {
    let bike = new Bike(90, 50, 10, 0, 0, -3, 'yellow');
    let bikeTwo = new Bike(12, 50, 10, 0, -3, 0, 'red');
    assert.equal(bike.crashed, false)
    assert.equal(bike.crashed, false)

    bike.move();
    bike.sideCollision();
    bikeTwo.move();
    bikeTwo.sideCollision();

    assert.equal(bike.crashed, false)
    assert.equal(bikeTwo.crashed, true);

  });

  it('bike crashes when it hits right wall', function () {
    let bike = new Bike(90, 50, 10, 0, 0, -3, 'yellow');
    let bikeTwo = new Bike(838, 50, 10, 0, 3, 0, 'red');
    assert.equal(bike.crashed, false)
    assert.equal(bike.crashed, false)

    bike.move();
    bike.sideCollision();
    bikeTwo.move();
    bikeTwo.sideCollision();

    assert.equal(bike.crashed, false)
    assert.equal(bikeTwo.crashed, true);

  });

  it('bike crashes when it hits top wall', function () {
    let bike = new Bike(90, 12, 10, 0, 0, -3, 'yellow');
    let bikeTwo = new Bike(838, 50, 10, 0, 3, 0, 'red');
    assert.equal(bike.crashed, false)
    assert.equal(bike.crashed, false)

    bike.move();
    bike.verticalCollision();
    bikeTwo.move();
    bikeTwo.verticalCollision();

    assert.equal(bike.crashed, true)
    assert.equal(bikeTwo.crashed, false);

  });

  it('bike crashes when it hits floor', function () {
    let bike = new Bike(90, 624, 10, 0, 0, 3, 'yellow');
    let bikeTwo = new Bike(838, 50, 10, 0, 3, 0, 'red');
    assert.equal(bike.crashed, false)
    assert.equal(bike.crashed, false)

    bike.move();
    bike.verticalCollision();
    bikeTwo.move();
    bikeTwo.verticalCollision();

    assert.equal(bike.crashed, true)
    assert.equal(bikeTwo.crashed, false);

  });

  it('bike crash when they hit', function () {
    let bike = new Bike(92, 25, 10, 0, 0, -3, 'yellow');
    let bikeTwo = new Bike(90, 41, 10, 0, -3, 0, 'red');
    let bikeThree = new Bike(30, 135, 10, 0, -3, 0, 'yellow');
    let bikeFour = new Bike(70, 400, 10, 0, 0, -3, 'purple');
    assert.equal(bike.crashed, false);
    assert.equal(bikeTwo.crashed, false);
    assert.equal(bike.crashed, false);
    assert.equal(bikeTwo.crashed, false);

    bike.move();
    bikeTwo.move();
    bike.collisionDetection(bikeTwo);
    bikeTwo.collisionDetection(bike);
    bikeThree.move();
    bikeFour.move();
    bikeThree.collisionDetection(bikeFour);
    bikeFour.collisionDetection(bikeThree);

    assert.equal(bike.crashed, true)
    assert.equal(bikeTwo.crashed, false);
    assert.equal(bikeThree.crashed, false)
    assert.equal(bikeFour.crashed, false);

  });

});