class Monster {
    constructor(x,y,width,height){
        var options = {
            isStactic : true,
            restitution:0.5,
            friction:1
}
this.body = Bodies.rectangle(x,y,width,options)
this.width = width
this.height = height
this.image = loadImage("images/Monster-01.png")
World.add(world,this.body)
}
display(){
    Push();
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER);
    this.image(this.image,0,0,this.width,this.height)
  }
}