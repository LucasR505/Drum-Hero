var begin = new Date();
var bs = begin.getSeconds();
var bms = begin.getMilliseconds();

//logs what key is pressed
var pressedKey = [];
//Logs seconds and milliseconds from computers clock
var timeTracker = [bs+(bms/1000)];
//Logs the difference in time between key press
var btnInterval = [];
//Logs what 'color' is pressed
var pressedColors = [];
//final Song
var song = [];
if(localStorage.getItem('textValues') == null){
    var song = [];
}
function reviver(key,value){
  if(key == x){
    var tempx = value;
    return tempx;
  }
  if(key == y){
    var tempy = value;
    return tempy;
  }
  if(key == color){
    var tempcolor = value;
    return tempcolor;
  }
  if(key == hit){
    var temphit = value;
    return temphit;
  }
  if(key == missed){
    var tempmissed = value;
    return tempmissed;
  }
  if(key == bass){
    var tempbass = value;
    return tempbass;
  return value;
  }

}

// var drums = new Audio("../mp3s/Creedence_drums_final.mp3");
// drums.play();
