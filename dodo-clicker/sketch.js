let spacedodo;
let backgroundimage;
let mouseover;
let mouseclick = false;
let settings = false;
let sworddrawn;
let bronzeclick;
let silverclick;
let goldenclick;
let spacesong;
let moneybag;
let musicnote;
let plus;
let input;
let achievement1 = false;
let upgradesbought = 0;
let cross;
let dodoss = 0;
let supersaiyan;
let button;
let angle = 0;
let plusupgrades = [];
var balls = [];
var gravity = 0.1;
let angle1 = [];
let dodoW = 323;
let dodoH = 419;
let points = 0;
let clickPointGain = 1;
let upgradePrice1 = 10;
let upgradePrice2 = 50;
let upgradePrice3 = 200;
let upgradePrice4 = 400;
let upgradePrice5 = 5000;
let songIsPlaying;
let dodoecho;
let playbutton;
let playing = false;
let dodoincrease;
let spacex = 190;
let spacey = 250;
let autoClickerGain;
let autoclickermouse;
let superClick = 0;
let extremeClick = 0;
let countdowntext = 0;
let cashregister;
function preload(){
  spacedodo = loadImage('assets/images/spacedodo.png');
  backgroundimage = loadImage('assets/images/background.jpg');
  cross = loadImage('assets/images/cross.png');
  plus = loadImage('assets/images/plus.png');
  musicnote = loadImage('assets/images/musicnote.png');
  spacesong = loadSound('assets/sounds/space.mp3');
  dodoecho = loadSound('assets/sounds/dodoecho.wav');
  mouseover = loadImage('assets/images/mouseover.png');
  bronzeclick = loadImage('assets/images/bronzeclick.png');
  silverclick = loadImage('assets/images/silverclick.png');
  autoclickermouse = loadImage('assets/images/autoclickmouse.png');
  moneybag = loadImage('assets/images/moneybag.png');
  sworddrawn = loadSound('assets/sounds/sworddrawn.mp3');
  supersaiyan = loadSound('assets/sounds/supersaiyan.mp3');
  goldenclick = loadImage('assets/images/goldenclick.png');
  cashregister = loadSound('assets/sounds/cashregister.mp3');
}
function setup(){
  createCanvas(windowWidth,900);
  console.log("<-----Are you trying to cheat points?----->");
  input = createInput("Dodo Inc.");
  input.position(510,710);
  angleMode(DEGREES);
  textAlign(CENTER);
  rectMode(CENTER);
    setTimeout(function(){
      spacesong.play();
      spacesong.setVolume(0.1);
      songIsPlaying = 0;
    },500);
setInterval(function(){
  dodoecho.play();
},10000);
  autoClickerGain = 0;
  setInterval(function(){
      points = points + autoClickerGain;
      if(autoClickerGain > 0){
        let b = new Ball(random(width),random(height),random(100,120),random(100,120));
      balls.push(b);
      }
  },1000);
}
function draw(){
  background(backgroundimage);
  fill(255);
//dividing lines on screen
  line(windowWidth/2-80,0,windowWidth/2-80,height);
  line(windowWidth/2-80,windowHeight/2,windowWidth,windowHeight/2);
  line(windowWidth/2-80,windowHeight/3,windowWidth,windowHeight/3);
    line(windowWidth/2-80,windowHeight/4*3,windowWidth,windowHeight/4*3);
    line(windowWidth/2-80,windowHeight/5,windowWidth,windowHeight/5);

for(var i = 0;i < balls.length;i++){
  balls[i].show();
  balls[i].move();
}
for(var i = 0;i < plusupgrades.length;i++){
  plusupgrades[i].show();
}
noStroke();
fill(100,100,100,90);
  stroke(0,0,0,90);
  if(settings === true){
    stroke(0);
    strokeWeight(4);
    fill(100,100,100,70);
    textSize(20);
    rect(1000,height/2,300,500);
    text(`Dodos clicked`,1000,250);
    text(`${points}`,1000,290);
    text(`Upgrades Bought`,1000,320);
    text(`${upgradesbought}`,1000,360);
  }
  textSize(30);
  stroke(0);
  fill(255,0,0,90);
  text("Statistics (`)",1050,70);
  fill(255);
  textSize(30);
  text("Upgrades",600,780);
  stroke(255);
  fill(200,0,0,90);
  strokeWeight(4);
  line(0,800,1200,800);
  rect(45,850,75,75);
  image(plus,20.5,824.5,50,50);
  rect(130,850,75,75);
  image(mouseover,105.5,824.5,50,50);
  rect(215,850,75,75);
  image(bronzeclick,190,824.5,50,50);
  rect(300,850,75,75);
  image(silverclick,275,824.5,50,50);
  rect(random(385,387),random(850,852),75,75);
  image(goldenclick,360,random(824.5,826),50,50);
  rect(470,850,75,75);
  rect(555,850,75,75);
  rect(640,850,75,75);
  rect(725,850,75,75);
  rect(810,850,75,75);
  rect(895,850,75,75);
  rect(980,850,75,75);
  rect(1065,850,75,75);
  rect(1150,850,75,75);
  text(input.value(),600,700);
  if(mouseX >= 7.5 && mouseX <= 82.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(45,850,75,75);
    text(`(${upgradePrice1}) Dodos clicked + 1`,150,700);

  }

  if(mouseX >= 92.5 && mouseX <= 167.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(130,850,75,75);
   text(`(${upgradePrice2}) Gain + 1 Dodo /1s `,170,700);
  }

  if(mouseX >= 177.5 && mouseX <= 252.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(215,850,75,75);
   text(`(${upgradePrice3}) 10/click for 10s`,190,700);
  }
  if(mouseX >= 262.5 && mouseX <= 337.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(300,850,75,75);
  text(`(${upgradePrice4}) 20/click for 10s`,210,700);
  }

  if(mouseX >= 347.5 && mouseX <= 422.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(random(385,390),random(850,860),75,75);
    text(`(${upgradePrice5}) OVER 9000 CLICKS/S FOR 10S`,275,700);
  }

  if(mouseX >= 432.5 && mouseX <= 507.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(470,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 517.5 && mouseX <= 592.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(555,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 602.5 && mouseX <= 677.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(640,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 687.5 && mouseX <= 762.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(725,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 772.5 && mouseX <= 847.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(810,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 857.5 && mouseX <= 932.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(895,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 942.5 && mouseX <= 1017.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(980,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 1027.5 && mouseX <= 1102.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(1065,850,75,75);
  text("coming soon",255,700);
  }

  if(mouseX >= 1112.5 && mouseX <= 1187.5 && mouseY >= 812.5 && mouseY <= 887.5) {
    fill(247, 215, 9, 80);
    rect(1150,850,75,75);
  text("coming soon",255,700);
  }
  fill(0,0,0,90);
// image(spacedodo,spacex,spacex,dodoW,dodoH);
  //upgrades
  text("Version 1.0.0",100,30);
  translate(580,100);
  rect(0,0,350,200);
  textSize(40);
  stroke(255);
  text("Dodos clicked",0,-10);
  textSize(30);
  text(`per second`,-30,65);
  text(points,0,30);
  if(dodoss > 100){
    textSize(25);
  }
      text(`${dodoss}`,75,67);
  fill(255,0,0);
  translate(0,320);
  rotate(angle);
  if(dodoincrease === 1){
    dodoW += 3;
    dodoH += 3;
    setTimeout(function(){
      dodoincrease = 0;
      dodoW = 323;
      dodoH = 419;
    },100);
  }
  image(spacedodo,-190,-250,dodoW,dodoH);
  angle = angle + 0.3;
  if(autoClickerGain >= 1){
  translate(0,100);
  rotate(angle1);
  angle1[0] += random(0.1,0.2);
  image(autoclickermouse,50,random(20,25),300,300);
}

if(autoClickerGain >= 2){
translate(0,75);
rotate(angle1);
angle1[1] += random(0.1,0.3);
image(autoclickermouse,70,random(20,25),300,300);
}
if(autoClickerGain >= 3){
translate(0,50);
rotate(angle1);
angle1[2] += random(0.1,0.4);
image(autoclickermouse,50,random(20,25),300,300);
}
if(autoClickerGain >= 4){
translate(0,25);
rotate(angle1);
angle1[3] += random(0.1,0.5);
image(autoclickermouse,50,random(20,25),300,300);
}
//achievements
if(upgradesbought === 10){
  achievement1 = true;
  setTimeout(function(){
    achievement1 = false;
  },5000);
}
}
function mousePressed(){
  if(settings === true){
 settings = false;
  }
  if(mouseX >= 355 && mouseX <= 805 && mouseY >= 195 && mouseY <= 645) {
    dodoincrease = 1;
    points = points + clickPointGain;
    points += extremeClick;
    points = points + superClick;
    image(spacedodo,200,200);
    let b = new Ball(random(width),random(height),random(100,120),random(100,120));
    balls.push(b);
  }
  if(points >= upgradePrice1) {
    if(mouseX >= 7.5 && mouseX <= 82.5 && mouseY >= 812.5 && mouseY <= 887.5) {
      let plusupgrade = new Plusupgrade(1200,50);
      plusupgrades.push(plusupgrade);
      for(var i = 0;i < plusupgrades.length;i++){
        plusupgrades[i].move();
      }
      clickPointGain = clickPointGain + 1;
      points = points - upgradePrice1;
      upgradePrice1 = upgradePrice1 * 4;
      upgradesbought += 1;
      cashregister.play();
    }
  }

  if(points >= upgradePrice2) {
    if(mouseX >= 92.5 && mouseX <= 167.5 && mouseY >= 812.5 && mouseY <= 887.5) {
      autoClickerGain = autoClickerGain + 1;
      points = points - upgradePrice2;
      upgradePrice2 = upgradePrice2 + 25;
        upgradesbought += 1;
        dodoss += 1;
      cashregister.play();
      setInterval(function(){
    },1000);
    }
  }
if(points >= upgradePrice3){
  if(mouseX >= 177.5 && mouseX <= 252.5 && mouseY >= 812.5 && mouseY <= 887.5){
    points -= upgradePrice3;
    upgradePrice3 += 200;
    superClick = 10;
      upgradesbought += 1;
    cashregister.play();
    setTimeout(function(){
      superClick = 0;
    },10000);
  }
}
if(points >= upgradePrice4){
  if(mouseX >= 262.5 && mouseX <= 337.5 && mouseY >= 812.5 && mouseY <= 887.5){
    points -= upgradePrice4;
    upgradePrice4 += 300;
    superClick = 20;
    cashregister.play();
      upgradesbought += 1;
    setTimeout(function(){
      superClick = 0;
    },10000);
  }
}
if(points >= upgradePrice5){
  if(mouseX >= 347.5 && mouseX <= 420.5 && mouseY >= 812.5 && mouseY <= 887.5){
    points -= upgradePrice5;
    upgradePrice5 += 100000;
    extremeClick = 9000;
      upgradesbought += 1;
    cashregister.play();
    setTimeout(function(){
      extremeClick = 0;
    },10000);
}
}
}
function mouseReleased(){
  mouseclick = false;
}

function keyPressed(){
  if(keyCode === 192){
    settings = true;
  }
}
class Plusupgrade{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
  }
  show(){
    image(plus,this.x,this.y,this.w,this.h);
  }
  move(){
    this.x += 100;
  }
}
class Ball{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show(){
    image(spacedodo,this.x,this.y,this.w,this.h);
  }
  move(){
    this.y += 3;
  }
}
