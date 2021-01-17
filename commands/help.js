var index = require('../users');
var users = index.users;


module.exports = {
	name: 'help',
	description: 'get help',
	execute(msg, args) {
		help(msg, args);
	},
};

function help(msg, args){
    if(msg.author.tag in users){
      msg.reply("Commands: \n .join \n .gatherwood \n .work \n .gathertraps \n .buy")
    }
    else if(!(msg.author.tag in users)){
      msg.reply("Please do .join to join the game and do .help to see the other commands once you've joined!")
    }
    else{'you suck'}
  }