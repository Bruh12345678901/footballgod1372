var index = require('../users');
var users = index.users;
var updateusers = index.updateusers;

module.exports = {
	name: 'work',
	description: '\n ***Work*** \n **Description:** \n -This command lists the work options you have and allows you to do .work {insert number here} to choose what type of work you would like to do \n **Command:** .work',
	execute(msg, args) {
		work(msg, args);
	},
};


var trapie = require('../workfunctions/gathertraps')
var gathertraps = trapie.gathertraps;

var woodie = require('../workfunctions/gatherwood')
var gatherwood = woodie.gatherwood;

var laborie = require('../workfunctions/freelabor')
var freelabor = laborie.freelabor;

var dispaly = require('../workfunctions/displayingworkoptions')
var displayingworkoptions = dispaly.displayingworkoptions;

var explorie = require('../workfunctions/explore')
var explore = explorie.explore;




async function work(msg, args){
  console.log(args)
  lootation = 0
  lodgetation = 1
  if (!(msg.author.tag in users)){
    msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
  }
  else if(users[msg.author.tag].random != 0){
    msg.reply("You're in an event right now! do .random to see what happend!")
  }
  else if( !args.length){
    displayingworkoptions(msg);
    console.log("you made it here uno")
  }
  else if( args[0] === "0"){
    await gatherwood(msg, args);
    console.log("you made it here dos")
  }
  else if( args[0] === "1"){
    if(users[msg.author.tag].stage <= 1 && users[msg.author.tag].buildings.trap1 <= 0){
      msg.reply("***You haven't unlocked this yet!*** \n Buy a trap from the shop to unlock this feature!")
    }
    else{
      await gathertraps(msg, args);
    }
  }
  else if( args[0] === "2"){
    if(users[msg.author.tag].stage <= 1 && users[msg.author.tag].buildings.hut1 <= 0){
      msg.reply("***You haven't unlocked this yet!*** \n Buy a hut from the shop to unlock this feature!")
    }
    if(users[msg.author.tag].buildings.hut1 === 1){
      lootation = 2
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 2){
      lootation = 3
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 3){
      lootation = 4
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 4){
      lootation = 5
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 5){
      lootation = 6
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 6){
      lootation = 7
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 7){
      lootation = 8
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 8){
      lootation = 9
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 9){
      lootation = 10
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 10){
      lootation = 11
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    console.log("ealfej;alkjf;")
    await freelabor(msg, args);
  }
  //else if(args[0] === "3"){
    //console.log(Object.keys(trade_table))
    
  //}
  else if(args[0] === "stop" /*&& users[msg.author.tag].resources.jones === 0 */){
    // users[msg.author.tag].resources.jones = 1
    // console.log("jonesy")
    users[msg.author.tag].working = 0
    var stoptime = Date.now()
    var elapsedtime = stoptime - users[msg.author.tag].worktime
    var secmoney = elapsedtime / 1000
    var minmoney = secmoney / 60
    var hourmoney = minmoney / 60
    console.log(elapsedtime)


    if(secmoney >= 1){
      var moola = minmoney / 2
      console.log("bruh")
      var value = Math.pow(lootation, moola + 1)
      var value2 = lootation * minmoney
      var value3 = Math.round(lootation * secmoney)
      users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + value3
      msg.reply(`You made ${value3} wood!`)
      updateusers()
    }
    else{
      msg.reply("You didnt' work long enough!")
    }

    updateusers()
    msg.reply(`You worked for ${secmoney} seconds!`)
  }
  else if(users[msg.author.tag].resources.jones === 1){
    msg.reply("You can't stop what you haven't started?!?!?!")
  }
  else if(args[0]  === "3"){
    await explore(msg,args);
  }
  else if(args === "4"){
    
  }
  else if(args === "5"){
    
  }
  else if(args === "6"){
    
  }
  else if(args === "7"){
    
  }
}