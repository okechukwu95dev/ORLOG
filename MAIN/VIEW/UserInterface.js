"use strict";
const prompt = require("prompt-sync")({sigint: true});;


module.exports = class UserInterface {

    constructor() {
      this.default = 1; 
    }
    flipCoin (coinArray)  {
        coinArray = ["HEADS","TAILS"];
        let currentFlip = coinArray[Math.floor(Math.random()*coinArray.length)];
        console.log("flip start...")
        console.log( "coin flip is:" )
        console.log(currentFlip)
        return currentFlip
    }
    getUserCoinChoice (){
        let userSelection = prompt("ENTER (1) for heads (2) for tails: ")
            if (userSelection === "1"){
                console.log("you chose HEADS")
                return "HEADS" 
            }
            else if (userSelection === "2"){
                console.log("you chose TAILS")
                return "TAILS"
            }
    }

    
    pickFirstPlayer(flip, choice){
        if (flip === choice){
            console.log("USER PLAYS FIRST")
            return "USER PLAYS FIRST"
        }
        else {
            console.log("CPU PLAYS FIRST")
            return "CPU PLAYS FIRST"
        }
    }

    printGameStart() {
        console.log("\n------ GAME START-------\n")
    }

    printGameBoard(){
        

    }


    //HERE I WILL IMPORT A PLAYER OBJECT TO FILL OUT THE VALUES
    printPlayerCard(Player){
        console.log(` ---------${Player.name} CARD---------- `)
        console.log(`STONES:${Player.stonesLeft}-- TOKEN:${Player.tokensLeft}--|`)
        console.log(` ---------${Player.name} DICE---------- `)
        for(var dice in Player.playerDicePot ) {
          console.log(dice.currentFace)  
        }
        console.log(` -------------------------------- `);
        console.log("GOD FAVOURS")
        for(var token in Player.godTokenObjectList ) {
            console.log(token)  
          }
    }

}