var goodShip,goodShipImg;
var villianShip,villianShipImg;
var backGroundImg;
var bulletImg,bullet;
var count = 0;

var gameState = "play";

function preload(){

    goodShipImg = loadImage("images/goodShip.png");    
villianShipImg = loadImage("images/villianShip.png");
villianShipImg1 = loadImage("images/villianShip.png");
villianShipImg2 = loadImage("images/villianShip.png");
villianShipImg3 = loadImage("images/villianShip.png");
villianShipImg4 = loadImage("images/villianShip.png");
villianShipImg5 = loadImage("images/villianShip.png");
villianShipImg6 = loadImage("images/villianShip.png");
villianShipImg7 = loadImage("images/villianShip.png");
villianShipImg8 = loadImage("images/villianShip.png");
villianShipImg9 = loadImage("images/villianShip.png");
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
villianShip1 = createSprite(1050,125,50,50);
villianShip2 = createSprite(1050,180,50,50);
villianShip3 = createSprite(1050,235,50,50);
villianShip4 = createSprite(1050,290,50,50);
villianShip5 = createSprite(1050,345,50,50);
villianShip6 = createSprite(1050,400,50,50);
villianShip7 = createSprite(1050,455,50,50);
villianShip8 = createSprite(1050,510,50,50);
villianShip9 = createSprite(1050,565,50,50);

villianShip.addImage(villianShipImg);
villianShip1.addImage(villianShipImg1);
villianShip2.addImage(villianShipImg2);
villianShip3.addImage(villianShipImg3);
villianShip4.addImage(villianShipImg4);
villianShip5.addImage(villianShipImg5);
villianShip6.addImage(villianShipImg6);
villianShip7.addImage(villianShipImg7);
villianShip8.addImage(villianShipImg8);
villianShip9.addImage(villianShipImg9);

villianShip.scale = 0.2;
villianShip1.scale = 0.2;
villianShip2.scale = 0.2;
villianShip3.scale = 0.2;
villianShip4.scale = 0.2;
villianShip5.scale = 0.2;
villianShip6.scale = 0.2;
villianShip7.scale = 0.2;
villianShip8.scale = 0.2;
villianShip9.scale = 0.2;

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

       if(bulletGroup.isTouching(villianShip1)){
        villianShip1.destroy();
        count = count+1
        console.log(count);


  }

  if(bulletGroup.isTouching(villianShip2)){
    villianShip2.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip3)){
    villianShip3.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip4)){
    villianShip4.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip5)){
    villianShip5.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip6)){
    villianShip6.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip7)){
    villianShip7.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip8)){
    villianShip8.destroy();
    count = count+1
    console.log(count);


}

if(bulletGroup.isTouching(villianShip9)){
    villianShip9.destroy();
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


  if(count >= 10){
    textSize(40);
    fill ("green")
    text("LEVEL 1 COMPLETED",350,325);
    }


     
}

     if(gameState==="end"){
     textSize(40)
     fill ("red")
     text("YOU LOSE",550,325);
     goodShip.destroy();
     villianShip.destroy();
     villianShip1.destroy();
     villianShip2.destroy();
     villianShip3.destroy();
     villianShip4.destroy();
     villianShip5.destroy();
     villianShip6.destroy();
     villianShip7.destroy();
     villianShip8.destroy();
     villianShip9.destroy();
     bulletGroup.destroyEach();
     villianBulletGroup.destroyEach();
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



