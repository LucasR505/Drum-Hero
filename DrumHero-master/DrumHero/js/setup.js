var frets = [];
var colors = ['green','red','yellow','blue','orange'];
var points  = 0;
var health = 180;
var go = false;
var finalSong = [];
var played = [];


/*
setup creates the game canvas as well as the fretboard and an arbitrary song
*/
function setup(){
  createCanvas(600,500);
  frameRate(60);
  // let count = 0;
  // for(var i  = 100; i < 500; i += 120){
  //   song[count] = new note(i, 100, colors[count],false);
  //   count++;
  // }
  // song[4]=new note(100, 40, colors[4],true);
  count = 0;
  for(var i  = 100; i < 500; i += 120){
    frets[count] = new frettyboys(i, 450, colors[count]);
    count++;
  }
  frets[4] = new frettyboys(100,390,colors[4],true);
}

/*
draw draws the moving notes as well as the frets and health bar
*/
function draw(){
    background(200);
    for(var i = 0; i < song.length; i++){
      if(i < finalSong.length)finalSong[i].show();
      if(played.length != 0 && i < played.length)played[i].show();
    }
    for(var i = 0; i < frets.length; i++){
      frets[i].show();
    }
    healthBar();
  update();
}

/*
update moves the notes across the screen while also calling checkPress and checkMiss for each note and updating the health bar
*/
function update(){
    if(go){
      for(var i = 0; i < finalSong.length; i++){
        finalSong[i].y+=6;
        finalSong[i].checkMiss();
      }
    }
}

function start(){
  go = true;
  song =  JSON.parse(localStorage.getItem('textValues',reviver));
  for(var i = 0; i <= song.length; i++){
      finalSong.push(Object.assign(new note,song[i]));
  }
}

/*
healthBar draws and updates the health bar
*/
function healthBar(){
  if(health >= 0){
    if(health >= 120 && health <= 180){
      fill('green');
      stroke('green');
      rect(540,120+map(health,180,120,0,60),30,health-120)
    }
    if(health >= 60 && health <= 120){
      fill('yellow');
      stroke('yellow');
      rect(540,180+map(health,120,60,0,60),30,health-60);
    }
    else if(health >= 120){
      fill('yellow');
      stroke('yellow');
      rect(540,180,30,60);
    }
    if(health >= 0 && health <= 60){
      fill('red');
      stroke('red');
      rect(540,240+map(health,60,0,0,60),30,health);
    }
    else{
      fill('red');
      stroke('red');
      rect(540,240,30,60);
    }
  }
  else {
    window.location.href = "home.html";
  }
  document.getElementById('score').innerHTML = "Score: " + points;
  document.getElementById('health').innerHTML = "Health: " + Math.round(map(health,0,180,0,100)) + "%";
};

/*
keyPressed checks to see if each key is pressed and updates the corresponding fret
*/
function keyPressed(key){
  if(keyCode == 83){
    frets[0].pressed = true;
    for(var i = 0; i < finalSong.length-1; i++){
      if(finalSong[i].checkPress(frets[0]))points++;
      else health--;
    }
  }
  if(keyCode == 68){
    frets[1].pressed = true;
    for(var i = 0; i < finalSong.length-1; i++){
      if(finalSong[i].checkPress(frets[0]))points++;
      else health--;
    }
  }
  if(keyCode == 75){
    frets[2].pressed = true;
    for(var i = 0; i < finalSong.length-1; i++){
      if(finalSong[i].checkPress(frets[0]))points++;
      else health--;
    }
  }
  if(keyCode == 76){
    frets[3].pressed = true;
    for(var i = 0; i < finalSong.length-1; i++){
      if(finalSong[i].checkPress(frets[0]))points++;
      else health--;
    }
  }
  if(keyCode == 32){
    frets[4].pressed = true;
    for(var i = 0; i < finalSong.length-1; i++){
      if(finalSong[i].checkPress(frets[4]))points++;
      else health--;
    }
  }
}

/*
keyReleased checks for a key release in the same manner as keyPressed
*/
function keyReleased(key){
  if(keyCode == 83)frets[0].pressed = false;
  if(keyCode == 68)frets[1].pressed = false;
  if(keyCode == 75)frets[2].pressed = false;
  if(keyCode == 76)frets[3].pressed = false;
  if(keyCode == 32)frets[4].pressed = false;
}

function lowSearch(){
  var low = finalSong[0];
  for(var i = 1; i < finalSong.length; i++){
    if(finalSong[i].hit == false && finalSong[i].missed == false && finalSong[i].color == 'green')low = finalSong[i];
  }
  console.log(low);
}
