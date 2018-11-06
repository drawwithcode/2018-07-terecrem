var video;
var bottone;

function
 preload(){

}

function setup() {

createCanvas(500,250);
background('white');
video= createCapture(VIDEO);
video.size(500,500);
button=createButton('take a selfie');
button.mousePressed(faifoto);
}

function faifoto() {
image(video,0,0);

}

function draw() {
//pennello
  strokeWeight(3);
  if(mouseIsPressed==true){
  stroke('#ffd800')
    // put drawing code here
  } else{
noStroke()
    // put drawing code here
  }

  line(mouseX,mouseY,pmouseX,pmouseY);

//testo
  fill('#ffd800');
  noStroke()
  textSize(18);
  textFont('Andale Mono')
  text("take a selfie and click to draw on yourself",10,20);


}
