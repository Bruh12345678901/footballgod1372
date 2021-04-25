var index = require('../users');
var users = index.users;
var dree = require('../randomevents')
var dog = dree.dog
var doga = dree.doga

module.exports = {
	name: 'random',
	description: '\n ***Random*** \n **Description:** \n -This command will show you what random event you are in and tell you your options for it, if you arent in one, then it will just say you arent in one. \n **Command:** .random',
	execute(msg, args) {
		random(msg, args);
	},
};

// if player already joined
// if player has random status
//          what random status???
//              if no args, send event question
//              if yes args, send event answer
//              if too many args, say too many args

function random(msg,args){
    if(!msg.author.tag in users){
        msg.reply("Please first join the game by doing .join")
    }
    if(users[msg.author.tag].random != 0){
        if(users[msg.author.tag].random === "dog"){
            if(!args.length){
                dog(msg)
            }
            else if(args.length === 1){
                doga(msg,args)
            }
            else if(args.length > 1){
                msg.reply("Yo you have too many stuff written please delete unnecesary stuff")
            }
        }
    }
    else{
        msg.reply("You're currently not in an event!!")
    }

}