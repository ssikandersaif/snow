class Snow{

          constructor(x,y){
                   
               var options = {
                          friction:1,
                          density:4,
                          restitution:0.6


               }
this.body = Bodies.circle(x,y,50,options)
 this.image = loadImage("snow4.webp")
 World.add(world,this.body)         
            }

            changeposition(){
                if(this.body.position.y>height){
                Matter.Body.setPosition(this.body,{x:random(0,1500),y:random(0,150)})
                
                
                
                } 
            }

display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,50,50)











}
    
          






}