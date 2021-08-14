'use strict';
var resources = (require('./boardObject')).game_board;

module.exports = class DiceObject  {

  constructor () {
    this.dice = resources.PLAYER.diceObject;
    this.faces = this.dice.diceFaces;
    this.currentFace = {};


  }

  generateDice(){
    let singleDie  = {};
    for(var face in this.faces ) {
      singleDie[face] = this.faces[face];     
    }
    try {
      // console.log(singleDie);
      if (singleDie) {
        console.log("die object created")
      }
      
    } catch (error) {
      console.log(error)
    }
    return singleDie;
  }

  rollOneDice() {
    let allFaces = [];
    for(var face in this.faces ) {
      allFaces.push(face)    
    }
    let currentRoll = allFaces[Math.floor(Math.random()*allFaces.length)];
    this.currentFace = currentRoll;
    return this.currentFace;
  }

}
