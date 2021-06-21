const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()  ; 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    
    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var type=await response.json()
    // write code slice the datetime
var datetime =type.datetime;
var hour = datetime.slice(11,13)
    // add conditions to change the background images from sunrise to sunset
if(hour>=4 && hour<=6){
    bg="sunrise1.png"
}
else if(hour>=6 && hour<=8){
    bg="sunrise2.png"
}
else if(hour>=8 && hour<=11){
    bg="sunrise3.png"
}
else if(hour>=11 && hour<=13){
    bg="sunrise4.png"
}
else if(hour>=13 && hour<=15){
    bg="sunrise5.png"
}//load the image in backgroundImg variable here
else if(hour>=15 && hour<=17){
    bg="sunrise6.png"
}else if(hour>=17 && hour<=19){
    bg="sunset7.png"
}else if(hour>=19 && hour<=21){
    bg="sunset8.png"
}
else if(hour>=21 && hour<=23){
    bg="sunset9.png"
}else if(hour>=23 ){
    bg="sunrise10.png"
}else if(hour>=0 && hour<=3){
    bg="sunset11.png"
}else{
    bg="sunset12.png"
}

backgroundImg=loadImage(bg)
}
