var goodShip,goodShipImg;
var villianShip,villianShipImg;
var villianShip1,villianShipImg01
var backGroundImg;
var bulletImg,bullet;
var count = 0;

var gameState = "play";

function preload(){

    goodShipImg = loadImage("images/goodShip.png");    
villianShipImg = loadImage("images/villianShip.png");
villianShipImg01 = loadImage("images/villianShip.png");
villianShipImg02 = loadImage("images/villianShip.png");
villianShipImg03 = loadImage("images/villianShip.png");
villianShipImg04 = loadImage("images/villianShip.png");
villianShipImg05 = loadImage("images/villianShip.png");
villianShipImg06 = loadImage("images/villianShip.png");
villianShipImg07 = loadImage("images/villianShip.png");
villianShipImg08 = loadImage("images/villianShip.png");
villianShipImg09 = loadImage("images/villianShip.png");
villianShipImg1 = loadImage("images/villianShip1.png")
villianShipImg11 = loadImage("images/villianShip1.png")
villianShipImg12 = loadImage("images/villianShip1.png")
villianShipImg13 = loadImage("images/villianShip1.png")
villianShipImg14 = loadImage("images/villianShip1.png")
villianShipImg15 = loadImage("images/villianShip1.png")
villianShipImg16 = loadImage("images/villianShip1.png")
villianShipImg17 = loadImage("images/villianShip1.png")
villianShipImg18 = loadImage("images/villianShip1.png")
villianShipImg19 = loadImage("images/villianShip1.png")
backGroundImg = loadImage("images/spaceBg.jpeg")
bulletImg = loadImage("images/laserBlast.png")
villianBulletImg = loadImage("images/laserBlast.png")
}

function setup(){
createCanvas(1200,650);

goodShip = createSprite(150,290,50,50);
goodShip.addImage(goodShipImg);
goodShip.scale = 0.2;

villianShip = createSprite(1050,70,50,50);
villianShip01 = createSprite(1050,125,50,50);
villianShip02 = createSprite(1050,180,50,50);
villianShip03 = createSprite(1050,235,50,50);
villianShip04 = createSprite(1050,290,50,50);
villianShip05 = createSprite(1050,345,50,50);
villianShip06 = createSprite(1050,400,50,50);
villianShip07 = createSprite(1050,455,50,50);
villianShip08 = createSprite(1050,510,50,50);
villianShip09 = createSprite(1050,565,50,50);

villianShip.addImage(villianShipImg);
villianShip01.addImage(villianShipImg01);
villianShip02.addImage(villianShipImg02);
villianShip03.addImage(villianShipImg03);
villianShip04.addImage(villianShipImg04);
villianShip05.addImage(villianShipImg05);
villianShip06.addImage(villianShipImg06);
villianShip07.addImage(villianShipImg07);
villianShip08.addImage(villianShipImg08);
villianShip09.addImage(villianShipImg09);

villianShip.scale = 0.2;
villianShip01.scale = 0.2;
villianShip02.scale = 0.2;
villianShip03.scale = 0.2;
villianShip04.scale = 0.2;
villianShip05.scale = 0.2;
villianShip06.scale = 0.2;
villianShip07.scale = 0.2;
villianShip08.scale = 0.2;
villianShip09.scale = 0.2;

bulletGroup = new Group();
villianBulletGroup = new Group();

}

function draw(){
     background(backGroundImg)
    if(gameState==="play"){
    
        if(keyDown(UP_ARROW)){
            goodShip.y = goodShip.y-4;
        }
        if(keyDown(DOWN_ARROW)){
           goodShip.y = goodShip.y+4;
       }
       if(keyDown(RIGHT_ARROW)){
           goodShip.x = goodShip.x+4;
       }
       if(keyDown(LEFT_ARROW)){
           goodShip.x = goodShip.x-4;
       }
   
       if(keyDown("space")){
           bullets();
       }
       
       if(keyDown("space")){
           bullet.velocityX = 4; 
           bullet.y = goodShip.y;
       }
      
       if(bulletGroup.isTouching(villianShip)){
             villianShip.destroy();
             count = count+1
             console.log(count);
       } 

       if(bulletGroup.isTouching(villianShip01)){
        villianShip01.destroy();
        count = count+1
        console.log(count);


  }

  if(bulletGroup.isTouching(villianShip02)){
    villianShip02.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip03)){
    villianShip03.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip04)){
    villianShip04.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip05)){
    villianShip05.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip06)){
    villianShip06.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip07)){
    villianShip07.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip08)){
    villianShip08.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip09)){
    villianShip09.destroy();
    count = count+1
    console.log(count);


}
    }

    if(villianBulletGroup.isTouching(goodShip)){
        goodShip.destroy();
        gameState = "end";
  }

  

    


    edges = createEdgeSprites();
    goodShip.bounce(edges);
     
     villianBullets();
     drawSprites();

if(gameState==="end"){
  if(count => 10){
    textSize(40);
    fill ("green")
    text("LEVEL 1 COMPLETED",350,325);
    goodShip.destroy();
    villianShip.destroy();
    villianShip01.destroy();
    villianShip02.destroy();
    villianShip03.destroy();
    villianShip04.destroy();
    villianShip05.destroy();
    villianShip06.destroy();
    villianShip07.destroy();
    villianShip08.destroy();
    villianShip09.destroy();
    bulletGroup.destroy();
    villianBulletGroup.destroy();

    }


     
}

     if(gameState==="end"){
     if(villianBullet.isTouching(goodShip)){  
     textSize(40)
     fill ("red")
     text("YOU LOSE",550,325);
     goodShip.destroy();
     villianShip.destroy();
     villianShip01.destroy();
     villianShip02.destroy();
     villianShip03.destroy();
     villianShip04.destroy();
     villianShip05.destroy();
     villianShip06.destroy();
     villianShip07.destroy();
     villianShip08.destroy();
     villianShip09.destroy();
     bulletGroup.destroy();
     villianBulletGroup.destroy();
     }
    }
}


function bullets(){

    bullet = createSprite(200,300);
    bullet.addImage(bulletImg);
    bullet.scale = 0.1;
    bullet.velocityX = 6; 
bullet.y = goodShip.y;
bullet.x = goodShip.x
bulletGroup.add(bullet);
goodShip.depth = bullet.depth
goodShip.depth = goodShip.depth+1
}

function villianBullets(){


if(frameCount%100===0){
villianBullet = createSprite(1000,500,50,50)
villianBullet.addImage(villianBulletImg)
villianBulletGroup.add(villianBullet)
villianBullet.velocityX = -6;
villianBullet.scale = 0.1;
villianBullet.y = Math.round(random(100,600))
}
}



