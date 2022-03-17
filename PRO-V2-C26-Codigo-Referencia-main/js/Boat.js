class Boat {
  constructor(x, y, width, height, boatPos,barcoanimation) {
    this.animation=barcoanimation
    this.speed=0.1
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
   // this.image = loadImage("./assets/boat.png");
   this.isBroken=false
    World.add(world, this.body);
  }
    animacao() {
      this.speed+=0.1
    }
    //5 adicionar para o corpo do barco na classe (rap do minecraft tbm)
  remove(index) {
    this.speed=0
    this.width = width;
    this.height = height;
    this.isBroken=true
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed%this.animation.length)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}
