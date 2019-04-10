class note{
  constructor(x,y,color,bass){
    this.x = x;
    this.y = y;
    this.color = color;
    this.hit = false;
    this.missed = false;
    this.bass = bass;
  }
/*
show draws the notes
*/
  show(){
    if(!this.bass){
      stroke(this.color);
      fill(this.color);
      circle(this.x,this.y,20);
    }
    else{
      stroke(this.color)
      fill(this.color)
      rect(this.x,this.y,360,10);
    }
  }


/*
checkPress checks to see if the note is over the fret when clicked and returns false if it is and true if not
*/
  checkPress(fret){
    if(this == lowSearch()){
      console.log(lowSearch());
    if(!this.bass){
      if(fret.x == this.x){
        if(this.y > 400 && this.y < 500 && fret.pressed == true && this.missed == false){
          this.hit = true;
          return true;
          }
        else{
          console.log("missfront" + this.y);
          this.missed = true;
          return false;
        }
      }
    }
    else{
      if(fret.x == this.x){
        if((this.y > 340 && this.y < 440) && fret.pressed == true && this.missed == false){
          this.hit = true;
          console.log(this.hit);
          return true;
          }
      else{
        console.log(this.hit);
        this.missed = true;
        return false;
        }
      }
    }
  }
}

/*
checkMiss checks if a note has not been pressed and has moved out of the window, therefore being missed
*/
    checkMiss(){
      if((this.hit == false && this.missed == false) && this.y>500){
        console.log("missend");
        health--
        this.missed = true;
      }
    }

}
