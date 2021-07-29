 const {default_prefix} = require("./config.json")
 const DisTube = require("distube")
 const { MessageEmbed } = require("discord.js");

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:yuukiisthebest@yuuki.tnasg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('connected to mongo db!'))




const { addexp } = require("./handlers/xp.js")
const SnakeGame = require('snakecord');
const Discord = require('discord.js');
require('@weky/inlinereply');
const { config } = require("dotenv");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { emotes , emoji} =require("./config.json")
const discord = require("discord.js");
const disbut = require('discord-buttons');
const { QuickClick } = require('weky');

const client = new Discord.Client({
    shards: "auto",
    restTimeOffset: 0, partials: ['MESSAGE', 'CHANNEL', 'REACTION']});;
    require('discord-buttons')(client);
    require('discord-reply')
    client.setMaxListeners(200);

const yts = require('yt-search')
 global.PBapi = require('prime-bots.js');
 global.PrimeBot = new PBapi('APIToken.ep5xfpsekt.2g5dcszemw6', client);
global.Minesweeper = require('discord.js-minesweeper');
client.queue = new Map();
client.vote = new Map();
const { ready } = require("./handlers/ready.js")

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);

  
client.on("message", async message => {
 

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;




  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);


  return addexp(message)
});







client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=kajirama`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});

client.on("message", async message => {
if (message.channel.name == "├⁉chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=kajirama`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});






const { GiveawaysManager } = require("discord-giveaways");

const manager = new GiveawaysManager(client, {
    storage: "./handlers/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.giveawaysManager = manager;

client.on("message", async message => {
if(!message.guild) return;
  let prefix = default_prefix
  
  if(!message.content.startsWith(prefix)) return;
 
})



client.on("ready", () => {
    client.user.setStatus("online");
    console.log("BOT ONLINE")

       
});
client.on("message", async message => {
if(!message.guild) return;
  let prefix = default_prefix
  
  if(!message.content.startsWith(prefix)) return;
 
})
 





client.on("ready", () => {
    client.user.setActivity(default_prefix + `help`, { 
      type: "STREAMING",
      url: "https://www.twitch.tv/discord"
      
      });
});
const { Player } = require("discord-music-player");

const player = new Player(client, {
    leaveOnEmpty: false,
});

client.player = player;

new Player(client, {
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: true,
    timeout: 10,
    volume: 150,
    quality: 'high',
});
const fs = require('fs')
const Levels = require("discord-xp");

Levels.setURL("mongodb+srv://user:yuukiisthebest@yuuki.tnasg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

 client.on('guildCreate', guild =>{

    const channelId = '869681251597033493'; 

    const channel = client.channels.cache.get(channelId); 
    
    if(!channel) return;  
    const embed = new discord.MessageEmbed()
        .setTitle('I Joined A Server!:D')
        .setDescription(`**Server Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`I'm in ${client.guilds.cache.size} Server Now!`);
    channel.send(embed);
});


client.on('guildDelete', guild =>{
    const channelId = '869681251597033493';
    const channel = client.channels.cache.get(channelId); 
    
    if(!channel) return;  
    const embed = new discord.MessageEmbed()
        .setTitle('I Left A Server! :(')
        .setDescription(`**Server Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm in ${client.guilds.cache.size} Server Now!`);
    channel.send(embed);
});







    allowedMentions: {
      
        repliedUser: true
    }
  

const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === default_prefix + 'poker') {
      if(!message.member.voice.channel) return message.reply({embed : {
    description : `You need to be in a vc!`,
    color : `RED`  
  }});
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});
 
 
    
client.on('message', async message => {
    if (message.content === default_prefix + 'ytt') {
       if(!message.member.voice.channel) return message.reply({embed : {
    description : `You need to be in a vc!`,
    color : `RED`  
  }});
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.on('message', async message => {
    if (message.content === default_prefix + 'chess') {
       if(!message.member.voice.channel) return message.reply({embed : {
    description : `You need to be in a vc!`,
    color : `RED`  
  }});
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});
  
  client.on('message', async message => {
    if (message.content === default_prefix + 'betrayal') {
       if(!message.member.voice.channel) return message.reply({embed : {
    description : `You need to be in a vc!`,
    color : `RED`  
  }});
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.on('message', async message => {
    if (message.content === default_prefix + 'fishing') {
       if(!message.member.voice.channel) return message.reply({embed : {
    description : `You need to be in a vc!`,
    color : `RED`  
  }});
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});



client.on('guildMemberAdd', async (member) => {
    if(db.has(`captcha-${member.guild.id}`)=== false) return;
		
    const url = 'https://api.no-api-key.com/api/v2/captcha';
        try {
            fetch(url)
                .then(res => res.json())
                .then(async json => {
                    console.log(json)
                    const msg = await member.send(
                        new MessageEmbed()
                            .setTitle(`Please enter the captcha for **${member.guild.name}**  (20s)`)
                            .setImage(json.captcha)
                            .setColor("RANDOM")
                    )
                    try {
                        const filter = (m) => {
                            if(m.author.bot) return;
                            if(m.author.id === member.id && m.content === json.captcha_text) return true;
                            else {
                                msg.channel.send({embed : {
																	description : `You have answered the captcha incorrectly! Try Again.`,
																	color : 'RED'
																}})
                            }
                        };
                        const response = await msg.channel.awaitMessages(filter, {
                            max : 1,
                            time : 20000,
                            errors : ['time']
                        })
                        if(response) {
                           const respondeemb = new MessageEmbed()
												.setDescription(`You answered the captcha correctly. Now you can have fun in**${member.guild.name}**`)
												.setColor('#ccccff')
                            msg.channel.send(respondeemb)
													
                        }
                    } catch (error) {
                        msg.channel.send({embed : {
													description : `You have been kicked from **${member.guild.name}** for not answering the captcha correctly in time.`,
													color : 'RED'
												}})
                        member.kick()
                    }
                })
        } catch (error) {
          return;
        }
})
        



 


client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === default_prefix + 'poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed : {
    description : `You don't have permission to use this command!`,
    color : `RED`  
  }})
     if(!pollChannel) return message.reply({embed : {
    description : `Please mention a channel first!`,
    color : `RED`  
  }});
        let embedPoll = new Discord.MessageEmbed()
        .setTitle('🚨Poll!')
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('1️⃣')
        await msgEmbed.react('2️⃣')
        
   
    }

})

  
const { Snake }  = require("weky")
client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(default_prefix + "snake" || "snek")) {

const game = new Snake({
            message: message,
                  embed: {
                           title: `Snake | ${message.author.username} `, 
                           color: "#ff99cc", 
                           gameOverTitle: `Game Over ${message.author.username}! <3`, 
                           gameOverColor: "#ff99cc",
                  },
                 emojis: {
                          empty: '⬛', 
                          snakeBody: '🟩', 
                          food: '🍎', 
                         //controls
                           up: '⬆️', 
                           right: '⬅️',
                           down: '⬇️',
                           left: '➡️'
                 }
                        })
        game.start()

      }

})

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(default_prefix + "calculator")) {
 const { Calculator } = require('weky')
  await Calculator(message)

}       

})




PrimeBot.on('vote', (vote) => {

    const channelId = '869681251597033493'; 

    const channel = client.channels.cache.get(channelId); 
    
    if(!channel) return;  
    const embed = new discord.MessageEmbed()
        .setTitle('Someone voted me!')
        .setDescription(`${vote.id} Mi ha votato su prime bots!`)
        .setTimestamp()
        .setColor('RANDOM')
    channel.send(embed);
});



client.on('guildMemberAdd', (member) => {


    const welc = new Discord.MessageEmbed()
    .setTitle(`NEW ENTRY`)
    .setDescription(`${member} Welcome to **Akimi palace**!
    Please read the <#869601664846422126> And Check the <#869606693808533585>`)
    .setColor('RANDOM')
    .setImage(member.user.displayAvatarURL())
    client.channels.cache.get("869598134815297547").send(welc)

})


client.on('guildMemberRemove', (member) => {


    const welc = new Discord.MessageEmbed()
    .setTitle(`LEAVED`)
    .setDescription(`${member} leaved the server!`)
    .setColor('RED')
    .setImage(member.user.displayAvatarURL())
    client.channels.cache.get("869598134815297547").send(welc)

})



/*client.on('message', message => {
  
    if(message.content === '-roles') { 
         if(message.author.id !== '314755997891559435') return;
        let embruoli = new Discord.MessageEmbed()
          .setTitle('Choose your roles')
          .setDescription('**Click on the reactions to add theme to your roles!**\n\n**GENDER:**\n🔵 Male\n🔴 Female\n⚪ Else\n\n**HOBBY:**\n🕹 Gamer\n💻 Developer\n👩🏻‍🎨 Artist\n📎 Other')
          .setColor('8a8aff')



          message.channel.send(`@everyone`, embruoli)
          .then(msg => {
              msg.react("🔵")
              msg.react("🔴")
              msg.react("⚪")
              msg.react("🕹")
              msg.react("💻")
              msg.react("👩🏻‍🎨")
              msg.react("📎")
          })
    }
}) */

client.on("messageReactionAdd", async function (messageReaction, user) {
if(user.bot) return;

if(messageReaction.partial) await messageReaction.message.fetch();


if(messageReaction.message.id == '869694227485978704') {
    if(messageReaction._emoji.name == '🔵') {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
        utente.roles.add("869611199938052156")
    }

    if(messageReaction._emoji.name == '🔴') {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
        utente.roles.add("869614150853201992")
    }
    if(messageReaction._emoji.name == '⚪') {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
        utente.roles.add("869633025871323196")
    }

    if(messageReaction._emoji.name == '🕹') {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
        utente.roles.add("869633789196926986")
    }
    if(messageReaction._emoji.name == '💻') {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
        utente.roles.add("869633785124245535")
    }
    if(messageReaction._emoji.name == '📎') {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
        utente.roles.add("869633961075294258")
    }
    if(messageReaction._emoji.name == '👩🏻‍🎨') {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
        utente.roles.add("869635715267428362")
    }
 
    
}
})

client.on("messageReactionRemove", async function (messageReaction, user) {
    if(user.bot) return;
    
    if(messageReaction.partial) await messageReaction.message.fetch();
    
    
    if(messageReaction.message.id == '869694227485978704') {
        if(messageReaction._emoji.name == '🔵') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.remove("869611199938052156")
        }
    
        if(messageReaction._emoji.name == '🔴') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.remove("869614150853201992")
        }
        if(messageReaction._emoji.name == '⚪') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.remove("869633025871323196")
        }
    
        if(messageReaction._emoji.name == '🕹') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.remove("869633789196926986")
        }
        if(messageReaction._emoji.name == '💻') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.remove("869633785124245535")
        }
        if(messageReaction._emoji.name == '📎') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.remove("869633961075294258")
        }
        if(messageReaction._emoji.name == '👩🏻‍🎨') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.remove("869635715267428362")
        }
    }
    })







/*client.on('message', message => {
  
    if(message.content === 'verification') { 
         if(message.author.id !== '314755997891559435') return;
        let vemb = new Discord.MessageEmbed()
          .setTitle('Verification')
          .setDescription('Click on reaction for complete the verification and continue to navigate in the server')
          .setColor('BLUE')



          message.channel.send(`@everyone`, vemb).then(msg => {
              msg.react("🟢")
          })
    }
})*/

client.on("messageReactionAdd", async function (messageReaction, user) {
    if(user.bot) return;
    
    if(messageReaction.partial) await messageReaction.message.fetch();
    
    
    if(messageReaction.message.id == '869694659969024050') {
        if(messageReaction._emoji.name == '🟢') {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id)
            utente.roles.add("869612285985980436")
        }
    }
    })


client.login('ODY5NTM3NjE0Nzk2MDM0MTI4.YP_qAg.Is-WUtLB0hWs70euLwm1ak_I4R0')