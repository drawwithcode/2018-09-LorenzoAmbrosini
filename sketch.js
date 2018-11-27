var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoibG9yZW56b2FtYnJvc2luaSIsImEiOiJjanAwNzZ2NmkyczEwM3dwaGczaG9hMjMyIn0.GZAFCpCzkrudpe-8LVCMgA');
// Lets put all our map options in a single object
var options = {
	lat: 0,
	lng: 0,
	zoom: 1.5,
	style: 'mapbox://styles/lorenzoambrosini/cjp07dhz971ce2rplyd0onw0h',
	pitch: 0
}

var TrLat = 38.897957;
var TrLon = -77.036560;

var PuLat = 55.751667;
var PuLon = 37.617778;

var KimLat = 39.03385;
var KimLon = 125.75432;

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();

  Trump = loadImage("./assets/Trump.png");
  Putin = loadImage("./assets/Putin.png");
  Kim = loadImage("./assets/Kim.png");


}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// background(100); let's uncomment this, we don't need it for now

	//update options according to current location
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}

function draw() {
	clear();
	angleMode(DEGREES);

  fill('red');
  textStyle(BOLD)
  textSize(60);
  textAlign(CENTER);
  text('WWIII meme boi', windowWidth/2, 100);
  text('around the world', windowWidth/2, 160);


  var TrumpDist = calcGeoDistance(myLoc.latitude, myLoc.longitude, TrLat, TrLon, "km");
  var PutinDist = calcGeoDistance(myLoc.latitude, myLoc.longitude, PuLat, PuLon, "km");
  var KimDist = calcGeoDistance(myLoc.latitude, myLoc.longitude, KimLat, KimLon, "km");



	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	fill('red');
	push();
	translate(point.x, point.y);
	ellipse(0,0,30);
	pop();
  push();
	translate(point.x, point.y);
  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER);
	text("You are here", 0, -20);
	pop();



  var TrumpPoint = myMap.latLngToPixel(TrLat, TrLon);
  push();
  fill('black');
  noStroke();
  rectMode(CENTER);
  rect(TrumpPoint.x + 10, TrumpPoint.y + 55, 150, 50)
  pop();
  push();
  textSize(15);
  textAlign(CENTER);
  imageMode(CENTER);
	image(Trump, TrumpPoint.x, TrumpPoint.y, 70, 70);
  text( 'WWIII meme boi 1', TrumpPoint.x + 10, TrumpPoint.y + 50);
  text( Math.round(TrumpDist) + ' km from you' , TrumpPoint.x + 10, TrumpPoint.y + 70);
  pop();

  var PutinPoint = myMap.latLngToPixel(PuLat, PuLon);
  push();
  fill('black');
  noStroke();
  rectMode(CENTER);
  rect(PutinPoint.x + 10, PutinPoint.y + 55, 150, 50)
  pop();
  push();
  textSize(15);
  textAlign(CENTER);
  imageMode(CENTER);
	image(Putin, PutinPoint.x, PutinPoint.y, 70, 70);
  text( 'WWIII meme boi 2', PutinPoint.x + 10, PutinPoint.y + 50);
  text( Math.round(PutinDist) + ' km from you' , PutinPoint.x + 10, PutinPoint.y + 70);
  pop();

  var KimPoint = myMap.latLngToPixel(KimLat, KimLon);
  push();
  fill('black');
  noStroke();
  rectMode(CENTER);
  rect(KimPoint.x + 10, KimPoint.y + 55, 150, 50)
  pop();
  push();
  textSize(15);
  textAlign(CENTER);
  imageMode(CENTER);
	image(Kim, KimPoint.x, KimPoint.y, 70, 70);
  text( 'WWIII meme boi 3', KimPoint.x + 10, KimPoint.y + 50);
  text( Math.round(KimDist) + ' km from you' , KimPoint.x + 10, KimPoint.y + 70);
  pop();

}
