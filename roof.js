class Roof{
    constructor(x,y,width,height){
        var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:0.8
			
            }
            this.width = width;
            this.height = height;
            this.body = Bodies.rectangle(x,y,width,height,options);
            World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("black");
        rectMode(RADIUS);
        rect(0,0,this.width,this.height);
        pop();
    }
}
