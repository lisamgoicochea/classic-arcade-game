// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;// multiplication by the dt parameter, same speed for all computers
    

    if (this.x > 480) { // if and when a bug reaches the right edge
        this.x = -123; // new bug appears on left edge
        this.speed = 100 + Math.floor(Math.random() * 484);
    }

  if (player.x < this.x + 60 &&
      player.x + 27 > this.x &&
      player.y < this.y + 25 &&
      30 + player.y > this.y) {
      player.x = 204;
      player.y = 404;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
//This class requires and update(), render() and a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-princess-girl.png';
    this.speed = speed;
};

// This class requires an update(), render() and
// a handleInput() method.

// when reaching water, colliding with bug, collecting a star
Player.prototype.update = function (dt) { // UPDATE
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

if (this.y > 384) {
    this.y = 384;
}

if (this.x > 404) {
    this.x = 400;
}

if (this.x < 0) {
    this.x = 0;
}

if (this.y < 0) {
  this.x = 204;
  this.y = 284;
}
// player is drawn on the screen
Player.prototype.render = function() { // RENDER
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) { // HANDLEINPUT
  'use strict';
  switch (key) {
    case 'left':
    this.x -= 103;
    break;

    case 'right':
    this.x += 103;
    break;

    case 'up':
    this.y -= 84;
    break;

    case 'down':
    this.y  += 84;
    break;
  }

if (this.x > 398) {
  this.x = 398;
}
if (this.y > 434) {
  this.y = 435;
}

if (this.x < 0) {
  this.x = 0;
}
if (this.y < 0) {
  alert("You've Made it!");
  this.reset();
  }
};

Enemy.prototype.checkCollision = function() {
  'use strict';
  if (this.x < player.x + player.width &&
    this.x + this.width > player.x &&
    player.y + player.height > this.y &&
    this.height + this.y > player.y) {
    player.reset();
  }
};

Player.prototype.reset = function() {
  'use strict';
  this.x = 202;
  this.y = 404;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [
  bug1 = new Enemy(0, 100, 100),
  bug2 = new Enemy(0, 240, 140),
  bug3 = new Enemy(0, 180, 140),
];

// Place the player object in a variable called player
var player = new Player(202,388);

var enemyPosition = [50, 150, 210];
var enemy;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});