var index = require('../users');
var prefix = index.prefix;
var users = index.users;



module.exports = {
	name: 'help',
	description: '\n ***Help*** \n **Description:** \n -This command lists all the available commands and provide descriptions of all of them \n **Command:** .help',
	execute(msg, args) {
		help(msg, args);
	},
};

function help(msg, args){
  const { commands } = msg.client;
  var atad = [];
  if(!args.length){
    atad.push('\nCommands:');
    atad.push(commands.map(command => command.name).join('\n'));
    atad.push('Send .help [command name] to get more help on a specific command!');

    msg.reply(atad , {split: true})
  }
  else if(args.length >= 1){
    var name = args[0].toLowerCase();
    var command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
  
    if (!command){
      msg.reply("Thats not a real command")
    }
  
    atad.push(`Name: ${command.name}`)
  
    if(command.description) atad.push(`Description: ${command.description}`);
  
    msg.reply(atad, {split: true});
  }
}



/*
Make commands more intuitive(ask Kevin)
-maybe make commands shorter/shortcuts like instead of .work, then .work 0 to gather wood, it would just be .gatherwood, or .gather, then brings up list, then .gatherwood/.gathertraps
ask kevin if player can just type help without the . infront to show all commands
Make it so if player hasnt joined yet, make the only command they can do is .join and tell them to rerun .join to see all commands
-For all commands, write out prerequisites to acquire those commands so player isnt confused why they cant use them
*/