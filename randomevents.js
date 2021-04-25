/*
When to check when a random event
-Gather wood, gather traps, free labor
-Specific work functions will cause specific events
Some events just happen while others player can interact with and choose different paths of it
When an even thappens, stops whatever function the player was doing
*/

const { users, updateusers } = require("./users")


function didrandomevent(eventtype, msg){
    console.log(eventtype)
    bruh = Math.random() * 10
    if(bruh <= 9){
        return false
    }
    else{
        chooserandomevent(eventtype, msg)
        return true
    }
}

exports.didrandomevent = didrandomevent;


function chooserandomevent(g,msg){
    console.log(g)
    if(g === "wood"){
        dog(msg);
    }
    else if(g === "trap"){
        trapped(msg);
    }
    else if(g === "autowork"){
        hutgone(msg);
    }
}



function hutgone(msg){
    if(users[msg.author.tag].buildings.hut1 >= 1){
        msg.reply("A fire ravages through your village, destroying a hut.")
        users[msg.author.tag].buildings.hut1 = users[msg.author.tag].buildings.hut1 - 1
    }
    else{
        msg.reply("luky u didnt have hut or else it gone.")
    }
}
exports.hutgone = hutgone;

function dog(msg){
    users[msg.author.tag].random = "dog"
    updateusers()
    msg.reply("A strange creature with a small readeable nametag on his mouth says Kevin Jones, You look around and see no way out. What do you do? Type: 0 for [Fight Him] or 1 for [Run Away]")
}
exports.dog = dog;

function doga(msg,args){
    bruh = Math.floor(Math.random() * 2)
    if(args[0] === "0" || args[0] === "1"){
        if(args[0] === "0"){
            if(bruh === 1){
                msg.reply("He puts little resistance under the knife and dies a very sad and quick death. You gained 100 fur.")
                users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur + 100
            }
            else{
                if(users[msg.author.tag].resources.wood >= 400){
                    msg.reply("You try your very hardest but your skills just don't match his. You die with agony and he loots you. -400 wood")
                    users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 400
                }
                else{
                    msg.reply("The strange creature realized how poor you were, so he felt bad and didn't take any wood and instead gave you a token of excellence")
                }
            }
        }
        else if(args[0] === "1"){
            if(bruh === 1){
                if(users[msg.author.tag].resources.wood >= 500){
                    msg.reply("You run as far away as you can but as soon as you think you've outran him, he uses minecraft commands and tps behinds you, because he has killaura, you die.")
                    users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 500
                }
                else{
                    msg.reply("The creature felt bad after realizing you had like no wood, so he gave you some of his own")
                    users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood + 1
                }
            }
            else if(bruh === 2){
                msg.reply("You successfully ran away from it.")
            }
        }
        users[msg.author.tag].random = 0
        updateusers()
    }

    else{
        msg.reply("You didn't say the write thing!!")
    }
}
exports.doga = doga;

function trapped(msg){
    msg.reply("You go to loot your traps and they come back ripped apart, some can't be reused anymore...")
    ran = Math.floor(Math.random() * 4)
    users[msg.author.tag].buildings.trap1 = users[msg.author.tag].buildings.trap1 - ran
}
exports.trapped = trapped;