var resources = (require('../MODEL/boardObject')).game_board;
var funcs = require('../DAO/DAOConsoleImplementation.js');
var userView = require('../VIEW/UserInterface.js');

let runFunction = new funcs();
let view = new userView();

module.exports = class Controller {
  
  
  constructor(){
    // console.log("constructed")
  }

  getUserChoiceAndprintFlip () {
    let choice = view.getUserCoinChoice();
    let flip =  view.flipCoin();
    view.pickFirstPlayer(flip,choice);
  }

  startGame () {
    //print game start
    view.printGameStart();
    runFunction.startGame();
    //print board

  }

    
};