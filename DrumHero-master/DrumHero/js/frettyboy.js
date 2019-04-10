class frettyboys{
  constructor(x,y,color,bass){
    this.x = x;
    this.y = y;
    this.color = color;
    this.pressed = false;
    this.bass = bass;
  }
  /*
  show draws the frets
  */
  show(){
    if(!this.bass){
      stroke(this.color);
      if(this.pressed){
        fill(255);
        circle(this.x,this.y,22);
      }
      else{
        fill(this.color);
        circle(this.x,this.y,22);
      }
    }
    else{
      stroke(this.color);
      if(this.pressed){
        fill(255);
        rect(this.x,this.y,360,10);
      }
      else{
        fill(this.color);
        rect(this.x,this.y,360,10);
      }
    }
  }
}
