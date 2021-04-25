var index = require('../users');
var users = index.users;
var updateusers = index.updateusers;

module.exports = {
	name: 'join',
	description: '\n ***Join*** \n **Description:** \n -This command is what you write when you first want to join the game, once sent, player will join the game \n **Command:** \n .join',
	execute(msg, args) {
		join(msg);
	},
};

function join(msg){
    if (msg.author.tag in users){
      msg.reply(`youve lareand joined***reWelcome to **A Jones Room**!!!***
      In this game, you slowly expand and gain resources for your village as you prepare yourself for the ultimate test! After working your way to peak civilization, you will venture out and find and explore new thigns to modernize your village even more than it is!
      Do .help to receive more information on what to do and you can start by following the help descriptions. Good Luck!
      `)
    }
    // else if(users[msg.author.tag].random != 0){
    //   msg.reply("Your in an event right now! do .random to see what happend!")
    // }
    else{
      msg.reply(`***Welcome to **A Jones Room**!!!***
      In this game, you slowly expand and gain resources for your village as you prepare yourself for the ultimate test! After working your way to peak civilization, you will venture out and find and explore new things to modernize your village even more than it is!
      Do .help to receive more information on what to do and you can start by following the help descriptions. Good Luck! ps do .work
      `)
      users[msg.author.tag] = {
        stage: 0,
        working: 0,
        working1: 0,
        worktime: 0,
        random: 0,
        explore :{
          playerhealth : 5,
          playerdamage : 1,
          playerfood : 0,
          playerwater : 0,
          outpostnumber : 0,
          playerweight : 0,
          items : {

          }
        },
        resources : {
          fur : 0,
          wood : 0,
          scales : 0,
          leather : 0,
          iron : 0,
          steel : 0,
          bait : 0,
          cloth : 0,
          cured_meat : 0,
          meat : 0,
          teeth : 0,
          bait : 0
        },
        buildings : {
          trap1 : 0,
          hut1 : 0,
          cart1 : 0,
          lodge1 : 0,
          trading_post1 : 0,
          cartography_table1 : 0,
          tannery1 : 0,
          smokehouse1 : 0,
          workshop1 : 0,
          steelworks1 : 0,
          coalmine1 : 0,
          ironmine1 : 0,
          steelmine1 : 0
      
        }
      }
      updateusers()
      console.log(users)
      msg.reply("You joined ***A Jones Room***")
    }
  }