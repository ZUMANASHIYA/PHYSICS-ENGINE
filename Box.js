class Box {
constructor(x,y,width,hieght){
    var options = {
        restitution: 1
    }
    this.body=Bodies.rectangle(x,y,width,height);
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill(300);
    rect(pos.x,pos.y,this.width,this.height);
}


}