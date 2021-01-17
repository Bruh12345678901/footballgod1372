var index = require('../users');
var users = index.users;
var updateusers = index.updateusers;

module.exports = {
	name: 'join',
	description: 'join the game',
	execute(msg, args) {
		join(msg);
	},
};

function join(msg){
    if (msg.author.tag in users){
      msg.reply("you have already joined!")
    }
    else{
      users[msg.author.tag] = {
        stage: 0,
        working: 0,
        working1: 0,
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