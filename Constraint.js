class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA, 
            bodyB: bodyB,
            length: 175,
            stiffness: 0.04
        }
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint)
    }
    fly(){
        this.constraint.bodyA = null
    }
    display(){
        var pointA = this.constraint.bodyA.position;
        var pointB = this.constraint.bodyB.position;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}