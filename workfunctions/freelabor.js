var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;

var sleep = index.sleep;

var stopie = require('./stopworking')
var stopworking = stopie.stopworking;


function displayingworkoptions(msg){
    console.log("ejfoeijafea")
    if (users[msg.author.tag].stage === 0){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n Type Here:")
      console.log("bruh1123")
    }
    else if(users[msg.author.tag].stage === 1){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n Type Here:")
    }
    else if(users[msg.author.tag].stage === 2){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n 1 - Gather Traps \n 2 - AutoWork \n Type Here:")
    }
  
  }
  jones = 1
  async function freelabor(msg, args, command){
    console.log("eaf2")
    if(!msg.author.tag in users){
      msg.reply("Please first join the game by doing .join")
    }
    if(users[msg.author.tag].buildings.hut1 <= 0){
      msg.reply("You can't get free work yet! There's no one in your village to work for you! Please buy a hut from the buy menu so you can get free labor.")
    }
    lootation = 0
    lodgetation = 1
    if(users[msg.author.tag].buildings.hut1 === 1){
      lootation = 1
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 2){
      lootation = 2
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 3){
      lootation = 3
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 4){
      lootation = 4
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 5){
      lootation = 5
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 6){
      lootation = 6
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 7){
      lootation = 7
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 8){
      lootation = 8
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 9){
      lootation = 9
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 === 10){
      lootation = 10
      if(users[msg.author.tag].buildings.lodge1 === 1){
        lootation = lootation + lodgetation
      }
    }
    if(users[msg.author.tag].buildings.hut1 >= 1 && jones === 1){
      console.log("eaf")
      jones = 0
      jonesy = "Your free working starts now! Your Wood Count :" 
      brub = users[msg.author.tag].resources.wood
      msg1 = await msg.channel.send(jonesy + brub);
      users[msg.author.tag].working = 1
      while(users[msg.author.tag].working === 1){
        console.log("bruhman123")
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + lootation
        brub = users[msg.author.tag].resources.wood
        updateusers()
        //msg.reply(jonesy + brub)
        setTimeout(() => {
          msg1.edit(jonesy + brub);
        }, await sleep(2000));
        await sleep(1000);
        if(users[msg.author.tag].working === 0){
          break;
        }
        stopworking(command);
      }
    }
  }

  exports.freelabor = freelabor;

