var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;


function stopworking(command, msg){
    msg.reply("Type *.work stop* to stop working!")
}

exports.stopworking = stopworking;