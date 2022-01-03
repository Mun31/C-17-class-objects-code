class box{
constructor(x, y, velocityX, velocityY, width, height){
  this.xPosition = x
  this.yPosition = y
  this.vy = velocityY
  this.vx = velocityX
  this.w = width
  this.h = height
  
}

show(){
  rect (this.xPosition, this.yPosition, this.w, this.h)
}

moveX(){
this.xPosition += this.vx

}

moveY(){
this.yPosition += this.vy
  
}

}



  
