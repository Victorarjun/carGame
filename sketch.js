var database;
var position;
var gameState=0;
var form,player,game;
var playerCount;
var car1,car2,car3,car4,cars;
var allPlayers 

function setup(){
  database = firebase.database();
  console.log(database);
 
  createCanvas(displayWidth,displayHeight);
game=new Game()
game.start();
game.getState()
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)
  }
   if(gameState===1){
     game.play()
   }
}

