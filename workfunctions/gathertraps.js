var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;

var sleep = index.sleep;

var dree = require('../randomevents')
var didrandomevent = dree.didrandomevent


async function gathertraps(msg, args){
    if (!(msg.author.tag in users)){
      msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
    }
    // else if(bait >= 1){
    //   baitcheck = prompt("Would you like to use bait for your traps? \n 0 = Yes \n 1 = No \n Type Here:")
    //   if(baitcheck === 0){
        
    //   }
    // }
    else{
      if(users[msg.author.tag].buildings.trap1 === 1){
        var chance = Math.floor(Math.random() * 3)
        var loot = Math.floor(Math.random() * 5) + 1;
        var loot1 = Math.floor(Math.random() * 5) + 1;
        var loot2 = Math.floor(Math.random() * 5) + 1;
        msg.reply("Gathering...");
        await sleep(5000)
        if(chance === 0){
          users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
          users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
          msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
          updateusers()
        }
        else if(chance === 1){
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
          users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
          users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
          msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
          updateusers()
        }
        else if(chance === 2){
          users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
          users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
          msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
          updateusers()
        }
      }
      else if(users[msg.author.tag].buildings.trap1 === 2){
        var chance = Math.floor(Math.random() * 3)
        var loot = Math.floor(Math.random() * 5) + 1;
        var loot1 = Math.floor(Math.random() * 5) + 1;
        var loot2 = Math.floor(Math.random() * 5) + 1;
        msg.reply("Gathering...");
        await sleep(2000)
        if(chance === 0){
          users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
          users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
          msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
          updateusers()
        }
        else if(chance === 1){
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
          users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
          users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
          msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
          updateusers()
        }
        else if(chance === 2){
          users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
          users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
          msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
          updateusers()
        }
      }
      else if(users[msg.author.tag].buildings.trap1 === 3){
        var chance = Math.floor(Math.random() * 3)
        var loot = Math.floor(Math.random() * 10) + 1;
        var loot1 = Math.floor(Math.random() * 10) + 1;
        var loot2 = Math.floor(Math.random() * 10) + 1;
        msg.reply("Gathering...");
        await sleep(2000)
        if(chance === 0){
          users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
          users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
          msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
          updateusers()
        }
        else if(chance === 1){
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
          users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
          users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
          msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
          updateusers()
        }
        else if(chance === 2){
          users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
          users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
          users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
          msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
          updateusers()
        }
      }
      else if(users[msg.author.tag].buildings.trap1 === 4){
        var chance1 = Math.floor(Math.random() * 4)
        var loot = Math.floor(Math.random() * 15) + 1;
        var loot1 = Math.floor(Math.random() * 15) + 1;
        var loot2 = Math.floor(Math.random() * 15) + 1;
        var traploss = Math.floor(Math.random() * 4) + 1;
        msg.reply("Gathering...");
        await sleep(2000)
        var dre = didrandomevent("trap", msg)
        if (dre === false){
          if(chance1 === 0){
            users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
            msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
            updateusers()
          }
          else if(chance1 === 1){
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
            msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
            updateusers()
          }
          else if(chance1 === 2){
            users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
            msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
            updateusers()
          }
          else if(chance1 === 3){
            users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
            msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
            updateusers()
          }
        }

      }
      else if(users[msg.author.tag].buildings.trap1 === 5){
        var chance1 = Math.floor(Math.random() * 4)
        var loot = Math.floor(Math.random() * 20) + 1;
        var loot1 = Math.floor(Math.random() * 20) + 1;
        var loot2 = Math.floor(Math.random() * 20) + 1;
        var traploss = Math.floor(Math.random() * 5) + 1;
        msg.reply("Gathering...");
        await sleep(2000)
        var dre = didrandomevent("trap", msg)
        if(dre === false){
          if(chance1 === 0){
            users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
            msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
            updateusers()
          }
          else if(chance1 === 1){
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
            msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
            updateusers()
          }
          else if(chance1 === 2){
            users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
            msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
            updateusers()
          }
          else if(chance1 === 3){
            users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
            msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
            updateusers()
    
          }
        }
      }
      else if(users[msg.author.tag].buildings.trap1 === 6){
        var chance1 = Math.floor(Math.random() * 4)
        var loot = Math.floor(Math.random() * 25) + 1;
        var loot1 = Math.floor(Math.random() * 25) + 1;
        var loot2 = Math.floor(Math.random() * 25) + 1;
        var traploss = Math.floor(Math.random() * 6) + 1;
        msg.reply("Gathering...");
        await sleep(2000)
        var dre = didrandomevent("trap", msg)
        if(dre === false){
          if(chance1 === 0){
            users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
            msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
            updateusers()
          }
          else if(chance1 === 1){
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
            msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
            updateusers()
          }
          else if(chance1 === 2){
            users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
            msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
            updateusers()
          }
          else if(chance1 === 3){
            users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
            msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
            updateusers()
    
          }
        }
      }
      else if(users[msg.author.tag].buildings.trap1 === 7){
        var chance1 = Math.floor(Math.random() * 4)
        var loot = Math.floor(Math.random() * 25) + 1;
        var loot1 = Math.floor(Math.random() * 25) + 1;
        var loot2 = Math.floor(Math.random() * 25) + 1;
        var traploss = Math.floor(Math.random() * 6) + 1;
        msg.reply("Gathering...");
        await sleep(1000)
        var dre = didrandomevent("trap", msg)
        if(dre === false){
          if(chance1 === 0){
            users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
            msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
            updateusers()
          }
          else if(chance1 === 1){
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
            msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
            updateusers()
          }
          else if(chance1 === 2){
            users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
            msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
            updateusers()
          }
          else if(chance1 === 3){
            users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
            msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
            updateusers()
    
          }
        }
      }
      else if(users[msg.author.tag].buildings.trap1 === 8){
        var chance1 = Math.floor(Math.random() * 4)
        var loot = Math.floor(Math.random() * 25) + 1;
        var loot1 = Math.floor(Math.random() * 25) + 1;
        var loot2 = Math.floor(Math.random() * 25) + 1;
        var traploss = Math.floor(Math.random() * 6) + 1;
        msg.reply("Gathering...");
        await sleep(1000)
        var dre = didrandomevent("trap", msg)
        if(dre === false){
          if(chance1 === 0){
            users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
            msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
            updateusers()
          }
          else if(chance1 === 1){
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
            msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
            updateusers()
          }
          else if(chance1 === 2){
            users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
            msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
            updateusers()
          }
          else if(chance1 === 3){
            users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
            msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
            updateusers()
    
          }
        }

      }
      else if(users[msg.author.tag].buildings.trap1 === 9){
        var chance1 = Math.floor(Math.random() * 4)
        var loot = Math.floor(Math.random() * 30) + 1;
        var loot1 = Math.floor(Math.random() * 30) + 1;
        var loot2 = Math.floor(Math.random() * 30) + 1;
        var traploss = Math.floor(Math.random() * 6) + 1;
        msg.reply("Gathering...");
        await sleep(1000)
        var dre = didrandomevent("trap", msg)
        if(dre === false){
          if(chance1 === 0){
            users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
            msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
            updateusers()
          }
          else if(chance1 === 1){
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
            msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
            updateusers()
          }
          else if(chance1 === 2){
            users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
            msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
            updateusers()
          }
          else if(chance1 === 3){
            users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
            msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
            updateusers()
    
          }
        }
      }
      else if(users[msg.author.tag].buildings.trap1 === 10){
        var chance1 = Math.floor(Math.random() * 4)
        var loot = Math.floor(Math.random() * 30) + 1;
        var loot1 = Math.floor(Math.random() * 30) + 1;
        var loot2 = Math.floor(Math.random() * 30) + 1;
        var traploss = Math.floor(Math.random() * 6) + 1;
        msg.reply("Gathering...");
        await sleep(1000)
        var dre = didrandomevent("trap", msg)
        if(dre === false){
          if(chance1 === 0){
            users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
            msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
            updateusers()
          }
          else if(chance1 === 1){
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
            users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
            msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
            updateusers()
          }
          else if(chance1 === 2){
            users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
            users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
            users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
            msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
            updateusers()
          }
          else if(chance1 === 3){
            users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
            msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
            updateusers()
    
          }
        }
      }
      else{
        msg.reply("You don't have a trap yet!")
      }
    }
  }

exports.gathertraps = gathertraps;