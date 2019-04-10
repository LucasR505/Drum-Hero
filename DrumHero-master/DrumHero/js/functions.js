// Collects what key is pressed,
// what time on the computer's clock it was pressed,
// and time passed since last keypress
//and puts all info in corresponding arrays
function logKey(e) {

  if(e.keyCode == 83 || e.keyCode == 68 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 32){
    pressedKey.push(`${e.code}`);
    console.log(pressedKey);
  }
  if(e.keyCode == 83){
    pressedColors.push('green');
  }
  if(e.keyCode == 68){
    pressedColors.push('red');
  }
  if(e.keyCode == 75){
    pressedColors.push('yellow');
  }
  if(e.keyCode == 76){
    pressedColors.push('blue');
  }
  if(e.keyCode == 32){
    pressedColors.push('orange');
  }
  var start = new Date();
  var s = start.getSeconds();
  var ms = start.getMilliseconds();
  if(e.keyCode == 83 || e.keyCode == 68 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 32)
  timeTracker.push(s+(ms/1000));
  finalArray();
}

// Makes it so no negative number can be printed to the btnInterval array
function finalArray(){
  btnInterval[1]=timeTracker[0];
  for (var i = 1; i < timeTracker.length; i++) {
    btnInterval[i]=timeTracker[i]-timeTracker[i-1];
      if (btnInterval[i] <= 0) {
        btnInterval[i] = (60 + btnInterval[i]);
      }
  }
  btnInterval[1]=0;
  for(var i = 0; i < btnInterval.length; i++)
  btnInterval[i]*=360;
  btnInterval.shift()
  console.log(btnInterval);
}

function convert(){
  song = [];
  var thisx = 0;
  for(var i = 0; i<pressedKey.length;i++){
    if(pressedColors[i] == 'green' || pressedColors[i] == 'orange')thisx+=100;
    if(pressedColors[i] == 'red')thisx+=220;
    if(pressedColors[i] == 'yellow')thisx+=340;
    if(pressedColors[i] == 'blue')thisx+=460;
    if(i == 0){
      if(pressedColors[i] != 'orange')song.push(new note(thisx,0-btnInterval[0],pressedColors[i],false));
      else song.push(new note(thisx,0-btnInterval[0],pressedColors[i],true));
    }
    else {
      if(pressedColors[i] != 'orange') song.push(new note(thisx,song[i-1].y-btnInterval[i],pressedColors[i],false));
      else song.push(new note(thisx,song[i-1].y-btnInterval[i],pressedColors[i],true))
    }
    thisx = 0;
  }
  localStorage.setItem('textValues', JSON.stringify(song));
}
