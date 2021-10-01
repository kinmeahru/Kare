 const {default_prefix, TOKEN, mongo_url } = require("./config.json")
 const { MessageEmbed } = require("discord.js");
 const mongoose = require('mongoose');

mongoose.connect('mongo_url', {
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('connected to mongo db!'))

const Discord = require('discord.js');
const { config } = require("dotenv");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js");
const disbut = require('discord-buttons');

const client = new Discord.Client({
    shards: "auto",
    restTimeOffset: 0, partials: ['MESSAGE', 'CHANNEL', 'REACTION']});;
    require('discord-buttons')(client);
    require('discord-reply')
    client.setMaxListeners(200);




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


  
});
//This commands handler sucks.





//AI chatbot
client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=kayeda`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});


client.on("message", async message => {
if(!message.guild) return;
  let prefix = default_prefix
  
  if(!message.content.startsWith(prefix)) return;
 
})
 




//Status
client.on("ready", () => {
    client.user.setActivity(default_prefix + `help`, { 
      type: "STREAMING",
      url: "https://www.twitch.tv/discord"
      
      });
});


const fs = require('fs')

//If the bot join in a guild
 client.on('guildCreate', guild =>{

    const channelId = 'your channel_id'; 

    const channel = client.channels.cache.get(channelId); 
    
    if(!channel) return;  
    const embed = new discord.MessageEmbed()
        .setTitle('I Joined A Server! :D')
        .setDescription(`**Server Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`I'm in ${client.guilds.cache.size} Server Now!`);
    channel.send(embed);
});

//If the bot left a guild
client.on('guildDelete', guild =>{
    const channelId = ' your channel_id';
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


//Discord together activity
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

//captcha

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
        




//snake
  
const { Snake }  = require("weky")
client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(default_prefix + "snake")) {

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

//button calculator
client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(default_prefix + "calculator")) {
 const { Calculator } = require('weky')
  await Calculator(message)

}       

})

//top.gg server and shards count
const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('Topgg Token', client) 


poster.on('posted', (stats) => { 
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})


//bot login

client.login(TOKEN)
