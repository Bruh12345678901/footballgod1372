var index = require('../users');
var dree = require('../randomevents')

var users = index.users;
var updateusers = index.updateusers;

var sleep = index.sleep;

var didrandomevent = dree.didrandomevent


async function gatherwood(msg, args){
    if (!(msg.author.tag in users)){
      msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
    }
    else if(users[msg.author.tag].random != 0){
      msg.reply("Your in an event right now! do .random to see what happend!")
    }
    else if(users[msg.author.tag].buildings.cart1 === 0){
      msg.reply("Gathering...");
      await sleep(2000)
      var dre = didrandomevent("wood", msg)
      if(dre === false){
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + 15
        msg.reply("You got 15 more wood")
        msg.reply("Wood:"+ users[msg.author.tag].resources.wood)
        if(users[msg.author.tag].stage <= 0){
          users[msg.author.tag].stage = 1
        }
        updateusers()
      }
      // else if(dre === true){
      //   msg.reply("Your cart fell over into the river and you lost everything!!!")
      // }
    }
    else if(users[msg.author.tag].buildings.cart1 === 1){
      msg.reply("Gathering...");
      var dre = didrandomevent("wood", msg)
      await sleep(5000);
      if(dre === false){
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + 100
        msg.reply("Your cart carried back 100 more wood!")
        msg.reply("Wood:"+ users[msg.author.tag].resources.wood)
        updateusers()
      }
      // else if(dre === true){
      //   msg.reply("Your cart fell over into the river and you lost everything!!!")
      // }
    }
    else{
      msg.reply("Please type Gather Wood" )
    }
  }

  exports.gatherwood = gatherwood;