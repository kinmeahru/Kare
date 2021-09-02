const discord = require("discord.js");//
const db = require('quick.db')

module.exports = {
  name: "ping",
  category: "📰info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
     var lang = await db.get(`language_${message.guild.id}`)
if (!lang) lang = 'en' // add this to all commands in the first 

//english
if (lang === 'en'){


    let embed = new discord.MessageEmbed()
    .setDescription(`**Pong!**- ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
    
    }

 // italian 
if (lang === 'it'){


    let embed = new discord.MessageEmbed()
    .setDescription(`**Pong!**- ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Richiesto da ${message.author.username}`)
    
    message.channel.send(embed)
    
    }    
  }
}