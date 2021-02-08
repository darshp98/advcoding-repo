var myParticles = [];

function setup() {
  createCanvas(1000, 1000);
  var cButton = select('#clear_button');
  cButton.mousePressed(clearParticles); //had to take out () after clearParticles, don't know why though

}

function draw() {
  background(220);

  for(var i=0; i < myParticles.length; i++){ //had to put .length to get an actual num rather than an array name
    myParticles[i].move(); //had to add () to make the function work
    myParticles[i].render();
  }
}

function clearParticles(){
  myParticles = [];
}

function mouseDragged() {
  var tempParticle = new Particle(mouseX,mouseY);
  myParticles.push(tempParticle);
}

class Particle {
  constructor(x,y) { //changed mX and mY to x and y so that the right variable is taken as input
    this.x = x;
    this.y = y;
    this.speedX = random(-3,3);
    this.speedY = random(-3,3);
    this.col = color(random(255), random(255), random(255));
    this.diameter = random(3,15);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // if the particles approaches the 'wall' change direction

    //had to add curly brackets to separate and execute the if statements
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }
  }

  render() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter); //had to make x and y this.x and this.y
  }
}
