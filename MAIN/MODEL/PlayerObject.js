'use strict';
var Dice = require('./DiceObject')
const prompt = require("prompt-sync")({sigint: true});;

module.exports = class PlayerObject {

    // player =  resources.PLAYER;
  
    constructor (name,resources) {
     this.player =resources.PLAYER;
     this.name = name;
     this.stonesLeft = 15;
     this.tokensLeft = 0;
     this.DicePot = [];
     this.playedDicePot = [];
     this.godTokenObjectList = this.player.godTokenObjectList;
     this.squares = ["shield", "helmet", "arrow", "hand"]
    }

    resetPlayer () {
        this.stonesLeft = 15;
        this.tokensLeft = 0;
        this.DicePot = [];
    }

    fillPlayerDicePot () {
    console.log("name: " + this.name)
     if (this.DicePot.length < 1 ){
         for (let i = 0; i < 6; i++) {
             let dice = new Dice;
             this.DicePot.push(dice) 
         }
     }
    }

    rollDice () {
        if (this.DicePot.length >= 1 ){
            for (let i = 0; i < this.DicePot.length; i++) {
                this.DicePot[i].rollOneDice();
            }
        }
        else {
            console.log("no dice to roll");
        }
    }

    printPlayerHand (dicePot, title) {
        if (dicePot.length >= 1 ){
            var s = "";
            for (let i = 0; i < dicePot.length; i++) {
                let face = dicePot[i].currentFace;
                let pic = dicePot[i].faces[face].pic
                s += (i+1) + "-" + face +  " " + pic + "   "
            }
            console.log(this.name + ":" + title + ": " + "[ " + s + " ]"  );
        }
        else {console.log(title + " Empty");}
    }

    adjustTokensLeft (diceArray) {
        ///takes in an array of dice and caculates if squares give tokens
        for (let i = 0; i < diceArray.length; i++) {
            if (this.squares.includes(diceArray[i].currentFace)){
                this.tokensLeft++; 
            }
        }
        console.log("token new value:" + this.tokensLeft);
    }

    selectDiceToPlay (selectedNumArray) {
        let arrayReverse =  selectedNumArray.reverse().map (x => {return x - 1});
        for (let i = this.DicePot.length-1; i >= 0; i--) {
            if (arrayReverse.includes(i)){
                let cut = this.DicePot.splice(i, 1);
                this.playedDicePot = [...this.playedDicePot,...cut]  
            }
        }
       this.printPlayerHand(this.playedDicePot, " PLAYED DICE")
       this.printPlayerHand(this.DicePot, " OWNED DICE");
    }
    
    collectUserDiceSelections () {
        let userSelection = prompt("HOW MANY DICE DO YOU WANT TO PLAY?");
        let rolls = parseInt(userSelection);
        let holdingArray = []
        for (let i = 0; i < rolls; i++) {
            let currentInput = prompt("Enter (" + (i+1) + ") selection \n" );
            holdingArray.push(parseInt(currentInput))
        }
        console.log(holdingArray);
        return holdingArray;    
    }
}
