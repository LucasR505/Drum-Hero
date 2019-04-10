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
    if(!this.bass){
      if(fret.x == this.x){
        // if(fret.pressed == true && this.hit == false && (this.y < 400 || this.y > 500)){
        //   this.missed = true;
        //   console.log("missbegin");
        //   health--;
        //   setTimeout(function() {
        //     this.missed = false;
        //   }, 100);
        //   return false;
        // }
        if(this.y > 400 && this.y < 500 && fret.pressed == true && this.missed == false){
          this.hit = true;
          console.log(this.hit);
            return true;
          }
        }
      }
      // else{
      //   if(fret.x == this.x)
      //     if((fret.pressed == true && this.hit == false) && (this.y < 400 || this.y > 500)){
      //       this.missed = true;
      //       health--;
      //       setTimeout(function() {
      //         this.missed = false;
      //       }, 100);
      //     }
      //     else if(this.y > 400 && this.y < 500 && fret.pressed == true && this.missed == false){
      //       console.log(true);
      //       this.hit = true;
      //         return true;
      //   }
      //     else return false;
      //   else return false;
      // }
    }

/*
checkMiss checks if a note has not been pressed and has moved out of the window, therefore being missed
*/
    checkMiss(){
      if(this.hit == false && this.y>500){
        console.log("missend");
        health--
        this.hit = true;
      }
    }

}
