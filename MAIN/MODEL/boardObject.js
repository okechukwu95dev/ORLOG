require('console-emojis');



module.exports = {

    
  game_board :  {
    "COIN": {
      "value": [
        "heads",
        "tails"
      ]
    },

    // "STATE":{
    //   //userturn, //playerturn //restart
    // }

    "DICE_POT" : {
      "userDicePlayed" : [],
      "cpuDicePlayed" : [],
    },
    

 
    
    "PLAYER": {

      // "name": "", 

     "stoneNumber": 15,

     "tokenNumber" : 0,

     "playerDicePot": [],
      
      "diceObject": {
        "pic": '\u{1F3B2}',
        "currentFace" : {},
        
        "diceFaces": {
          "shield": {
            "pic": '\u{1F6E1}',
            "effect_on_stone": 0,
            "effect_on_other_element": "arrow to zero"
          },
          "helmet": {
            "pic": '\u{26D1}',
            "effect_on_stone": 0,
            "effect_on_other_element": "axe to zero"
          },
          "axe": {
            "pic": '\u{1FA93}',
            "effect_on_stone": -1,
            "effect_on_other_element": 0
          },
          "arrow": {
            "pic": '\u{1F3F9}',
            "effect_on_stone": -1,
            "effect_on_other_element": 0
          },
          "hand": {
            "pic": '\u{1F596}',
            "effect_on_stone": 0,
            "effect_on_other_element": 0,
            "effect_on_opponent_god_token": -1
          }
        }
      },
      
      "godTokenObjectList": {
        "health_token": {
          "pic": "health token pic",
          "low_level_effect": {
            "token_cost": 2,
            "effect_on_stone": -2
          },
          "mid_level_effect": {
            "token_cost": 4,
            "effect_on_stone": -4
          },
          "high_level_effect": {
            "token_cost": 8,
            "effect_on_stone": -8
          }
        },
        
        "defence_token": {
          "pic" : "defence token pic",
          "low_level_effect": {
            "token_cost": 2,
            "effect_on_stone": 2
          },
          "mid_level_effect": {
            "token_cost": 4,
            "effect_on_stone": 4
          },
          "high_level_effect": {
            "token_cost": 8,
            "effect_on_stone": 8
          }
        },
        "hand_multiplier__token": {
          "?????????????": "???????"
        }
      }
    }
  }
 }