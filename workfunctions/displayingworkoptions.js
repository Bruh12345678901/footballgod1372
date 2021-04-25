var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;

function displayingworkoptions(msg){
    console.log("ejfoeijafea")
    if (users[msg.author.tag].stage === 0){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n Type Here:")
      console.log("bruh1123")
    }
    else if(users[msg.author.tag].stage === 1 && users[msg.author.tag].buildings.hut1 >= 1){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n 1 - Gather Traps (NOT UNLOCKED) \n 2 - AutoWork \n Type Here:")  
    }
    else if(users[msg.author.tag].stage === 1){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n Type Here:")
    }
    else if(users[msg.author.tag].stage === 2 && users[msg.author.tag].buildings.hut1 >= 1){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n 1 - Gather Traps \n 2 - AutoWork \n Type Here:")
    }
    else if(users[msg.author.tag].stage === 2){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n 1 - Gather Traps \n Type Here:")
    }
    else if(users[msg.author.tag].stage === 3){
      msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n 1 - Gather Traps \n 2 - AutoWork \n 3 - Explore \n Type Here:") 
    }
  
  }

  exports.displayingworkoptions = displayingworkoptions;