class Bob
{ 	constructor(x,y,r)
	{
     var options={
        isStatic:true,
        restitution:0.3,
        friction:0,
        }

		this.x=x;
		this.y=y;
		this.bobradius=r;
        this.body=Bodies.circle(this.x,this.y,(this.bobradius)/2,options)
        World.add(world,this.body)

	}
	display()
	{
     var pos=this.body.position;
     
     push();
     translate(pos.x,pos.y)
     rectMode(CENTER)
     fill(255,0,255)
     ellipse(0,0,this.bobradius,this.bobradius)
     pop();
			
	}

}