var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;

var sleep = index.sleep;



module.exports = {
	name: 'explore',
	description: '\n ***Explore*** \n **Description:** \n -This command allows you to leave your village and go on a journey! With specific movements and a lined out timeline, over time you will cross paths with outposts, buildings, mines, and etc. \n **Prerequisites:** \n -Must have Trading Lodge and all other buildings before \n **Command:** .explore',
	execute(msg, args) {
		explore(msg, args);
	},
};


async function explore(msg, args){
    if(users[msg.author.tag].buildings.cartography_table1 < 1){
        msg.reply("***You haven't unlocked this feature yet!!!*** \n Please buy a cartography table through the shop to begin exploring.")
    }
    msg.reply("Would you like to go out and explore? \n *0* - Yes \n *1* - No")
    if(args[0] === 0){

    }
    if(args[0] === 1){
        msg.reply("Ok! Make sure you explore soon so you gain more features in the game!")
    }
}