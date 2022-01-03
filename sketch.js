var box1, box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new box(200, 200, 6, 6, 40, 40)
  box2 = new box(150, 300, 3, -4, 40, 40)
}

function draw() 
{
  background(220);
box1.show()
box1.moveX()
box2.show()
box2.moveY()
}


