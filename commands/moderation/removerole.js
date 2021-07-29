const { MessageEmbed } = require('discord.js')//
const db = require('quick.db')
const { success,warning,error,success_color,warning_color,error_color } = require('../../config.json')

module.exports = {
  name: "removerole",
  aliases: ["rmrole", "-role"],
  category: "🛠moderation",
  description: "Remove role from any user",
  run: async (client, message, args) => {


var lang = await db.get(`language_${message.guild.id}`)
if(!lang) lang = 'en'

if(lang === 'en') {


if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.lineReplyNoMention({embed : {
  description : `${error}I don't have permission`,
  color : error_color,
  footer : {
    text : 'MANAGE_ROLES'
  }
}});
    if(!message.member.hasPermission("ADMINISTRATOR")) 
    return message.lineReplyNoMention({embed : {
      description : `${error}You don't have permission`,
      color : error_color,
      footer : {
        text : `ADMINISTRATOR`
      }
    }});
    
    let target = message.mentions.members.first();
    
    if(!target) return message.lineReplyNoMention({embed : {
      description : `${error}Please specify a valid member`,
      color  : error_color
    }})
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.lineReplyNoMention({embed : {
      description : `${error}Please specify a valid role`,
      color : error_color
    }})
    
    
    
      const embed = new MessageEmbed()
      .setColor(success_color)
      .setDescription(`${success}Removed roles ${rrole} from ${target}`)
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole);
    }


    //italian


if(lang === 'it') {


if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.lineReplyNoMention({embed : {
  description : `${error}Non ho i permessi per farlo!`,
  color : error_color,
  footer : {
    text : `MANAGE_ROLES`
  }
}});
    if(!message.member.hasPermission("ADMINISTRATOR")) 
    return message.lineReplyNoMention({embed : {
      description : `${error}Non hai i permessi per farlo!`,
      color : error_color,
      footer : {
        text : `ADMINISTRATOR`
      }
    }});
    
    let target = message.mentions.members.first();
    
    if(!target) return message.lineReplyNoMention({embed : {
      description : `${error}Perfavore specifica un utente valido!`,
      color  : error_color
    }})
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.lineReplyNoMention({embed : {
      description : `${error}Perfavore specifica un ruolo valido!`,
      color : error_color
    }})
    
    
    
      const embed = new MessageEmbed()
      .setColor(success_color)
      .setDescription(`${success} Ruolo rimosso: ${rrole} a ${target}`)
      
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole);
    }




  }
}