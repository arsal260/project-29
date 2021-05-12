class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        //this.sling3 = loadImage("polygon.png")

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(mybody){
        this.sling.bodyA=mybody
    }

    display(){
    //   image(this.sling3,170,20)


            if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            
            if(pointA.x<220){
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           

            }  
}
    }
    
}