var index = require('../users');
var users = index.users;
var updateusers = index.updateusers;


module.exports = {
	name: 'buy',
	description: '\n ***Buy*** \n **Description:** \n -This command lists items + buildings along with their prices. Once sent, player will be prompted to retype the command along with a number afterwards to indicate which item wants to be purchased. \n **Command:** \n .buy \n *when buying an item after seeing the shop items \n .buy {insert number for item here}',
	execute(msg, args) {
		buy(msg, args);
	},
};

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

async function buy(msg, args){
  if (!(msg.author.tag in users)){
    msg.reply('You havent joined the best club yet, plz do .join before u try and do some weird commands')
  }
  else if(users[msg.author.tag].random != 0){
    msg.reply("You're in an event right now! do .random to see what happend!")
    return
  }
  kevin = users[msg.author.tag].buildings.trap1
  kevin1 = users[msg.author.tag].buildings.hut1
  dod = prices.trapprices[kevin]
  dod1 = prices.hutprices[kevin1]
  var buy_table = {
    stage1 : {
      trap : {
        name : "Trap",
        pay : {
          wood : prices.trapprices[kevin]
        },
        max : 10
      },
      hut : {
        name : "Hut",
        pay : {
          wood : prices.hutprices[kevin1]
        },
        max : 10
      }
    },
    stage2 : {
      trap : {
        name : "Trap",
        pay : {
          wood : prices.trapprices[kevin]
        },
        max : 10
      },
      hut : {
        name : "Hut",
        pay : {
          wood : prices.hutprices[kevin1]
        },
        max : 10
      },
      cart : {
        name : "Cart",
        pay : {
          wood : 150
        },
        max : 1
      },
      lodge : {
        name : "Lodge",
        pay : {
          wood : 300,
          fur : 30,
          meat : 30
        },
        max : 1
      },
      trading_lodge : {
        name : "Trading Lodge",
        pay : {
          wood : 400,
          fur : 100
        },
        max : 1
    },
    cartography_table : {
      name : "Cartography Table",
      pay : {
        wood : 1000,
        cloth : 100
      },
      max : 1
    }
  },
    stage3 : {
      trap : {
        name : "Trap",
        pay : {
          wood : prices.trapprices[kevin]
        },
        max : 10
      },
      hut : {
        name : "Hut",
        pay : {
          wood : prices.hutprices[kevin]
        },
        max : 10
      },
      cart : {
        name : "Cart",
        pay : {
          wood : 150
        },
        max : 1
      },
      lodge : {
        name : "Lodge",
        pay :{
          wood : 300,
          fur : 30,
          meat : 30
        },
        max : 1
      },
      trading_lodge : {
        name : "Trading Lodge",
        pay : {
          wood : 400,
          fur : 100
        },
        max : 1
    },
      cartography_table : {
        name : "Cartography Table",
        pay : {
          wood : 1000,
          cloth : 100
        },
        max : 1
      }
    }
  }
  var weapon_table = {
    fists : {
      name : "Fists",
      type : "punch",
      cooldown : 2,
      damage : 1,
      weight : 0
    },
    bone_spear : {
      name : "Bone Spear",
      type : "swing",
      cooldown : 2,
      damage : 2,
      weight : 2,
      pay : {
        wood : 200,
        teeth : 10
      }
    },
    iron_sword : {
      name : "Iron Sword",
      type : "swing",
      cooldown : 2,
      damage : 4,
      weight : 3,
      pay : {
        wood : 500,
        leather : 50,
        iron : 20
      }
    },
    steel_sword : {
      name : "Steel Sword",
      type : "swing",
      cooldown : 2,
      damage : 6,
      weight : 5,
      pay : {
        wood : 1000,
        leather : 300,
        steel : 40
      }
    },
    bayonet : {
      name : "Bayonet",
      type : "swing",
      cooldown : 3,
      damage : 8,
      weight : 1,
      pay : {
        scales : 30,
        teeth : 50
      }
    }
  }
  var stage_1 = Object.keys(buy_table.stage1)
  var stage_2 = Object.keys(buy_table.stage2)
  var stage_3 = Object.keys(buy_table.stage3)
  var placeholder = 0
  var keys = Object.keys(buy_table)
    if(!args.length){
      var shopstuff = "\n ***The Shop*** \n Type In: \n"
      if(users[msg.author.tag].stage === 3){
        keys = Object.keys(buy_table.stage3)
        for(var i = 0; i < keys.length; i++){
          var inner_table = buy_table.stage3[keys[i]]
          var pay_keys = Object.keys(inner_table.pay)
          console.log(inner_table)
          console.log(pay_keys)
          shopstuff = shopstuff + "\n"+ placeholder + " - " + inner_table.name + " : "
          placeholder++
          if(inner_table.isavailable === false){
            shopstuff = shopstuff + "Acquired"
          }
          else{
            for(var k = 0; k < pay_keys.length; k++){
              //console.log(inner_table.pay[pay_keys[k]])
              console.log(pay_keys[k+1])
              shopstuff = shopstuff  + pay_keys[k] + " : " + inner_table.pay[pay_keys[k]] + ", " 
            }
          }
          //console.log(inner_table[inner_keys[i]].pay)
        }
        
        // for (var i = 0; i < stage_1.length; i++) {
        //   if(placeholder === 0){
        //     var furr = "*0* : "
        //     placeholder = 1
        //   }
        //   else if(placeholder === 1){
        //     var furr = "*1* : "
        //     placeholder = 0
        //   }
        //   shopstuff = shopstuff + "\n" + furr + buy_table.stage1[stage_1[i]].name + " : " + buy_table.stage1[stage_1[i]].pay + " Wood"
        // }
      }
      else if(users[msg.author.tag].stage === 1){
        keys = Object.keys(buy_table.stage1)
        for(var i = 0; i < keys.length; i++){
          var inner_table = buy_table.stage1[keys[i]]
          var pay_keys = Object.keys(inner_table.pay)
          console.log(inner_table)
          console.log(pay_keys)
          shopstuff = shopstuff + "\n"+ placeholder + " - " + inner_table.name + " : "
          placeholder++
          for(var k = 0; k < pay_keys.length; k++){
            //console.log(inner_table.pay[pay_keys[k]])
            console.log(pay_keys[k+1])
            shopstuff = shopstuff  + pay_keys[k] + " : " + inner_table.pay[pay_keys[k]] + ", " 
          }
        }
        msg.reply(shopstuff)
      }

      else if(users[msg.author.tag].stage === 2){
        keys = Object.keys(buy_table.stage2)
        for(var i = 0; i < keys.length; i++){
          var inner_table = buy_table.stage2[keys[i]]
          var pay_keys = Object.keys(inner_table.pay)
          console.log(inner_table)
          console.log(pay_keys)
          shopstuff = shopstuff + "\n"+ placeholder + " - " + inner_table.name + " : "
          placeholder++
          for(var k = 0; k < pay_keys.length; k++){
            //console.log(inner_table.pay[pay_keys[k]])
            console.log(pay_keys[k+1])
            shopstuff = shopstuff  + pay_keys[k] + " : " + inner_table.pay[pay_keys[k]] + ", " 
          }
        }
        msg.reply(shopstuff)
      }
    }



      //msg.reply('Type: \n *0* - Trap \n *1* - Hut \n *2* - Cart \n *3* - Lodge \n *4* - Trading Post \n *5* - Tannery \n *6* - Smokehouse \n *7* - Workshop \n Type Here:')
      // if(users[msg.author.tag].stage === 1){
      //   stage1items = "*0* - Trap: "+ dod + " Wood" + "\n *1* - Hut: " + dod1 + " \n *2* - Cart \n *3*"
      //   shopstuff = shopstuff + stage1items
      // }
      // else if(users[msg.author.tag].stage === 2){
      //   stage1items = "*0* - Trap: "+ dod + " Wood" + "\n *1* - Hut: " + dod1 + " Wood"+" \n *2* - Cart:" + " 150 Wood" + "\n *3* - Lodge: 300 Wood, 30 Fur, 30 Meat \n *4* - Trading Lodge: 400 Wood, 100 Fur \n *5* - Cartography Table: 1000 Wood, 100 Cloth"
      //   shopstuff = shopstuff + stage1items
      // }
      // else if(users[msg.author.tag].stage === 3){
      //   stage1items = "*0* - Trap: "+ dod + " Wood" + "\n *1* - Hut: " + dod1 + " Wood"+" \n *2* - Cart:" + " 150 Wood" + "\n *3* - Lodge: 300 Wood, 30 Fur, 30 Meat \n *4* - Trading Lodge: 400 Wood, 100 Fur \n *5* - Cartography Table: 1000 Wood, 100 Cloth"
      //   shopstuff = shopstuff + stage1items
      // }
      //msg.reply(shopstuff)
    

    else if(args[0] === "0"){
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
    else if(args[0] === "1"){
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
    else if(args[0] === "2"){
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
    else if(args[0] === "3"){
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
    else if(args[0] === "4"){
      if(users[msg.author.tag].buildings.trading_post1 === 0 && users[msg.author.tag].resources.wood >= 400 && users[msg.author.tag].resources.fur >= 100){
        users[msg.author.tag].buildings.trading_post1 = 1
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 400
        users[msg.author.tag].resources.fur = users[msg.author.tag].resources.fur - 100
        msg.reply("a post will make commerce easier, Trading Lodge: 1")
        updateusers()
  
      }
      else if(users[msg.author.tag].buildings.trading_post1 === 1){
        msg.reply("You can only have 1 Trading Lodge!!!!!")
      }
      else{
        msg.reply("You don't have enough materials!!!!")
      }
    }
    else if(args[0] === "5" && users[msg.author.tag].stage >= 2){
      if(users[msg.author.tag].buildings.cartography_table1 === 0 && users[msg.author.tag].resources.wood >= 1000 && users[msg.author.tag].resources.cloth >= 100){
        users[msg.author.tag].buildings.cartography_table1 = 1
        users[msg.author.tag].resources.wood = users[msg.author.tag].resources.wood - 1000
        users[msg.author.tag].resources.cloth = users[msg.author.tag].resources.cloth - 100
        msg.reply("creating maps will be easier, exploration is now possible [***Cartography Table : 1***")
        users[msg.author.tag].stage = 3
        updateusers()
      }
      else if(users[msg.author.tag].buildings.cartography_table1 === 1){
        msg.reply("You can only have 1 Cartography Table!!!!!")
      }
      else{
        msg.reply("You don't have enough materials!!!!")
      }
    }
    else{
      msg.reply("Please take a look at the command you wrote and rewrite it!")
    }
  
   
    
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