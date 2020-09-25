class Yeet {
    constructor(x, y, height, angle) {
      var LogOptions = {
          'restitution':0,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 25, height, LogOptions);
      this.width = 25;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };