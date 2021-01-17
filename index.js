// You also need to add the thing where it cheks the stages and makes sure you haven't already passed it
// &&&&&7& FINISH YOUR SHOP "not the items but the pricing and how you can show it"  ^&%&^%&^%&^%&%&%^&%
// Start adding all the work functions into the right folder
// Put all the right commands into the commands folder
// https://discordjs.guide/command-handling/dynamic-commands.html#how-it-works


require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;


const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) { 
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}



var index = require('./users');
var users = index.users;
var updateusers = index.updateusers;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

var fire = 0
var items = []
var cart = 0
var player = 1
var event1 = 0
//buildings
var buildings = 0
var trap1 = 0
var hut1 = 0
var cart1 = 0 
var lodge1 = 0
var trading_post1 = 0
var tannery1 = 0
var smokehouse1 = 0
var workshop1 = 0
var steelworks1 = 0
//materials
var fur = 0
var wood = 0
var scales = 0
var leather = 0
var iron = 0
var steel = 0
var bait = 0
var cloth = 0
var cured_meat = 0
var meat = 0
var teeth = 0
var bait = 0

var defaultuser = {
  stage: 0,
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

var prices = {
  trapprices : {
    0 : 10,
    1 : 20,
    2 : 30,
    3 : 40,
    4 : 50,
    5 : 60,
    6 : 70,
    7 : 80,
    8 : 90,
    9 : 100
  },
  hutprices : {
    0 : 50,
    1 : 100,
    2 : 150,
    3 : 250,
    4 : 350,
    5 : 500,
    6 : 750,
    7 : 1000,
    8 : 1300,
    9 : 2000
  }
}

var prefix = '.'


bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  console.log(args)
  console.log(command)

var stopie = require('./workfunctions/stopworking')
var stopworking = stopie.stopworking;


	if (command === 'work') {
		work(msg, args, command);
  } 
  else if (command === 'join') {
    bot.commands.get('join').execute(msg, args);
   }
  else if (command === 'beep') {
		msg.channel.send('Boop.');
  }
  else if (command === 'help'){
    bot.commands.get('help').execute(msg, args);
  }
  else if (command === 'stats'){
    stats(msg, args, command);
  }
  else if (command === 'buy'){
    buy(msg, args, command);
  }
   else if(command === 'stop'){
     stopworking(command, msg);
   }
  


  
  if (msg.content === 'ping') {
    msg.reply('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.reply(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});

function updateusers(){
  var data = JSON.stringify(users);
  fs.writeFileSync('users.json', data);
}

function sleep(ms) {
  return new Promise(
  resolve => setTimeout(resolve, ms)
  );
}

// function join(msg){
//   if (msg.author.tag in users){
//     msg.reply("you have already joined!")
//   }
//   else{
//     users[msg.author.tag] = {
//       stage: 0,
//       working: 0,
//       working1: 0,
//       resources : {
//         fur : 0,
//         wood : 0,
//         scales : 0,
//         leather : 0,
//         iron : 0,
//         steel : 0,
//         bait : 0,
//         cloth : 0,
//         cured_meat : 0,
//         meat : 0,
//         teeth : 0,
//         bait : 0
//       },
//       buildings : {
//         trap1 : 0,
//         hut1 : 0,
//         cart1 : 0,
//         lodge1 : 0,
//         trading_post1 : 0,
//         tannery1 : 0,
//         smokehouse1 : 0,
//         workshop1 : 0,
//         steelworks1 : 0,
//         coalmine1 : 0,
//         ironmine1 : 0,
//         steelmine1 : 0
    
//       }
//     }
//     updateusers()
//     console.log(users)
//     msg.reply("You joined ***A Jones Room***")
//   }
// }

// async function gathertraps(msg, args){
//   if (!(msg.author.tag in users)){
//     msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
//   }
//   // else if(bait >= 1){
//   //   baitcheck = prompt("Would you like to use bait for your traps? \n 0 = Yes \n 1 = No \n Type Here:")
//   //   if(baitcheck === 0){
      
//   //   }
//   // }
//   else{
//     if(users[msg.author.tag].buildings.trap1 === 1){
//       var chance = Math.floor(Math.random() * 3)
//       var loot = Math.floor(Math.random() * 5)
//       var loot1 = Math.floor(Math.random() * 5)
//       var loot2 = Math.floor(Math.random() * 5)
//       msg.reply("Gathering...");
//       await sleep(5000)
//       if(chance === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 2){
//       var chance = Math.floor(Math.random() * 3)
//       var loot = Math.floor(Math.random() * 5)
//       var loot1 = Math.floor(Math.random() * 5)
//       var loot2 = Math.floor(Math.random() * 5)
//       msg.reply("Gathering...");
//       await sleep(2000)
//       if(chance === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 3){
//       var chance = Math.floor(Math.random() * 3)
//       var loot = Math.floor(Math.random() * 10)
//       var loot1 = Math.floor(Math.random() * 10)
//       var loot2 = Math.floor(Math.random() * 10)
//       msg.reply("Gathering...");
//       await sleep(2000)
//       if(chance === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 4){
//       var chance1 = Math.floor(Math.random() * 4)
//       var loot = Math.floor(Math.random() * 15)
//       var loot1 = Math.floor(Math.random() * 15)
//       var loot2 = Math.floor(Math.random() * 15)
//       var traploss = Math.floor(Math.random() * 4)
//       msg.reply("Gathering...");
//       await sleep(2000)
//       if(chance1 === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance1 === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance1 === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//       else if(chance1 === 3){
//         users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
//         msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
//         updateusers()

//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 5){
//       var chance1 = Math.floor(Math.random() * 4)
//       var loot = Math.floor(Math.random() * 20)
//       var loot1 = Math.floor(Math.random() * 20)
//       var loot2 = Math.floor(Math.random() * 20)
//       var traploss = Math.floor(Math.random() * 5)
//       msg.reply("Gathering...");
//       await sleep(2000)
//       if(chance1 === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance1 === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance1 === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//       else if(chance1 === 3){
//         users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
//         msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
//         updateusers()

//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 6){
//       var chance1 = Math.floor(Math.random() * 4)
//       var loot = Math.floor(Math.random() * 25)
//       var loot1 = Math.floor(Math.random() * 25)
//       var loot2 = Math.floor(Math.random() * 25)
//       var traploss = Math.floor(Math.random() * 6)
//       msg.reply("Gathering...");
//       await sleep(2000)
//       if(chance1 === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance1 === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance1 === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//       else if(chance1 === 3){
//         users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
//         msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
//         updateusers()

//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 7){
//       var chance1 = Math.floor(Math.random() * 4)
//       var loot = Math.floor(Math.random() * 25)
//       var loot1 = Math.floor(Math.random() * 25)
//       var loot2 = Math.floor(Math.random() * 25)
//       var traploss = Math.floor(Math.random() * 6)
//       msg.reply("Gathering...");
//       await sleep(1000)
//       if(chance1 === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance1 === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance1 === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//       else if(chance1 === 3){
//         users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
//         msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
//         updateusers()

//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 8){
//       var chance1 = Math.floor(Math.random() * 4)
//       var loot = Math.floor(Math.random() * 25)
//       var loot1 = Math.floor(Math.random() * 25)
//       var loot2 = Math.floor(Math.random() * 25)
//       var traploss = Math.floor(Math.random() * 6)
//       msg.reply("Gathering...");
//       await sleep(1000)
//       if(chance1 === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance1 === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance1 === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//       else if(chance1 === 3){
//         users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
//         msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
//         updateusers()

//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 9){
//       var chance1 = Math.floor(Math.random() * 4)
//       var loot = Math.floor(Math.random() * 30)
//       var loot1 = Math.floor(Math.random() * 30)
//       var loot2 = Math.floor(Math.random() * 30)
//       var traploss = Math.floor(Math.random() * 6)
//       msg.reply("Gathering...");
//       await sleep(1000)
//       if(chance1 === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance1 === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance1 === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//       else if(chance1 === 3){
//         users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
//         msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
//         updateusers()

//       }
//     }
//     if(users[msg.author.tag].buildings.trap1 === 10){
//       var chance1 = Math.floor(Math.random() * 4)
//       var loot = Math.floor(Math.random() * 30)
//       var loot1 = Math.floor(Math.random() * 30)
//       var loot2 = Math.floor(Math.random() * 30)
//       var traploss = Math.floor(Math.random() * 6)
//       msg.reply("Gathering...");
//       await sleep(1000)
//       if(chance1 === 0){
//         users[msg.author.tag].resources.scales = users[msg.author.tag].resources.scales + loot
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot1
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot2
//         msg.reply("You gathered " + loot + " scales, " + loot1 + " fur, and " + loot2 + " cloth.")
//         updateusers()
//       }
//       else if(chance1 === 1){
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot
//         users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth + loot1
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot2
//         msg.reply("You gathered " + loot + " fur, " + loot1 + " cloth, and " + loot2 + " meat.")
//         updateusers()
//       }
//       else if(chance1 === 2){
//         users[msg.author.tag].resources.teeth = users[msg.author.tag].resources.teeth + loot
//         users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat + loot1
//         users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + loot2
//         msg.reply("You gathered " + loot + " teeth, " + loot1 + " meat, and " + loot2 + " fur.")
//         updateusers()
//       }
//       else if(chance1 === 3){
//         users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - traploss - 1
//         msg.reply("You gather your traps but some've been ripped to shreds...\n Trap Count:" + users[msg.author.tag].buildings.trap1)
//         updateusers()

//       }
//     }
//     else{
//       msg.reply("You don't have a trap yet!")
//     }
//   }
// }


// async function gatherwood(msg, args){
//   if (!(msg.author.tag in users)){
//     msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
//   }
//   else if(users[msg.author.tag].buildings.cart1 === 0){
//     msg.reply("Gathering...");
//     await sleep(2000)
//     users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + 15
//     msg.reply("You got 15 more wood")
//     msg.reply("Wood:"+ users[msg.author.tag].resources.wood)
//     if(users[msg.author.tag].stage <= 0){
//       users[msg.author.tag].stage = 1
//     }
//     updateusers()
//   }
//   else if(users[msg.author.tag].buildings.cart1 === 1){
//     msg.reply("Gathering...");
//     await sleep(5000);
//     users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + 100
//     msg.reply("Your cart carried back 100 more wood!")
//     msg.reply("Wood:"+ users[msg.author.tag].resources.wood)
//     updateusers()
//   }
//   else{
//     msg.reply("Please type Gather Wood" )
//   }
// }


// function displayingworkoptions(msg){
//   console.log("ejfoeijafea")
//   if (users[msg.author.tag].stage === 0){
//     msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n Type Here:")
//     console.log("bruh1123")
//   }
//   else if(users[msg.author.tag].stage === 1){
//     msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n Type Here:")
//   }
//   else if(users[msg.author.tag].stage === 2){
//     msg.reply("What jobs would you like to do? \n 0 - Gather Wood \n 1 - Gather Traps \n 2 - AutoWork \n Type Here:")
//   }

// }
// jones = 1
// async function freelabor(msg, args, command){
//   console.log("eaf2")
//   if(!msg.author.tag in users){
//     msg.reply("Please first join the game by doing .join")
//   }
//   if(users[msg.author.tag].buildings.hut1 <= 0){
//     msg.reply("You can't get free work yet! There's no one in your village to work for you! Please buy a hut from the buy menu so you can get free labor.")
//   }
//   lootation = 0
//   lodgetation = 1
//   if(users[msg.author.tag].buildings.hut1 === 1){
//     lootation = 1
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 2){
//     lootation = 2
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 3){
//     lootation = 3
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 4){
//     lootation = 4
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 5){
//     lootation = 5
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 6){
//     lootation = 6
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 7){
//     lootation = 7
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 8){
//     lootation = 8
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 9){
//     lootation = 9
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 === 10){
//     lootation = 10
//     if(users[msg.author.tag].buildings.lodge1 === 1){
//       lootation = lootation + lodgetation
//     }
//   }
//   if(users[msg.author.tag].buildings.hut1 >= 1 && jones === 1){
//     console.log("eaf")
//     jones = 0
//     jonesy = "Your free working starts now! Your Wood Count :" 
//     brub = users[msg.author.tag].resources.wood
//     msg1 = await msg.channel.send(jonesy + brub);
//     users[msg.author.tag].working = 1
//     while(users[msg.author.tag].working === 1){
//       console.log("bruhman123")
//       users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + lootation
//       brub = users[msg.author.tag].resources.wood
//       updateusers()
//       //msg.reply(jonesy + brub)
//       setTimeout(() => {
//         msg1.edit(jonesy + brub);
//       }, await sleep(2000));
//       await sleep(1000);
//       if(users[msg.author.tag].working === 0){
//         break;
//       }
//       stopworking(command);
//     }
//   }
// }

// function stopworking(command, msg){
//   console.log("YOUGOT HERE!!!$$")
//   if(command === "stop"){
//     jones = 1
//     console.log("jonesy")
//     users[msg.author.tag].working = 0
//   }
// }


// let msg;
// bot.on("message", async message => {
//   // Send message & Store reference to the message
//   msg = await message.channel.send('Hi');

//   setTimeout(() => {
//     // Edit msg 20 seconds later
//     msg.edit('Hello');
//   }, 2000);
// });




// function help(msg, args){
//   if(msg.author.tag in users){
//     msg.reply("Commands: \n .join \n .gatherwood \n .work \n .gathertraps \n .buy")
//   }
//   else if(!(msg.author.tag in users)){
//     msg.reply("Please do .join to join the game and do .help to see the other commands once you've joined!")
//   }
//   else{'you suck'}
// }

function stats(msg, args, command){
  var statistics = "\n***Resources***:"
  var statistics1 = "***Buildings***:"
  console.log("u got hereeee")
  if(!msg.author.tag in users){
    msg.reply("Please first join the game by doing .join")
  }
  else{
    console.log(users[msg.author.tag].resources.wood)
    if(users[msg.author.tag].resources.wood >= 1){
      var wood = "\n" + "Wood: " + users[msg.author.tag].resources.wood + "\n"
      statistics = statistics + wood
      console.log("umade it here")
    }
    if(users[msg.author.tag].buildings.trap1 >= 1){
      var trapstuff =  "Scales: " + users[msg.author.tag].resources.scales + "\n" + "Cloth: " + users[msg.author.tag].resources.cloth + "\n" + "Meat: " + users[msg.author.tag].resources.meat + "\n" + "Teeth: " + users[msg.author.tag].resources.teeth + "\n"
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


    console.log(users[msg.author.tag].buildings.trap1);
    msg.reply(statistics)
  }
}

// Next stage is bigger than the one their on
var trapie = require('./workfunctions/gathertraps')
var gathertraps = trapie.gathertraps;

var woodie = require('./workfunctions/gatherwood')
var gatherwood = woodie.gatherwood;

var laborie = require('./workfunctions/freelabor')
var freelabor = laborie.freelabor;

async function work(msg, args, command){
  console.log(args)
  var bruh = parseInt(args[0]);
  if (!(msg.author.tag in users)){
    msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
  }
  else if(command === "work" && !args.length){
    displayingworkoptions(msg);
    console.log("you made it here uno")
  }
  if(command === "work" && bruh === 0){
    await gatherwood(msg, args);
    console.log("you made it here dos")
  }
  if(command === "work" && bruh === 1){
    if(users[msg.author.tag].stage <= 1 && users[msg.author.tag].buildings.trap1 <= 0){
      msg.reply("You haven't unlocked this yet!")
    }
    else{
      await gathertraps(msg, args);
    }
  }
  if(command === "work" && bruh === 2){
    console.log("ealfej;alkjf;")
    await freelabor(msg, args, command);
  }
  if(args === "3"){
    
  }
  if(args  === "4"){
    
  }
  if(args === "5"){
    
  }
  if(args === "6"){
    
  }
  if(args === "7"){
    
  }
  if(args === "8"){
    
  }
}





async function buy(msg, args, command){
  kevin = users[msg.author.tag].buildings.trap1
  kevin1 = users[msg.author.tag].buildings.hut1
  dod = prices.trapprices[kevin]
  dod1 = prices.hutprices[kevin1]
  console.log(dod)
  if(!args.length){
    var shopstuff = "Type: \n"
    //msg.reply('Type: \n *0* - Trap \n *1* - Hut \n *2* - Cart \n *3* - Lodge \n *4* - Trading Post \n *5* - Tannery \n *6* - Smokehouse \n *7* - Workshop \n Type Here:')
    if(users[msg.author.tag].stage === 1){
      stage1items = "*0* - Trap: "+ dod + " Wood" + "\n *1* - Hut: " + dod1 + " \n *2* - Cart \n *3*"
      shopstuff = shopstuff + stage1items
    }
    else if(users[msg.author.tag].stage === 2){
      stage1items = "*0* - Trap: "+ dod + " Wood" + "\n *1* - Hut: " + dod1 + " Wood"+" \n *2* - Cart:" + " 150 Wood" + "\n *3* - Lodge: 300 Wood, 30 Fur, 30 Meat"
      shopstuff = shopstuff + stage1items
    }
    msg.reply(shopstuff)
  }

  if (!(msg.author.tag in users)){
    msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
  }
  if(args[0] === "0" && command === "buy"){
    console.log("000000")
    if(users[msg.author.tag].buildings.trap1 === 0){
      if(users[msg.author.tag].resources.wood >= 10){
        users[msg.author.tag].stage = 2
        users[msg.author.tag].buildings.trap1 = 1
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 10
        msg.reply("builder says she can make traps to catch any creatures might still be alive out there (+1 trap)")
        updateusers()
      }
      else{
        msg.reply("You don't have enough wood!!!")
      }
    }
    else if(users[msg.author.tag].buildings.trap1 >= 1){
      if(users[msg.author.tag].resources.wood >= dod){
        users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1  + 1 
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - dod
        msg.reply("builder says she can make traps to catch any creatures might still be alive out there -- Trap Count: " + users[msg.author.tag].buildings.trap1)
        updateusers()
      }
      else{
        msg.reply("You don't have enough wood!!!")
      }
    }
  }
  if(args[0] === "1" && command === "buy"){
    if(users[msg.author.tag].buildings.hut1 <= 9 && users[msg.author.tag].resources.wood >= dod1){
      users[msg.author.tag].buildings.hut1 = users[msg.author.tag].buildings.hut1 + 1
      users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - dod1
      msg.reply("builder says there are more wanderers. says they'll work too, for a price.... \n Hut: " + users[msg.author.tag].buildings.hut1)
      updateusers()
    }
    else{
      msg.reply("you don't have enough wood!!!!!")
    }
  }
  if(args[0] === "2" && command === "buy"){
    if(users[msg.author.tag].buildings.cart1 === 0 && users[msg.author.tag].resources.wood >= 150){
      users[msg.author.tag].buildings.cart1 = users[msg.author.tag].buildings.cart1 + 1
      users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 150
      msg.reply("builder says she can make a cart for carrying wood (try gathering wood!) ***Cart: 1***")
      updateusers()
    }
    else if(users[msg.author.tag].buildings.cart1 === 1){
      msg.reply("You can only have 1 cart!!!")
    }
    else{
      msg.reply("You don't have enough wood!!!")
    }
  }
    if(args[0] === "3" && command === "buy"){
      if(users[msg.author.tag].buildings.lodge1 === 0 && users[msg.author.tag].resources.wood >= 300 && users[msg.author.tag].resources.fur >= 30 && users[msg.author.tag].resources.meat >= 30){
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 300
        users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur - 30
        users[msg.author.tag].resources.meat = users[msg.author.tag].resources.meat - 30
        users[msg.author.tag].buildings.lodge1 = 1
        msg.reply("villagers could help hunt, given the means, Lodge: 1")
        updateusers()
      }
      else if(users[msg.author.tag].buildings.lodge1 === 1){
        msg.reply("You can only have 1 Lodge!")
      }
      else{
        msg.reply("You don't have enough materials!!!")
      }
    }

  // else if(ko ==="3"){
  //   if(wood >= 300 && fur >= 5 && meat >= 10){
  //     lodge1 = 1
  //     wood = wood - 500
  //     fur = fur - 5
  //     meat = meat - 10
  //     console.log("villagers could help hunt, given the means (+1 Lodge)")
  //   }
  //   else{
  //     console.log("You don't have enough materials!!!")
  //   }
  // }
  // else if(ko ==="4"){
  //   if(wood >= 400 && fur >= 100){
  //     tradingpost1 = 1
  //     wood = wood - 400
  //     fur = fur - 100
  //     console.log("a trading post would make commerce easier (+1 Trading Post)")
  //   }
  //   else{
  //     console.log("You don't have enough materials!")
  //   }
  // }
  // else if(ko ==="5"){
  //   if(wood >= 500 && fur >= 50){
  //     tannery1 = 1
  //     wood = wood - 500
  //     fur = fur - 50
  //     console.log("builder says leather could be useful. says the villagers could make it (+1 Tannery)")
  //   }
  //   else{
  //     console.log("You don't have enough materials!")
  //   }
  // }
  // else if(ko ==="6"){
  //   if(wood >= 600 && meat >= 50){
  //     smokehouse1 = 1
  //     wood = wood - 600
  //     meat = meat - 50
  //     console.log("should cure the meat, or it'll spoil. builder says she can fix something up (+1 Smokehouse)")
  //   }
  //   else{
  //     console.log("You don't have enough materials!")
  //   }
  // }
  // else if(ko ==="7"){
  //   if(wood >= 800 && leather >= 100 && scales >= 10){
  //     workshop1 = 1
  //     wood = wood - 800
  //     leather = leather - 100
  //     scales = scales - 10
  //     console.log("builder says she could make finer things, if she had the tools (+1 Workshop)")
  //   }
  //   else{
  //     console.log("You don't have enough materials!")
  //   }
  // }
  // else if(ko === "8"){
  //   if(wood >= 1500 && iron >= 100 && coal >= 100){
  //     steelworks1 = 1
  //     wood = wood - 1500
  //     iron = iron - 100
  //     coal = coal - 100
  //     console.log("builder says the villagers could make steel, given the tools (+1 Steelworks)")
  //   }
  //   else{
  //     console.log("You don't have enough materials!")
  //   }
  //}
  


}
