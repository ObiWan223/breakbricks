var ball1; // Define the game ball.
var paddle1; // Define the first paddle.
var paddle2; // Define the second paddle.

var redCol = 0
var greenCol = 0;
var blueCol = 0;

function setup() {
  createCanvas(400, 400); // Create the canvas.
  ball1 = new Ball(); // Assign a new ball from the 'Ball' class.
  paddle1 = new Paddle(); // Assign a new paddle from the 'Paddle' class.
  paddle2 = new Paddle(); // Assign a new paddle from the 'Paddle' class.
}

function draw() {
  background(redCol, greenCol, blueCol); // Set the background color to black.
  
  // Paddle 1 properties.
  fill(255,0,0); // Set color of the left ball to red.
  paddle1.x = 0; // Vertical position.
  paddle1.y = 175; // Horizontal position.
  paddle1.display(); // Show the left paddle.

  // Paddle 2 properties.
  fill(0,0,255); // Set color of the right paddle to blue.
  paddle2.x = 385; // Set the horizontal position.
  paddle2.y = mouseY; // Set the vertical position to be the mouseY position.
  paddle2.display(); // Show the right paddle.
  
  // Ball properties.
  fill(255,255,255); // Set color of the ball to white.
  ball1.display(); // Display the game ball.
  
  moveBall();
}

// Function that sets the ball movement.
function moveBall() {
  ball1.x = ball1.x + ball1.speed; // Set the initial speed.
  text("ball x :" + ball1.x + ". ball y : " + ball1.y, 50, 50) // Debug.
  text("paddle x :" + paddle2.x + ". paddle y : " + paddle2.y, 50, 70) // Debug.
    if(ball1.x > width) { //  If the ball touches the right edge of the canvas. Change the background color.
      redCol = 60;
      greenCol = 234;
      blueCol = 115;
      ball1.speed = ball1.speed - 5; // Also make the ball move the opposite way.
    } else if(ball1.x < 0) { // If the ball touches the left edge of the canvas. Change the background color.
      redCol = 180;
      greenCol = 30;
      blueCol = 240;
      ball1.speed = ball1.speed +5; // Also make the ball move the opposite way.
    }
  }