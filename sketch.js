const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    //change the data in JSON format
    var responceJSON = await responce.json();
    // write code slice the datetime
    var hour = dateTime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=4 && hour<=6){
        bg="sunrise1.png";
    }else if(hour>=6 && hour<=8){
        bg="sunrise2.png";
    }else if(hour>=8 && hour<=10){
        bg="sunrise3.png";
    }else if(hour>=10 && hour<=12){
        bg="sunrise4.png";
    }else if(hour>=12 && hour<=14){
        bg="sunrise5.png";
    }else if(hour>=14 && hour<=16){
        bg="sunrise6.png";
    }else if(hour>=16 && hour<=18){
        bg="sunrise7.png";
    }else if(hour>=18 && hour<=20){
        bg="sunrise8.png";
    }else if(hour>=20 && hour<=22){
        bg="sunrise9.png";
    }else if(hour>=23 && hour<=0){
        bg="sunrise10.png";
    }else if(hour>=0 && hour<=3){
        bg="sunrise11.png";
    }else if(hour>=3 && hour<=6){
        bg="sunrise12.png";
    }
    

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
