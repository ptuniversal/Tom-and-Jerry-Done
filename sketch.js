var cat,catrunning,cathitting;
var mouse,mousestanding, mouseteaseing,mousecheese;
var picture,pictureImg;

function preload() {
    //load the images here

    catrunning=loadAnimation("cat2.png","cat3.png");

    catstand=loadAnimation("cat1.png");

    cathitting=loadAnimation("cat4.png");

    mousestanding=loadAnimation("mouse4.png");

    mouseteaseing=loadAnimation("mouse2.png","mouse3.png");

    mousecheese=loadAnimation("mouse1.png");

    picture=loadImage("garden.png");

}

function setup(){

    createCanvas(1000,800);
    //create tom and jerry sprites here

    bg=createSprite(500,400,1,1);
    bg.addImage(picture)

    cat=createSprite(750,650,10,10);
    cat.addAnimation("cat_sitting",cathitting);
    cat.scale=0.2;

    mouse=createSprite(200,650,10,10);
    mouse.addAnimation("mouse_cheese",mousecheese);
    mouse.scale=0.2;
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    
    drawSprites();

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("cat_standing",catstand);
        cat.changeAnimation("cat_standing",catstand);
        mouse.addAnimation("mouse_standing",mousestanding);
        mouse.changeAnimation("mouse_standing",mousestanding);
        cat.x=300;

      }
    }

    function keyPressed(){
      if(keyCode===32){
        cat.addAnimation("cat_running",catrunning);
        cat.changeAnimation("cat_running",catrunning);
        cat.velocityX=-3;
        mouse.addAnimation("mouse_teaseing",mouseteaseing);
        mouse.changeAnimation("mouse_teaseing",mouseteaseing);
    }
    }

