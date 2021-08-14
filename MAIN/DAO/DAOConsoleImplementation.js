'use strict';
var resources = (require('../MODEL/boardObject')).game_board;
var DiceObject = require('../MODEL/DiceObject');
var PlayerObject = require('../MODEL/PlayerObject');
var playerResources = (require('../MODEL/boardObject')).game_board;

module.exports = class DAOConsoleImplementation {


  constructor() {
    // this.default = 1;  
  }

  startGame (){
    //ROLL DICE TO START GAME
    let dice = new DiceObject();
    let player = new PlayerObject("user",playerResources);
    let cpu = new PlayerObject("cpu",playerResources);
   

    // CHANGE CONSOLE TO VIEW LATER 
    player.fillPlayerDicePot();
    cpu.fillPlayerDicePot();


    player.rollDice();
    cpu.rollDice();


    player.printPlayerHand(player.DicePot, "ALL USER DICE");
    cpu.printPlayerHand(cpu.DicePot, "ALL CPU DICE");

    cpu.selectDiceToPlay([1,2,3,4,5,6]);
    let playing;
    let turnCount = 0;
    

    //COLLECT CONTINUOUS INPUT FROM USER 
    while (player.DicePot.length != 0){
      playing = player.collectUserDiceSelections();
      player.selectDiceToPlay(playing);
      player.rollDice();
      player.printPlayerHand(player.DicePot, "Still left to play:")
    }
   
    

    console.log("\n");
    console.log("CURRENT DICE ON BOARD");
    player.printPlayerHand(player.playedDicePot, "ALL USER PLAYED DICE");
    cpu.printPlayerHand(cpu.playedDicePot, "ALL CPU PLAYED DICE");

    playing = player.collectUserDiceSelections();
    player.selectDiceToPlay(playing);
    
    
    //GENERATE BOARD
    


  }



  


  
};

