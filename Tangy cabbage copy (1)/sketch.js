 //These are the variables that are used throughout the code
var bird;
  var pipes = [];
//size of the canvas
  function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
  }

  function draw() {
    background(102,178,255);

    
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();
//everytime bird hits pipe console log says hit
      if (pipes[i].hits(bird)) {
        console.log("HIT");
        document.location.reload()
      }


      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.update();
    bird.show();
    if (frameCount % 100 == 0) {
      pipes.push(new Pipe());
    }

  }
// every time mouse is clicked bird flaps up
  function mousePressed() {
    if (key == '') {
      bird.up();
    
    }
  }

  function Bird() {
    this.y = height / 2;
    this.x = 64;
    this.x1 = 70
    this.x2 = 95
    this.y1 =290
    this.y2 = 300
    this.x3 =70
    this.y3 =310
//this gives the gravity values and lift values so the bird can move up and down
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
		this.show = function() {
      //color and size of bird
       fill(255,0,0)
      triangle(this.x3,this.y3,this.x1,this.y1,this.x2,this.y2)
      fill(244, 208, 63);
      ellipse(this.x, this.y, 32, 32)
     
    }

    this.up = function() {
      this.velocity += this.lift;
    }

    this.update = function() {
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;
			this.y1+= this.velocity;
      this.y2+= this.velocity;
      this.y3+= this.velocity;
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }

      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    }
  }
//this function creates mutiple pipes and tells the pipe how far it moves to the right
  function Pipe() {
    this.top = random(height / 2);
    this.bottom = random(height / 2);
    this.x = width;
    this.w = 20;
    this.speed = 2;

    this.highlight = false;
//this defines this.hits which tells us when the bird comes in contact with the pipe
    this.hits = function(bird) {
      if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          this.highlight = true;
          return true;
        }
      }
      this.highlight = false;
      return false;
    }
//this shows the pipe and its colors and shows the color of the pipe when you hit it
    this.show = function() {
      fill(25, 111, 61);
     
      if (this.highlight) {
        fill(255,0, 0);
      }
      rect(this.x, 0, this.w, this.top);
      rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    this.update = function() {
      this.x -= this.speed;
    }

    this.offscreen = function() {
      if (this.x < -this.w) {
        return true;
      } else {
        return false;
      }
    }


  }