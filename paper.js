class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.x=x;
		this.y=y;
		this.r=r

		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        
        this.image = loadImage("paper.png");
		
        World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;		
		push()
		translate(pos.x, pos.y);
		rectMode(CENTER)
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
	}
}