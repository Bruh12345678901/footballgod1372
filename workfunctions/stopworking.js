var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;


function stopworking(command, msg){
    console.log("YOUGOT HERE!!!$$")
    if(command === "stop"){
      jones = 1
      console.log("jonesy")
      users[msg.author.tag].working = 0
      updateusers()
    }
    else if(jones === 1){
        msg.reply("You can't stop what you haven't started?!?!?!")
    }
  }

  exports.stopworking = stopworking;