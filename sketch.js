let pemain1, pemain2
let sfxloncat
let bg, imgpemain


function preload() {
  sfxloncat = loadSound('./sound/jump.mp3')
  bg = loadImage('./img/background.png')
  imgpemain = loadImage('./img/pemain.png')
}

function setup() {
  createCanvas(600,400);
  
  pemain1 = new Pemain(50, 50, "Pemain 1 ")
  pemain2 = new Pemain(50, height-250, "Pemain 2 ")
}

function draw() {
  background(bg);
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.cekfinish()
  pemain2.cekfinish()
}

function keyPressed() {
  if(keyCode ===RIGHT_ARROW) {
    pemain1.maju()
    sfxloncat.play()
  }
  else if(keyCode === LEFT_ARROW) {
    pemain2.maju()
    sfxloncat.play()
  }
}