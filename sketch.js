var bg, bgImg;
var answer, answeringBox, answerBox, answerBox2, answerBox3, answerBox4, answerBox5, answerBox7, answerBox8, answerBox9, coin, amazing
var score

function preload() {
	bgImg = loadImage ("classroom.png")
  coinImg = loadImage ("coins.png")
  girlImg = loadImage ("girl.png")
  bg2 = loadImage ("classroom_goodJob.png.jpg")
  amazingImg = loadImage ("amazing.png")
  crossImg = loadImage ("cross.png")
  
  
}

function setup() {
  createCanvas(1000,500);
  answeringBox = new AnswerBox
  system = new System()

  bg = createSprite (500,300, 1000, 500)
  bg.addImage(bgImg)
  bg.scale = 1

  coin = createSprite (500,300,20,20)
  coin.addImage(coinImg)
  coin.scale = 0.06
  coin.visible = false

  jane = createSprite (750,400)
  jane.addImage (girlImg)
  jane.scale = 0.37

  amazing = createSprite (100,70,20,20)
  amazing.addImage(amazingImg)
  amazing.scale = 0.3
  amazing.visible = false

  cross = createSprite (200,200,20,20)
  cross.addImage(crossImg)
  cross.scale = 0.3
  cross.visible = false
  
 

  score = 0
}


function draw() {
  background(255,255,255);
  jane.x = World.mouseX
  if (jane.x < 150) {
    jane.x = 150
}
if (jane.x > 800) {
    jane.x = 800
}
  drawSprites();
  answeringBox.display()
  textSize(20);
  fill("black");
  text("Score: " + score, 450, 50);

  textSize(15);
  fill("white");
  text(" Hi I am Jane and my group needs to answer the math questions to earn group points. Please join my group and help me answer the questions ", 100, 350, 200, 300);
  
  if (score === 5) {
    clear()
    background(bg2)
    
  }
}