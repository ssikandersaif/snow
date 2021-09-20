const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var snowbg,world,engine;
var ice,maxsnow = 50
var array = []
function preload(){
snowbg = loadImage("snow1.jpg");






}






function setup() {
  createCanvas(1500,800);
engine = Engine.create()
world = engine.world
if(frameCount%200===0){
for(i=0;i<maxsnow;i=i+1 ){
ice = new Snow(random(0,1500),random(0,200))
array.push(ice)


}


}








}

function draw() {
  background(snowbg);
  Engine.update(engine)  
for(i=0;i<maxsnow;i=1+1){
array[i].display()
array[i].changeposition()



}







  drawSprites();
}