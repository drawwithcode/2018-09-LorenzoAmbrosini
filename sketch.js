var myLoc;

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
  // put setup code here
  console.log(myLoc);
  createCanvas(windowWidth, windowHeight);
  background('azure');
  textAlign(CENTER);
  textSize(32);
  fill('darkblue')
  text(myLoc.latitude, width/2, height/3);
  text(myLoc.longitude, width/2, height/3*2);
}

function draw() {
  // put drawing code here

}
