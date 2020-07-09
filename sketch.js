var ball,img,paddle,paddleimg,edges
;
function preload() {
  img=loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200,20,20);
   paddle=createSprite(400,200,20,20);
  ball.addImage(img);
  paddle.addImage(paddleimg);
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  
  if(keyDown("space")){
  ball.velocityX=9;
    ball.velocityY=5; 
  }
  
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  
  paddle.bounceOff(edges[0]);
  paddle.bounceOff(edges[1]);
  paddle.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);
  

  if(ball.x>400){
    ball.x=200;
    ball.y=200;
    ball.velocityX=0;
    ball.velocityY=0;
    }
  
  
  if(keyWentDown(UP_ARROW))
  {
     paddle.velocityY=-9;
  }
  
  if(keyWentDown(DOWN_ARROW))
  {
    paddle.velocityY=9;
  }
  
  if(keyWentUp(UP_ARROW))
  {
     paddle.velocityY=0;
  }
  
  if(keyWentUp(DOWN_ARROW))
  {
    paddle.velocityY=0;
  }
  drawSprites();
  
}

