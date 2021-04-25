var index = require('../users');
var users = index.users;


module.exports = {
	name: 'stats',
	description: '\n ***Stats*** \n **Description:** \n -This command shows all your stats including what buildings, resources, and player stats. \n **Command:** .stats',
	execute(msg, args) {
		stats(msg, args);
	},
};

function stats(msg, args){
    var statistics = "\n***Resources***:"
    var statistics1 = "***Buildings***:"
    console.log("u got hereeee")
    if(!msg.author.tag in users){
      msg.reply("Please first join the game by doing .join")
    }
    if(users[msg.author.tag].random != 0){
      msg.reply("You're in an event right now! do .random to see what happend!")
    }
    else{
      console.log(users[msg.author.tag].resources.wood)
      if(users[msg.author.tag].resources.wood >= 1){
        var wood = "\n" + "Wood: " + users[msg.author.tag].resources.wood + "\n"
        statistics = statistics + wood
        console.log("umade it here")
      }
      if(users[msg.author.tag].buildings.trap1 >= 1){
        var trapstuff =  "Scales: " + users[msg.author.tag].resources.scales + "\n" + "Cloth: " + users[msg.author.tag].resources.cloth + "\n" + "Meat: " + users[msg.author.tag].resources.meat + "\n" + "Teeth: " + users[msg.author.tag].resources.teeth + "\n" + "Fur: " + users[msg.author.tag].resources.fur + "\n"
        statistics = statistics + trapstuff
        console.log("321123")
  
      }
      if(users[msg.author.tag].buildings.trap1 >= 1){
        var trapps = "\n" + "Traps: " + users[msg.author.tag].buildings.trap1 + "\n"
        statistics = statistics + statistics1 + trapps
      }
      if(users[msg.author.tag].buildings.hut1 >= 1){
        var hutts = " Huts: " + users[msg.author.tag].buildings.hut1 + "\n"
        statistics = statistics + hutts
      }
      if(users[msg.author.tag].buildings.cart1 >= 1){
        var cartss = " Cart: " + users[msg.author.tag].buildings.cart1 + "\n"
        statistics = statistics + cartss
      }
      if(users[msg.author.tag].buildings.lodge1 >= 1){
        var lodgess = " Lodge: " + users[msg.author.tag].buildings.lodge1 + "\n"
        statistics = statistics + lodgess
      }
      if(users[msg.author.tag].buildings.trading_post1 >= 1){
        var postss = " Trading Lodge: " + users[msg.author.tag].buildings.trading_post1 + "\n"
        statistics = statistics + postss
      }
      if(users[msg.author.tag].buildings.cartography_table1 >= 1){
        var tabless = " Cartography Table: " + users[msg.author.tag].buildings.cartography_table1 + "\n"
        statistics = statistics + tabless
      }
      if(users[msg.author.tag].buildings.tannery1 >= 1){
        var tannerys = " Tannery: " + users[msg.author.tag].buildings.tannery1 + "\n"
        statistics = statistics + tannerys
      }
      if(users[msg.author.tag].buildings.smokehouse1 >= 1){
        var smokehousess = " Lodge: " + users[msg.author.tag].buildings.smokehouse1 + "\n"
        statistics = statistics + smokehousess
      }
  
      console.log(users[msg.author.tag].buildings.trap1);
      msg.reply(statistics)
    }
  }