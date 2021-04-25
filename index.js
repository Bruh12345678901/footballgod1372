// Finish explore function
//create more random events
//add gambling



//Display shop differently
//Random kevin dog event broke after saying .random 1, resources breaks after doing this ie lose all wood and stuff
//.help for items
//after the first cart delete it from the shop cause it still says its there after buying 1
//trap lootation doesn't work
//If there is only 1 of item (like cart) just say Cart : Acquired, instead of Cart : 1, same for trading post
//tell player what stage their on and when they go up
//When you do .work 2 it says you started working ,but when u do it again it says you started working again, and yo ucan still do other commands while working
//tell the playe rto do .work stop when they start .work 2
//traps can go into negative after trap loss event
//Cloth is ridiculously hard to get, why did you forget to implement the tannery!?!??!!?!?




// i dont know what mean ::
//When .trade is down without trading lodge, it says you don't have a trading post but in buy menu it says trading lodge
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

var prefix = '.'

bot.on('message', msg => {
  
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  console.log(args)
  console.log(command)

  if (!bot.commands.has(command)) return;

  try {
	  bot.commands.get(command).execute(msg, args);
  } catch (error) {
	  console.error(error);
	  msg.reply('there was an error trying to execute that command!');
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