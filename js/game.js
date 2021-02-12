class Game{

constructor(){

}
getState() {
    var gameStateref = database.ref('gameState');
    gameStateref.on("value",(data)=>{
		gameState = data.val();
		 
	   });

    
}

update(state){
    database.ref('/').update({
		gameState:state
	})

}
start() {
if(gameState===0){
form=new Form()
player= new Player()
form.display()
player.getCount()
}
car1 = createSprite(100,200)
car2 = createSprite(300,200)
car3 = createSprite(500,200)
car4 = createSprite(700,200)
cars=[car1,car2,car3,car4]

}

play(){
	console.log("hello");
    form.hide();
Player.getPlayerInfo();
if(allPlayers!==undefined){
	var index=0;
var x=100;
var y 

for(var plr in allPlayers){

	index=index+1
x = x+100;

y=displayHeight-allPlayers[plr].distance
cars[index-1].x=x
cars[index-1].y=y
if(index===player.index){
	camera.position.x = displayWidth/2
	camera.position.y = cars[index-1].y

}

}
}
if(keyIsDown(UP_ARROW) && player.index!==null){
player.distance = player.distance+10;
player.update()

}
drawSprites()
}

}

