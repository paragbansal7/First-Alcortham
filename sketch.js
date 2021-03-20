var q,w;

function setup() {
  createCanvas(800,400);

  q= createSprite(200, 200, 50, 80);
  w= createSprite(400, 200, 80, 30);

  q.velocityX=4;
  //q.velocityY=4;

  w.velocityX=-4;
  //w.velocityY=-4;

}

function draw() {
  background(255,255,255);  
   
  abc(q,w);
  xyz(q,w);


  drawSprites(); 
}

function abc (m,f) {

  if(f.x - m.x < f.width/2 + m.width/2  &&  m.x - f.x < f.width/2 + m.width/2){
    f.velocityX=f.velocityX*(-1);
    m.velocityX=m.velocityX*(-1);
  }

  if (f.y - m.y < f.height/2 + m.height/2 && m.y-f.y < f.height/2 + m.height/2)

  {
    f.velocityY=f.velocityY*(-1);
    m.velocityY=m.velocityY*(-1);
  }
  
}

  function xyz (m,f) {

if (f.x - m.x < f.width/2 + m.width/2  &&  m.x - f.x < f.width/2 + m.width/2 
  && f.y - m.y < f.height/2 + m.height/2 && m.y-f.y < f.height/2 + m.height/2 )

  {
    m.shapeColor="red";
    f.shapeColor="blue";
  }

  else {
    m.shapeColor="grey";
    f.shapeColor= "grey"
  }

  }
