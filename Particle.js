class Particle{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1
        }

    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)  
    World.add(world,this.body)
    }
    display(){
        var particlePos = this.body.position;
        
  
        fill (0,255,123)
        ellipse(particlePos.x,particlePos.y,this.r,this.r)
        
    }
}