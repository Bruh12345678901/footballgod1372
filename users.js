const fs = require('fs');
var rawdata = fs.readFileSync('users.json');
var users = JSON.parse(rawdata);
exports.users = users;

function updateusers(){
    var data = JSON.stringify(users);
    fs.writeFileSync('users.json', data);
}
exports.updateusers = updateusers;

function sleep(ms) {
    return new Promise(
    resolve => setTimeout(resolve, ms)
    );
}
exports.sleep = sleep;
