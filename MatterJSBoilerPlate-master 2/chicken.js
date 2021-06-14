class Chicken{
    constructor(x,y,){
       
    super(x,y,50,50);
    
    this.body=Bodies.rectangle(x,y,width,height)
    this.width=width;
    this.height=height

    World.add(this.boby);
    }
    display(){
rectMode(CENTER);
var pos = this.body.position;
rect(pos.x,pos.y,this.width,this.height);

    }
}