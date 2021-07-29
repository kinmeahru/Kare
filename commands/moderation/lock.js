const Discord = module.require("discord.js");//
const db = require('quick.db')
const { success,error,warning,warning_color,success_color,error_color } = require('../../config.json')







module.exports = {
   name: "lock",
   description: "Locks a Channel",
   usage: "lock <channel>",
  args: true,
 category: "🛠moderation",
   run: async(client, message, args) => {

var lang = await db.get(`language_${message.guild.id}`)
if(!lang) lang = 'en'


if (lang === 'en'){





      if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.lineReplyNoMention({embed : {
        description : `${error}I don't have permission`,
        color : error_color,
        footer : {
          text : `MANAGE_CHANNELS`
        }
      }});
   if (!message.member.hasPermission("MANAGE_CHANNELS")) {
   return message.lineReplyNoMention({embed : {
     description : `${error}You don't have permission`,
     color : error_color,
     footer : {
       text : `MANAGE_CHANNELS`
     }
   }});
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setDescription(`${success}${message.channel} has been locked successfully`)
   .setColor(success_color);
   await message.lineReplyNoMention(embed)
   



   }

// italian

if (lang === 'it'){





      if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.lineReplyNoMention({embed : {
        description : `${error}Non ho i permessi per farlo`,
        color : error_color,
        footer : {
          text : `MANAGE_CHANNELS`
        }
      }});
   if (!message.member.hasPermission("MANAGE_CHANNELS")) {
   return message.lineReplyNoMention({embed : {
     description : `${error}Non hai i permessi per farlo`,
     color : error_color,
     footer : {
       text : `MANAGE_CHANNELS`
     }
   }});
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setDescription(`${success}${message.channel} è stato chiuso con successo`)
   .setColor(success_color);
   await message.lineReplyNoMention(embed)
   }



   }



}
