class Paper{
    constructor(x,y,r){
        var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'densiy':2
        }
        
        this.body = Bodies.circle(x,y,r,options);
        this.image=loadImage("paper(1).png")
        World.add(world, this.body);  
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();

    }
}
 
