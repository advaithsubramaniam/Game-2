var alien ,alienimg  , astronaut , astronautimg, rock , rockimg;
var invisibleGround;

 


function preload() {

  
  backgroundimg = loadImage("../images/background.jpg");
  astronautimg = loadImage("../images/astronaut.png"); 
  rockimg = loadImage("../images/rock.png"); 
  alienimg = loadImage("../images/alien.png"); 
}

function setup() {
createCanvas(1024, 500);


astronaut = createSprite(512,450,50,50);
astronaut.addImage("astronaut" , astronautimg);
astronaut.scale = 0.5;

alien = createSprite(200,100,70,50);
alien.addImage("alien" , alienimg);
alien.scale = 0.1;


invisibleGround = createSprite(1024,495,2500,10);
invisibleGround.visible = false;

}

function draw() {
  background(backgroundimg);

if(keyDown(RIGHT_ARROW)){
astronaut.x=astronaut.x + 6;

  
}
if(keyDown(LEFT_ARROW)){
  astronaut.x=astronaut.x - 6;
  
    
  }
  if(keyDown("space")){
    astronaut.velocityY = -10;
  }
  astronaut.velocityY = astronaut.velocityY + 0.8





astronaut.collide(invisibleGround);
stone();
drawSprites();
}

function stone(){
    if(frameCount % 60 === 0 ) {
      
      rock = createSprite((random (100, 800), 0, 100, 100));
      rock.scale = 0.2;
      rock.velocityX = 0.1;
      rock.velocityY = 2;
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: rock.addImage(rockimg);
                break;
        case 2: rock.addImage(rock);
                break;
        case 3: rock.addImage(rockimg);
                break;
        case 4: rock.addImage(rockimg);
                break;
        case 5: rock.addImage(rockimg);
                break;
        case 6: rock.addImage(rockimg);
                break;
        default: break;
      }
}
  }

