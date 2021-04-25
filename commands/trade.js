var index = require('../users');
var users = index.users;
var updateusers = index.updateusers;

module.exports = {
	name: 'trade',
	description: '\n ***Trade*** \n **Description:** \n -This command allows you to trade the resources you have right now for other resources! If you want to trade, do .trade and follow the instructions to trade your items! \n **Prerequisites:** \n -Trading Lodge \n **Command:** .trade',
	execute(msg, args) {
		trade(msg, args);
	},
};
var trade_table = {
    fur : {
      scales : {
        name : "Scales",
        pay : 1,
        gain : 10
      },
      teeth : {
        name : "Teeth",
        pay : 1,
        gain : 10
      }
    },
    scales : {
      cloth : {
        name : "Cloth",
        pay : 15,
        gain : 1
      },
      meat : {
        name : "Meat",
        pay : 15,
        gain : 1
      }
    },
    bait : {
      fur : {
        name : "Fur",
        pay : 20,
        gain : 5
      }
    },
    iron : {
      scales : {
        name : "Scales",
        pay : 10,
        gain  : 1
      },
      wood : {
        name : "Wood",
        pay : 500,
        gain : 1
      }
    },
    leather : {
      cloth : {
        name : "Cloth",
        pay : 5,
        gain : 1
      }
    },
    cured_meat : {
      meat : {
        name : "Meat",
        pay : 25,
        gain : 1
      }
    }
  }

var fur_table = Object.keys(trade_table.fur)
var scales_table = Object.keys(trade_table.scales)
var bait_table = Object.keys(trade_table.bait)
var iron_table = Object.keys(trade_table.iron)
var leather_table = Object.keys(trade_table.leather)
var curedmeat_table = Object.keys(trade_table.cured_meat)
//console.log(Object.keys(trade_table))
//console.log(Object.keys(trade_table.fur))
function trade(msg, args){
  if (!(msg.author.tag in users)){
    msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
  }
  else if(users[msg.author.tag].buildings.trading_post1 === 0){
    msg.reply("***You haven't unlocked this feature yet!!!!*** \n To unlock this feature, please buy the Trading Lodge from the shop to unlock trading.")
  }
  else if(users[msg.author.tag].random != 0){
    msg.reply("You're in an event right now! do .random to see what happend!")
  }
  else if(!args.length){

    var ba = "***Trading Lodge*** \n Type the # in to trade(EX: .trade 'x')"
    var placeholder = 0
    var keys = Object.keys(trade_table)
    for(var i = 0; i < keys.length; i++){
      var inner_table = trade_table[keys[i]]
      var inner_keys = Object.keys(inner_table)
      for(var k = 0; k < inner_keys.length; k++){
        ba = ba + "\n" + " *" + placeholder + "* "+ " : "+ inner_table[inner_keys[k]].pay + " " + inner_table[inner_keys[k]].name + " : " + inner_table[inner_keys[k]].gain + " " + keys[i]
        placeholder++
      }
    }
    msg.reply(ba)
  }
  else if(args[0] === "0"  && users[msg.author.tag].resources.scales >= 1){
    users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales - 1
    users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + 10
    msg.reply(users[msg.author.tag].resources.scales + " ***-1*** Scales" + " | " + users[msg.author.tag].resources.fur + " ***+10*** Fur")
    updateusers()
  }
  else if(args[0] === "1"  && users[msg.author.tag].resources.teeth >= 1){
    users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth - 1
    users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + 10
    msg.reply(users[msg.author.tag].resources.teeth + " ***-1*** Teeth" + " | " + users[msg.author.tag].resources.fur + " ***+10*** Fur")
    updateusers()
  }
  else if(args[0] === "2"  && users[msg.author.tag].resources.cloth >= 15){
    users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth - 15
    users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + 1
    msg.reply(users[msg.author.tag].resources.cloth + " ***-15*** Cloth" + " | " + users[msg.author.tag].resources.scales + " ***+1*** Scales")
    updateusers()
  }
  else if(args[0] === "3"  && users[msg.author.tag].resources.meat >= 15){
    users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat - 15
    users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + 1
    msg.reply(users[msg.author.tag].resources.meat + " ***-15*** Meat" + " | " + users[msg.author.tag].resources.scales + " ***+1*** Scales")
    updateusers()
  }
  else if(args[0] === "4"  && users[msg.author.tag].resources.fur >= 20){
    users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur - 20
    users[msg.author.tag].resources.bait = users[msg.author.tag].resources.bait + 5
    msg.reply(users[msg.author.tag].resources.fur + " ***-20*** Fur" + " | " + users[msg.author.tag].resources.bait + " ***+5*** Bait")
    updateusers()
  }
  else if(args[0] === "5"  && users[msg.author.tag].resources.scales >= 10){
    users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales - 10
    users[msg.author.tag].resources.iron = users[msg.author.tag].resources.iron + 1
    msg.reply(users[msg.author.tag].resources.scales + " ***-10*** Scales" + " | " + users[msg.author.tag].resources.iron + " ***+1*** Iron")
    updateusers()
  }
  else if(args[0] === "6"  && users[msg.author.tag].resources.wood >= 500){
    users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 500
    users[msg.author.tag].resources.iron = users[msg.author.tag].resources.iron + 1
    msg.reply(users[msg.author.tag].resources.wood + " ***-500*** Wood" + " | " + users[msg.author.tag].resources.iron + " ***+1*** Iron")
    updateusers()
  }
  else if(args[0] === "7"  && users[msg.author.tag].resources.cloth >= 5){
    users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth - 5
    users[msg.author.tag].resources.leather = users[msg.author.tag].resources.leather + 1
    msg.reply(users[msg.author.tag].resources.cloth + " ***-5*** Cloth" + " | " + users[msg.author.tag].resources.leather + " ***+1*** Leather")
    updateusers()
  }
  else if(args[0] === "8"  && users[msg.author.tag].resources.meat >= 25){
    users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat - 25
    users[msg.author.tag].resources.cured_meat = users[msg.author.tag].resources.cured_meat + 1
    msg.reply(users[msg.author.tag].resources.meat + " ***-25*** Meat" + " | " + users[msg.author.tag].resources.cured_meat + " ***+1*** Cured Meat")
    updateusers()
  }
  else{
    msg.reply("You don't have enough resources!?!?!?")
  }
}
