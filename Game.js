class Game {
  constructor(){

  }
  getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val()
    })
  }

 update(state){
   database.ref('/').update({
      gameState: state
   })
 }

 async start(){
  if(gameState === 1){
    player1 = new Player();
    player1.getCount();

    var playerCountRef = await database.ref('nameCount').once("value");
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player1.getCount1();
    }
    
    }


   

    







  // plr2 = createSprite(150,200)
  // plr2.addAnimation("player1",plr1Img)
  // plr2.scale = 0.25
  // plr2.setCollider("rectangle",0,0,700,370)
   
 
   //plr2.velocityX = 8;

 //  plr3 = createSprite(200,200)
  // plr3.addAnimation("player1",plr1Img)
  // plr3.scale = 0.25
 //  plr3.setCollider("rectangle",0,0,700,370)
   
 
 //  plr3.velocityX = 8;

  // plr4 = createSprite(250,200)
  // plr4.addAnimation("player1",plr1Img)
   //plr4.scale = 0.25
  // plr4.setCollider("rectangle",0,0,700,370)
   
 
  // plr4.velocityX = 8;

 
   



 }


 play(){
   Player.getPlayerInfo();
    
   bg = createSprite(camera.x+300,200,20,20);
   bg.addImage("img",bgImg);
   bg.scale = 2;

   building1 = createSprite(displayWidth/2,200,20,20);
   building1.addImage("img",buildingImg);
        
   plr1 = createSprite(100,333)
   plr1.addAnimation("player1",plr1Img)
   plr1.scale = 0.25
   plr1.setCollider("rectangle",0,0,700,370)
   plr1.velocityX = 8;
   
   
    

    plr2 = createSprite(150,333)
   plr2.addAnimation("player2",plr2Img)
   plr2.scale = 0.25
   plr2.setCollider("rectangle",0,0,700,370)
   plr2.velocityX = 8;
   


    plr3 = createSprite(200,333)
   plr3.addAnimation("player3",plr3Img)
   plr3.scale = 0.25
   plr3.setCollider("rectangle",0,0,700,370)
   plr3.velocityX = 8;
   

    plr4 = createSprite(250,333)
   plr4.addAnimation("player4",plr4Img)
   plr4.scale = 0.25
   plr4.setCollider("rectangle",0,0,700,370)
   plr4.velocityX = 8;
 

   nonplr = createSprite(-200,333,30,30)
  nonplr.addAnimation("run",nonplrImg)
  nonplr.addAnimation("run2",nonplrImg2)
  
  nonplr.scale = 0.2
  nonplr.setCollider("rectangle",0,0,850,460)


  Ground6 = createSprite(width/2,390,20000,20)
  plr1.collide(Ground6);


}








}