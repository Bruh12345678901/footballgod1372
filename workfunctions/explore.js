var index = require('../users');

var users = index.users;
var updateusers = index.updateusers;

var sleep = index.sleep;

var explore2 = 

async function explore2(msg, args){
    explore2(msg,args)
}

exports.explore2 = explore2;




 
/*
NOTES
-Plan out timeline, Make base player
-Make sure to add all mines, checkpoints, alloys, special events, everything before start making timeline
-Base player has health, base damage, attack damage(base damage + item damage), item
-Special events, every once in a while boss comes, you get enchanced loot and a lot better stuff
-Normal mobs don't drop anything, bosses will drop better weapons
-5 stages in every mine, Waypoints only 2 stages
-Once all things found, every time exploring, random chance for alien alloy to appear as drop from mob
-After a specific amount of mob fighting, alien ship will be found and alloys can attach to ship to fix ship
-Can choose when to go back, when go back, you go back to either base or nearest checkpoint
-Limited amount of space in inventory, includes all items, drops, etc
-Can buy bigger backpacks, health potions, better weapons, build more stuff with mine resources, NEED CURED MEAT TO GO OUT(use charcuterie to cure meat)
-Every 1 move forward eats multiple pieces of cured meat, eat 1 cured meat to heal a bit of health
-Monsters get harder throughout all stages, as stages go through do more damage, have more health, etc, same for person



-How it will work
 -Changes player status onto explore (player cannot leave until they return to base or go to nearest outpost)
 -Player first chooses what they want to bring(ie: sword, potions, water, food)
 -Player sets out by starting
 -Straightforward timeline, every other move is a fight and the other gives loot, every 5 is an outpost and every 10-15 is a special mine/event
*/